import React, { Component } from 'react';

class Refs extends Component {
    constructor(props) {
        super(props);

        // approach-1 of setting `Refs`
        this.inputRef = React.createRef();

        // approach-2 of setting `Refs` using callBackRef
        this.callBackRef = null;
        this.setCallBackRef = (element) => {
            this.callBackRef = element;
        }


        // binding the handlers
        this.getInputRefValue = this.getInputRefValue.bind(this);
    }

    componentDidMount() {
        console.log(this.inputRef);

        // approach - 1 of pointing the input field related to approach - 1 of setting `Refs`
        this.inputRef.current.focus();

        // approach - 2 of pointing the input field related to approach - 2 of setting `Refs`
        if(this.callBackRef) {
            this.callBackRef.focus();
        }
    }

    getInputRefValue() {
        console.log("Value from input Ref : " + this.inputRef.current.value);
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/> 
                <input type="text" ref={this.setCallBackRef}/>
                <button onClick={this.getInputRefValue}>Submit</button>
            </div>
        )
    }
}

export default Refs;
