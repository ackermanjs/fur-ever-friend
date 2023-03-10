import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./TopNav.css";
import { NavLink } from "react-router-dom";
import BrandLogo from "../images/pet-house.png";

// import NavLink from "react";
// import {Link}from "react-router-dom"

const TopNav = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <img
              alt=""
              src={BrandLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        <Navbar.Brand href="/">Furever Friends</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <NavLink to="/about"> */}
            <Nav.Link href="/about">About Us</Nav.Link>
            {/* </NavLink> */}
            {/* <NavLink to="/cats"> */}
            <Nav.Link href="/cats">Cats</Nav.Link>
            {/* </NavLink> */}
            {/* <NavLink to="/dogs"> */}
            <Nav.Link href="/dogs">Dogs</Nav.Link>
            {/* </NavLink> */}
          </Nav>
          <Nav>
            {/* <NavLink to="/returnuser"> */}
            <Nav.Link href="/returnuser">
              <Button variant="success">Sign In</Button>{" "}
            </Nav.Link>
            {/* </NavLink> */}
            {/* <NavLink to="/newuser"> */}
            <Nav.Link href="/newuser">
              {" "}
              <Button variant="primary">Create an Account</Button>{" "}
            </Nav.Link>
            {/* </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;

// NavLink to="/"></Navlink>
