import React from "react";

const SearchFull = ({ setShowSearchPage, level, zone, lotNo, image }) => {
  return (
    <div className="search-main">
      <h2>Parked Location</h2>
      <img src={image} alt="carImg" />
      <div className="search-desc">
        <div className="search-desc-a">
          <p>Level: {level}</p>
          <p>Zone: {zone}</p>
        </div>
        <p>Lot No: {lotNo}</p>
      </div>
      <button
        className="search-endBtn"
        onClick={() => {
          setShowSearchPage(0);
        }}
      >
        End Parking
      </button>
    </div>
  );
};

export default SearchFull;
