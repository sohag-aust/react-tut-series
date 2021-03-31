import React from 'react';

function ListRendering() {
    const names = ['Shohag', 'Ashik', 'Showmic', 'Nitol', 'Moin'];

    return (
        <div>
            {
                names.map( name => (
                    <h1 key={Math.random()}> Hello Mr. {name} </h1>
                ))
            }
        </div>
    )
}

export default ListRendering;
