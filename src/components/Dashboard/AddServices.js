import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AlertMessage from '../Common/AlertMessage';
import Sidebar from './Sidebar';

const AddServices = () => {
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
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

    setLoading(true);

    axios
      .post('https://fixtech.herokuapp.com/addServices', servicesData)
      .then(() => {
        setAlertShow(true);
        setAlertErrShow(false);
        setLoading(false);
      })
      .catch(() => {
        setAlertErrShow(true);
        setAlertShow(false);
        setLoading(false);
      });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set('key', 'f533ec1f83d853971cab7066d9ad335b');
    imageData.append('image', event.target.files[0]);

    setLoading(true);

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then((res) => {
        setImageURL(res.data.data.display_url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Container className="dashboard">
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <Form className="w-100 pt-9" onSubmit={handleSubmit(onSubmit)}>
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
                closeBtn={() => setAlertErrShow(false)}
                text="Failed to add service!"
              />
            )}
            <Row>
              <Col md={12}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    {...register('name', {
                      required: true,
                    })}
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
                    {...register('price', {
                      required: true,
                    })}
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
                    className="upload-image"
                    name="upload"
                    required
                    onChange={handleImageUpload}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    {...register('description', {
                      required: true,
                    })}
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
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddServices;
