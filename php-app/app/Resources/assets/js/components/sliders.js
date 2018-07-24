const Flickity = require('flickity');
const simpleslider = require('simple-slider');

const SLIDER_CLASS = '.slider';
const CAROUSEL_CLASS = '.product-carousel .product-grid';

class Sliders {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(SLIDER_CLASS) !== null) {
      simpleslider.getSlider({
        duration: 1,
        delay: 4
      });
    }
    
    if (document.querySelector(CAROUSEL_CLASS) !== null) {
      new Flickity(CAROUSEL_CLASS, {
        autoPlay: true,
        cellSelector: 'article',
        groupCells: true,
        wrapAround: true
      });
    }
  }
}

new Sliders();