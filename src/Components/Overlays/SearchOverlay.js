import React from "react";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Finder = ({ selected, setSelected, setShowPage }) => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div className="saved-overlay-page">
      <div className="page-header">
        <h3>Car Finder</h3>
      </div>
      <div className="search-main">
        <div className="add-imageBtn">
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Add Image
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
        <h4>Level</h4>
        <div className="text-field">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
        </div>

        <h4>Zone</h4>
        <div className="text-field">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
        </div>
        <h4>Lot.No</h4>
        <div className="text-field">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
        </div>
        <div className="searchSaved">
          <Button variant="outlined"> Save Parked Details </Button>
        </div>
      </div>

      {/*  <div className="saved-overlay-page">
       <div className="page-header">
        <h3>Car Finder</h3>
      </div>
     <div className="search-main">
        <h2>Parked Location</h2>
         <img src="/images/carImg.svg" alt="carImg" />
         <div className="search-desc">
           <div className="search-desc-a">
             <p>Level: 5</p>
             <p>Zone: D8</p>
           </div>
           <p>Lot No: 302</p>
         </div>
         <button className="search-endBtn">End Parking</button>
       </div> */}
      <Navbar
        selected={selected}
        setSelected={setSelected}
        setShowPage={setShowPage}
      />
    </div>
  );
};

export default Finder;
