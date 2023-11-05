import React from "react";
import Navbar from "../Navbar/Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Saved = ({ selected, setSelected, setShowPage, parkingSavedData }) => {
  return (
    <div className="saved-overlay-page">
      <div className="page-header">
        <h3>Saved</h3>
      </div>
      <div className="saved-list">
        {parkingSavedData.map((item) => {
          return (
            <div className="saved-list-item" key={item.index}>
              <div className="saved-list-item-a">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
              </div>
              <div className="saved-list-item-b">
                <ArrowForwardIcon
                  className="saved-arrow"
                  onClick={(e) => {
                    e.preventDefault();
                    var url =
                      "https://www.google.com/maps/dir/?api=1&destination=" +
                      item.coordinate.lat +
                      "," +
                      item.coordinate.lng +
                      "&travelmode=driving";
                    window.open(url, "_blank");
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Navbar
        selected={selected}
        setSelected={setSelected}
        setShowPage={setShowPage}
      />
    </div>
  );
};

export default Saved;
