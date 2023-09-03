import { useState } from "react";
import GoogleAPI from "./Components/GoogleAPI";
import Home from "./Components/Home";

function App() {
  const [showPage, setShowPage] = useState(0);

  return (
    <div className="indexPage">
      <div className="indexItem">
        {showPage === 0 && <Home setShowPage={setShowPage} />}
        {showPage === 1 && <GoogleAPI />}
      </div>
    </div>
  );
}

export default App;
