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
  const [parkingSavedData, setParkingSavedData] = useState({
    name: "",
    price: "",
    coordinate: {
      lat: 0,
      lng: 0,
    },
  });

  const appendSavedCarparks = (carparkList, item) => {
    carparkList.push(item);
  };

  const savedCarparks = [
    {
      name: "ION Orchard Carpark",
      price: "$1.80/h",
      coordinate: {
        lat: 1.3039288,
        lng: 103.7598514,
      },
      index: 0,
    },
    {
      name: "Wisma Atria Carpark",
      price: "$2.80/h",
      coordinate: {
        lat: 1.3039288,
        lng: 103.7598514,
      },
      index: 1,
    },
    {
      name: "Ngee Ann City Carpark",
      price: "$3.80/h",
      coordinate: {
        lat: 1.3039288,
        lng: 103.7598514,
      },
      index: 2,
    },
    {
      name: "Wheelock Place Carpark",
      price: "$4.80/h",
      coordinate: {
        lat: 1.3039288,
        lng: 103.7598514,
      },
      index: 3,
    },
    {
      name: "NTU Carpark A",
      price: "$5.80/h",
      coordinate: {
        lat: 1.3039288,
        lng: 103.7598514,
      },
      index: 4,
    },
  ];

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
          />
        )}
        {showPage === 3 && (
          <SavedOverlay
            selected={selected}
            setSelected={setSelected}
            setShowPage={setShowPage}
            parkingSavedData={parkingSavedData}
            appendSavedCarparks={appendSavedCarparks}
            savedCarparks={savedCarparks}
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
