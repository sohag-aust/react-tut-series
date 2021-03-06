import React from 'react';

function Hero(props) {
    const {name} = props;

    if(name === 'Joker') {
        throw new Error('Not a Hero');
    }

    return (
        <div>
            {name}
        </div>
    )
}

export default Hero;
