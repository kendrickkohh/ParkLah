import React from "react";
import { TextField, Container } from "@material-ui/core";

const MapsOverlay = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ width: 600 }}>
        <TextField label="Search" variant="outlined"></TextField>
      </Container>
    </div>
  );
};

export default MapsOverlay;
