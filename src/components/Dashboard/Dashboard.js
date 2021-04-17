import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import './Dashboard.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <Container className="dashboard">
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <h2 className="pt-9">Welcome to your Dashboard.</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
