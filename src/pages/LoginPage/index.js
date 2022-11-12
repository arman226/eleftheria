import React from "react";

//components
import MuiBox from "../../components/MuiBox";
import MuiButton from "../../components/MuiButton";
import MuiPaper from "../../components/MuiPaper";

const LoginPage = (props) => {
  return (
    <MuiBox>
      <MuiPaper elevation={1}>
        <MuiButton title="Login mo to" />
      </MuiPaper>
    </MuiBox>
  );
};

export default LoginPage;
