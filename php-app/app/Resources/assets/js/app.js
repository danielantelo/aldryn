require('babel-polyfill');
require('./components/header.js');
require('./components/product.js');
require('./components/sliders.js');

// img lazy loader with default selector as ".lozad"
const lozad = require('lozad');
lozad().observe();
