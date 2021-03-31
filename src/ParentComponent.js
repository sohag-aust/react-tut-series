import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor() {
        super();

        this.state = {
            greet:"Shohag !"
        }
    }

    MessageHandler() {
        alert("Hello " + this.state.greet);
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler = {()=>this.MessageHandler()}/>
            </div>
        );
    }
}

export default ParentComponent;
