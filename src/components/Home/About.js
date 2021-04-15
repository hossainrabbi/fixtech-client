import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../image/about.jpg';

const About = () => {
    return (
        <section className="about mt-5 pt-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={about} alt="about" />
                    </Col>
                    <Col md={6}>
                        <div className="title">
                            <h3>About Us</h3>
                        </div>
                        <p>
                            Our discreet computer and laptop repair service
                            offers the highest quality for all our customers and
                            our goal is to provide the best possible service,
                            fixing any computer problems in the shortest space
                            of time possible. We are always training to perfect
                            our service so that we can offer the very best in
                            customer care to all our clients.
                        </p>
                        <button className="btn custom-btn mt-3">
                            Read More
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
