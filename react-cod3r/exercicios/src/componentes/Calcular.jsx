import React, { Component } from 'react'

export default class Calcular extends Component {

    state = {
        num1: this.props.num1,
        num2: this.props.num2,
    }

    constructor(props) {
        super(props)

        this.setNum1 = this.setNum1.bind(this)
    }

    setNum1(e) {
        this.setState({ num1: e.target.value })
    }
    setNum2(e) {
        this.setState({ num2: e.target.value })
    }

    render() {
        const { num1, num2 } = this.state
        return (
            <div>
                <div>{num1} {num2}</div>
                <hr />
                <input type="number" placeholder='Número 1' value={num1} onChange={this.setNum1} />
                <input type="number" placeholder='Número 2' value={num2} onChange={e => this.setNum2(e)} />
            </div>
        )
    }

}