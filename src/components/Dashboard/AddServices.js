import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AlertMessage from '../Common/AlertMessage';

const AddServices = () => {
    const [imageURL, setImageURL] = useState('');
    const [alertShow, setAlertShow] = useState(false);
    const [alertErrShow, setAlertErrShow] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name, price, description } = data;

        const servicesData = {
            name,
            price,
            description,
            imageURL,
        };

        axios
            .post('http://localhost:8000/addServices', servicesData)
            .then(() => {
                setAlertShow(true);
                setImageURL('');
            })
            .catch(() => setAlertErrShow(true));
    };

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'f533ec1f83d853971cab7066d9ad335b');
        imageData.append('image', event.target.files[0]);

        axios
            .post('https://api.imgbb.com/1/upload', imageData)
            .then((res) => {
                setImageURL(res.data.data.display_url);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
            {alertShow && (
                <AlertMessage
                    variant="success"
                    closeBtn={() => setAlertShow(false)}
                    text="Services added successfully!"
                />
            )}
            {alertErrShow && (
                <AlertMessage
                    variant="danger"
                    closeBtn={() => setAlertShow(false)}
                    text="Failed to add service!"
                />
            )}
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
                            name="upload"
                            onChange={handleImageUpload}
                        />
                        <label className="upload-image" htmlFor="upload-file">
                            <FontAwesomeIcon icon={faCloudUploadAlt} />
                            <span>Upload image</span>
                        </label>
                        {/* {!uploadImage && (
                            <Form.Text className="text-danger">
                                Image is required!
                            </Form.Text>
                        )} */}
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
                <button
                    className="btn custom-btn book-btn"
                    type="submit"
                    disabled={!imageURL && true}
                >
                    Submit
                </button>
            </div>
        </Form>
    );
};

export default AddServices;
