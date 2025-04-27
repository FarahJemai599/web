import React from 'react';
import '../Footer.css';

const Newsletter = () => {
  return (
    <div className="footer-section">
      <h3>NEWSLETTER</h3>
      <p>Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d'utilisation du site.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Votre adresse e-mail" required />
        <button type="submit">S'INSCRIRE</button>
      </form>
      <div className="newsletter-checkbox">
        <input type="checkbox" id="accept-conditions" />
        <label htmlFor="accept-conditions">J'accepte les conditions générales et la politique de confidentialité</label>
      </div>
    </div>
  );
};

export default Newsletter;