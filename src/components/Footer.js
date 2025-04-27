import React from 'react';
import ContactInfo from './Footer/ContactInfo';
import Informations from './Footer/Informations';
import Newsletter from './Footer/Newsletter';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ContactInfo />
        <Informations />
        <Newsletter />
      </div>
    </footer>
  );
};

export default Footer;