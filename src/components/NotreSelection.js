import React, { useState } from 'react';
import './NotreSelection.css';

const NotreSelection = () => {
  const images = [
    "https://souilah-electronique.tn/2321-home_default/4-module-d-extension-i2c-pour-clavier-arduino.jpg",
    "https://souilah-electronique.tn/1077-home_default/fiche-banane-femelle-2mm.jpg",
    "https://souilah-electronique.tn/2798-home_default/viper22a-circuit-integre-de-puissance.jpg",
    "https://souilah-electronique.tn/3065-home_default/fiche-db9-male.jpg",
    "https://souilah-electronique.tn/2212-home_default/nappe-de-20-fils-de-connexion-au-metre.jpg",
    "https://souilah-electronique.tn/3452-home_default/cordon-alimentation-2075mm-mf-15m.jpg"
  ];
  
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < images.length - 5) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + 5);

  return (
    <section className="carousel-container">
      <button 
        className="carousel-button carousel-button-left" 
        onClick={handlePrev} 
        disabled={startIndex === 0}
      >
        ⬅️
      </button>

      <div className="carousel-track-container">
        <div className="carousel-track">
          {visibleImages.map((src, index) => (
            <img key={index} src={src} alt={`Image ${startIndex + index + 1}`} className="carousel-image" />
          ))}
        </div>
      </div>

      <button 
        className="carousel-button carousel-button-right" 
        onClick={handleNext} 
        disabled={startIndex >= images.length - 5}
      >
        ➡️
      </button>
    </section>
  );
};

export default NotreSelection;
