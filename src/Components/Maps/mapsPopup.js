import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const mapsPopup = ({
  carparksFiltered,
  carparksFilteredNames,
  carparksFilteredPrice,
  carparksAvailableLots,
  setMapsPopup,
  setTempSavedCarpark,
  carparkDistances,
}) => {
  return (
    <div className="mapsPopup">
      <div className="mapsPopup-list">
        {carparksFiltered.map((item, index) => {
          return (
            <div className="mapsPopup-list-item" key={index}>
              <div className="mapsPopup-list-item-a">
                <h3>{carparksFilteredNames[index]}</h3>
                <p>Price: {carparksFilteredPrice[index]}</p>
                <p>Distance: {carparkDistances[index]}m</p>
                <p>Available lots: {carparksAvailableLots[index]}</p>
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
                    const updateParkingData = {
                      name: carparksFilteredNames[index],
                      price: carparksFilteredPrice[index],
                      coordinate: {
                        lat: item.lat,
                        lng: item.lng,
                      },
                      index: index,
                    };
                    setTempSavedCarpark(updateParkingData);
                    setMapsPopup(2);
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
