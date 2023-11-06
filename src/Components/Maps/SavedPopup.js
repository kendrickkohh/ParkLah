import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SavedPopup = ({
  setShowPage,
  setSelected,
  parkingSavedData,
  setParkingSavedData,
  tempSavedCarpark,
  setMapsPopup,
}) => {
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
              setParkingSavedData([...parkingSavedData, tempSavedCarpark]);
            }}
          >
            Save carpark details
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setShowPage(0);
              setSelected(2);
              setMapsPopup(0);
            }}
          >
            Quit
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default SavedPopup;
