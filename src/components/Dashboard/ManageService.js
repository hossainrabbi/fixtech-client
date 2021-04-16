import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';

const ManageService = () => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Service Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>abc</td>
                    <td>$123</td>
                    <td>
                        <button className="delete-btn text-danger">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default ManageService;
