import React from 'react';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';

const MakeAdmin = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <Sidebar />
            </Col>
            <Col md={9}>
               <Form className="w-100 pt-9" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group controlId="email">
                     <Form.Label>Email:</Form.Label>
                     <InputGroup>
                        <Form.Control
                           type="email"
                           {...register('email', { required: true })}
                           placeholder="jhon@gmail.com"
                        />
                        <InputGroup.Prepend>
                           <button
                              className="btn custom-btn admin-btn"
                              type="submit"
                           >
                              Submit
                           </button>
                        </InputGroup.Prepend>
                        {errors.email && (
                           <Form.Text className="text-danger">
                              Email is required!
                           </Form.Text>
                        )}
                     </InputGroup>
                  </Form.Group>
               </Form>
            </Col>
         </Row>
      </Container>
   );
};

export default MakeAdmin;
