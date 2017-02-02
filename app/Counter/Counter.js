import React from 'react';

class Counter extends React.Component{
    render() {
        return(
            <div>
                <button onClick={this.props.decrement}>-</button>
                <span style={{margin:5}}>{this.props.counter}</span>
                <button onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

export default Counter;