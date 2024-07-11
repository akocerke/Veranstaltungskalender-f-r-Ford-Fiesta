// Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/logo.png";

const NavigationBar = () => (
  <Navbar className="bg-nav" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img
          src={logo}
          height="40"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="me-3" href="/">
            <i className="bi bi-house-door p-1"></i>Home
          </Nav.Link>
          <Nav.Link className="me-3" href="#">
            <i className="bi bi-people p-1"></i>Profil
          </Nav.Link>
          <Nav.Link className="me-3" href="#">
            <i className="bi bi-calendar-event p-1"></i>Events
          </Nav.Link>
        </Nav>
        
        <Nav>
          <Nav.Link href="#">
            <i className="bi bi-box-arrow-in-left p-1"></i>Login
          </Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-person-plus p-1"></i>Register
          </Nav.Link>
          <Nav.Link href="#">
          <i className="bi bi-box-arrow-in-right p-1"></i>Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;