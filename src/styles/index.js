export default (theme) => ({
  bold: {
    fontWeight: "700",
  },
  whiteText: {
    color: theme.palette.light.main,
  },
  darkText: {
    color: theme.palette.dark.main,
  },
  secondaryBackgroundColor: {
    backgroundColor: theme.palette.secondary.main,
  },
  primaryBackgroundColor: {
    backgroundColor: theme.palette.primary.main,
  },
  centeredText: {
    textAlign: "center",
  },
  primaryColorText: {
    color: theme.palette.primary.main,
  },
  secondaryColorText: {
    color: theme.palette.secondary.main,
  },
  homeSectionTitle: {
    fontSize: 30,
  },
  webPageDefaultLayout: {
    marginTop: theme.dimensions.marginTop,
    paddingLeft: theme.dimensions.paddingHorizontal,
    paddingRight: theme.dimensions.paddingHorizontal,
  },
});
