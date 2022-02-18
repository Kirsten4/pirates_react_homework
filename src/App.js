import './App.css';
import PirateContainer from './containers/PirateContainer';
import ShipContainer from './containers/ShipContainer';

function App() {
  return (
    <div className="App">
      <h1>Pirate Container</h1>
      <PirateContainer />
      <h1>Ship Container</h1>
      <ShipContainer />
    </div>
  );
}

export default App;
