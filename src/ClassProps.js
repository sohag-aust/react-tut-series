import React, { Component } from "react";

class ClassProps extends Component { 
    render() {
        return (
            <div>
                <h1> Hello {this.props.name} , your age is {this.props.age}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default ClassProps;