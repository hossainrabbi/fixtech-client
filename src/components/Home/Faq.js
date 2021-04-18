import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';

const Faq = () => {
   return (
      <Container className="faq mb-5">
         <div className="title mb-5">
            <h3>FAQ</h3>
         </div>
         <Accordion defaultActiveKey="0">
            <Card>
               <Accordion.Toggle
                  className="accordion-header"
                  as={Card.Header}
                  eventKey="0"
               >
                  Which methods of payment do you accept?
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="0">
                  <Card.Body>
                     You can pay us by credit or debit card, if you are a
                     business customer you can also pay by bank transfer. You
                     will receive a VAT invoice.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Accordion.Toggle
                  className="accordion-header"
                  as={Card.Header}
                  eventKey="1"
               >
                  Are all repairs done at my home?
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="1">
                  <Card.Body>
                     Orci dictum tortor feugiat, donec est vestibulum lorem
                     posuere nulla sit. Mauris suspendisse et lobortis id. Enim
                     non nibh luctus et, integer quos. Fermentum convallis
                     fringilla.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Accordion.Toggle
                  className="accordion-header"
                  as={Card.Header}
                  eventKey="2"
               >
                  Can you help set up a new computer ?
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="2">
                  <Card.Body>
                     Enim non nibh luctus et, integer quos. Fermentum convallis
                     fringilla. Diam pede, est a, integer consectetuer amet dis
                     penatibus, ut odio justo eget a ac sem, nec et lorem. Ipsum
                     ultricies orci massa.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
         </Accordion>
      </Container>
   );
};

export default Faq;
