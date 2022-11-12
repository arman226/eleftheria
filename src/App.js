import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Route from "./routes";
import themes from "./themes";

function App() {
  const [authen, setAuthen] = useState(false);
  return (
    <MuiThemeProvider theme={themes}>
      <Route authen={authen} />
    </MuiThemeProvider>
  );
}

export default App;
