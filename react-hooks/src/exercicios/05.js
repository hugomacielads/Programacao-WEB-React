// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 create a ref here with React.useRef()
  const divRoot = React.useRef()
  
  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.

  // 🐨 add the `ref` prop to the `tilt-root` div here:

  React.useEffect(() => {
    
    // const tiltNode = document.getElementById('root-div')
    const tiltNode = divRoot.current
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })

    // Quando o useEffect() retorna uma função, esta
    // será executada uma única vez na fase de finalização
    // (unmount) do componente.
    // Este recurso pode ser utilizado para destruir recursos
    // que foram criados e não são mais necessários (cleanup).
    // return funcional só para destruir o elemento fase unmount
    return() => {
      tiltNode.vanillaTilt.destroy()
      // alert("elemento descarregado")
    }

  }, [])  // Quando o vetor de dependências do useEffect()
// fica vazio, ele é executado apenas uma vez, na primeira
// atualização do componente, durante o carregamento da
// página.

  return (
    <div ref={divRoot} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}

export default function Exercicio05() {
  return (
    <>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
      <hr />
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </>
  )
}