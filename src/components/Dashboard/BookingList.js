import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { services } from '../../data/services';
import Service from '../Home/Service';

const BookingList = () => {
    return (
        <Row>
            {services.map((service) => (
                <Col md={6} key={service.id}>
                    <Service
                        {...service}
                        statusBtn="on-going-btn"
                        btnName="panding"
                    />
                </Col>
            ))}
        </Row>
    );
};

export default BookingList;
