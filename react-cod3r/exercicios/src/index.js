import React from 'react'
import ReactDOM from 'react-dom'
import Calcular from './componentes/Calcular'

import Saudacao from './componentes/Saudacao'

// ReactDOM.render(<Primeiro />, document.getElementById('root'))
ReactDOM.render(
    <div>
        <Calcular num1={0} num2={0} />
    </div>
, document.getElementById('root'))