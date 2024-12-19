import React from 'react';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import logo from './assets/img/logo.jpg';


function NavbarChuche(){
    return(
        <div>
            <Navbar expand="lg" style={{ backgroundColor: '#2B353D' }} variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                alt="Chucheria Urbana Logo"
                width="100"
                height="100"
                className="d-inline-block align-top"
                style={{ marginRight: '10px' }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
              <Nav className="ml-auto">
                <Nav.Link href="#inicio">Inicio</Nav.Link>
                <Nav.Link href="#nuestra-historia">Nuestra Historia</Nav.Link>
                <Nav.Link href="#galeria-menu">Galería Menu</Nav.Link>
                <Nav.Link href="#catering">Catering</Nav.Link>
                <Nav.Link href="#reservas">Reservas</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    );
}

export default NavbarChuche;