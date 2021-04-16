import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { services } from '../../data/services';
import Service from './Service';

const Services = () => {
    return (
        <section className="services pt-5">
            <Container>
                <div className="title mb-5">
                    <h3>Our Services</h3>
                </div>
                <Row>
                    {services.map((service) => (
                        <Col md={4} key={service.id}>
                            <Service
                                {...service}
                                statusBtn=""
                                btnName="get Service"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
