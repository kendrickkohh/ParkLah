import React from "react";
import Navbar from "./Navbar/Navbar";

const Finder = ({ selected, setSelected, setShowPage }) => {
  return (
    <div className="saved-overlay-page">
      <div className="page-header">
        <h3>Car Finder</h3>
      </div>
      <div className="search-main">
        <h2>Parked Location</h2>
        <img src="/images/carImg.svg" alt="carImg" />
        <div className="search-desc">
          <div className="search-desc-a">
            <p>Level: 5</p>
            <p>Zone: D8</p>
          </div>
          <p>Lot No: 302</p>
        </div>
        <button className="search-endBtn">End Parking</button>
      </div>
      <Navbar
        selected={selected}
        setSelected={setSelected}
        setShowPage={setShowPage}
      />
    </div>
  );
};

export default Finder;
