// the component which has one/some input fields and those fields are maintain by state of that component then it will call ControlledComponent

import React, {useState} from 'react';

function ControlledComponent() {
    const [name, setName] = useState('Ashik');

    function setMyName(event) {
        setName(event.target.value)
    }
    
    return (
        <div>
            <h1> My Name is {name} </h1>
            <input type='text' onChange={(event)=>setMyName(event)} />
        </div>
    )
}

export default ControlledComponent;

