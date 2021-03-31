import React, {useState} from 'react';

function StateWithObject() {

    const [data, setData] = useState({name:'Shohag', age:25});

    return (
        <div>
            {/* if we just update one property value then it will effect on other property values, so we need to update that property which we update on input value and keep previous data on other properties
    <input type='text' placeholder='Enter Your Name' onChange={(event) => setData({name:event.target.value})}/>
    <input type='text' placeholder='Enter Your Age' onChange={(event) => setData({age:event.target.value})}/> */}

            <input type='text' placeholder='Enter Your Name' onChange={(event) => setData({name:event.target.value, age:data.age})}/>
            <input type='text' placeholder='Enter Your Age' onChange={(event) => setData({name:data.name, age:event.target.value})}/>    

            <h3>Name is : {data.name} </h3>
            <h3>Age is : {data.age} </h3>
        </div>
    )
}

export default StateWithObject;
