import React from "react";
import PirateListItem from './PirateListItem';

const PirateList = ({pirates, onPirateSelected}) => {
    const PiratesItems = pirates.map((pirate, index) => {
        return <PirateListItem pirate={pirate} key={index} onPirateSelected={onPirateSelected} />
    })

    return (
        <div>
            <ul>
                {PiratesItems}
            </ul>
        </div>
    )
}

export default PirateList;