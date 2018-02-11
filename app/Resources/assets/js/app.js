const app = {
  config: {
    global: {
      mobileBreakpoint: '(max-width: 550px)',
      tabletBreakpoint: '(min-width: 550px) and (max-width: 900px)',
      desktopBreakpoint: '(min-width: 900px)'
    }
  }
};

// environment
app.environment = {
  isMobile: function() {
    return window.matchMedia(app.config.global.mobileBreakpoint).matches;
  },
  isDesktop: function() {
    return window.matchMedia(app.config.global.desktopBreakpoint).matches;
  },
  isTouchEnabled: function() {
    return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
  }
};

require('../css/app.scss');
require('./components/header.js');
require('./components/product.js');
