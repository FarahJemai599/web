import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; // Import du fichier CSS global
import App from './App';

// Création de la racine React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);