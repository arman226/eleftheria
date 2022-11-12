import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Container,
} from "reactstrap";
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
    title: "Work Experience",
    component: "experience",
  },
  {
    title: "Education",
    component: "education",
  },
  {
    title: "Skills",
    component: "skills",
  },
];

const NavMenu = () => {
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
              {menu.map(({ title, component }, idx) => (
                <Item
                  title={title}
                  component={component}
                  onClickListener={() => {
                    setSelectedPage(component);
                    setIsOpen(false);
                  }}
                />
              ))}
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
