import React from "react";

const PirateListItem = ({pirate, onPirateSelected}) => {

    const handleClick = () => {
        onPirateSelected(pirate)
    }
    
    return <li onClick={handleClick}>{pirate.firstName} {pirate.lastName}</li>
}

export default PirateListItem;