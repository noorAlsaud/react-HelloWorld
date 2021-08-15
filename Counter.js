import React, { Component } from "react";

class Counter extends Component {

    constructor(props){
        super(props); 

        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset (){
        this.setState({
            count: 0
        })
    }

    increment(){
        this.setState( state => ({
            count: state.count + 1
        }))
    }

    decrement (){
        this.setState( state => ({
            count: state.count - 1
        }))
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>

                <h3>Current Count: {this.state.count}</h3>
            </div>
        )
    }

    

}

export default Counter; 