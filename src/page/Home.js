import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import NouveauxProduits from '../components/NouveauxProduits';
import NotreSelection from '../components/NotreSelection';
import Footer from '../components/Footer';
import './Home.css';

function HomePage() {
  return (
    <div className="home-page">
      <Header/>
      <Carousel/>
      <NouveauxProduits />
      <NotreSelection />
      <Footer />
    </div>
  );
}

export default HomePage;
