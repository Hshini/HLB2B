import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, } from 'react-bootstrap';
import logo from '../assets/images/logo.png'
import '../assets/css/style.css'

function NavBar() {
  return (
    <Navbar bg="primary" expand="lg">
      <Link to='/'>
        <img src={logo} width='90px' height='60' alt='logo' style={{ marginLeft: '15px', borderRadius: '10x' }} />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ms-auto">
          <Link to ="/"><Button variant="primary">Home</Button></Link>
          <Link to="/AboutUs" ><Button variant="primary">About</Button></Link>
          <Link to='/mission'><Button variant="primary">Our Mission</Button>{' '}</Link>
          <Link to='/service'><Button variant="primary">Our Service</Button>{' '}</Link>
          <Link to='/why-hlb2b'><Button variant="primary">Why HLb2b?</Button>{' '}</Link>
          <Link to='/contact'><Button variant="primary">Contact</Button>{' '}</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;