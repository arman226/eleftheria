import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "pages/Home";
import NavMenu from "components/navMenu";
import Layout from "components/Layout";

const RootRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Router>
        <NavMenu isAuthenticated={isAuthenticated} />

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
