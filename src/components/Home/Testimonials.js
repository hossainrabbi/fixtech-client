import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { reviews } from '../../data/reviews';
import 'swiper/swiper.scss';
import Testimonial from './Testimonial';

const Testimonials = () => {
    return (
        <section className="testimonials mt-5 my-5">
            <Container>
                <Swiper spaceBetween={50} slidesPerView={3}>
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <Testimonial {...review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Testimonials;
