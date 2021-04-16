import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import './Dashboard.css';
import Sidebar from './Sidebar';
import SidebarContent from './SidebarContent';

const Dashboard = () => {
    return (
        <Container className="dashboard">
            <Router>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        <SidebarContent />
                    </Col>
                </Row>
            </Router>
        </Container>
    );
};

export default Dashboard;
