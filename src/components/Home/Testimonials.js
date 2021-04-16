import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { reviews } from '../../data/reviews';
import Testimonial from './Testimonial';
import 'swiper/swiper.scss';
import axios from 'axios';

const Testimonials = () => {
    // const [reviews, serReviews] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8000/reviews')
    //         .then((res) => serReviews(res.data))
    //         .catch((err) => console.log(err));
    // }, []);

    return (
        <section className="testimonials my-5">
            <Container>
                <div className="title mb-5">
                    <h3>Testimonials</h3>
                </div>
                <Swiper spaceBetween={50} slidesPerView={2}>
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <Testimonial {...review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Testimonials;
