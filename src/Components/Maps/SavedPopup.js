import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SavedPopup = ({ setShowPage }) => {
  return (
    <div className="savedPopup">
      <div className="savedPopupMain">
        <h3>You have reached!</h3>
        <Stack spacing={2}>
          <Button variant="outlined" onClick={() => setShowPage(4)}>
            Enter parking details
          </Button>
          <Button variant="outlined">End Navigation</Button>
        </Stack>
      </div>
    </div>
  );
};

export default SavedPopup;
