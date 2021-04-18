import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FooterMain from './FooterMain';

const Footer = () => {
   return (
      <footer>
         <FooterMain />
         <div className="text-center copy-right-footer">
            <p className="container py-3 mb-0">
               Copyright &copy; <Link to="/">FixTech</Link>{' '}
               {new Date().getFullYear()}. All rights reserved.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
