import React, {useRef, useEffect} from 'react'

function PreviousPropsChild(props) {
    let prevPropFromDom = useRef();

    useEffect( () => {
        prevPropFromDom.current = props.count;
    }); 

    const previousProps = prevPropFromDom.current;
    console.log('Previous Prop : ', previousProps);
    
    return (
        <div>
            <h1>New Count : {props.count} </h1>
            <h1>Previous Count : {previousProps} </h1>
        </div>
    )
}

export default PreviousPropsChild;
