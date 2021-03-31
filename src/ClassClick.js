import React, { Component } from 'react';

class ClassClick extends Component {
    clickHandler () {
        console.log("Function is clicked in Class Component !!");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}> Submit Me </button>
            </div>
        )
    }
}

export default ClassClick;
