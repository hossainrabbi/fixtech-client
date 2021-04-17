import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const OrderItem = ({ userName, userEmail, servicesName, bookingStatus }) => {
   const [selectedValue, setSelectedValue] = useState('');

   const handleChange = (e) => {
      setSelectedValue(e.target.value);
   };

   return (
      <tr>
         <td>{userName}</td>
         <td>{userEmail}</td>
         <td>{servicesName}</td>
         <td>
            <Form className="order-list-form">
               <Form.Group className="mb-0">
                  <Form.Control
                     as="select"
                     onChange={handleChange}
                     className={bookingStatus}
                  >
                     <option disabled>{bookingStatus}</option>
                     <option>Panding</option>
                     <option>On Going</option>
                     <option>Done</option>
                  </Form.Control>
               </Form.Group>
            </Form>
         </td>
      </tr>
   );
};

export default OrderItem;
