import React, { useRef } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { BLACK, GRAY } from "values/colors.styles";
import { useInViewport } from "react-in-viewport";
const PortfolioBrand = ({ owner, profession }) => {
  const classes = useStyles();
  const myRef = useRef();

  return (
    <div ref={myRef}>
      <Typography className={classes.title}>{owner.toUpperCase()}</Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: "400",
    fontSize: 18,
    color: BLACK,
    fontFamily: "Times New Roman",
  },
  profession: {
    fontSize: 15,
    color: GRAY,
    fontFamily: "Calibri",
  },
}));

export default PortfolioBrand;
