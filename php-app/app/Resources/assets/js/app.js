require('../css/app.scss');
require('./components/header.js');
require('./components/product.js');

window.addEventListener('load', function(){
  const allimages= document.getElementsByTagName('img');
  for (let i=0; i<allimages.length; i++) {
      if (allimages[i].getAttribute('data-src')) {
          allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
      }
  }
}, false)

// @TODO tidy this up
const Flickity = require('flickity');
new Flickity( '.slider', {
  autoPlay: true,
  cellSelector: '.slider__slide',
});
new Flickity( '.product-carousel .product-grid', {
 autoPlay: true,
 cellSelector: 'article',
 groupCells: true
});

