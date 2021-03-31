import React, { Component } from 'react';
import UpdatedComponent from './HOC/UpdatedComponent';

class HoverCount extends Component {
    
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count : 0
    //     }

    //     this.incrementCount = this.incrementCount.bind(this);
    // }

    // incrementCount() {
    //     this.setState({
    //         count : this.state.count + 1
    //     });
    // }

    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.increment}> {this.props.name} Clicked {this.props.count} times </h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCount);
