import React from "react";
import Logo from "../assets/8.svg";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container>
        <Navbar.Brand style={{}} onClick={() => props.handleRef("carousel")}>
          <img
            style={{
              height: 150,
              width: 150,
              marginTop: -40,
              marginBottom: -50,
            }}
            src={Logo}
          />
          <span
            style={{ color: "#c6ab59", marginLeft: -25, fontWeight: "bold" }}
          >
            Excellent Designs
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Nav.Link onClick={() => props.handleRef("details")}>
              Features
            </Nav.Link>
            <Nav.Link onClick={() => props.handleRef("designs")}>
              Portfolio
            </Nav.Link>
            <NavDropdown title="Sevices" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => props.handleRef("teams")}>About</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => props.handleRef("footer")}>
              Contact US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
