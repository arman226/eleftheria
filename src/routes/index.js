import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "pages/Home";
import NavMenu from "components/navMenu";
import Layout from "components/Layout";
import Signup from "pages/Sign-up";
import Profile from "pages/Profile";
import Dashboard from "pages/Dashboard";

const RootRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
      <Router>
        <NavMenu
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />

        <Layout>
          <Routes>
            {!isAuthenticated ? (
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </>
            )}
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default RootRoute;
