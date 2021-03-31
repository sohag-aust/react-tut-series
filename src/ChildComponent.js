import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <h3> Method Change from ChildComponent </h3>
            <button onClick={() => props.greetHandler()}>Method Props</button>
        </div>
    )
}

export default ChildComponent;
