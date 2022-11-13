import React, { useRef } from "react";
import { makeStyles, IconButton, Box } from "@material-ui/core";
import { useInViewport } from "react-in-viewport";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Phone,
} from "@material-ui/icons";
import { Transition } from "react-transition-group";
import {
  defaultLeftToRightFadeIn,
  LeftToRightTransitionInStyles,
} from "values/animations.styles";
import { BLACK, NEON_BLUE } from "values/colors.styles";
import {
  EMAIL_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  PHONE_NUMBER,
} from "values/strings.constants";
import MyImage from "assets/portfolioimage.png";

const UserBadge = () => {
  const forwardedRef = useRef();
  const { inViewport } = useInViewport(forwardedRef);
  const classes = useStyles();

  const redierectToUrl = (url) => {
    window.location.href = url;
  };

  return (
    <Box className={classes.root}>
      <div>
        <Transition in={inViewport} timeout={50}>
          {(state) => (
            <img
              ref={forwardedRef}
              src={MyImage}
              className={classes.image}
              style={{
                ...defaultLeftToRightFadeIn,
                ...LeftToRightTransitionInStyles[state],
              }}
            />
          )}
        </Transition>
        <div
          style={{
            flexDirection: "row",
          }}
        >
          <Transition in={inViewport} timeout={500}>
            {(state) => (
              <IconButton
                style={{
                  ...defaultLeftToRightFadeIn,
                  ...LeftToRightTransitionInStyles[state],
                }}
                onClick={() => {
                  redierectToUrl(EMAIL_URL);
                }}
              >
                <EmailIcon style={{ color: NEON_BLUE }} />
              </IconButton>
            )}
          </Transition>
          <Transition in={inViewport} timeout={600}>
            {(state) => (
              <IconButton
                style={{
                  ...defaultLeftToRightFadeIn,
                  ...LeftToRightTransitionInStyles[state],
                }}
                onClick={() => {
                  redierectToUrl(LINKEDIN_URL);
                }}
              >
                <LinkedInIcon style={{ color: NEON_BLUE }} />
              </IconButton>
            )}
          </Transition>
          <Transition in={inViewport} timeout={700}>
            {(state) => (
              <IconButton
                style={{
                  ...defaultLeftToRightFadeIn,
                  ...LeftToRightTransitionInStyles[state],
                }}
                onClick={() => {
                  redierectToUrl(GITHUB_URL);
                }}
              >
                <GitHubIcon style={{ color: NEON_BLUE }} />
              </IconButton>
            )}
          </Transition>
          <Transition in={inViewport} timeout={800}>
            {(state) => (
              <IconButton
                style={{
                  ...defaultLeftToRightFadeIn,
                  ...LeftToRightTransitionInStyles[state],
                }}
                onClick={() => {
                  redierectToUrl("tel:" + PHONE_NUMBER);
                }}
              >
                <Phone style={{ color: NEON_BLUE }} />
              </IconButton>
            )}
          </Transition>
        </div>
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 25,
    alignItems: "start",
    "@media (max-width: 991px)": {
      alignItems: "center",
    },
  },
  image: {
    width: "26vw",
    height: "40vw",
    borderRadius: 10,
    marginBottom: 20,

    "@media (max-width: 1100px)": {
      width: 255,
      height: 430,
    },
    "@media (min-width: 1206px)": {
      width: 300,
      height: 470,
    },
  },
  userBadge: {
    textAlign: "center",
  },
  name: {
    fontSize: "2.5vw",
    fontWeight: "bold",
    color: BLACK,
    "@media (max-width: 1090px)": {
      fontSize: 23,
    },
  },
  currentCompany: {
    color: NEON_BLUE,
    fontSize: "1.7vw",
    "@media (max-width: 1100px)": {
      fontSize: 19,
    },
    "@media (min-width: 1206px)": {
      fontSize: 24,
    },
  },
}));

export default UserBadge;
