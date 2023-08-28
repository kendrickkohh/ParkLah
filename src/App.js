import { useState } from "react";
import GoogleAPI from "./Components/GoogleAPI";
import Home from "./Components/Home";

function App() {
  const [showPage, setShowPage] = useState(1);

  return (
    <div>
      {showPage === 0 && <Home />}
      {showPage === 1 && <GoogleAPI />}
    </div>
  );
}

export default App;
