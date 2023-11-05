import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SavedPopup = ({ setShowPage, setSelected }) => {
  return (
    <div className="savedPopup">
      <div className="savedPopupMain">
        <h3>You have reached!</h3>
        <Stack spacing={2}>
          <Button
            variant="outlined"
            onClick={() => {
              setShowPage(4);
              setSelected(4);
            }}
          >
            Enter parking details
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setShowPage(3);
              setSelected(3);
            }}
          >
            Save carpark details
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default SavedPopup;
