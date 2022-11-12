import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "pages/Home";
import NavMenu from "components/navMenu";

const RootRoute = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
        </Routes>
      </Router>
    </>
  );
};

export default RootRoute;
