import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import logoVitaAttiva from '../img/logoVitaAttiva.svg'
import cart from '../img/cart.svg'
import {NavLink} from 'react-router-dom'

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
                        <NavLink to='/' activeClassName="fw-bold" className="nav-link">Inicio</NavLink>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavLink to="/category/suplementos" activeClassName="currentCategory" className="dropdown-item">Suplementos Deportivos</NavLink>
                        <NavLink to="/category/frutos" activeClassName="currentCategory" className="dropdown-item">Frutos Secos</NavLink>
                        </NavDropdown>
                        <Nav.Link href="contacto.html">Contacto</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                <Link to='/cart'>
                    <img src={cart} className="card-img-top" alt="Logo Vita Attiva" width="35" height="35" />
                </Link> 
            </Navbar>
        </div>
    )
}

export default NavBar