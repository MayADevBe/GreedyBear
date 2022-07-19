import React from "react";
import {
  Nav,
  Navbar,
  NavItem,
  Collapse,
  NavbarBrand,
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { RiBookReadFill } from "react-icons/ri";

// lib
import { NavLink } from "@certego/certego-ui";

// constants
import { GREEDYBEAR_DOCS_URL } from "../constants/environment";

const guestLinks = (
  <NavItem>
    <RRNavLink
      id="login-btn"
      className="btn btn-sm btn-accent-2"
      end
      to="/login"
    >
      Login
    </RRNavLink>
  </NavItem>
);

const rightLinks = (
  <NavItem>
    <a
      className="d-flex-start-center btn text-gray"
      href={GREEDYBEAR_DOCS_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <RiBookReadFill />
      <span className="ms-1">Docs</span>
    </a>
  </NavItem>
);

function AppHeader() {

  return (
    <header className="fixed-top">
      {/* nav bar */}
      <Navbar dark expand="lg">
        <NavbarBrand tag={RRNavLink} to="/">
        GreedyBear
        </NavbarBrand>
        <Collapse navbar >
          {/* Navbar Left Side */}
          <Nav navbar>
            <NavItem>
              <NavLink className="d-flex-start-center" end to="/">
                <MdHome />
                <span className="ms-1">Home</span>
              </NavLink>
            </NavItem>
          </Nav>
          {/* Navbar Right Side */}
          <Nav navbar className="ms-auto d-flex align-items-center">
            {rightLinks}
            {guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default AppHeader;