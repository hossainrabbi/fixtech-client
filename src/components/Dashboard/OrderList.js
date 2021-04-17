import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Loading from '../Common/Loading';
import OrderItem from './OrderItem';
import Sidebar from './Sidebar';

const OrderList = () => {
   const [bookings, setBookings] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      axios
         .get('https://serene-fortress-07268.herokuapp.com/allBookings')
         .then((res) => {
            setLoading(false);
            setBookings(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         {loading && <Loading />}
         <Container className="dashboard">
            <Row>
               <Col md={3}>
                  <Sidebar />
               </Col>
               <Col className="pt-9" md={9}>
                  <Table striped bordered hover size="sm">
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Service</th>
                           <th>Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        {bookings.map((booking) => (
                           <OrderItem {...booking} key={booking._id} />
                        ))}
                     </tbody>
                  </Table>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default OrderList;
