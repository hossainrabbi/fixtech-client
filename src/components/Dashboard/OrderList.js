import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';

const OrderList = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
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
                <tr>
                    <td>Mark</td>
                    <td>Otto@gmail.com</td>
                    <td>Various</td>
                    <td>
                        <Form className="order-list-form">
                            <Form.Group className="mb-0">
                                <Form.Control
                                    as="select"
                                    onChange={handleChange}
                                >
                                    <option>Panding</option>
                                    <option>On Going</option>
                                    <option>Done</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default OrderList;
