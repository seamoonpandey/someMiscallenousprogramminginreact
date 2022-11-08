import React, { Component } from 'react'
import './counter.css'
class CC extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
        }
    }
    addOne = () => {
        this.setState({ number: this.state.number + 1 })
        console.log("clicked add")
        // alert("you just added one")

    }
    subtractOne = () => {

        this.setState({ number: this.state.number - 1 })
        console.log("clicked subtract")
        // alert("you just subtracted one")
    }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.addOne}>Add 1</button>
                <button onClick={this.subtractOne}>Subtract 1</button>
            </div>
        )
    }
}

export default CC