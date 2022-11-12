import Paper from "@material-ui/core/Paper";

import React from "react";

const MuiPaper = ({ children, ...inputProps }) => {
  return <Paper {...inputProps}>{children}</Paper>;
};

export default MuiPaper;
