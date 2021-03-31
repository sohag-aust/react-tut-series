import React from "react";

function FunctionalProps(props) {
    const {name, age} = props;

    return (
        <div>
            <h1> Hello {name} , your age is {age}</h1>
            {props.children}
        </div>
    );
}

export default FunctionalProps;