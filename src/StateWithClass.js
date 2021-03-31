import React , {Component} from "react";

class StateWithClass extends Component {

    constructor() {
        super();
        this.state = {
            message : "State With Class Component !!"
        }
    }

    changeMessage() {
        this.setState({
            message:"Message Changed !!"
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={()=>this.changeMessage()}> Click Me </button>
            </div>
        );
    }
}

export default StateWithClass;