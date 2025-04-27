// src/components/Header/MiddleBar/MiddleBar.js
import React from 'react';
import './MiddleBar.css';
import { FaShoppingCart, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';

const MiddleBar = () => {
  return (
    <div className="middlebar">
      <div className="logo">
        <img src="/logo.png" alt="Souilah Electronique" />
      </div>

      <div className="categories">
        <button className="categories-button">
          Catégories <FaChevronDown size={12} />
        </button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Rechercher un produit..." />
        <button className="search-button">Rechercher</button>
      </div>

      <div className="phone">
        <FaPhoneAlt size={16} /> <span>(+216) 71 259 856</span>
      </div>

      <div className="cart">
        <FaShoppingCart size={20} />
        <span>0 articles</span>
      </div>
    </div>
  );
};

export default MiddleBar;
