import React, { useEffect, useState, useRef } from 'react';
import './Carousel.css';

export default function Carousel() {
  const slides = [
    {
      image: 'https://souilah-electronique.tn/modules/posslideshows/images/9b80462226d2181ac11310f3fcf4665fcb2ab5a7_slideshow-1.jpg',
      title: 'Bienvenue sur le site web',
      subtitle: 'SOUILAH ELECTRONIQUE',
      text1: "1er Magasin d'Electronique",
      text2: 'en Tunisie'
    },
    {
      image: 'https://souilah-electronique.tn/modules/posslideshows/images/ac4216b82d158d1b15aba29479ba509d5536d6c9_slideshow-2a.jpg',
      title: 'ELECTRONIQUE',
      subtitle: 'Composants Electroniques',
      text1: 'Appareils de Mesures',
      text2: 'Outillage'
    },
    {
      image: 'https://souilah-electronique.tn/modules/posslideshows/images/c373b2f42b47109d493d462b5669a69838eb9ab9_slideshow-2s.jpg',
      title: 'ROBOTIQUE',
      subtitle: 'Cartes de Développement',
      text1: 'Modules et Capteurs',
      text2: 'Kit Robotique'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(function () {
    startAutoSlide();

    return function () {
      stopAutoSlide();
    };
  }, []);

  function startAutoSlide() {
    intervalRef.current = setInterval(function () {
      setCurrentSlide(function (prevSlide) {
        return (prevSlide + 1) % slides.length;
      });
    }, 5000);

    startProgressBar();
  }

  function stopAutoSlide() {
    clearInterval(intervalRef.current);
  }

  function startProgressBar() {
    let startTime = Date.now();

    function update() {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / 5000) * 100, 100));
      if (elapsed < 5000) {
        requestAnimationFrame(update);
      } else {
        setProgress(0); // reset when finished
        startProgressBar(); // restart for next slide
      }
    }
    requestAnimationFrame(update);
  }

  function goToSlide(index) {
    setCurrentSlide((index + slides.length) % slides.length);
    setProgress(0);
    stopAutoSlide();
    startAutoSlide();
  }

  function goToNext() {
    goToSlide(currentSlide + 1);
  }

  function goToPrev() {
    goToSlide(currentSlide - 1);
  }

  return React.createElement('div', { className: 'carousel' },
    React.createElement('div', { className: 'progress-bar' },
      React.createElement('div', {
        className: 'progress',
        style: { width: progress + '%' }
      })
    ),
    React.createElement('div', { className: 'slides' },
      slides.map(function (slide, index) {
        return React.createElement('div', {
          key: index,
          className: 'slide' + (index === currentSlide ? ' active' : '')
        },
          React.createElement('img', { src: slide.image, alt: '', className: 'slide-image' }),
          React.createElement('div', { className: 'slide-caption' },
            React.createElement('h5', {}, slide.title),
            React.createElement('h2', {}, slide.subtitle),
            React.createElement('h3', {}, slide.text1),
            React.createElement('h3', {}, slide.text2)
          )
        );
      })
    ),
    React.createElement('button', { className: 'arrow left', onClick: goToPrev }, '‹'),
    React.createElement('button', { className: 'arrow right', onClick: goToNext }, '›')
  );
}