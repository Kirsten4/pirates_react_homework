import React, {useState, useEffect} from 'react';
import ShipList from '../components/ShipList';

const ShipContainer = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        getShips();
    },[])
    
    const getShips = () => {
        fetch('ships')
        .then(res => res.json())
        .then(ships => setShips(ships))
    }

    return(
        <>
            <h2>Ships List</h2>
            <ShipList ships={ships} />
        </>
    )
}

export default ShipContainer;