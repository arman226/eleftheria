import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import createTypography from "@material-ui/core/styles/createTypography";
import { BLACK, PRIMARY_ORANGE, WHITE } from "values/colors.styles";
import { PAGE_MARGIN_TOP, PAGE_PADDING_HORIZONTAL } from "values/dimens.styles";

export default createMuiTheme({
  typography: createTypography(createPalette({ type: "light" }), {
    fontFamily: "Times",
  }),
  palette: {
    primary: {
      // light: '#ffffa6',
      main: WHITE,
      // dark: '#a8b545',
      contrastText: WHITE,
    },
    secondary: {
      // light: '#9c4dcc',
      main: WHITE,
      // dark: '#38006b',
      contrastText: PRIMARY_ORANGE,
    },
    light: {
      main: WHITE,
      contrastText: BLACK,
    },
    dark: {
      main: BLACK,
      contrastText: WHITE,
    },
  },
  dimensions: {
    marginTop: PAGE_MARGIN_TOP,
    paddingHorizontal: PAGE_PADDING_HORIZONTAL,
  },
});
