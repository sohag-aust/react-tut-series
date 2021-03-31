import React, {useState} from 'react';
import PreviousPropsChild from './PreviousPropsChild';

function PreviousPropsParent() {
    const [count, setCount] = useState(1);

    function increseCount() {
        let randomCountProp = Math.floor(Math.random() * 10);
        console.log('Random Count in Prop : ', randomCountProp);

        setCount(
            randomCountProp
        )
    }

    return (
        <div>
            <PreviousPropsChild count={count}/>
            <button onClick={increseCount}>Increse Count</button>
        </div>
    )
}

export default PreviousPropsParent;
