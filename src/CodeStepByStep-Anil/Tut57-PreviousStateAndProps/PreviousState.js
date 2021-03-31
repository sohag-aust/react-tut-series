import React, {useState} from 'react';

function PreviousState() {
    const [count, setCount] = useState(1);

    function increaseCount() {
        let randomCount = Math.floor(Math.random() * 10);

        // way - 1
        // setCount((previousStateCount) => {
        //     console.log('Previous State Count : ', previousStateCount);
        //     return randomCount;
        // })

        // way - 2
        // we want for each button click the loop will continue for 5 times and after 5 times it sets value to newState
        for(var i=1;i<=5;i++) {
            setCount((previousStateCount) => {
                return previousStateCount+1;
            })
        }
    }

    return (
        <div>
            <h1> Count : {count} </h1>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}

export default PreviousState;
