import Box from "@material-ui/core/Box";

import React from "react";

const MuiBox = ({ children }) => {
  return (
    <Box style={{ margin: "1px" }} component="span">
      {children}
    </Box>
  );
};

export default MuiBox;
