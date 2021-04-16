import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Review = () => {
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
            <Form.Group>
                <Form.Control
                    type="text"
                    {...register('name', { required: true })}
                    placeholder="Your Name*"
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
                    Pay
                </button>
            </div>
        </Form>
    );
};

export default Review;
