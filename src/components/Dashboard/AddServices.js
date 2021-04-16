import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddServices = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md={12}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            {...register('name', { required: true })}
                            placeholder="Service Name*"
                        />
                        {errors.name && (
                            <Form.Text className="text-danger">
                                Service Name is required!
                            </Form.Text>
                        )}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Control
                            type="number"
                            {...register('price', { required: true })}
                            placeholder="Price*"
                        />
                        {errors.price && (
                            <Form.Text className="text-danger">
                                Price is required!
                            </Form.Text>
                        )}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.File
                            id="upload-file"
                            className="d-none"
                            required
                        />
                        <label className="upload-image" htmlFor="upload-file">
                            <FontAwesomeIcon icon={faCloudUploadAlt} />
                            <span>Upload image</span>
                        </label>
                    </Form.Group>
                </Col>
                <Col md={12}>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            {...register('description', { required: true })}
                            placeholder="Description*"
                        />
                        {errors.description && (
                            <Form.Text className="text-danger">
                                Description is required!
                            </Form.Text>
                        )}
                    </Form.Group>
                </Col>
            </Row>
            <div>
                <button className="btn custom-btn book-btn" type="submit">
                    Submit
                </button>
            </div>
        </Form>
    );
};

export default AddServices;
