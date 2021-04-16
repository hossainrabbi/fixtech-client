import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import AlertMessage from '../Common/AlertMessage';

const Review = () => {
    const [alertShow, setAlertShow] = useState(false);
    const [alertErrShow, setAlertErrShow] = useState(false);
    const [loggend, setLoggend] = useContext(UserContext);
    const { displayName, email, photoURL } = loggend;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { title, description } = data;

        const userInfo = {
            name: displayName,
            image: photoURL,
            email,
            title,
            description,
        };

        axios
            .post('http://localhost:8000/addReviews', userInfo)
            .then(() => {
                setAlertShow(true);
            })
            .catch(() => setAlertErrShow(true));
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
            <Form.Group>
                <Form.Control
                    type="text"
                    defaultValue={displayName}
                    {...register('name', { required: true })}
                    placeholder="Your Name*"
                    readOnly
                />
                {errors.name && (
                    <Form.Text className="text-danger">
                        Name is required!
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    {...register('title', { required: true })}
                    placeholder="Your Title*"
                />
                {errors.title && (
                    <Form.Text className="text-danger">
                        Title is required!
                    </Form.Text>
                )}
            </Form.Group>
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
            <div>
                <button className="btn custom-btn book-btn" type="submit">
                    Add Review
                </button>
            </div>
        </Form>
    );
};

export default Review;
