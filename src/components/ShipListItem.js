import React from "react";

const ShipListItem = ({ship}) => {
    
    const listItems = ship.pirates.map((pirate, index) => <li key={index}>{pirate.firstName}</li>);

    return (
        <>
            <li>
                <h3>{ship.name}</h3>
                <h4>Pirates Onboard:</h4>
                <ul>{listItems}</ul>
            </li>
        </>
    )
}

export default ShipListItem;