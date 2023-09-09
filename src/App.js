import { useState } from "react";
import Home from "./Components/Home";
import LocationService from "./Components/LocationService";
import MapsOverlay from "./Components/MapsOverlay";
import carpark from "./Components/Carpark.json";

function App() {
  const [showPage, setShowPage] = useState(0);

  return (
    <div className="indexPage">
      <div className="indexItem">
        {showPage === 0 && <Home setShowPage={setShowPage} />}
        {showPage === 1 && <LocationService setShowPage={setShowPage} />}
        {showPage === 2 && <MapsOverlay carpark={carpark} />}
      </div>
    </div>
  );
}

export default App;
