import { useState } from "react";
import Home from "./Components/Home";
import LocationService from "./Components/LocationService";
import MapsOverlay from "./Components/MapsOverlay.js";
import SavedOverlay from "./Components/SavedOverlay.js";
import car_park_availability from "./Components/car_park_availability.json";
import car_park_details from "./Components/car_park_details.json";
import SearchOverlay from "./Components/SearchOverlay";
import ProfileOverlay from "./Components/ProfileOverlay";

function App() {
  const [showPage, setShowPage] = useState(0);
  const [selected, setSelected] = useState(0);

  return (
    <div className="indexPage">
      <div className="indexItem">
        {showPage === 0 && <Home setShowPage={setShowPage} />}
        {showPage === 1 && <LocationService setShowPage={setShowPage} />}
        {showPage === 2 && (
          <MapsOverlay
            car_park_availability={car_park_availability}
            car_park_details={car_park_details}
            selected={selected}
            setSelected={setSelected}
            setShowPage={setShowPage}
          />
        )}
        {showPage === 3 && (
          <SavedOverlay
            selected={selected}
            setSelected={setSelected}
            setShowPage={setShowPage}
          />
        )}
        {showPage === 4 && (
          <SearchOverlay
            selected={selected}
            setSelected={setSelected}
            setShowPage={setShowPage}
          />
        )}
        {showPage === 5 && (
          <ProfileOverlay
            selected={selected}
            setSelected={setSelected}
            setShowPage={setShowPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
