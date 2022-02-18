import React, {useState, useEffect} from 'react';
import PirateDetail from '../components/PirateDetail';
import PirateList from '../components/PirateList';

const PirateContainer = () => {
    const [pirates, setPirates] = useState([]);
    const [selectedPirate, setSelectedPirate] = useState(null);

    useEffect(() => {
        getPirates();
    },[])
    
    const getPirates = () => {
        fetch('pirates')
        .then(res => res.json())
        .then(pirates => setPirates(pirates))
    }

    const onPirateSelected = (pirate) => {
        setSelectedPirate(pirate)
    }

    return(
        <>
            <h2>Pirate List</h2>
            <PirateList pirates={pirates} onPirateSelected={onPirateSelected}/>
            {selectedPirate ? <PirateDetail pirate={selectedPirate}/> : null}
        </>
    )
}

export default PirateContainer;