// src/components/Header/Header.js
import React from 'react';
import TopBar from './Header/TopBar';
import MiddleBar from './Header/MiddleBar';
import NavBar from './Header/NavBar';
import './Header.css';

const Header = () => {
  return (
    <header>
      <TopBar />
      <MiddleBar />
      <NavBar />
    </header>
  );
};

export default Header;
