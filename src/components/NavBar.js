import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import logoVitaAttiva from '../img/logoVitaAttiva.svg'
import {NavLink} from 'react-router-dom'
import { CartWidget } from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/'>
                        <img src={logoVitaAttiva} className="card-img-top" alt="Logo Vita Attiva" width="70" height="70" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className="nav-link">Inicio</NavLink>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavLink to="/category/suplementos" className="dropdown-item">Suplementos Deportivos</NavLink>
                        <NavLink to="/category/frutos" className="dropdown-item">Frutos Secos</NavLink>
                        </NavDropdown>
                        <Nav.Link className="nav-link" href="contacto.html">Contacto</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                <Link to='/cart'>
                    <CartWidget />
                </Link> 
            </Navbar>
        </div>
    )
}

export default NavBar