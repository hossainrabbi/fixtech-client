import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import AlertMessage from '../Common/AlertMessage';
import Loading from '../Common/Loading';
import ManageItem from './ManageItem';
import Sidebar from './Sidebar';

const ManageService = () => {
   const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(false);
   const [alertShow, setAlertShow] = useState(false);
   const [alertErrShow, setAlertErrShow] = useState(false);

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

   return (
      <>
         {loading && <Loading />}
         <Container className="dashboard">
            <Row>
               <Col md={3}>
                  <Sidebar />
               </Col>
               <Col md={9} className="pt-9">
                  {alertShow && (
                     <AlertMessage
                        variant="success"
                        closeBtn={() => setAlertShow(false)}
                        text="Services Deleted successfully!"
                     />
                  )}
                  {alertErrShow && (
                     <AlertMessage
                        variant="danger"
                        closeBtn={() => setAlertErrShow(false)}
                        text="Failed to delete service!"
                     />
                  )}
                  <Table striped bordered hover size="sm">
                     <thead>
                        <tr>
                           <th>Service Name</th>
                           <th>Price</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {services.map((service) => (
                           <ManageItem
                              {...service}
                              setAlertShow={setAlertShow}
                              setAlertErrShow={setAlertErrShow}
                              key={service._id}
                           />
                        ))}
                     </tbody>
                  </Table>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default ManageService;
