import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "pages/Home";
import NavMenu from "components/navMenu";
import Layout from "components/Layout";

const RootRoute = () => {
  return (
    <>
      <Router>
        <NavMenu />

        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default RootRoute;
