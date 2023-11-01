import React from "react";
import Navbar from "./Navbar/Navbar";

const Profile = ({ selected, setSelected, setShowPage }) => {
  return (
    <div className="maps-overlay-page">
      <div className="profile-main">profile</div>
      <Navbar
        selected={selected}
        setSelected={setSelected}
        setShowPage={setShowPage}
      />
    </div>
  );
};

export default Profile;
