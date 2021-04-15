import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavManu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/" className="navbar-brand">
                    Computer Services
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavManu;
