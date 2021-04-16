import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            const paymentSuccess = { PaymentMethod: paymentMethod, data: data };
            console.log(paymentSuccess);
        }
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
                    type="email"
                    {...register('email', { required: true })}
                    placeholder="Your Email*"
                />
                {errors.email && (
                    <Form.Text className="text-danger">
                        Email is required!
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    {...register('serviceName', { required: true })}
                    placeholder="Service Name*"
                />
                {errors.serviceName && (
                    <Form.Text className="text-danger">
                        Service Name is required!
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group>
                <CardElement />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Your service changed will be $1000</p>
                <button
                    className="btn custom-btn book-btn"
                    type="submit"
                    disabled={!stripe}
                >
                    Pay
                </button>
            </div>
        </Form>
    );
};

export default PaymentForm;
