import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const mapsPopup = ({
  carparksFiltered,
  carparksFilteredNames,
  carparksFilteredPrice,
}) => {
  console.log(carparksFilteredNames);
  return (
    <div className="mapsPopup">
      <div className="mapsPopup-list">
        {carparksFiltered.map((item, index) => {
          return (
            <div className="mapsPopup-list-item">
              <div className="mapsPopup-list-item-a">
                <h3>{carparksFilteredNames[index]}</h3>
                <p>Price: {carparksFilteredPrice[index]}</p>
                <p>Availability: {item.price}</p>
              </div>
              <div className="mapsPopup-list-item-b">
                <ArrowForwardIcon
                  className="mapsPopup-arrow"
                  onClick={(e) => {
                    e.preventDefault();
                    var url =
                      "https://www.google.com/maps/dir/?api=1&destination=" +
                      item.lat +
                      "," +
                      item.lng +
                      "&travelmode=driving";
                    window.open(url, "_blank");
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default mapsPopup;