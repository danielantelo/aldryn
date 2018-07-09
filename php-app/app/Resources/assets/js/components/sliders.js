const Flickity = require('flickity');

const SLIDER_CLASS = '.slider';
const CAROUSEL_CLASS = '.product-carousel .product-grid';

class Sliders {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(SLIDER_CLASS) !== null) {
      new Flickity(SLIDER_CLASS, {
        autoPlay: true,
        cellSelector: `${SLIDER_CLASS}__slide`,
      });
    }
    
    if (document.querySelector(CAROUSEL_CLASS) !== null) {
      new Flickity(CAROUSEL_CLASS, {
        autoPlay: true,
        cellSelector: 'article',
        groupCells: true
      });
    }
  }
}

new Sliders();