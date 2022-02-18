import React from "react";
import ShipListItem from './ShipListItem';

const ShipList = ({ships}) => {
    const ShipsItems = ships.map((ship, index) => {
        return <ShipListItem ship={ship} key={index} />
    })

    return (
        <div>
            <ul>
                {ShipsItems}
            </ul>
        </div>
    )
}

export default ShipList;