import React, { Component } from 'react';

class ComponentDidMount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Shohag'
        }

        console.log("...ComponentDidMount Constrcutor is called...");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("...getDerivedStateFromProps is called...");
        return null; // for a moment
    }

    componentDidMount() {
        console.log("...componentDidMount is called...");
    }
    
    render() {
        console.log("...Render method is called...");
        return (
            <div>
                
            </div>
        )
    }
}

export default ComponentDidMount;
