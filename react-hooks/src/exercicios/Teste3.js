import * as React from 'react'
export default function Teste03({initialName = ''}) {

  const [name, setName] = React.useState(
    () => readStorage() || initialName
  )

  const [count, setCount] = React.useState(0)

  function readStorage() {
      console.count('Lido localStorage:')
      return window.localStorage.getItem('name') // Função de leitura do localstorage
  }

  // Trocando o item localstorage pelo valor da variável de estado 
  React.useEffect(() => {
      window.localStorage.setItem('name', name)
      setCount(count + 1)
    }, [name])


  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      <div>Quantidade de atualizações: {count}</div>
    </div>
  )
}