import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loading from '../Common/Loading';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://serene-fortress-07268.herokuapp.com/services')
            .then((res) => {
                setLoading(false);
                setServices(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="services py-5">
            <Container>
                <div className="title mb-5">
                    <h3>Our Services</h3>
                </div>
                <Row>
                    {services.map((service) => (
                        <Col lg={4} md={6} key={service._id}>
                            <Service {...service} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
