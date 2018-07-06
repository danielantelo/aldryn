require('../css/app.scss');
require('./components/header.js');
require('./components/product.js');

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

const lozad = require('lozad');
const observer = lozad(); // lazy loads elements with default selector as ".lozad"
observer.observe();

