import * as React from 'react'

import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView} from '../pokemon'

function PokemonInfo({pokemonName}) {

  const [state, setState] = React.useState({
    pokemon: null,
    error: null,
    status: 'idle'
  })

  const {pokemon, error, status } = state
 
  React.useEffect(() => {

    if(! pokemonName) return  

    setState({pokemon: null, error: null, status: 'pending'})

    fetchPokemon(pokemonName).then( // Deu certo
      pokemonData => {
        setState({...state, pokemon: pokemonData, status: 'resolved'})

      }
    ).catch(
      error => {

        setState({...state, error: error, status: 'rejected'})
      }
    )

  }, [pokemonName])

  switch(status) {
    case 'idle':
      return 'Submit a pokemon'

    case 'pending':
      return (
        <PokemonInfoFallback name={pokemonName} />
      )
    
    case 'resolved':
      return (
        <PokemonDataView pokemon={pokemon} />
      )

    case 'rejected':
      return(
        <div role="alert">
          There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
        </div>
      )
  }

  // 💣 remove this
  return 'TODO'
}

export default function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}