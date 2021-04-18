import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
   openingShop,
   services,
   contactInfo,
   socialInfo,
} from '../../data/footerContent';
import ContactInfo from './ContactInfo';
import GoogleMap from './GoogleMap';
import OpeningShop from './OpeningShop';
import QuickLinks from './QuickLinks';
import SocialInfo from './SocialInfo';

const FooterMain = () => {
   return (
      <Container>
         <Row>
            <Col md={6}>
               <div className="title">
                  <h5>Contact Us</h5>
               </div>
               <ul className="mb-3">
                  {contactInfo.map((info) => (
                     <ContactInfo {...info} key={info.id} />
                  ))}
               </ul>
               <ul className="mb-5">
                  {socialInfo.map((info) => (
                     <SocialInfo {...info} key={info.id} />
                  ))}
               </ul>
            </Col>
            <Col md={6}>
               <div className="mb-5 mt-md-5">
                  <GoogleMap />
               </div>
            </Col>
            <Col md={6}>
               <div className="title">
                  <h5>Quick Links</h5>
               </div>
               <ul className="mb-5">
                  {services.map((service) => (
                     <QuickLinks {...service} key={service.id} />
                  ))}
               </ul>
            </Col>
            <Col md={6}>
               <div className="title">
                  <h5>Opening Shop</h5>
               </div>
               <ul className="mb-5">
                  {openingShop.map((data) => (
                     <OpeningShop {...data} key={data.id} />
                  ))}
               </ul>
            </Col>
         </Row>
      </Container>
   );
};

export default FooterMain;
