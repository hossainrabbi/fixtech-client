import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Booking from './Booking';
import Sidebar from './Sidebar';

const BookingList = () => {
   const [bookings, setBookings] = useState([]);
   useEffect(() => {
      axios
         .get('http://localhost:8000/bookings')
         .then((res) => setBookings(res.data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <Sidebar />
            </Col>
            <Col className="pt-9" md={9}>
               <Row>
                  {bookings.map((booking) => (
                     <Col md={6} key={booking._id}>
                        <Booking {...booking} />
                     </Col>
                  ))}
               </Row>
            </Col>
         </Row>
      </Container>
   );
};

export default BookingList;
