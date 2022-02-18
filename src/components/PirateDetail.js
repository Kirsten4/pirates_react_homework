import React from 'react';

const PirateDetail = ({pirate}) => {
    return (
        <>
            <h3>Selected Pirate: {pirate.firstName} {pirate.lastName}</h3>
            <p>Age: {pirate.age}</p>
            <p>Ship: {pirate.ship.name}</p>
        </>
    )
}

export default PirateDetail;