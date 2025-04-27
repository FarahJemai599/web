import React from 'react';
import './NouveauxProduits.css';

const NouveauxProduits = () => {
  const products = [
    // KEBO products
    { 
      category: "KEBO",
      name: "Stabilisateur de Tension KEBO - SDR 5000VA", 
      price: "608,000 TND",
      image: 'https://souilah-electronique.tn/3049-home_default/stabilisateur-de-tension-kebo-5000va.jpg',
    },
    { 
      category: "KEBO",
      name: "Testeur PH mètre Numérique AT Avec Auto...", 
      price: "45,000 TND",
      image: 'https://souilah-electronique.tn/2219-home_default/testeur-ph-metre-numerique-.jpg',
    },
    { 
      category: "KEBO",
      name: "Technymètre Numérique Laser DT2234C+", 
      price: "79,000 TND",
      image: 'https://souilah-electronique.tn/3039-home_default/tachymetre-numerique-laser-dt2234c-.jpg',
      link: 'https://souilah-electronique.tn/accueil/1753-tachymetre-numerique-laser-dt2234c-.html'
    },
    { 
      category: "KEBO",
      name: "Stylo d'impression 3D", 
      price: "105,000 TND",
      image: 'https://souilah-electronique.tn/2994-home_default/stylo-d-impression-3d.jpg',
      link: 'https://souilah-electronique.tn/accueil/1720-stylo-d-impression-3d.html'
    },
    // UNI-TREND products
    { 
      category: "UNI-TREND",
      name: "UNI-T UT387A Scanner Mural Détecteur Sans Co...", 
      price: "110,000 TND",
      image: 'https://souilah-electronique.tn/2099-home_default/uni-t-ut387a-detecteur-de-metal-et-d-electricite.jpg',
    },
    { 
      category: "UNI-TREND",
      name: "Moteur JGB37-550 - 12V DC", 
      price: "55,000 TND",
      image: 'https://souilah-electronique.tn/2389-home_default/moteur-jgb37-550-12v-500rpm-.jpg',
    },
  ];

  // Regroupement par catégorie KEBO et UNI-TREND
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return React.createElement(
    'div',
    { className: 'products-container' },
    [
      React.createElement('h1', null, 'Nouveaux Produits'),
      React.createElement(
        'div',
        { className: 'products-columns' },
        [
          // Colonne 1 : KEBO
          React.createElement(
            'div',
            { key: 'kebo', className: 'kebo-column' },
            groupedProducts['KEBO'].map((product, productIndex) =>
              React.createElement(
                'a',
                { 
                  key: productIndex,
                  className: 'product-item', 
                  href: product.link || '#',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                [
                  React.createElement('img', { 
                    src: product.image, 
                    alt: product.name,
                    className: 'product-image' 
                  }),
                  React.createElement('h3', { className: 'product-name' }, product.name),
                  React.createElement('p', { className: 'product-price' }, product.price)
                ]
              )
            )
          ),
          // Colonne 2 : UNI-TREND
          React.createElement(
            'div',
            { key: 'unitrend', className: 'product-column' },
            groupedProducts['UNI-TREND'].map((product, productIndex) =>
              React.createElement(
                'a',
                { 
                  key: productIndex,
                  className: 'product-item', 
                  href: product.link || '#',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                [
                  React.createElement('img', { 
                    src: product.image, 
                    alt: product.name,
                    className: 'product-image' 
                  }),
                  React.createElement('h3', { className: 'product-name' }, product.name),
                  React.createElement('p', { className: 'product-price' }, product.price)
                ]
              )
            )
          )
        ]
      )
    ]
  );
};

export default NouveauxProduits;
