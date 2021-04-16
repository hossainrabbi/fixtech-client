import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

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
        <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
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
    );
};

export default MakeAdmin;
