import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        // setTipo sempre irá instanciar componente atual
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        // this não indica o componente atual
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        // acesso da instância dos objetos dessa classe
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder='Tipo...' value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder='Nome...' value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
        // Utilizando duas formas para atualizar o valor após um evento.
        // 1 - Utilizando construtor para referenciar o valor do componente atual
        // 2 - Utilizando arrow function para atualizar o evento
    }
}