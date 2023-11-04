import React from "react";
import Navbar from "./Navbar/Navbar";

const Profile = ({
  selected,
  setSelected,
  setShowPage,
  setMapsDistance,
  setMapsPrice,
}) => {
  return (
    <div className="saved-overlay-page">
      <div className="page-header">
        <h3>Profile</h3>
      </div>
      <div className="profile-main">
        <img src="/images/profileImage.svg" alt="profileImage" />
        <div className="profilePreferences">
          <div className="saved-list-item-a">
            <h3>Distance</h3>
            <div className="dropdown">
              <button className="dropbtn">
                Please select preferred max distance
              </button>
              <div className="dropdown-content">
                <a href="#" onClick={setMapsDistance(200)}>
                  200m
                </a>
                <a href="#" onClick={setMapsDistance(400)}>
                  400m
                </a>
                <a href="#" onClick={setMapsDistance(600)}>
                  600m
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="profilePreferences">
          <div className="saved-list-item-a">
            <h3>Cost</h3>
            <div className="dropdown">
              <button className="dropbtn">
                Please select preferred max cost per half hour
              </button>
              <div className="dropdown-content">
                <a href="#" onClick={setMapsPrice(1.0)}>
                  $1.00/30mins
                </a>
                <a href="#" onClick={setMapsPrice(1.5)}>
                  $1.50/30mins
                </a>
                <a href="#"> onClick={setMapsPrice(2.0)}$2.00/30mins</a>
                <a href="#" onClick={setMapsPrice(2.5)}>
                  $2.50/30mins & above
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="profilePreferences">
          <div className="saved-list-item-a">
            <h3>Distance vs Cost</h3>
            <div className="preferenceButtonContainer">
              <button className="preferenceLeftButton"></button>
              <button className="preferenceRightButton"></button>
            </div>
          </div>
        </div>
        <button className="profileButton">Update Preferences</button>
      </div>

      <Navbar
        selected={selected}
        setSelected={setSelected}
        setShowPage={setShowPage}
      />
    </div>
  );
};

export default Profile;
