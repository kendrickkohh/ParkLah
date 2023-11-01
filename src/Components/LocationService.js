import React from "react";

const LocationService = ({ setShowPage }) => {
  return (
    <div className="locationPage">
      <h2>Location Services</h2>
      <img src="/images/locationServicesIcon.svg" alt="icon" />
      <p>
        Allow ParKLah! to access your location to guide you to the best parking
        space?
      </p>
      <button
        className="locationServicesButton"
        onClick={() => {
          setShowPage(2);
        }}
      >
        ALLOW
      </button>
      <button
        className="locationServicesButton-not-allow"
        onClick={() => {
          setShowPage(0);
        }}
      >
        NO THANKS
      </button>
    </div>
  );
};

export default LocationService;
