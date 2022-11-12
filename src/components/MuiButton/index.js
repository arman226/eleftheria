import React from "react";
import { Button } from "@material-ui/core";

const MuiButton = ({ title, ...inputProps }) => {
  return <Button {...inputProps}>{title}</Button>;
};

export default MuiButton;
