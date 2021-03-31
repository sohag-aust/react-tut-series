import React, { Component } from 'react';

class ClickCounter extends Component {

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
            //     <button onClick={this.incrementCount}> Clicked {this.state.count} times </button>
            // </div>

            <div>
                <button onClick={this.props.incrementer}> Clicked {this.props.count} times </button>
            </div>
        )
    }
}

export default ClickCounter;
