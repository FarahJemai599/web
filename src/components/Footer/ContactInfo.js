import React from 'react';
import '../Footer.css';

const ContactInfo = () => {
  return (
    <div className="footer-section">
      <h3>SOULIAH ELECTRONIQUE</h3>
      <p>Souilah Electronique est le plus ancien magasin d'électronique en Tunisie, créé en 1967 par Mr Chedly Souilah.</p>
      <div className="contact-phone">
        <i className="fas fa-phone"></i>
        <span>(+216) 71 259 856</span>
      </div>
    </div>
  );
};

export default ContactInfo;