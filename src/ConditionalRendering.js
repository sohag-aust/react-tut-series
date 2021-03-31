import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    
    render() {
        /// short-circuit rendering
        return (
            this.state.isLoggedIn && <div> Hello Shohag </div>
        );
    }
}

export default ConditionalRendering;
