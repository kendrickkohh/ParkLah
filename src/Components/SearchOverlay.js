import React from "react";
import Navbar from "./Navbar/Navbar";

const Finder = ({ selected, setSelected, setShowPage }) => {
  return (
    <div className="maps-overlay-page">
      Finder
      <Navbar
        selected={selected}
        setSelected={setSelected}
        setShowPage={setShowPage}
      />
    </div>
  );
};

export default Finder;
