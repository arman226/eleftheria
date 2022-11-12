import logo from "./logo.svg";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Route from "./routes";
import themes from "./themes";

function App() {
  return (
    <MuiThemeProvider theme={themes}>
      <Route />
    </MuiThemeProvider>
  );
}

export default App;
