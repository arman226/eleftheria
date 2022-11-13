import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Container,
} from "reactstrap";
import { ethers } from "ethers";
import erc20abi from "./ERC20abi.json";
import { makeStyles, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PORTFOLIO_OWNER, PROFESSION } from "values/strings.constants";
import { PRIMARY_GRAY, WHITE } from "values/colors.styles";
import Item from "./Item";
import PortfolioBrand from "./PortfolioBrand";

const menu = [
  {
    title: "Home",
    component: "home",
  },

  {
    title: "Profile",
    component: "profile",
  },
];

const NavMenu = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home");

  const onNavBarClicker = () => setIsOpen(!isOpen);

  useEffect(() => {
    scrollIntoHomeComponent();
  }, [selectedPage]);

  const scrollIntoHomeComponent = () => {
    const anchor = document.getElementById(selectedPage);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <AppBar position="fixed" style={{ background: WHITE }}>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm border-bottom"
        light
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            <PortfolioBrand owner={PORTFOLIO_OWNER} profession={PROFESSION} />
          </NavbarBrand>
          <NavbarToggler onClick={onNavBarClicker} className="border-white" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={isOpen}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              {isAuthenticated ? (
                menu.map(({ title, component }, idx) => (
                  <Item
                    title={title}
                    component={component}
                    // onClickListener={() => {
                    //   setSelectedPage(component);
                    //   setIsOpen(false);
                    // }}
                  />
                ))
              ) : (
                <>
                  <Item
                    title="Log In"
                    onClickListener={async () => {
                      if (window.ethereum) {
                        const test = await window.ethereum.request({
                          method: "eth_requestAccounts",
                        });
                        if (test.length === 0) {
                          alert("no accounts found");
                          return;
                        }
                        setIsAuthenticated(true);
                      } else {
                        alert("MetaMask Not Found");
                      }
                    }}
                  />
                  <Item title="Sign Up" component="signup" />
                </>
              )}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </AppBar>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 99999999,
    background: PRIMARY_GRAY,
    boxShadow: "none",
    display: "flex",
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 5,
  },
}));

export default NavMenu;
