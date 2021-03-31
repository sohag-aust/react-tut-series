import React, { Component } from 'react';

class HoverCounter extends Component {
    
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
            // <div>
            //     <h2 onMouseOver={this.incrementCount}> Clicked {this.state.count} times </h2>
            // </div>

            <div>
                <h2 onMouseOver={this.props.incrementer}> Clicked {this.props.count} times </h2>
            </div>
        )
    }
}

export default HoverCounter;
