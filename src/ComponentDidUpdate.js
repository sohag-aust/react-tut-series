import React, { Component } from 'react';

class ComponentDidUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Shohag'
        }

        console.log("...ComponentDidUpdate Constrcutor is called...");

        this.changeName = this.changeName.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log("...getDerivedStateFromProps is called...");
        return null; // for a moment
    }

    componentDidMount() {
        console.log("...componentDidMount is called...");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("...shouldComponentUpdate is called...");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("...getSnapshotBeforeUpdate is called...");
        return null;
    }
    
    componentDidUpdate() {
        console.log("...componentDidUpdate is called...");
    }

    changeName() {
        this.setState({
            name:'Md.Ashraful Islam Shohag'
        })
    }

    render() {
        console.log("...Render method is called...");
        return (
            <div>
                <h2> My Name is : {this.state.name} </h2>
                <button onClick={this.changeName}>Change State</button>
            </div>
        )
    }
}

export default ComponentDidUpdate;
