import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentMoney : this.props.money
        }
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.props.setMoney(this.state.parentMoney+1000)}>Provide 1000TK.</button>
            </div>
        )
    }
}

export default Child;
