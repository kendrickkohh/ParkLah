import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const mapsPopup = ({ carparksFiltered }) => {
  return (
    <div className="mapsPopup">
      <div className="mapsPopup-list">
        {carparksFiltered.map((item) => {
          return (
            <div className="mapsPopup-list-item">
              <div className="mapsPopup-list-item-a">
                <h3>{item.title}</h3>
                <p>Final Destination: {item.finalDestination}</p>
                <p>Price: {item.price}</p>
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
