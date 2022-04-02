import React from "react";
import Logo from "../assets/logo123.PNG"
import {Navbar, Nav,Container, NavDropdown} from 'react-bootstrap';

const Header =()=>{

    return(
        <Navbar  collapseOnSelect expand="lg" bg="transparent" variant="dark">
  <Container>
  {/* <img
     style={{height:75,width:200,marginRight:-125}}
      src={Logo}
    /> */}
  <Navbar.Brand style={{}}href="#home">Excellent Designs</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" style={{justifyContent:"center",alignItems:"center"}}>
      <Nav.Link href="#features" >Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact US
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}

export default Header;