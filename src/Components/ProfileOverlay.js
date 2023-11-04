import React from "react";
import Navbar from "./Navbar/Navbar";

// import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const Profile = ({
  selected,
  setSelected,
  setShowPage,
  setMapsDistance,
  setMapsPrice,
}) => {
  const [cost, setCost] = React.useState('');

  const handleChangeC = (event) => {
    setCost(event.target.value);
  };
  const [distance, setDistance] = React.useState('');

  const handleChangeD = (event) => {
      setDistance(event.target.value);
  };

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
              {/* <button className="dropbtn">
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
              </div> */}
                         <Box sx={{ minWidth: 320 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Distance</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={distance}
                  label="distance"
                  onChange={handleChangeD}
                >
                  <MenuItem value={1.0}>$1.00/30mins</MenuItem>
                  <MenuItem value={1.5}>$1.50/30mins</MenuItem>
                  <MenuItem value={2.0}>$2.00/30mins</MenuItem>
                  <MenuItem value={2.5}>$2.50/30mins & above</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <h3></h3>
            </div>
          </div>
        </div>

        <div className="profilePreferences">
          <div className="saved-list-item-a">
            <h3>Cost</h3>
            <div className="dropdown">
            <Box sx={{ minWidth: 320 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Cost</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cost}
                  label="Cost"
                  onChange={handleChangeC}
                >
                  <MenuItem value={1.0}>$1.00/30mins</MenuItem>
                  <MenuItem value={1.5}>$1.50/30mins</MenuItem>
                  <MenuItem value={2.0}>$2.00/30mins</MenuItem>
                  <MenuItem value={2.5}>$2.50/30mins & above</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <h3></h3>
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

export default Profile