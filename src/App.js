import { useState } from "react";
import Home from "./Components/Overlays/Home.js";
import LocationService from "./Components/Overlays/LocationService.js";
import MapsOverlay from "./Components/Overlays/MapsOverlay.js";
import SavedOverlay from "./Components/Overlays/SavedOverlay.js";
import car_park_availability from "./Components/car_park_availability.json";
import car_park_details from "./Components/car_park_details.json";
import SearchOverlay from "./Components/Overlays/SearchOverlay.js";
import ProfileOverlay from "./Components/Overlays/ProfileOverlay.js";

function App() {
  const [showPage, setShowPage] = useState(0);
  const [selected, setSelected] = useState(2);
  const [mapsDistance, setMapsDistance] = useState(600);
  const [mapsPrice, setMapsPrice] = useState(1.5);
  const [preferences, setPreferences] = useState("");

  const [parkingSavedData, setParkingSavedData] = useState([
    {
      name: "Far East Plaza Carpark",
      price: "$1.80/h",
      coordinate: {
        lat: 1.3071,
        lng: 103.83359,
      },
      index: 0,
    },
    {
      name: "Wisma Atria Carpark",
      price: "$2.80/h",
      coordinate: {
        lat: 1.3437459,
        lng: 103.8240449,
      },
      index: 1,
    },
    {
      name: "BLK 202/203 ANG MO KIO STREET 22 Carpark",
      price: "$3.80/h",
      coordinate: {
        lat: 1.3680743699753581,
        lng: 103.84439219780583,
      },
      index: 2,
    },
    {
      name: "Wheelock Place Carpark",
      price: "$4.80/h",
      coordinate: {
        lat: 1.3048,
        lng: 103.83063,
      },
      index: 3,
    },
    {
      name: "BLK 416A CLEMENTI AVE 1 Carpark",
      price: "$5.80/h",
      coordinate: {
        lat: 1.3098135876321173,
        lng: 103.77013103455903,
      },
      index: 4,
    },
  ]);

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
            mapsDistance={mapsDistance}
            mapsPrice={mapsPrice}
            preferences={preferences}
            setParkingSavedData={setParkingSavedData}
            parkingSavedData={parkingSavedData}
          />
        )}
        {showPage === 3 && (
          <SavedOverlay
            selected={selected}
            setSelected={setSelected}
            setShowPage={setShowPage}
            parkingSavedData={parkingSavedData}
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
            setMapsDistance={setMapsDistance}
            setMapsPrice={setMapsPrice}
            setPreferences={setPreferences}
          />
        )}
      </div>
    </div>
  );
}

export default App;
