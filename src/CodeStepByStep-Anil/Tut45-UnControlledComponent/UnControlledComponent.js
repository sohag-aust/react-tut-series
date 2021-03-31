// the component which has one/some input fields and those fields are maintain directly by DOM (ref, track by id, jquery) then it will call UnControlledComponent

import React, {useRef} from 'react';

function UnControlledComponent() {

    let inputRef1 = useRef(null);
    let inputRef2 = useRef(null);

    function submitForm(event) {
        event.preventDefault();

        console.log('Input-1 value : ', inputRef1.current.value);
        console.log('Input-2 value : ', inputRef2.current.value);

        let input3 = document.getElementById('input3').value;
        console.log('Input-3 value : ', input3);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input ref={inputRef1} type='text'/> <br/>
                <input ref={inputRef2} type='text'/> <br/>
                <input id='input3' type='text'/> <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UnControlledComponent;

