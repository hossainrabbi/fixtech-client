import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Loading from '../Common/Loading';
import Booking from './Booking';
import Sidebar from './Sidebar';

const BookingList = () => {
   const [loggend, setLoggend] = useContext(UserContext);
   const [loading, setLoading] = useState(false);
   const [bookings, setBookings] = useState([]);

   useEffect(() => {
      setLoading(true);
      axios
         .get(
            `https://serene-fortress-07268.herokuapp.com/bookings?email=${loggend.email}`
         )
         .then((res) => {
            setLoading(false);
            setBookings(res.data);
         })
         .catch((err) => console.log(err));
   }, [loggend.email]);

   return (
      <>
         {loading && <Loading />}
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
      </>
   );
};

export default BookingList;
