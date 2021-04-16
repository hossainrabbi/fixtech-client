import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Container className="text-center">
                <p>
                    Copyright &copy; <Link to="/">FixTech</Link>{' '}
                    {new Date().getFullYear()}. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
