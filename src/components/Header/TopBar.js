// src/components/Header/TopBar/TopBar.js
import React, { useState } from 'react';
import './TopBar.css';

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <p className="marquee">
          Bienvenue sur le site web SOUILAH ELECTRONIQUE, 1er magasin d’électronique en Tunisie
        </p>
      </div>

      <div className="topbar-right">
        <div className="account" onClick={toggleDropdown}>
          Mon compte ▼
          {isDropdownOpen && (
            <div className="dropdown">
              <ul>
                <li>Mon compte</li>
                <li>Commander</li>
                <li>Connexion</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
