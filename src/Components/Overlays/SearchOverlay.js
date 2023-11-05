import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SearchEmpty from "../Search/SearchEmpty.js";
import SearchFull from "../Search/SearchFull.js";

const Finder = ({ selected, setSelected, setShowPage }) => {
  const [showSearchPage, setShowSearchPage] = useState(0);
  const [level, setLevel] = useState("");
  const [zone, setZone] = useState("");
  const [lotNo, setLotNo] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="saved-overlay-page">
      <div className="page-header">
        <h3>Car Finder</h3>
      </div>
      {showSearchPage === 0 && (
        <SearchEmpty
          setShowSearchPage={setShowSearchPage}
          setLevel={setLevel}
          setZone={setZone}
          setLotNo={setLotNo}
          handleImageChange={handleImageChange}
          image={image}
        />
      )}
      {showSearchPage === 1 && (
        <SearchFull
          setShowSearchPage={setShowSearchPage}
          level={level}
          zone={zone}
          lotNo={lotNo}
          image={image}
          setImage={setImage}
        />
      )}
      <Navbar
        selected={selected}
        setSelected={setSelected}
        setShowPage={setShowPage}
      />
    </div>
  );
};

export default Finder;
