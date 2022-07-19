import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './NavManu.css';

const NavManu = () => {
  const [loggend, setLoggend] = useContext(UserContext);

  return (
    <Navbar expand="lg" className="nav-manu fixed-top">
      <Container>
        <Link to="/" className="navbar-brand">
          FixTech
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            {loggend.email ? (
              <button
                type="button"
                className="btn custom-btn py-lg-0 px-lg-2"
                onClick={() => {
                  localStorage.removeItem('firebase-auth');
                  setLoggend({});
                }}
              >
                Log Out
              </button>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavManu;
