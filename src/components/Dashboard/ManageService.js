import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import ManageItem from './ManageItem';
import Sidebar from './Sidebar';

const ManageService = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      axios
         .get('http://localhost:8000/services')
         .then((res) => setServices(res.data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <Sidebar />
            </Col>
            <Col md={9} className="pt-9">
               <Table striped bordered hover className="pt-9" size="sm">
                  <thead>
                     <tr>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {services.map((service) => (
                        <ManageItem {...service} key={service._id} />
                     ))}
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Container>
   );
};

export default ManageService;
