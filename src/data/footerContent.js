import {
   faFacebookF,
   faInstagram,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
   faCaretRight,
   faMapMarkerAlt,
   faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

export const contactInfo = [
   {
      id: 1,
      icon: faMapMarkerAlt,
      name: 'Pabna Sadar, Pabna - 6600',
      className: 'contact-item',
   },
   {
      id: 2,
      icon: faEnvelope,
      name: 'info@example.com',
      className: 'contact-item',
   },
   {
      id: 3,
      icon: faMobileAlt,
      name: '+8801711111111',
      className: 'contact-item',
   },
];

export const socialInfo = [
   {
      id: 1,
      icon: faFacebookF,
      link: 'https://www.facebook.com/',
      className: 'social-item',
   },
   {
      id: 2,
      icon: faInstagram,
      link: 'https://www.instagram.com/',
      className: 'social-item',
   },
   {
      id: 3,
      icon: faTwitter,
      link: 'https://twitter.com/',
      className: 'social-item',
   },
];

export const services = [
   {
      id: 1,
      name: 'Customer Services',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/customerServices',
   },
   {
      id: 2,
      name: 'Order a Services',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/orderServices',
   },
   {
      id: 3,
      name: 'Virus Removal',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/virusRemoval',
   },
   {
      id: 4,
      name: 'Repairing pack',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/repairingPack',
   },
   {
      id: 5,
      name: 'Operating System',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/operatingSystem',
   },
];

export const openingShop = [
   {
      id: 1,
      name: 'Saturday',
      time: '9.00am - 9.00pm',
      className: 'footer-item',
   },
   {
      id: 2,
      name: 'Sunday',
      time: '9.00am - 9.00pm',
      className: 'footer-item',
   },
   {
      id: 3,
      name: 'Monday - Tuesday',
      time: '9.00am - 10.00pm',
      className: 'footer-item',
   },
   {
      id: 4,
      name: 'Wednesday - Thursday',
      time: '9.00am - 9.00pm',
      className: 'footer-item',
   },
   {
      id: 5,
      name: 'Friday',
      time: 'Closed',
      className: 'footer-item',
   },
];
