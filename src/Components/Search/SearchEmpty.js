import React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const SearchEmpty = ({
  setShowSearchPage,
  setLevel,
  setZone,
  setLotNo,
  handleImageChange,
  image,
}) => {
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
    <div className="search-main">
      <div className="add-imageBtn">
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Add Image
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
      </div>
      {image && <img src={image} alt="Uploaded" />}
      <div className="search-main-input">
        <h4>Level</h4>
        <TextField
          sx={{
            width: "100%",
          }}
          id="level-input"
          variant="outlined"
          onChange={(e) => setLevel(e.target.value)}
        />
      </div>

      <div className="search-main-input">
        <h4>Zone</h4>
        <TextField
          sx={{
            width: "100%",
          }}
          id="level-input"
          variant="outlined"
          onChange={(e) => setZone(e.target.value)}
        />
      </div>
      <div className="search-main-input">
        <h4>Lot. No</h4>
        <TextField
          sx={{
            width: "100%",
          }}
          id="level-input"
          variant="outlined"
          onChange={(e) => setLotNo(e.target.value)}
        />
      </div>
      <div className="searchSaved">
        <Button
          variant="outlined"
          onClick={() => {
            setShowSearchPage(1);
          }}
        >
          Save Parked Details
        </Button>
      </div>
    </div>
  );
};

export default SearchEmpty;
