import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Profile = ({
  selected,
  setSelected,
  setShowPage,
  setMapsDistance,
  setMapsPrice,
  setPreferences,
}) => {
  const [cost, setCost] = React.useState("");
  const [distance, setDistance] = React.useState("");
  const [isDistanceImage, setIsDistanceImage] = useState(0);

  const handleChangeC = (event) => {
    setCost(event.target.value);
    setMapsPrice(event.target.value);
  };

  const handleChangeD = (event) => {
    setDistance(event.target.value);
    setMapsDistance(event.target.value);
  };

  return (
    <div className="saved-overlay-page">
      <div className="page-header">
        <h3>Profile</h3>
      </div>
      <div className="profile-main">
        <img src={`/images/profileImage.svg`} alt="profileImage" />
        <div className="profilePreferences">
          <div className="saved-list-item-a">
            <h3>Maximum Distance</h3>
            <div className="dropdown">
              <Box sx={{}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Distance
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={distance}
                    label="distance"
                    onChange={handleChangeD}
                  >
                    <MenuItem value={200}>200m</MenuItem>
                    <MenuItem value={400}>400m</MenuItem>
                    <MenuItem value={600}>600m</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <h3></h3>
            </div>
          </div>
        </div>

        <div className="profilePreferences">
          <div className="saved-list-item-a">
            <h3>Maximum Cost</h3>
            <div className="dropdown">
              <Box sx={{}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Cost
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cost}
                    label="Cost"
                    onChange={handleChangeC}
                  >
                    <MenuItem value={0.6}>$0.60/30mins</MenuItem>
                    <MenuItem value={1.2}>$1.20/30mins</MenuItem>
                    <MenuItem value={1.8}>$1.80/30mins</MenuItem>
                    <MenuItem value={100}>No Limit</MenuItem>
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
              <button
                className="preferenceLeftButton"
                onClick={() => {
                  setIsDistanceImage(1);
                  setPreferences("Distance");
                }}
              >
                <img
                  src={
                    isDistanceImage == 1
                      ? "/images/distanceClick.svg"
                      : "/images/distance.svg"
                  }
                  alt="Distance"
                />
                Distance
              </button>
              <button
                className="preferenceRightButton"
                onClick={() => {
                  setIsDistanceImage(2);
                  setPreferences("Price");
                }}
              >
                <img
                  src={
                    isDistanceImage == 2
                      ? "/images/costClick.svg"
                      : "/images/cost.svg"
                  }
                  alt="Price"
                />
                Price
              </button>
            </div>
          </div>
        </div>
        <button
          className="profileButton"
          onClick={() => {
            setShowPage(2);
            setSelected(2);
            alert("Preferences saved");
          }}
        >
          Update Preferences
        </button>
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
