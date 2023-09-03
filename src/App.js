import { useState } from "react";
import GoogleAPI from "./Components/GoogleAPI";
import Home from "./Components/Home";
import LocationService from "./Components/LocationService";

function App() {
  const [showPage, setShowPage] = useState(0);

  return (
    <div className="indexPage">
      <div className="indexItem">
        {showPage === 0 && <Home setShowPage={setShowPage} />}
        {showPage === 1 && <LocationService setShowPage={setShowPage} />}
        {showPage === 2 && <GoogleAPI />}
      </div>
    </div>
  );
}

export default App;
