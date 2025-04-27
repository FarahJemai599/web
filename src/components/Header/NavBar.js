// src/components/Header/Navbar/Navbar.js
import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li>Accueil</li>
        <li>Promotions</li>
        <li>Composants Electroniques</li>
        <li>Modules Arduino</li>
        <li>Instruments de mesure</li>
        <li>Accessoires</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
