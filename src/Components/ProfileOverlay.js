import React from "react";
import Navbar from "./Navbar/Navbar";

const Profile = ({ selected, setSelected, setShowPage }) => {
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
            <div class="dropdown">
              <button class="dropbtn">
                Please select preferred max distance 
              </button>
              <div class="dropdown-content">
                <a href="#">200m</a>
                <a href="#">400m</a>
                <a href="#">600m</a>
              </div>
            </div>
          </div>
        </div>

        <div className="profilePreferences">
          <div className="saved-list-item-a">
            <h3>Cost</h3>
            <div class="dropdown">
              <button class="dropbtn">
                Please select preferred max cost per half hour
              </button>
              <div class="dropdown-content">
                <a href="#">$1.00</a>
                <a href="#">$1.50</a>
                <a href="#">$2.00</a>
                <a href="#">$2.50 & above</a>
              </div>
            </div>
          </div>
        </div>

        <div className="profilePreferences">
          <div className="saved-list-item-a">
            <h3>Distance vs Cost</h3>
            <div class="preferenceButtonContainer">
              <button class="preferenceLeftButton"></button>
              <button class="preferenceRightButton"></button>
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
