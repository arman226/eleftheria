export const defaultOpacityFadeIn = {
  transition: `opacity ${2000}ms ease-in-out`,
  opacity: 0,
};

export const FadeInTransitionStyles = {
  entering: { opacity: 0.25 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const defaultLeftToRightFadeIn = {
  transform: `translateX(-100%)`,
  opacity: 1,
};

export const LeftToRightTransitionInStyles = {
  entering: { transform: `translateX (-50%)`, opacity: 1 },
  entered: {
    transform: `translateX(0%)`,
    transition: `all 1s ease`,
    opacity: 1,
  },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
