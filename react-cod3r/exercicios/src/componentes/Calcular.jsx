import React, { Component } from 'react'

export default class Calcular extends Component {

    // Utilizando duas formas para atualizar o valor após um evento.
    // no método render() do componente de classe;
    //
    // 1 - Utilizando construtor e bind(this) para referenciar o valor do componente atual
    //     "onChange={this.setNum1}"
    //
    // 2 - Utilizando arrow function para atualizar o evento
    //     "onChange={e => this.setNum2(e)}"

    state = {
        num1: this.props.num1,
        num2: this.props.num2,
    }

    constructor(props) {
        super(props)

        // setTipo sempre irá instanciar componente atual
        this.handleChange1 = this.handleChange1.bind(this)
    }

    handleChange1(event) {
        // this não indica o componente atual   
        this.setState({ num1: Number(event.target.value) })
    }
    handleChange2(event) {
        this.setState({ num2: Number(event.target.value) })
    }

    render() {
        // acesso da instância dos objetos dessa classe
        const { num1, num2 } = this.state
        return (
            <>
                <div>
                    <label htmlFor="num1">Primeiro número:</label><br />
                    <input id="num1" type="number" value={num1} 
                        onChange={this.handleChange1} />
                </div>
                <div>
                    <label htmlFor="num2">Segundo número:</label><br />
                    <input id="num2" type="number" value={num2} 
                        onChange={event => this.handleChange2(event)} />
                    <hr />
                </div>
                    <div>Soma:{isNaN(num1) || isNaN(num2) ? '' : num1 + num2}</div>
            </>
            
        )
    }
}