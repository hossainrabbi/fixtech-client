import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Testimonial from './Testimonial';
import axios from 'axios';
import Loading from '../Common/Loading';

const Testimonials = () => {
   const [reviews, serReviews] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      axios
         .get('http://localhost:8000/reviews')
         .then((res) => {
            setLoading(false);
            serReviews(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         {loading && <Loading />}
         <section className="testimonials my-5">
            <Container>
               <div className="title mb-5">
                  <h3>Testimonials</h3>
               </div>
               <Row>
                  {reviews.map((review) => (
                     <Col md={6} key={review._id}>
                        <Testimonial {...review} />
                     </Col>
                  ))}
               </Row>
            </Container>
         </section>
      </>
   );
};

export default Testimonials;
