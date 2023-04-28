import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../assets/css/style.css'

function NavBar() {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{margin:'10px'}}>
        <Nav style={{display:'flex',justifyContent:'end'}}>
          <Link to='/aboutus'><Button variant="primary">About</Button>{' '}</Link>
          <Link to='/mission'><Button variant="primary">Our Mission</Button>{' '}</Link>
          <Link to='/organization'><Button variant="primary">Our Organization</Button>{' '}</Link>
          <Link to='/service'><Button variant="primary">Our Service</Button>{' '}</Link>
          <Link to='/contact'><Button variant="primary">Contact</Button>{' '}</Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;