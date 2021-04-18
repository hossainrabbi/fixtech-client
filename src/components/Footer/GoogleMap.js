import React from 'react';
import Iframe from 'react-iframe';

const GoogleMap = () => {
   return (
      <Iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233302.53493432267!2d89.13845680569965!3d23.98334024860818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84f8fd9ccc71%3A0xbad939f3f5ee0c50!2sPabna%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1618724803632!5m2!1sen!2sbd"
         width="100%"
         height="100%"
         frameBorder="0"
         style={{ border: 0 }}
         allowFullScreen=""
         aria-hidden="false"
         tabIndex="0"
      />
   );
};

export default GoogleMap;
