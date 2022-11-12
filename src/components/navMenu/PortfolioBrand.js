import React, { useRef } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { BLACK, GRAY } from "values/colors.styles";
import { useInViewport } from "react-in-viewport";
import { Transition } from "react-transition-group";
import {
  defaultOpacityFadeIn,
  FadeInTransitionStyles,
} from "values/animations.styles";

const PortfolioBrand = ({ owner, profession }) => {
  const classes = useStyles();
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  return (
    <div ref={myRef}>
      <Transition in={inViewport} timeout={200}>
        {(state) => (
          <Typography
            style={{
              ...defaultOpacityFadeIn,
              ...FadeInTransitionStyles[state],
            }}
            className={classes.title}
          >
            {owner.toUpperCase()}
          </Typography>
        )}
      </Transition>
      <Transition in={inViewport} timeout={500}>
        {(state) => (
          <Typography
            style={{
              ...defaultOpacityFadeIn,
              ...FadeInTransitionStyles[state],
            }}
            className={classes.profession}
            align="center"
          >
            {profession}
          </Typography>
        )}
      </Transition>
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
