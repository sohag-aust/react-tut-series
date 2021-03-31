import React from "react";

function FunctionClick () {
    function clickHandler() {
        console.log("Function is Clicked inside functional Component!!");
    }

    return (
        <div>
            <button onClick={clickHandler}> Click Me </button> 
        </div>
    );
}

export default FunctionClick;