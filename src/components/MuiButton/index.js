import React from "react";
import { Button } from "@material-ui/core";

const MuiButton = ({ title }) => {
  return (
    <Button variant="contained" color="red" disableElevation>
      {title}
    </Button>
  );
};

export default MuiButton;
