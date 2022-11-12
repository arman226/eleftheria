import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import createTypography from "@material-ui/core/styles/createTypography";

export default createMuiTheme({
  typography: createTypography(createPalette({ type: "light" }), {
    fontFamily: "Times",
  }),
});
