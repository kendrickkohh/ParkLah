import React from "react";

const Home = ({ setShowPage }) => {
  return (
    <div className="homePage">
      <img src="/images/homePageLogo.svg" alt="homeLogo" />
      <div className="homePageDesc">
        <h2>Welcome to ParkLah!</h2>
        <h4>Your Ultimate Parking Companion.</h4>
      </div>
      <button
        className="homeButton"
        onClick={() => {
          setShowPage(1);
        }}
      >
        START
      </button>
    </div>
  );
};

export default Home;
