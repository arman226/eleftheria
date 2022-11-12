import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "styles";

const Layout = ({ classes, children }) => {
  return <div className={classes.webPageDefaultLayout}>{children}</div>;
};

export default withStyles(styles)(Layout);
