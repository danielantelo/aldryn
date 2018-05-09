/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/Resources/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Resources/assets/css/app.scss":
/*!*******************************************!*\
  !*** ./app/Resources/assets/css/app.scss ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/Resources/assets/js/app.js":
/*!****************************************!*\
  !*** ./app/Resources/assets/js/app.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = {
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
  isMobile: function isMobile() {
    return window.matchMedia(app.config.global.mobileBreakpoint).matches;
  },
  isDesktop: function isDesktop() {
    return window.matchMedia(app.config.global.desktopBreakpoint).matches;
  },
  isTouchEnabled: function isTouchEnabled() {
    return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
};

__webpack_require__(/*! ../css/app.scss */ "./app/Resources/assets/css/app.scss");
__webpack_require__(/*! ./components/header.js */ "./app/Resources/assets/js/components/header.js");
__webpack_require__(/*! ./components/product.js */ "./app/Resources/assets/js/components/product.js");

// @TODO tidy this up
var Flickity = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");

new Flickity('.slider', {
  autoPlay: true,
  cellSelector: '.slider__slide'
});

new Flickity('.product-carousel .product-grid', {
  autoPlay: true,
  cellSelector: 'article',
  groupCells: true
});

/***/ }),

/***/ "./app/Resources/assets/js/components/header.js":
/*!******************************************************!*\
  !*** ./app/Resources/assets/js/components/header.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SUBNAV_VISIBLE_CLASS = 'navigation__subnav--visible';
var SUBNAV_TARGET_ATTR = 'data-nav-element';
var NAV_ITEM_CLASS = 'navigation__item';
var BURGER_CLASS = 'navigation-toggle';

var NavigationBurger = function () {
  function NavigationBurger() {
    _classCallCheck(this, NavigationBurger);

    this.navToggle = document.getElementById(BURGER_CLASS);
    this.init();
  }

  _createClass(NavigationBurger, [{
    key: 'init',
    value: function init() {
      this.navToggle.addEventListener('click', function (event) {
        var target = document.getElementById(event.target.getAttribute('data-target'));
        target.classList.toggle('navigation--visible');
      });
    }
  }]);

  return NavigationBurger;
}();

var SubNavigation = function () {
  function SubNavigation() {
    _classCallCheck(this, SubNavigation);

    this.navItems = Array.from(document.getElementsByClassName(NAV_ITEM_CLASS + '--expandable'));
    this.init();
  }

  _createClass(SubNavigation, [{
    key: 'showSubNav',
    value: function showSubNav(id) {
      var subNav = document.getElementById(id);
      subNav.classList.add(SUBNAV_VISIBLE_CLASS);
    }
  }, {
    key: 'isSubNavVisible',
    value: function isSubNavVisible(id) {
      var subNav = document.getElementById(id);
      return subNav.classList.contains(SUBNAV_VISIBLE_CLASS);
    }
  }, {
    key: 'hideSubNav',
    value: function hideSubNav(id) {
      var subNav = document.getElementById(id);
      subNav.classList.remove(SUBNAV_VISIBLE_CLASS);
    }
  }, {
    key: 'hideSubNavs',
    value: function hideSubNavs() {
      var _this = this;

      this.navItems.forEach(function (element) {
        element.classList.remove(NAV_ITEM_CLASS + '--expanded');
        var subNavId = element.getAttribute(SUBNAV_TARGET_ATTR);
        _this.hideSubNav(subNavId);
      });
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.navItems.forEach(function (element) {
        ['click'].map(function (e) {
          element.addEventListener(e, function (event) {
            event.preventDefault();
            var subNavId = event.target.getAttribute(SUBNAV_TARGET_ATTR);
            var isVisible = _this2.isSubNavVisible(subNavId);
            _this2.hideSubNavs();
            if (!isVisible) {
              event.target.classList.add(NAV_ITEM_CLASS + '--expanded');
              _this2.showSubNav(subNavId);
            }
          });
        });
      });
    }
  }]);

  return SubNavigation;
}();

new NavigationBurger();

new SubNavigation();

/***/ }),

/***/ "./app/Resources/assets/js/components/product.js":
/*!*******************************************************!*\
  !*** ./app/Resources/assets/js/components/product.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var ADD_TO_BASKET_FORM_CLASS = 'add-to-basket-form';

var Products = function () {
  function Products() {
    _classCallCheck(this, Products);

    this.itemTotal = document.getElementById('baketTotal');
    this.notification = document.createElement('div');
    document.body.appendChild(this.notification);
    this.initAddToBaskets();
  }

  _createClass(Products, [{
    key: 'resetNotification',
    value: function resetNotification() {
      this.notification.classList = '';
      this.notification.innerHTML = '';
    }
  }, {
    key: 'notifySuccess',
    value: function notifySuccess() {
      this.notification.classList = 'notification notification--success notification--popup';
      this.notification.innerHTML = 'Producto añadido al pedido';
    }
  }, {
    key: 'notifyError',
    value: function notifyError() {
      this.notification.classList = 'notification notification--error notification--popup';
      this.notification.innerHTML = 'Ha ocurrido un error';
    }
  }, {
    key: 'initAddToBaskets',
    value: function initAddToBaskets() {
      var _this = this;

      var addToBasketForms = Array.from(document.getElementsByClassName(ADD_TO_BASKET_FORM_CLASS));

      addToBasketForms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
          event.preventDefault();
          _this.resetNotification();

          var form = event.target;
          var action = form.getAttribute('action');
          axios.post(action, {
            quantity: form.querySelector('input[name="quantity"]').value,
            priceId: form.querySelector('input[name="priceId"]').value
          }).then(function (response) {
            var amount = response.data.basketTotal.toLocaleString('es-ES', { minimumFractionDigits: 2 });
            _this.notifySuccess();
            _this.itemTotal.textContent = amount + ' \u20AC';
          }).catch(function (error) {
            _this.notifyError();
            console.log(error);
          });
        });
      });
    }
  }]);

  return Products;
}();

new Products();

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "./node_modules/flickity/js/add-remove-cell.js":
/*!*****************************************************!*\
  !*** ./node_modules/flickity/js/add-remove-cell.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {

'use strict';

// append cells to a document fragment
function getCellsFragment( cells ) {
  var fragment = document.createDocumentFragment();
  cells.forEach( function( cell ) {
    fragment.appendChild( cell.element );
  });
  return fragment;
}

// -------------------------- add/remove cell prototype -------------------------- //

var proto = Flickity.prototype;

/**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
proto.insert = function( elems, index ) {
  var cells = this._makeCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }
  var len = this.cells.length;
  // default to append
  index = index === undefined ? len : index;
  // add cells with document fragment
  var fragment = getCellsFragment( cells );
  // append to slider
  var isAppend = index == len;
  if ( isAppend ) {
    this.slider.appendChild( fragment );
  } else {
    var insertCellElement = this.cells[ index ].element;
    this.slider.insertBefore( fragment, insertCellElement );
  }
  // add to this.cells
  if ( index === 0 ) {
    // prepend, add to start
    this.cells = cells.concat( this.cells );
  } else if ( isAppend ) {
    // append, add to end
    this.cells = this.cells.concat( cells );
  } else {
    // insert in this.cells
    var endCells = this.cells.splice( index, len - index );
    this.cells = this.cells.concat( cells ).concat( endCells );
  }

  this._sizeCells( cells );

  var selectedIndexDelta = index > this.selectedIndex ? 0 : cells.length;
  this._cellAddedRemoved( index, selectedIndexDelta );
};

proto.append = function( elems ) {
  this.insert( elems, this.cells.length );
};

proto.prepend = function( elems ) {
  this.insert( elems, 0 );
};

/**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
proto.remove = function( elems ) {
  var cells = this.getCells( elems );
  var selectedIndexDelta = 0;
  var len = cells.length;
  var i, cell;
  // calculate selectedIndexDelta, easier if done in seperate loop
  for ( i=0; i < len; i++ ) {
    cell = cells[i];
    var wasBefore = this.cells.indexOf( cell ) < this.selectedIndex;
    selectedIndexDelta -= wasBefore ? 1 : 0;
  }

  for ( i=0; i < len; i++ ) {
    cell = cells[i];
    cell.remove();
    // remove item from collection
    utils.removeFrom( this.cells, cell );
  }

  if ( cells.length ) {
    // update stuff
    this._cellAddedRemoved( 0, selectedIndexDelta );
  }
};

// updates when cells are added or removed
proto._cellAddedRemoved = function( changedCellIndex, selectedIndexDelta ) {
  // TODO this math isn't perfect with grouped slides
  selectedIndexDelta = selectedIndexDelta || 0;
  this.selectedIndex += selectedIndexDelta;
  this.selectedIndex = Math.max( 0, Math.min( this.slides.length - 1, this.selectedIndex ) );

  this.cellChange( changedCellIndex, true );
  // backwards compatibility
  this.emitEvent( 'cellAddedRemoved', [ changedCellIndex, selectedIndexDelta ] );
};

/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
proto.cellSizeChange = function( elem ) {
  var cell = this.getCell( elem );
  if ( !cell ) {
    return;
  }
  cell.getSize();

  var index = this.cells.indexOf( cell );
  this.cellChange( index );
};

/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 */
proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
  var prevSlideableWidth = this.slideableWidth;
  this._positionCells( changedCellIndex );
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent( 'cellChange', [ changedCellIndex ] );
  // position slider
  if ( this.options.freeScroll ) {
    // shift x by change in slideableWidth
    // TODO fix position shifts when prepending w/ freeScroll
    var deltaX = prevSlideableWidth - this.slideableWidth;
    this.x += deltaX * this.cellAlign;
    this.positionSlider();
  } else {
    // do not position slider after lazy load
    if ( isPositioningSlider ) {
      this.positionSliderAtSelected();
    }
    this.select( this.selectedIndex );
  }
};

// -----  ----- //

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/animate.js":
/*!*********************************************!*\
  !*** ./node_modules/flickity/js/animate.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( utils ) {
      return factory( window, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.animatePrototype = factory(
      window,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, utils ) {

'use strict';

// -------------------------- requestAnimationFrame -------------------------- //

// get rAF, prefixed, if present
var requestAnimationFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame;

// fallback to setTimeout
var lastTime = 0;
if ( !requestAnimationFrame )  {
  requestAnimationFrame = function( callback ) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
    var id = setTimeout( callback, timeToCall );
    lastTime = currTime + timeToCall;
    return id;
  };
}

// -------------------------- animate -------------------------- //

var proto = {};

proto.startAnimation = function() {
  if ( this.isAnimating ) {
    return;
  }

  this.isAnimating = true;
  this.restingFrames = 0;
  this.animate();
};

proto.animate = function() {
  this.applyDragForce();
  this.applySelectedAttraction();

  var previousX = this.x;

  this.integratePhysics();
  this.positionSlider();
  this.settle( previousX );
  // animate next frame
  if ( this.isAnimating ) {
    var _this = this;
    requestAnimationFrame( function animateFrame() {
      _this.animate();
    });
  }
};


var transformProperty = ( function () {
  var style = document.documentElement.style;
  if ( typeof style.transform == 'string' ) {
    return 'transform';
  }
  return 'WebkitTransform';
})();

proto.positionSlider = function() {
  var x = this.x;
  // wrap position around
  if ( this.options.wrapAround && this.cells.length > 1 ) {
    x = utils.modulo( x, this.slideableWidth );
    x = x - this.slideableWidth;
    this.shiftWrapCells( x );
  }

  x = x + this.cursorPosition;
  // reverse if right-to-left and using transform
  x = this.options.rightToLeft && transformProperty ? -x : x;
  var value = this.getPositionValue( x );
  // use 3D tranforms for hardware acceleration on iOS
  // but use 2D when settled, for better font-rendering
  this.slider.style[ transformProperty ] = this.isAnimating ?
    'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';

  // scroll event
  var firstSlide = this.slides[0];
  if ( firstSlide ) {
    var positionX = -this.x - firstSlide.target;
    var progress = positionX / this.slidesWidth;
    this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
  }
};

proto.positionSliderAtSelected = function() {
  if ( !this.cells.length ) {
    return;
  }
  this.x = -this.selectedSlide.target;
  this.positionSlider();
};

proto.getPositionValue = function( position ) {
  if ( this.options.percentPosition ) {
    // percent position, round to 2 digits, like 12.34%
    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
  } else {
    // pixel positioning
    return Math.round( position ) + 'px';
  }
};

proto.settle = function( previousX ) {
  // keep track of frames where x hasn't moved
  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
    this.restingFrames++;
  }
  // stop animating if resting for 3 or more frames
  if ( this.restingFrames > 2 ) {
    this.isAnimating = false;
    delete this.isFreeScrolling;
    // render position with translateX when settled
    this.positionSlider();
    this.dispatchEvent('settle');
  }
};

proto.shiftWrapCells = function( x ) {
  // shift before cells
  var beforeGap = this.cursorPosition + x;
  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
  // shift after cells
  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
  this._shiftCells( this.afterShiftCells, afterGap, 1 );
};

proto._shiftCells = function( cells, gap, shift ) {
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    var cellShift = gap > 0 ? shift : 0;
    cell.wrapShift( cellShift );
    gap -= cell.size.outerWidth;
  }
};

proto._unshiftCells = function( cells ) {
  if ( !cells || !cells.length ) {
    return;
  }
  for ( var i=0; i < cells.length; i++ ) {
    cells[i].wrapShift( 0 );
  }
};

// -------------------------- physics -------------------------- //

proto.integratePhysics = function() {
  this.x += this.velocity;
  this.velocity *= this.getFrictionFactor();
};

proto.applyForce = function( force ) {
  this.velocity += force;
};

proto.getFrictionFactor = function() {
  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
};

proto.getRestingPosition = function() {
  // my thanks to Steven Wittens, who simplified this math greatly
  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
};

proto.applyDragForce = function() {
  if ( !this.isPointerDown ) {
    return;
  }
  // change the position to drag position by applying force
  var dragVelocity = this.dragX - this.x;
  var dragForce = dragVelocity - this.velocity;
  this.applyForce( dragForce );
};

proto.applySelectedAttraction = function() {
  // do not attract if pointer down or no cells
  if ( this.isPointerDown || this.isFreeScrolling || !this.cells.length ) {
    return;
  }
  var distance = this.selectedSlide.target * -1 - this.x;
  var force = distance * this.options.selectedAttraction;
  this.applyForce( force );
};

return proto;

}));


/***/ }),

/***/ "./node_modules/flickity/js/cell.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/cell.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( getSize ) {
      return factory( window, getSize );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('get-size')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Cell = factory(
      window,
      window.getSize
    );
  }

}( window, function factory( window, getSize ) {

'use strict';

function Cell( elem, parent ) {
  this.element = elem;
  this.parent = parent;

  this.create();
}

var proto = Cell.prototype;

proto.create = function() {
  this.element.style.position = 'absolute';
  this.element.setAttribute( 'aria-selected', 'false' );
  this.x = 0;
  this.shift = 0;
};

proto.destroy = function() {
  // reset style
  this.element.style.position = '';
  var side = this.parent.originSide;
  this.element.removeAttribute('aria-selected');
  this.element.style[ side ] = '';
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

proto.setPosition = function( x ) {
  this.x = x;
  this.updateTarget();
  this.renderPosition( x );
};

// setDefaultTarget v1 method, backwards compatibility, remove in v3
proto.updateTarget = proto.setDefaultTarget = function() {
  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
  this.target = this.x + this.size[ marginProperty ] +
    this.size.width * this.parent.cellAlign;
};

proto.renderPosition = function( x ) {
  // render position of cell with in slider
  var side = this.parent.originSide;
  this.element.style[ side ] = this.parent.getPositionValue( x );
};

/**
 * @param {Integer} factor - 0, 1, or -1
**/
proto.wrapShift = function( shift ) {
  this.shift = shift;
  this.renderPosition( this.x + this.parent.slideableWidth * shift );
};

proto.remove = function() {
  this.element.parentNode.removeChild( this.element );
};

return Cell;

}));


/***/ }),

/***/ "./node_modules/flickity/js/drag.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/drag.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! unidragger/unidragger */ "./node_modules/unidragger/unidragger.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, Unidragger, utils ) {
      return factory( window, Flickity, Unidragger, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unidragger'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.Unidragger,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unidragger, utils ) {

'use strict';

// ----- defaults ----- //

utils.extend( Flickity.defaults, {
  draggable: true,
  dragThreshold: 3,
});

// ----- create ----- //

Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

var proto = Flickity.prototype;
utils.extend( proto, Unidragger.prototype );
proto._touchActionValue = 'pan-y';

// --------------------------  -------------------------- //

var isTouch = 'createTouch' in document;
var isTouchmoveScrollCanceled = false;

proto._createDrag = function() {
  this.on( 'activate', this.bindDrag );
  this.on( 'uiChange', this._uiChangeDrag );
  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
  this.on( 'deactivate', this.unbindDrag );
  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
  // #457, RubaXa/Sortable#973
  if ( isTouch && !isTouchmoveScrollCanceled ) {
    window.addEventListener( 'touchmove', function() {});
    isTouchmoveScrollCanceled = true;
  }
};

proto.bindDrag = function() {
  if ( !this.options.draggable || this.isDragBound ) {
    return;
  }
  this.element.classList.add('is-draggable');
  this.handles = [ this.viewport ];
  this.bindHandles();
  this.isDragBound = true;
};

proto.unbindDrag = function() {
  if ( !this.isDragBound ) {
    return;
  }
  this.element.classList.remove('is-draggable');
  this.unbindHandles();
  delete this.isDragBound;
};

proto._uiChangeDrag = function() {
  delete this.isFreeScrolling;
};

proto._childUIPointerDownDrag = function( event ) {
  event.preventDefault();
  this.pointerDownFocus( event );
};

// -------------------------- pointer events -------------------------- //

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

proto.pointerDown = function( event, pointer ) {
  // dismiss inputs with text fields. #403, #404
  var isCursorInput = cursorNodes[ event.target.nodeName ] &&
    !clickTypes[ event.target.type ];
  if ( isCursorInput ) {
    // reset pointerDown logic
    this.isPointerDown = false;
    delete this.pointerIdentifier;
    return;
  }

  this._dragPointerDown( event, pointer );

  // kludge to blur focused inputs in dragger
  var focused = document.activeElement;
  if ( focused && focused.blur && focused != this.element &&
    // do not blur body for IE9 & 10, #117
    focused != document.body ) {
    focused.blur();
  }
  this.pointerDownFocus( event );
  // stop if it was moving
  this.dragX = this.x;
  this.viewport.classList.add('is-pointer-down');
  // bind move and end events
  this._bindPostStartEvents( event );
  // track scrolling
  this.pointerDownScroll = getScrollPosition();
  window.addEventListener( 'scroll', this );

  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
};

proto.pointerDownFocus = function( event ) {
  // focus element, if not touch, and its not an input or select
  var canPointerDown = getCanPointerDown( event );
  if ( !this.options.accessibility || canPointerDown ) {
    return;
  }
  var prevScrollY = window.pageYOffset;
  this.element.focus();
  // hack to fix scroll jump after focus, #76
  if ( window.pageYOffset != prevScrollY ) {
    window.scrollTo( window.pageXOffset, prevScrollY );
  }
};

var focusNodes = {
  INPUT: true,
  SELECT: true,
};

function getCanPointerDown( event ) {
  var isTouchStart = event.type == 'touchstart';
  var isTouchPointer = event.pointerType == 'touch';
  var isFocusNode = focusNodes[ event.target.nodeName ];
  return isTouchStart || isTouchPointer || isFocusNode;
}

proto.canPreventDefaultOnPointerDown = function( event ) {
  // prevent default, unless touchstart or input
  var canPointerDown = getCanPointerDown( event );
  return !canPointerDown;
};

// ----- move ----- //

proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > this.options.dragThreshold;
};

// ----- up ----- //

proto.pointerUp = function( event, pointer ) {
  delete this.isTouchScrolling;
  this.viewport.classList.remove('is-pointer-down');
  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
  this._dragPointerUp( event, pointer );
};

proto.pointerDone = function() {
  window.removeEventListener( 'scroll', this );
  delete this.pointerDownScroll;
};

// -------------------------- dragging -------------------------- //

proto.dragStart = function( event, pointer ) {
  this.dragStartPosition = this.x;
  this.startAnimation();
  window.removeEventListener( 'scroll', this );
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
};

proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();

  this.previousDragX = this.dragX;
  // reverse if right-to-left
  var direction = this.options.rightToLeft ? -1 : 1;
  var dragX = this.dragStartPosition + moveVector.x * direction;

  if ( !this.options.wrapAround && this.slides.length ) {
    // slow drag
    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
  }

  this.dragX = dragX;

  this.dragMoveTime = new Date();
  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

proto.dragEnd = function( event, pointer ) {
  if ( this.options.freeScroll ) {
    this.isFreeScrolling = true;
  }
  // set selectedIndex based on where flick will end up
  var index = this.dragEndRestingSelect();

  if ( this.options.freeScroll && !this.options.wrapAround ) {
    // if free-scroll & not wrap around
    // do not free-scroll if going outside of bounding slides
    // so bounding slides can attract slider, and keep it in bounds
    var restingX = this.getRestingPosition();
    this.isFreeScrolling = -restingX > this.slides[0].target &&
      -restingX < this.getLastSlide().target;
  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
    // boost selection if selected index has not changed
    index += this.dragEndBoostSelect();
  }
  delete this.previousDragX;
  // apply selection
  // TODO refactor this, selecting here feels weird
  // HACK, set flag so dragging stays in correct direction
  this.isDragSelect = this.options.wrapAround;
  this.select( index );
  delete this.isDragSelect;
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

proto.dragEndRestingSelect = function() {
  var restingX = this.getRestingPosition();
  // how far away from selected slide
  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
  // get closet resting going up and going down
  var positiveResting = this._getClosestResting( restingX, distance, 1 );
  var negativeResting = this._getClosestResting( restingX, distance, -1 );
  // use closer resting for wrap-around
  var index = positiveResting.distance < negativeResting.distance ?
    positiveResting.index : negativeResting.index;
  return index;
};

/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
proto._getClosestResting = function( restingX, distance, increment ) {
  var index = this.selectedIndex;
  var minDistance = Infinity;
  var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
  while ( condition( distance, minDistance ) ) {
    // measure distance to next cell
    index += increment;
    minDistance = distance;
    distance = this.getSlideDistance( -restingX, index );
    if ( distance === null ) {
      break;
    }
    distance = Math.abs( distance );
  }
  return {
    distance: minDistance,
    // selected was previous index
    index: index - increment
  };
};

/**
 * measure distance between x and a slide target
 * @param {Number} x
 * @param {Integer} index - slide index
 */
proto.getSlideDistance = function( x, index ) {
  var len = this.slides.length;
  // wrap around if at least 2 slides
  var isWrapAround = this.options.wrapAround && len > 1;
  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
  var slide = this.slides[ slideIndex ];
  if ( !slide ) {
    return null;
  }
  // add distance for wrap-around slides
  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
  return x - ( slide.target + wrap );
};

proto.dragEndBoostSelect = function() {
  // do not boost if no previousDragX or dragMoveTime
  if ( this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100 ) {
    return 0;
  }

  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
  var delta = this.previousDragX - this.dragX;
  if ( distance > 0 && delta > 0 ) {
    // boost to next if moving towards the right, and positive velocity
    return 1;
  } else if ( distance < 0 && delta < 0 ) {
    // boost to previous if moving towards the left, and negative velocity
    return -1;
  }
  return 0;
};

// ----- staticClick ----- //

proto.staticClick = function( event, pointer ) {
  // get clickedCell, if cell was clicked
  var clickedCell = this.getParentCell( event.target );
  var cellElem = clickedCell && clickedCell.element;
  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
};

// ----- scroll ----- //

proto.onscroll = function() {
  var scroll = getScrollPosition();
  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
  // cancel click/tap if scroll is too much
  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
    this._pointerDone();
  }
};

// ----- utils ----- //

function getScrollPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}

// -----  ----- //

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/flickity.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/flickity.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
      __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
      __webpack_require__(/*! ./cell */ "./node_modules/flickity/js/cell.js"),
      __webpack_require__(/*! ./slide */ "./node_modules/flickity/js/slide.js"),
      __webpack_require__(/*! ./animate */ "./node_modules/flickity/js/animate.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./cell'),
      require('./slide'),
      require('./animate')
    );
  } else {
    // browser global
    var _Flickity = window.Flickity;

    window.Flickity = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      _Flickity.Cell,
      _Flickity.Slide,
      _Flickity.animatePrototype
    );
  }

}( window, function factory( window, EvEmitter, getSize,
  utils, Cell, Slide, animatePrototype ) {

'use strict';

// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // do not initialize twice on same element
  if ( this.element.flickityGUID ) {
    var instance = instances[ this.element.flickityGUID ];
    instance.option( options );
    return instance;
  }

  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  // adaptiveHeight: false,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  namespaceJQueryEvents: true,
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

var proto = Flickity.prototype;
// inherit EventEmitter
utils.extend( proto, EvEmitter.prototype );

proto._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  this.viewport = document.createElement('div');
  this.viewport.className = 'flickity-viewport';
  this._createSlider();

  if ( this.options.resize || this.options.watchCSS ) {
    window.addEventListener( 'resize', this );
  }

  Flickity.createMethods.forEach( function( method ) {
    this[ method ]();
  }, this );

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

proto.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.element.classList.add('flickity-enabled');
  if ( this.options.rightToLeft ) {
    this.element.classList.add('flickity-rtl');
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );
  moveElements( cellElems, this.slider );
  this.viewport.appendChild( this.slider );
  this.element.appendChild( this.viewport );
  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    this.element.addEventListener( 'keydown', this );
  }

  this.emitEvent('activate');

  var index;
  var initialIndex = this.options.initialIndex;
  if ( this.isInitActivated ) {
    index = this.selectedIndex;
  } else if ( initialIndex !== undefined ) {
    index = this.cells[ initialIndex ] ? initialIndex : 0;
  } else {
    index = 0;
  }
  // select instantly
  this.select( index, false, true );
  // flag for initial activation, for using initialIndex
  this.isInitActivated = true;
};

// slider positions the cells
proto._createSlider = function() {
  // slider element does all the positioning
  var slider = document.createElement('div');
  slider.className = 'flickity-slider';
  slider.style[ this.originSide ] = 0;
  this.slider = slider;
};

proto._filterFindCellElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
proto.reloadCells = function() {
  // collection of item elements
  this.cells = this._makeCells( this.slider.children );
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
proto._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = cellElems.map( function( cellElem ) {
    return new Cell( cellElem, this );
  }, this );

  return cells;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.getLastSlide = function() {
  return this.slides[ this.slides.length - 1 ];
};

// positions all cells
proto.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
proto._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var len = this.cells.length;
  for ( var i=index; i < len; i++ ) {
    var cell = this.cells[i];
    cell.setPosition( cellX );
    cellX += cell.size.outerWidth;
    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // slides
  this.updateSlides();
  // contain slides target
  this._containSlides();
  // update slidesWidth
  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
proto._sizeCells = function( cells ) {
  cells.forEach( function( cell ) {
    cell.getSize();
  });
};

// --------------------------  -------------------------- //

proto.updateSlides = function() {
  this.slides = [];
  if ( !this.cells.length ) {
    return;
  }

  var slide = new Slide( this );
  this.slides.push( slide );
  var isOriginLeft = this.originSide == 'left';
  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

  var canCellFit = this._getCanCellFit();

  this.cells.forEach( function( cell, i ) {
    // just add cell if first cell in slide
    if ( !slide.cells.length ) {
      slide.addCell( cell );
      return;
    }

    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
      ( cell.size.outerWidth - cell.size[ nextMargin ] );

    if ( canCellFit.call( this, i, slideWidth ) ) {
      slide.addCell( cell );
    } else {
      // doesn't fit, new slide
      slide.updateTarget();

      slide = new Slide( this );
      this.slides.push( slide );
      slide.addCell( cell );
    }
  }, this );
  // last slide
  slide.updateTarget();
  // update .selectedSlide
  this.updateSelectedSlide();
};

proto._getCanCellFit = function() {
  var groupCells = this.options.groupCells;
  if ( !groupCells ) {
    return function() {
      return false;
    };
  } else if ( typeof groupCells == 'number' ) {
    // group by number. 3 -> [0,1,2], [3,4,5], ...
    var number = parseInt( groupCells, 10 );
    return function( i ) {
      return ( i % number ) !== 0;
    };
  }
  // default, group by width of slide
  // parse '75%
  var percentMatch = typeof groupCells == 'string' &&
    groupCells.match(/^(\d+)%$/);
  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
  return function( i, slideWidth ) {
    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
  };
};

// alias _init for jQuery plugin .flickity()
proto._init =
proto.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

proto.getSize = function() {
  this.size = getSize( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5
  },
  left: {
    left: 0,
    right: 1
  },
  right: {
    right: 0,
    left: 1
  }
};

proto.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

proto.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    var height = this.options.adaptiveHeight && this.selectedSlide ?
      this.selectedSlide.height : this.maxCellHeight;
    this.viewport.style.height = height + 'px';
  }
};

proto._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

proto._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell = this.cells[ cellIndex ];
    if ( !cell ) {
      break;
    }
    cells.push( cell );
    cellIndex += increment;
    gapX -= cell.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
proto._containSlides = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var isRightToLeft = this.options.rightToLeft;
  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // bounds
  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // contain each cell target
  this.slides.forEach( function( slide ) {
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      slide.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      slide.target = Math.max( slide.target, beginBound );
      slide.target = Math.min( slide.target, endBound );
    }
  }, this );
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    // default trigger with type if no event
    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
    var $event = type;
    if ( event ) {
      // create jQuery event
      var jQEvent = jQuery.Event( event );
      jQEvent.type = type;
      $event = jQEvent;
    }
    this.$element.trigger( $event, args );
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
proto.select = function( index, isWrap, isInstant ) {
  if ( !this.isActive ) {
    return;
  }
  index = parseInt( index, 10 );
  this._wrapSelect( index );

  if ( this.options.wrapAround || isWrap ) {
    index = utils.modulo( index, this.slides.length );
  }
  // bail if invalid index
  if ( !this.slides[ index ] ) {
    return;
  }
  this.selectedIndex = index;
  this.updateSelectedSlide();
  if ( isInstant ) {
    this.positionSliderAtSelected();
  } else {
    this.startAnimation();
  }
  if ( this.options.adaptiveHeight ) {
    this.setGallerySize();
  }

  this.dispatchEvent('select');
  // old v1 event name, remove in v3
  this.dispatchEvent('cellSelect');
};

// wraps position for wrapAround, to move to closest slide. #113
proto._wrapSelect = function( index ) {
  var len = this.slides.length;
  var isWrapping = this.options.wrapAround && len > 1;
  if ( !isWrapping ) {
    return index;
  }
  var wrapIndex = utils.modulo( index, len );
  // go to shortest
  var delta = Math.abs( wrapIndex - this.selectedIndex );
  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
  if ( !this.isDragSelect && backWrapDelta < delta ) {
    index += len;
  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
    index -= len;
  }
  // wrap position so slider is within normal area
  if ( index < 0 ) {
    this.x -= this.slideableWidth;
  } else if ( index >= len ) {
    this.x += this.slideableWidth;
  }
};

proto.previous = function( isWrap, isInstant ) {
  this.select( this.selectedIndex - 1, isWrap, isInstant );
};

proto.next = function( isWrap, isInstant ) {
  this.select( this.selectedIndex + 1, isWrap, isInstant );
};

proto.updateSelectedSlide = function() {
  var slide = this.slides[ this.selectedIndex ];
  // selectedIndex could be outside of slides, if triggered before resize()
  if ( !slide ) {
    return;
  }
  // unselect previous selected slide
  this.unselectSelectedSlide();
  // update new selected slide
  this.selectedSlide = slide;
  slide.select();
  this.selectedCells = slide.cells;
  this.selectedElements = slide.getCellElements();
  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
  // Remove in v3?
  this.selectedCell = slide.cells[0];
  this.selectedElement = this.selectedElements[0];
};

proto.unselectSelectedSlide = function() {
  if ( this.selectedSlide ) {
    this.selectedSlide.unselect();
  }
};

/**
 * select slide from number or cell element
 * @param {Element or Number} elem
 */
proto.selectCell = function( value, isWrap, isInstant ) {
  // get cell
  var cell;
  if ( typeof value == 'number' ) {
    cell = this.cells[ value ];
  } else {
    // use string as selector
    if ( typeof value == 'string' ) {
      value = this.element.querySelector( value );
    }
    // get cell from element
    cell = this.getCell( value );
  }
  // select slide that has cell
  for ( var i=0; cell && i < this.slides.length; i++ ) {
    var slide = this.slides[i];
    var index = slide.cells.indexOf( cell );
    if ( index != -1 ) {
      this.select( i, isWrap, isInstant );
      return;
    }
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
proto.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i=0; i < this.cells.length; i++ ) {
    var cell = this.cells[i];
    if ( cell.element == elem ) {
      return cell;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
proto.getCells = function( elems ) {
  elems = utils.makeArray( elems );
  var cells = [];
  elems.forEach( function( elem ) {
    var cell = this.getCell( elem );
    if ( cell ) {
      cells.push( cell );
    }
  }, this );
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
proto.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell = this.getCell( elem );
  if ( cell ) {
    return cell;
  }
  // try to get parent cell elem
  elem = utils.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
proto.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return this.selectedSlide.getCellElements();
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.slides.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
    var slide = this.slides[ slideIndex ];
    if ( slide ) {
      cellElems = cellElems.concat( slide.getCellElements() );
    }
  }
  return cellElems;
};

// -------------------------- events -------------------------- //

proto.uiChange = function() {
  this.emitEvent('uiChange');
};

proto.childUIPointerDown = function( event ) {
  this.emitEvent( 'childUIPointerDown', [ event ] );
};

// ----- resize ----- //

proto.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils.debounceMethod( Flickity, 'onresize', 150 );

proto.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent('resize');
  // update selected index for group slides, instant
  // TODO: position can be lost between groups of various numbers
  var selectedElement = this.selectedElements && this.selectedElements[0];
  this.selectCell( selectedElement, false, true );
};

// watches the :after property, activates/deactivates
proto.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
proto.onkeydown = function( event ) {
  // only work if element is in focus
  if ( !this.options.accessibility ||
    ( document.activeElement && document.activeElement != this.element ) ) {
    return;
  }

  if ( event.keyCode == 37 ) {
    // go left
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  } else if ( event.keyCode == 39 ) {
    // go right
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
proto.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  this.element.classList.remove('flickity-enabled');
  this.element.classList.remove('flickity-rtl');
  // destroy cells
  this.cells.forEach( function( cell ) {
    cell.destroy();
  });
  this.unselectSelectedSlide();
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    this.element.removeEventListener( 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emitEvent('deactivate');
};

proto.destroy = function() {
  this.deactivate();
  window.removeEventListener( 'resize', this );
  this.emitEvent('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
Flickity.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

// set internal jQuery, for Webpack + jQuery v3, #478
Flickity.setJQuery = function( jq ) {
  jQuery = jq;
};

Flickity.Cell = Cell;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/index.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity v2.0.11
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2017 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! ./drag */ "./node_modules/flickity/js/drag.js"),
      __webpack_require__(/*! ./prev-next-button */ "./node_modules/flickity/js/prev-next-button.js"),
      __webpack_require__(/*! ./page-dots */ "./node_modules/flickity/js/page-dots.js"),
      __webpack_require__(/*! ./player */ "./node_modules/flickity/js/player.js"),
      __webpack_require__(/*! ./add-remove-cell */ "./node_modules/flickity/js/add-remove-cell.js"),
      __webpack_require__(/*! ./lazyload */ "./node_modules/flickity/js/lazyload.js")
    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('./flickity'),
      require('./drag'),
      require('./prev-next-button'),
      require('./page-dots'),
      require('./player'),
      require('./add-remove-cell'),
      require('./lazyload')
    );
  }

})( window, function factory( Flickity ) {
  /*jshint strict: false*/
  return Flickity;
});


/***/ }),

/***/ "./node_modules/flickity/js/lazyload.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/lazyload.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {
'use strict';

Flickity.createMethods.push('_createLazyload');
var proto = Flickity.prototype;

proto._createLazyload = function() {
  this.on( 'select', this.lazyLoad );
};

proto.lazyLoad = function() {
  var lazyLoad = this.options.lazyLoad;
  if ( !lazyLoad ) {
    return;
  }
  // get adjacent cells, use lazyLoad option for adjacent count
  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
  var cellElems = this.getAdjacentCellElements( adjCount );
  // get lazy images in those cells
  var lazyImages = [];
  cellElems.forEach( function( cellElem ) {
    var lazyCellImages = getCellLazyImages( cellElem );
    lazyImages = lazyImages.concat( lazyCellImages );
  });
  // load lazy images
  lazyImages.forEach( function( img ) {
    new LazyLoader( img, this );
  }, this );
};

function getCellLazyImages( cellElem ) {
  // check if cell element is lazy image
  if ( cellElem.nodeName == 'IMG' &&
    cellElem.getAttribute('data-flickity-lazyload') ) {
    return [ cellElem ];
  }
  // select lazy images in cell
  var imgs = cellElem.querySelectorAll('img[data-flickity-lazyload]');
  return utils.makeArray( imgs );
}

// -------------------------- LazyLoader -------------------------- //

/**
 * class to handle loading images
 */
function LazyLoader( img, flickity ) {
  this.img = img;
  this.flickity = flickity;
  this.load();
}

LazyLoader.prototype.handleEvent = utils.handleEvent;

LazyLoader.prototype.load = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  // load image
  this.img.src = this.img.getAttribute('data-flickity-lazyload');
  // remove attr
  this.img.removeAttribute('data-flickity-lazyload');
};

LazyLoader.prototype.onload = function( event ) {
  this.complete( event, 'flickity-lazyloaded' );
};

LazyLoader.prototype.onerror = function( event ) {
  this.complete( event, 'flickity-lazyerror' );
};

LazyLoader.prototype.complete = function( event, className ) {
  // unbind events
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );

  var cell = this.flickity.getParentCell( this.img );
  var cellElem = cell && cell.element;
  this.flickity.cellSizeChange( cellElem );

  this.img.classList.add( className );
  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
};

// -----  ----- //

Flickity.LazyLoader = LazyLoader;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/page-dots.js":
/*!***********************************************!*\
  !*** ./node_modules/flickity/js/page-dots.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! tap-listener/tap-listener */ "./node_modules/tap-listener/tap-listener.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, TapListener, utils ) {
      return factory( window, Flickity, TapListener, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils ) {

// -------------------------- PageDots -------------------------- //

'use strict';

function PageDots( parent ) {
  this.parent = parent;
  this._create();
}

PageDots.prototype = new TapListener();

PageDots.prototype._create = function() {
  // create holder element
  this.holder = document.createElement('ol');
  this.holder.className = 'flickity-page-dots';
  // create dots, array of elements
  this.dots = [];
  // events
  this.on( 'tap', this.onTap );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PageDots.prototype.activate = function() {
  this.setDots();
  this.bindTap( this.holder );
  // add to DOM
  this.parent.element.appendChild( this.holder );
};

PageDots.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.holder );
  TapListener.prototype.destroy.call( this );
};

PageDots.prototype.setDots = function() {
  // get difference between number of slides and number of dots
  var delta = this.parent.slides.length - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

PageDots.prototype.addDots = function( count ) {
  var fragment = document.createDocumentFragment();
  var newDots = [];
  var length = this.dots.length;
  var max = length + count;

  for ( var i = length; i < max; i++ ) {
    var dot = document.createElement('li');
    dot.className = 'dot';
    dot.setAttribute( 'aria-label', 'Page dot ' + ( i + 1 ) );
    fragment.appendChild( dot );
    newDots.push( dot );
  }

  this.holder.appendChild( fragment );
  this.dots = this.dots.concat( newDots );
};

PageDots.prototype.removeDots = function( count ) {
  // remove from this.dots collection
  var removeDots = this.dots.splice( this.dots.length - count, count );
  // remove from DOM
  removeDots.forEach( function( dot ) {
    this.holder.removeChild( dot );
  }, this );
};

PageDots.prototype.updateSelected = function() {
  // remove selected class on previous
  if ( this.selectedDot ) {
    this.selectedDot.className = 'dot';
    this.selectedDot.removeAttribute('aria-current');
  }
  // don't proceed if no dots
  if ( !this.dots.length ) {
    return;
  }
  this.selectedDot = this.dots[ this.parent.selectedIndex ];
  this.selectedDot.className = 'dot is-selected';
  this.selectedDot.setAttribute( 'aria-current', 'step' );
};

PageDots.prototype.onTap = function( event ) {
  var target = event.target;
  // only care about dot clicks
  if ( target.nodeName != 'LI' ) {
    return;
  }

  this.parent.uiChange();
  var index = this.dots.indexOf( target );
  this.parent.select( index );
};

PageDots.prototype.destroy = function() {
  this.deactivate();
};

Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pageDots: true
});

Flickity.createMethods.push('_createPageDots');

var proto = Flickity.prototype;

proto._createPageDots = function() {
  if ( !this.options.pageDots ) {
    return;
  }
  this.pageDots = new PageDots( this );
  // events
  this.on( 'activate', this.activatePageDots );
  this.on( 'select', this.updateSelectedPageDots );
  this.on( 'cellChange', this.updatePageDots );
  this.on( 'resize', this.updatePageDots );
  this.on( 'deactivate', this.deactivatePageDots );
};

proto.activatePageDots = function() {
  this.pageDots.activate();
};

proto.updateSelectedPageDots = function() {
  this.pageDots.updateSelected();
};

proto.updatePageDots = function() {
  this.pageDots.setDots();
};

proto.deactivatePageDots = function() {
  this.pageDots.deactivate();
};

// -----  ----- //

Flickity.PageDots = PageDots;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/player.js":
/*!********************************************!*\
  !*** ./node_modules/flickity/js/player.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, utils, Flickity ) {
      return factory( EvEmitter, utils, Flickity );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('ev-emitter'),
      require('fizzy-ui-utils'),
      require('./flickity')
    );
  } else {
    // browser global
    factory(
      window.EvEmitter,
      window.fizzyUIUtils,
      window.Flickity
    );
  }

}( window, function factory( EvEmitter, utils, Flickity ) {

'use strict';

// -------------------------- Page Visibility -------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API

var hiddenProperty, visibilityEvent;
if ( 'hidden' in document ) {
  hiddenProperty = 'hidden';
  visibilityEvent = 'visibilitychange';
} else if ( 'webkitHidden' in document ) {
  hiddenProperty = 'webkitHidden';
  visibilityEvent = 'webkitvisibilitychange';
}

// -------------------------- Player -------------------------- //

function Player( parent ) {
  this.parent = parent;
  this.state = 'stopped';
  // visibility change event handler
  if ( visibilityEvent ) {
    this.onVisibilityChange = function() {
      this.visibilityChange();
    }.bind( this );
    this.onVisibilityPlay = function() {
      this.visibilityPlay();
    }.bind( this );
  }
}

Player.prototype = Object.create( EvEmitter.prototype );

// start play
Player.prototype.play = function() {
  if ( this.state == 'playing' ) {
    return;
  }
  // do not play if page is hidden, start playing when page is visible
  var isPageHidden = document[ hiddenProperty ];
  if ( visibilityEvent && isPageHidden ) {
    document.addEventListener( visibilityEvent, this.onVisibilityPlay );
    return;
  }

  this.state = 'playing';
  // listen to visibility change
  if ( visibilityEvent ) {
    document.addEventListener( visibilityEvent, this.onVisibilityChange );
  }
  // start ticking
  this.tick();
};

Player.prototype.tick = function() {
  // do not tick if not playing
  if ( this.state != 'playing' ) {
    return;
  }

  var time = this.parent.options.autoPlay;
  // default to 3 seconds
  time = typeof time == 'number' ? time : 3000;
  var _this = this;
  // HACK: reset ticks if stopped and started within interval
  this.clear();
  this.timeout = setTimeout( function() {
    _this.parent.next( true );
    _this.tick();
  }, time );
};

Player.prototype.stop = function() {
  this.state = 'stopped';
  this.clear();
  // remove visibility change event
  if ( visibilityEvent ) {
    document.removeEventListener( visibilityEvent, this.onVisibilityChange );
  }
};

Player.prototype.clear = function() {
  clearTimeout( this.timeout );
};

Player.prototype.pause = function() {
  if ( this.state == 'playing' ) {
    this.state = 'paused';
    this.clear();
  }
};

Player.prototype.unpause = function() {
  // re-start play if paused
  if ( this.state == 'paused' ) {
    this.play();
  }
};

// pause if page visibility is hidden, unpause if visible
Player.prototype.visibilityChange = function() {
  var isPageHidden = document[ hiddenProperty ];
  this[ isPageHidden ? 'pause' : 'unpause' ]();
};

Player.prototype.visibilityPlay = function() {
  this.play();
  document.removeEventListener( visibilityEvent, this.onVisibilityPlay );
};

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pauseAutoPlayOnHover: true
});

Flickity.createMethods.push('_createPlayer');
var proto = Flickity.prototype;

proto._createPlayer = function() {
  this.player = new Player( this );

  this.on( 'activate', this.activatePlayer );
  this.on( 'uiChange', this.stopPlayer );
  this.on( 'pointerDown', this.stopPlayer );
  this.on( 'deactivate', this.deactivatePlayer );
};

proto.activatePlayer = function() {
  if ( !this.options.autoPlay ) {
    return;
  }
  this.player.play();
  this.element.addEventListener( 'mouseenter', this );
};

// Player API, don't hate the ... thanks I know where the door is

proto.playPlayer = function() {
  this.player.play();
};

proto.stopPlayer = function() {
  this.player.stop();
};

proto.pausePlayer = function() {
  this.player.pause();
};

proto.unpausePlayer = function() {
  this.player.unpause();
};

proto.deactivatePlayer = function() {
  this.player.stop();
  this.element.removeEventListener( 'mouseenter', this );
};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
proto.onmouseenter = function() {
  if ( !this.options.pauseAutoPlayOnHover ) {
    return;
  }
  this.player.pause();
  this.element.addEventListener( 'mouseleave', this );
};

// resume auto-play on hover off
proto.onmouseleave = function() {
  this.player.unpause();
  this.element.removeEventListener( 'mouseleave', this );
};

// -----  ----- //

Flickity.Player = Player;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/prev-next-button.js":
/*!******************************************************!*\
  !*** ./node_modules/flickity/js/prev-next-button.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! tap-listener/tap-listener */ "./node_modules/tap-listener/tap-listener.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, TapListener, utils ) {
      return factory( window, Flickity, TapListener, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils ) {
'use strict';

var svgURI = 'http://www.w3.org/2000/svg';

// -------------------------- PrevNextButton -------------------------- //

function PrevNextButton( direction, parent ) {
  this.direction = direction;
  this.parent = parent;
  this._create();
}

PrevNextButton.prototype = new TapListener();

PrevNextButton.prototype._create = function() {
  // properties
  this.isEnabled = true;
  this.isPrevious = this.direction == -1;
  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
  this.isLeft = this.direction == leftDirection;

  var element = this.element = document.createElement('button');
  element.className = 'flickity-prev-next-button';
  element.className += this.isPrevious ? ' previous' : ' next';
  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
  element.setAttribute( 'type', 'button' );
  // init as disabled
  this.disable();

  element.setAttribute( 'aria-label', this.isPrevious ? 'previous' : 'next' );

  // create arrow
  var svg = this.createSVG();
  element.appendChild( svg );
  // events
  this.on( 'tap', this.onTap );
  this.parent.on( 'select', this.update.bind( this ) );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PrevNextButton.prototype.activate = function() {
  this.bindTap( this.element );
  // click events from keyboard
  this.element.addEventListener( 'click', this );
  // add to DOM
  this.parent.element.appendChild( this.element );
};

PrevNextButton.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.element );
  // do regular TapListener destroy
  TapListener.prototype.destroy.call( this );
  // click events from keyboard
  this.element.removeEventListener( 'click', this );
};

PrevNextButton.prototype.createSVG = function() {
  var svg = document.createElementNS( svgURI, 'svg');
  svg.setAttribute( 'viewBox', '0 0 100 100' );
  var path = document.createElementNS( svgURI, 'path');
  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
  path.setAttribute( 'd', pathMovements );
  path.setAttribute( 'class', 'arrow' );
  // rotate arrow
  if ( !this.isLeft ) {
    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
  }
  svg.appendChild( path );
  return svg;
};

// get SVG path movmement
function getArrowMovements( shape ) {
  // use shape as movement if string
  if ( typeof shape == 'string' ) {
    return shape;
  }
  // create movement string
  return 'M ' + shape.x0 + ',50' +
    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
    ' L ' + shape.x3 + ',50 ' +
    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
    ' Z';
}

PrevNextButton.prototype.onTap = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.parent.uiChange();
  var method = this.isPrevious ? 'previous' : 'next';
  this.parent[ method ]();
};

PrevNextButton.prototype.handleEvent = utils.handleEvent;

PrevNextButton.prototype.onclick = function() {
  // only allow clicks from keyboard
  var focused = document.activeElement;
  if ( focused && focused == this.element ) {
    this.onTap();
  }
};

// -----  ----- //

PrevNextButton.prototype.enable = function() {
  if ( this.isEnabled ) {
    return;
  }
  this.element.disabled = false;
  this.isEnabled = true;
};

PrevNextButton.prototype.disable = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.element.disabled = true;
  this.isEnabled = false;
};

PrevNextButton.prototype.update = function() {
  // index of first or last slide, if previous or next
  var slides = this.parent.slides;
  // enable is wrapAround and at least 2 slides
  if ( this.parent.options.wrapAround && slides.length > 1 ) {
    this.enable();
    return;
  }
  var lastIndex = slides.length ? slides.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;
  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
  this[ method ]();
};

PrevNextButton.prototype.destroy = function() {
  this.deactivate();
};

// -------------------------- Flickity prototype -------------------------- //

utils.extend( Flickity.defaults, {
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30
  }
});

Flickity.createMethods.push('_createPrevNextButtons');
var proto = Flickity.prototype;

proto._createPrevNextButtons = function() {
  if ( !this.options.prevNextButtons ) {
    return;
  }

  this.prevButton = new PrevNextButton( -1, this );
  this.nextButton = new PrevNextButton( 1, this );

  this.on( 'activate', this.activatePrevNextButtons );
};

proto.activatePrevNextButtons = function() {
  this.prevButton.activate();
  this.nextButton.activate();
  this.on( 'deactivate', this.deactivatePrevNextButtons );
};

proto.deactivatePrevNextButtons = function() {
  this.prevButton.deactivate();
  this.nextButton.deactivate();
  this.off( 'deactivate', this.deactivatePrevNextButtons );
};

// --------------------------  -------------------------- //

Flickity.PrevNextButton = PrevNextButton;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/slide.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/slide.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Slide = factory();
  }

}( window, function factory() {
'use strict';

function Slide( parent ) {
  this.parent = parent;
  this.isOriginLeft = parent.originSide == 'left';
  this.cells = [];
  this.outerWidth = 0;
  this.height = 0;
}

var proto = Slide.prototype;

proto.addCell = function( cell ) {
  this.cells.push( cell );
  this.outerWidth += cell.size.outerWidth;
  this.height = Math.max( cell.size.outerHeight, this.height );
  // first cell stuff
  if ( this.cells.length == 1 ) {
    this.x = cell.x; // x comes from first cell
    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
    this.firstMargin = cell.size[ beginMargin ];
  }
};

proto.updateTarget = function() {
  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
  var lastCell = this.getLastCell();
  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.select = function() {
  this.changeSelected( true );
};

proto.unselect = function() {
  this.changeSelected( false );
};

proto.changeSelected = function( isSelected ) {
  var classMethod = isSelected ? 'add' : 'remove';
  this.cells.forEach( function( cell ) {
    cell.element.classList[ classMethod ]('is-selected');
    cell.element.setAttribute( 'aria-selected', isSelected.toString() );
  });
};

proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

return Slide;

}));


/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

( function( window, factory ) {
  'use strict';

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return factory();
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See http://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );

  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
  body.removeChild( div );

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/tap-listener/tap-listener.js":
/*!***************************************************!*\
  !*** ./node_modules/tap-listener/tap-listener.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Tap listener v2.0.0
 * listens to taps
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false*/ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Unipointer ) {
      return factory( window, Unipointer );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.TapListener = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {

'use strict';

// --------------------------  TapListener -------------------------- //

function TapListener( elem ) {
  this.bindTap( elem );
}

// inherit Unipointer & EventEmitter
var proto = TapListener.prototype = Object.create( Unipointer.prototype );

/**
 * bind tap event to element
 * @param {Element} elem
 */
proto.bindTap = function( elem ) {
  if ( !elem ) {
    return;
  }
  this.unbindTap();
  this.tapElement = elem;
  this._bindStartEvent( elem, true );
};

proto.unbindTap = function() {
  if ( !this.tapElement ) {
    return;
  }
  this._bindStartEvent( this.tapElement, true );
  delete this.tapElement;
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  var pointerPoint = Unipointer.getPointerPoint( pointer );
  var boundingRect = this.tapElement.getBoundingClientRect();
  var scrollX = window.pageXOffset;
  var scrollY = window.pageYOffset;
  // calculate if pointer is inside tapElement
  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
    pointerPoint.x <= boundingRect.right + scrollX &&
    pointerPoint.y >= boundingRect.top + scrollY &&
    pointerPoint.y <= boundingRect.bottom + scrollY;
  // trigger callback if pointer is inside element
  if ( isInside ) {
    this.emitEvent( 'tap', [ event, pointer ] );
  }

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    var _this = this;
    setTimeout( function() {
      delete _this.isIgnoringMouseUp;
    }, 400 );
  }
};

proto.destroy = function() {
  this.pointerDone();
  this.unbindTap();
};

// -----  ----- //

return TapListener;

}));


/***/ }),

/***/ "./node_modules/unidragger/unidragger.js":
/*!***********************************************!*\
  !*** ./node_modules/unidragger/unidragger.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unidragger v2.2.3
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Unipointer ) {
      return factory( window, Unipointer );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.Unidragger = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {

'use strict';

// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * works as unbinder, as you can .bindHandles( false ) to unbind
 * @param {Boolean} isBind - will unbind if falsey
 */
proto._bindHandles = function( isBind ) {
  // munge isBind, default to true
  isBind = isBind === undefined ? true : !!isBind;
  // bind each handle
  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
  for ( var i=0; i < this.handles.length; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isBind );
    handle[ bindMethod ]( 'click', this );
    // touch-action: none to override browser touch gestures
    // metafizzy/flickity#540
    if ( window.PointerEvent ) {
      handle.style.touchAction = isBind ? this._touchActionValue : '';
    }
  }
};

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = function( event, pointer ) {
  // dismiss range sliders
  if ( event.target.nodeName == 'INPUT' && event.target.type == 'range' ) {
    // reset pointerDown logic
    this.isPointerDown = false;
    delete this.pointerIdentifier;
    return;
  }

  this._dragPointerDown( event, pointer );
  // kludge to blur focused inputs in dragger
  var focused = document.activeElement;
  if ( focused && focused.blur ) {
    focused.blur();
  }
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// base pointer down logic
proto._dragPointerDown = function( event, pointer ) {
  // track to see when dragging starts
  this.pointerDownPoint = Unipointer.getPointerPoint( pointer );

  var canPreventDefault = this.canPreventDefaultOnPointerDown( event, pointer );
  if ( canPreventDefault ) {
    event.preventDefault();
  }
};

// overwriteable method so Flickity can prevent for scrolling
proto.canPreventDefaultOnPointerDown = function( event ) {
  // prevent default, unless touchstart or <select>
  return event.target.nodeName != 'SELECT';
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
proto._dragPointerMove = function( event, pointer ) {
  var movePoint = Unipointer.getPointerPoint( pointer );
  var moveVector = {
    x: movePoint.x - this.pointerDownPoint.x,
    y: movePoint.y - this.pointerDownPoint.y
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};


// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

proto._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = function( event, pointer ) {
  this.isDragging = true;
  this.dragStartPoint = Unipointer.getPointerPoint( pointer );
  // prevent clicks
  this.isPreventingClicks = true;

  this.dragStart( event, pointer );
};

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
proto._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  setTimeout( function() {
    delete this.isPreventingClicks;
  }.bind( this ) );

  this.dragEnd( event, pointer );
};

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    event.preventDefault();
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  // allow click in <input>s and <textarea>s
  var nodeName = event.target.nodeName;
  if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
    event.target.focus();
  }
  this.staticClick( event, pointer );

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    setTimeout( function() {
      delete this.isIgnoringMouseUp;
    }.bind( this ), 400 );
  }
};

proto.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));


/***/ }),

/***/ "./node_modules/unipointer/unipointer.js":
/*!***********************************************!*\
  !*** ./node_modules/unipointer/unipointer.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unipointer v2.2.1
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.Unipointer = factory(
      window,
      window.EvEmitter
    );
  }

}( window, function factory( window, EvEmitter ) {

'use strict';

function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * works as unbinder, as you can ._bindStart( false ) to unbind
 * @param {Boolean} isBind - will unbind if falsey
 */
proto._bindStartEvent = function( elem, isBind ) {
  // munge isBind, default to true
  isBind = isBind === undefined ? true : !!isBind;
  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';

  if ( window.PointerEvent ) {
    // Pointer Events. Chrome 55, IE11, Edge 14
    elem[ bindMethod ]( 'pointerdown', this );
  } else {
    // listen for both, for devices like Chrome Pixel
    elem[ bindMethod ]( 'mousedown', this );
    elem[ bindMethod ]( 'touchstart', this );
  }
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
  // remove events
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGMzNDJmMzM2OWM2NjY5NmZiYTciLCJ3ZWJwYWNrOi8vLy4vYXBwL1Jlc291cmNlcy9hc3NldHMvY3NzL2FwcC5zY3NzPzY2ODUiLCJ3ZWJwYWNrOi8vLy4vYXBwL1Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9SZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9SZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZml6enktdWktdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2FkZC1yZW1vdmUtY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvZHJhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvZmxpY2tpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvcGFnZS1kb3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3ByZXYtbmV4dC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3NsaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXQtc2l6ZS9nZXQtc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RhcC1saXN0ZW5lci90YXAtbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaWRyYWdnZXIvdW5pZHJhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pcG9pbnRlci91bmlwb2ludGVyLmpzIl0sIm5hbWVzIjpbImFwcCIsImNvbmZpZyIsImdsb2JhbCIsIm1vYmlsZUJyZWFrcG9pbnQiLCJ0YWJsZXRCcmVha3BvaW50IiwiZGVza3RvcEJyZWFrcG9pbnQiLCJlbnZpcm9ubWVudCIsImlzTW9iaWxlIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJpc0Rlc2t0b3AiLCJpc1RvdWNoRW5hYmxlZCIsIm5hdmlnYXRvciIsIk1heFRvdWNoUG9pbnRzIiwibXNNYXhUb3VjaFBvaW50cyIsInJlcXVpcmUiLCJGbGlja2l0eSIsImF1dG9QbGF5IiwiY2VsbFNlbGVjdG9yIiwiZ3JvdXBDZWxscyIsIlNVQk5BVl9WSVNJQkxFX0NMQVNTIiwiU1VCTkFWX1RBUkdFVF9BVFRSIiwiTkFWX0lURU1fQ0xBU1MiLCJCVVJHRVJfQ0xBU1MiLCJOYXZpZ2F0aW9uQnVyZ2VyIiwibmF2VG9nZ2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiZXZlbnQiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJTdWJOYXZpZ2F0aW9uIiwibmF2SXRlbXMiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaWQiLCJzdWJOYXYiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsImZvckVhY2giLCJlbGVtZW50Iiwic3ViTmF2SWQiLCJoaWRlU3ViTmF2IiwibWFwIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNWaXNpYmxlIiwiaXNTdWJOYXZWaXNpYmxlIiwiaGlkZVN1Yk5hdnMiLCJzaG93U3ViTmF2IiwiYXhpb3MiLCJBRERfVE9fQkFTS0VUX0ZPUk1fQ0xBU1MiLCJQcm9kdWN0cyIsIml0ZW1Ub3RhbCIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpbml0QWRkVG9CYXNrZXRzIiwiaW5uZXJIVE1MIiwiYWRkVG9CYXNrZXRGb3JtcyIsImZvcm0iLCJyZXNldE5vdGlmaWNhdGlvbiIsImFjdGlvbiIsInBvc3QiLCJxdWFudGl0eSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInByaWNlSWQiLCJ0aGVuIiwiYW1vdW50IiwicmVzcG9uc2UiLCJkYXRhIiwiYmFza2V0VG90YWwiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm5vdGlmeVN1Y2Nlc3MiLCJ0ZXh0Q29udGVudCIsImNhdGNoIiwibm90aWZ5RXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsTUFBTTtBQUNWQyxVQUFRO0FBQ05DLFlBQVE7QUFDTkMsd0JBQWtCLG9CQURaO0FBRU5DLHdCQUFrQiwyQ0FGWjtBQUdOQyx5QkFBbUI7QUFIYjtBQURGO0FBREUsQ0FBWjs7QUFVQTtBQUNBTCxJQUFJTSxXQUFKLEdBQWtCO0FBQ2hCQyxZQUFVLG9CQUFXO0FBQ25CLFdBQU9DLE9BQU9DLFVBQVAsQ0FBa0JULElBQUlDLE1BQUosQ0FBV0MsTUFBWCxDQUFrQkMsZ0JBQXBDLEVBQXNETyxPQUE3RDtBQUNELEdBSGU7QUFJaEJDLGFBQVcscUJBQVc7QUFDcEIsV0FBT0gsT0FBT0MsVUFBUCxDQUFrQlQsSUFBSUMsTUFBSixDQUFXQyxNQUFYLENBQWtCRyxpQkFBcEMsRUFBdURLLE9BQTlEO0FBQ0QsR0FOZTtBQU9oQkUsa0JBQWdCLDBCQUFXO0FBQ3pCLFdBQVMsa0JBQWtCSixNQUFuQixJQUErQkssVUFBVUMsY0FBVixHQUEyQixDQUExRCxJQUFpRUQsVUFBVUUsZ0JBQVYsR0FBNkIsQ0FBdEc7QUFDRDtBQVRlLENBQWxCOztBQVlBLG1CQUFBQyxDQUFRLDREQUFSO0FBQ0EsbUJBQUFBLENBQVEsOEVBQVI7QUFDQSxtQkFBQUEsQ0FBUSxnRkFBUjs7QUFFQTtBQUNBLElBQU1DLFdBQVcsbUJBQUFELENBQVEscURBQVIsQ0FBakI7O0FBRUEsSUFBSUMsUUFBSixDQUFjLFNBQWQsRUFBeUI7QUFDdkJDLFlBQVUsSUFEYTtBQUV2QkMsZ0JBQWM7QUFGUyxDQUF6Qjs7QUFLQSxJQUFJRixRQUFKLENBQWMsaUNBQWQsRUFBaUQ7QUFDaERDLFlBQVUsSUFEc0M7QUFFaERDLGdCQUFjLFNBRmtDO0FBR2hEQyxjQUFZO0FBSG9DLENBQWpELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0EsSUFBTUMsdUJBQXVCLDZCQUE3QjtBQUNBLElBQU1DLHFCQUFxQixrQkFBM0I7QUFDQSxJQUFNQyxpQkFBaUIsa0JBQXZCO0FBQ0EsSUFBTUMsZUFBZSxtQkFBckI7O0lBRU1DLGdCO0FBQ0osOEJBQWM7QUFBQTs7QUFDWixTQUFLQyxTQUFMLEdBQWlCQyxTQUFTQyxjQUFULENBQXdCSixZQUF4QixDQUFqQjtBQUNBLFNBQUtLLElBQUw7QUFDRDs7OzsyQkFFTTtBQUNMLFdBQUtILFNBQUwsQ0FBZUksZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsaUJBQVM7QUFDOUMsWUFBTUMsU0FBU0osU0FBU0MsY0FBVCxDQUF3QkksTUFBTUQsTUFBTixDQUFhRSxZQUFiLENBQTBCLGFBQTFCLENBQXhCLENBQWY7QUFDQUYsZUFBT0csU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IscUJBQXhCO0FBQ0gsT0FIRDtBQUlEOzs7Ozs7SUFHR0MsYTtBQUNKLDJCQUFjO0FBQUE7O0FBQ1osU0FBS0MsUUFBTCxHQUFnQkMsTUFBTUMsSUFBTixDQUNkWixTQUFTYSxzQkFBVCxDQUFtQ2pCLGNBQW5DLGtCQURjLENBQWhCO0FBR0EsU0FBS00sSUFBTDtBQUNEOzs7OytCQUVVWSxFLEVBQUk7QUFDYixVQUFNQyxTQUFTZixTQUFTQyxjQUFULENBQXdCYSxFQUF4QixDQUFmO0FBQ0FDLGFBQU9SLFNBQVAsQ0FBaUJTLEdBQWpCLENBQXFCdEIsb0JBQXJCO0FBQ0Q7OztvQ0FFZW9CLEUsRUFBSTtBQUNsQixVQUFNQyxTQUFTZixTQUFTQyxjQUFULENBQXdCYSxFQUF4QixDQUFmO0FBQ0EsYUFBT0MsT0FBT1IsU0FBUCxDQUFpQlUsUUFBakIsQ0FBMEJ2QixvQkFBMUIsQ0FBUDtBQUNEOzs7K0JBRVVvQixFLEVBQUk7QUFDYixVQUFNQyxTQUFTZixTQUFTQyxjQUFULENBQXdCYSxFQUF4QixDQUFmO0FBQ0FDLGFBQU9SLFNBQVAsQ0FBaUJXLE1BQWpCLENBQXdCeEIsb0JBQXhCO0FBQ0Q7OztrQ0FFYTtBQUFBOztBQUNaLFdBQUtnQixRQUFMLENBQWNTLE9BQWQsQ0FBc0IsbUJBQVc7QUFDL0JDLGdCQUFRYixTQUFSLENBQWtCVyxNQUFsQixDQUE0QnRCLGNBQTVCO0FBQ0EsWUFBTXlCLFdBQVdELFFBQVFkLFlBQVIsQ0FBcUJYLGtCQUFyQixDQUFqQjtBQUNBLGNBQUsyQixVQUFMLENBQWdCRCxRQUFoQjtBQUNELE9BSkQ7QUFLRDs7OzJCQUVNO0FBQUE7O0FBQ0wsV0FBS1gsUUFBTCxDQUFjUyxPQUFkLENBQXNCLG1CQUFXO0FBQy9CLFNBQUMsT0FBRCxFQUFVSSxHQUFWLENBQWMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25CSixrQkFBUWpCLGdCQUFSLENBQXlCcUIsQ0FBekIsRUFBNEIsaUJBQVM7QUFDbkNuQixrQkFBTW9CLGNBQU47QUFDQSxnQkFBTUosV0FBV2hCLE1BQU1ELE1BQU4sQ0FBYUUsWUFBYixDQUEwQlgsa0JBQTFCLENBQWpCO0FBQ0EsZ0JBQU0rQixZQUFZLE9BQUtDLGVBQUwsQ0FBcUJOLFFBQXJCLENBQWxCO0FBQ0EsbUJBQUtPLFdBQUw7QUFDQSxnQkFBSSxDQUFDRixTQUFMLEVBQWdCO0FBQ2RyQixvQkFBTUQsTUFBTixDQUFhRyxTQUFiLENBQXVCUyxHQUF2QixDQUE4QnBCLGNBQTlCO0FBQ0EscUJBQUtpQyxVQUFMLENBQWdCUixRQUFoQjtBQUNEO0FBQ0YsV0FURDtBQVVELFNBWEQ7QUFZRCxPQWJEO0FBY0Q7Ozs7OztBQUdILElBQUl2QixnQkFBSjs7QUFFQSxJQUFJVyxhQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUEsSUFBTXFCLFFBQVEsbUJBQUF6QyxDQUFRLDRDQUFSLENBQWQ7O0FBRUEsSUFBTTBDLDJCQUEyQixvQkFBakM7O0lBRU1DLFE7QUFDSixzQkFBYztBQUFBOztBQUNaLFNBQUtDLFNBQUwsR0FBaUJqQyxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsU0FBS2lDLFlBQUwsR0FBb0JsQyxTQUFTbUMsYUFBVCxDQUF1QixLQUF2QixDQUFwQjtBQUNBbkMsYUFBU29DLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLSCxZQUEvQjtBQUNBLFNBQUtJLGdCQUFMO0FBQ0Q7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtKLFlBQUwsQ0FBa0IzQixTQUFsQixHQUE4QixFQUE5QjtBQUNBLFdBQUsyQixZQUFMLENBQWtCSyxTQUFsQixHQUE4QixFQUE5QjtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLTCxZQUFMLENBQWtCM0IsU0FBbEIsR0FBOEIsd0RBQTlCO0FBQ0EsV0FBSzJCLFlBQUwsQ0FBa0JLLFNBQWxCLEdBQThCLDRCQUE5QjtBQUNEOzs7a0NBRWE7QUFDWixXQUFLTCxZQUFMLENBQWtCM0IsU0FBbEIsR0FBOEIsc0RBQTlCO0FBQ0EsV0FBSzJCLFlBQUwsQ0FBa0JLLFNBQWxCLEdBQThCLHNCQUE5QjtBQUNEOzs7dUNBRWtCO0FBQUE7O0FBQ2pCLFVBQU1DLG1CQUFtQjdCLE1BQU1DLElBQU4sQ0FDdkJaLFNBQVNhLHNCQUFULENBQWdDa0Isd0JBQWhDLENBRHVCLENBQXpCOztBQUlBUyx1QkFBaUJyQixPQUFqQixDQUF5QixnQkFBUTtBQUMvQnNCLGFBQUt0QyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxpQkFBUztBQUN2Q0UsZ0JBQU1vQixjQUFOO0FBQ0EsZ0JBQUtpQixpQkFBTDs7QUFFQSxjQUFNRCxPQUFPcEMsTUFBTUQsTUFBbkI7QUFDQSxjQUFNdUMsU0FBU0YsS0FBS25DLFlBQUwsQ0FBa0IsUUFBbEIsQ0FBZjtBQUNBd0IsZ0JBQU1jLElBQU4sQ0FBV0QsTUFBWCxFQUFtQjtBQUNqQkUsc0JBQVVKLEtBQUtLLGFBQUwsQ0FBbUIsd0JBQW5CLEVBQTZDQyxLQUR0QztBQUVqQkMscUJBQVNQLEtBQUtLLGFBQUwsQ0FBbUIsdUJBQW5CLEVBQTRDQztBQUZwQyxXQUFuQixFQUlHRSxJQUpILENBSVEsb0JBQVk7QUFDaEIsZ0JBQU1DLFNBQVNDLFNBQVNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkMsY0FBMUIsQ0FDYixPQURhLEVBRWIsRUFBRUMsdUJBQXVCLENBQXpCLEVBRmEsQ0FBZjtBQUlBLGtCQUFLQyxhQUFMO0FBQ0Esa0JBQUt2QixTQUFMLENBQWV3QixXQUFmLEdBQWdDUCxNQUFoQztBQUNELFdBWEgsRUFZR1EsS0FaSCxDQVlTLGlCQUFTO0FBQ2Qsa0JBQUtDLFdBQUw7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNELFdBZkg7QUFnQkQsU0F0QkQ7QUF1QkQsT0F4QkQ7QUF5QkQ7Ozs7OztBQUdILElBQUk5QixRQUFKLEc7Ozs7Ozs7Ozs7OztBQzVEQSw2Rjs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDbkxBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeERBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsaURBQWlELGdCQUFnQjtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FDOUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDbkRBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ3JGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGVBQWU7QUFDMUIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7K0NDbkJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFlBQVk7QUFDbkI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDbkNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEMsT0FBTzs7QUFFUDtBQUNBLDBEQUEwRCx3QkFBd0I7QUFDbEY7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCLGFBQWEsRUFBRTtBQUM1QztBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ3BEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ25FQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLEdBQUcsU0FBUztBQUM1QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9HRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEMsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMU5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTyxJQUFJLFlBQVksT0FBTyxVQUFVLFFBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQixFQUFFLHNCQUFzQixlQUFlO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pZRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxpQ0FBaUM7QUFDNUMsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0NBQWdDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx3QkFBd0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3QxQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcE5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsZUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM5UUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsZUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsZUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9SZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4YzM0MmYzMzY5YzY2Njk2ZmJhNyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvUmVzb3VyY2VzL2Fzc2V0cy9jc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vYXBwL1Jlc291cmNlcy9hc3NldHMvY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGFwcCA9IHtcbiAgY29uZmlnOiB7XG4gICAgZ2xvYmFsOiB7XG4gICAgICBtb2JpbGVCcmVha3BvaW50OiAnKG1heC13aWR0aDogNTUwcHgpJyxcbiAgICAgIHRhYmxldEJyZWFrcG9pbnQ6ICcobWluLXdpZHRoOiA1NTBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KScsXG4gICAgICBkZXNrdG9wQnJlYWtwb2ludDogJyhtaW4td2lkdGg6IDkwMHB4KSdcbiAgICB9XG4gIH1cbn07XG5cbi8vIGVudmlyb25tZW50XG5hcHAuZW52aXJvbm1lbnQgPSB7XG4gIGlzTW9iaWxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoYXBwLmNvbmZpZy5nbG9iYWwubW9iaWxlQnJlYWtwb2ludCkubWF0Y2hlcztcbiAgfSxcbiAgaXNEZXNrdG9wOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoYXBwLmNvbmZpZy5nbG9iYWwuZGVza3RvcEJyZWFrcG9pbnQpLm1hdGNoZXM7XG4gIH0sXG4gIGlzVG91Y2hFbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IChuYXZpZ2F0b3IuTWF4VG91Y2hQb2ludHMgPiAwKSB8fCAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwKSk7XG4gIH1cbn07XG5cbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL2hlYWRlci5qcycpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL3Byb2R1Y3QuanMnKTtcblxuLy8gQFRPRE8gdGlkeSB0aGlzIHVwXG5jb25zdCBGbGlja2l0eSA9IHJlcXVpcmUoJ2ZsaWNraXR5Jyk7XG5cbm5ldyBGbGlja2l0eSggJy5zbGlkZXInLCB7XG4gIGF1dG9QbGF5OiB0cnVlLFxuICBjZWxsU2VsZWN0b3I6ICcuc2xpZGVyX19zbGlkZScsXG59KTtcblxubmV3IEZsaWNraXR5KCAnLnByb2R1Y3QtY2Fyb3VzZWwgLnByb2R1Y3QtZ3JpZCcsIHtcbiBhdXRvUGxheTogdHJ1ZSxcbiBjZWxsU2VsZWN0b3I6ICdhcnRpY2xlJyxcbiBncm91cENlbGxzOiB0cnVlXG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL1Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiY29uc3QgU1VCTkFWX1ZJU0lCTEVfQ0xBU1MgPSAnbmF2aWdhdGlvbl9fc3VibmF2LS12aXNpYmxlJztcbmNvbnN0IFNVQk5BVl9UQVJHRVRfQVRUUiA9ICdkYXRhLW5hdi1lbGVtZW50JztcbmNvbnN0IE5BVl9JVEVNX0NMQVNTID0gJ25hdmlnYXRpb25fX2l0ZW0nO1xuY29uc3QgQlVSR0VSX0NMQVNTID0gJ25hdmlnYXRpb24tdG9nZ2xlJztcblxuY2xhc3MgTmF2aWdhdGlvbkJ1cmdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmF2VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQlVSR0VSX0NMQVNTKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5uYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykpO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbi0tdmlzaWJsZScpO1xuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIFN1Yk5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hdkl0ZW1zID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7TkFWX0lURU1fQ0xBU1N9LS1leHBhbmRhYmxlYClcbiAgICApO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgc2hvd1N1Yk5hdihpZCkge1xuICAgIGNvbnN0IHN1Yk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBzdWJOYXYuY2xhc3NMaXN0LmFkZChTVUJOQVZfVklTSUJMRV9DTEFTUyk7XG4gIH1cblxuICBpc1N1Yk5hdlZpc2libGUoaWQpIHtcbiAgICBjb25zdCBzdWJOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIHN1Yk5hdi5jbGFzc0xpc3QuY29udGFpbnMoU1VCTkFWX1ZJU0lCTEVfQ0xBU1MpO1xuICB9XG5cbiAgaGlkZVN1Yk5hdihpZCkge1xuICAgIGNvbnN0IHN1Yk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBzdWJOYXYuY2xhc3NMaXN0LnJlbW92ZShTVUJOQVZfVklTSUJMRV9DTEFTUyk7XG4gIH1cblxuICBoaWRlU3ViTmF2cygpIHtcbiAgICB0aGlzLm5hdkl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7TkFWX0lURU1fQ0xBU1N9LS1leHBhbmRlZGApO1xuICAgICAgY29uc3Qgc3ViTmF2SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShTVUJOQVZfVEFSR0VUX0FUVFIpO1xuICAgICAgdGhpcy5oaWRlU3ViTmF2KHN1Yk5hdklkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5uYXZJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgWydjbGljayddLm1hcCgoZSkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgc3ViTmF2SWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFNVQk5BVl9UQVJHRVRfQVRUUik7XG4gICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gdGhpcy5pc1N1Yk5hdlZpc2libGUoc3ViTmF2SWQpO1xuICAgICAgICAgIHRoaXMuaGlkZVN1Yk5hdnMoKTtcbiAgICAgICAgICBpZiAoIWlzVmlzaWJsZSkge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYCR7TkFWX0lURU1fQ0xBU1N9LS1leHBhbmRlZGApO1xuICAgICAgICAgICAgdGhpcy5zaG93U3ViTmF2KHN1Yk5hdklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5uZXcgTmF2aWdhdGlvbkJ1cmdlcigpO1xuXG5uZXcgU3ViTmF2aWdhdGlvbigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9SZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG5jb25zdCBBRERfVE9fQkFTS0VUX0ZPUk1fQ0xBU1MgPSAnYWRkLXRvLWJhc2tldC1mb3JtJztcblxuY2xhc3MgUHJvZHVjdHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLml0ZW1Ub3RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWtldFRvdGFsJyk7XG4gICAgdGhpcy5ub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm90aWZpY2F0aW9uKTtcbiAgICB0aGlzLmluaXRBZGRUb0Jhc2tldHMoKTtcbiAgfVxuXG4gIHJlc2V0Tm90aWZpY2F0aW9uKCkge1xuICAgIHRoaXMubm90aWZpY2F0aW9uLmNsYXNzTGlzdCA9ICcnO1xuICAgIHRoaXMubm90aWZpY2F0aW9uLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgbm90aWZ5U3VjY2VzcygpIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi5jbGFzc0xpc3QgPSAnbm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0tc3VjY2VzcyBub3RpZmljYXRpb24tLXBvcHVwJztcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSAnUHJvZHVjdG8gYcOxYWRpZG8gYWwgcGVkaWRvJztcbiAgfVxuXG4gIG5vdGlmeUVycm9yKCkge1xuICAgIHRoaXMubm90aWZpY2F0aW9uLmNsYXNzTGlzdCA9ICdub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLS1lcnJvciBub3RpZmljYXRpb24tLXBvcHVwJztcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSAnSGEgb2N1cnJpZG8gdW4gZXJyb3InO1xuICB9XG5cbiAgaW5pdEFkZFRvQmFza2V0cygpIHtcbiAgICBjb25zdCBhZGRUb0Jhc2tldEZvcm1zID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQUREX1RPX0JBU0tFVF9GT1JNX0NMQVNTKVxuICAgICk7XG5cbiAgICBhZGRUb0Jhc2tldEZvcm1zLmZvckVhY2goZm9ybSA9PiB7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5yZXNldE5vdGlmaWNhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgICAgICAgYXhpb3MucG9zdChhY3Rpb24sIHtcbiAgICAgICAgICBxdWFudGl0eTogZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKS52YWx1ZSxcbiAgICAgICAgICBwcmljZUlkOiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmljZUlkXCJdJykudmFsdWUsXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gcmVzcG9uc2UuZGF0YS5iYXNrZXRUb3RhbC50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICAgICAgJ2VzLUVTJyxcbiAgICAgICAgICAgICAgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5U3VjY2VzcygpO1xuICAgICAgICAgICAgdGhpcy5pdGVtVG90YWwudGV4dENvbnRlbnQgPSBgJHthbW91bnR9IOKCrGA7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlFcnJvcigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxufVxuXG5uZXcgUHJvZHVjdHMoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9SZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcHJvZHVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHRoaXMuZGVmYXVsdHMsIHsgbWV0aG9kOiAnZ2V0JyB9LCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIG1hdGNoZXNTZWxlY3RvciB2Mi4wLjJcbiAqIG1hdGNoZXNTZWxlY3RvciggZWxlbWVudCwgJy5zZWxlY3RvcicgKVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1hdGNoZXNNZXRob2QgPSAoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBFbGVtUHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBzdGFuZGFyZCBtZXRob2QgbmFtZSBmaXJzdFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXMgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXMnO1xuICAgIH1cbiAgICAvLyBjaGVjayB1bi1wcmVmaXhlZFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlc1NlbGVjdG9yJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdmVuZG9yIHByZWZpeGVzXG4gICAgdmFyIHByZWZpeGVzID0gWyAnd2Via2l0JywgJ21veicsICdtcycsICdvJyBdO1xuXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IHByZWZpeCArICdNYXRjaGVzU2VsZWN0b3InO1xuICAgICAgaWYgKCBFbGVtUHJvdG9bIG1ldGhvZCBdICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgICByZXR1cm4gZWxlbVsgbWF0Y2hlc01ldGhvZCBdKCBzZWxlY3RvciApO1xuICB9O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3Rvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEV2RW1pdHRlciB2MS4xLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHdpbmRvdyAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxudmFyIHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICkgPT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIHZhciBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICB2YXIgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKDApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICB2YXIgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggdmFyIGk9MDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cbiAgICB2YXIgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXYtZW1pdHRlci9ldi1lbWl0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBGaXp6eSBVSSB1dGlscyB2Mi4wLjdcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3InXG4gICAgXSwgZnVuY3Rpb24oIG1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIG1hdGNoZXNTZWxlY3RvciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5maXp6eVVJVXRpbHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93Lm1hdGNoZXNTZWxlY3RvclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIG1hdGNoZXNTZWxlY3RvciApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSB7fTtcblxuLy8gLS0tLS0gZXh0ZW5kIC0tLS0tIC8vXG5cbi8vIGV4dGVuZHMgb2JqZWN0c1xudXRpbHMuZXh0ZW5kID0gZnVuY3Rpb24oIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuLy8gLS0tLS0gbW9kdWxvIC0tLS0tIC8vXG5cbnV0aWxzLm1vZHVsbyA9IGZ1bmN0aW9uKCBudW0sIGRpdiApIHtcbiAgcmV0dXJuICggKCBudW0gJSBkaXYgKSArIGRpdiApICUgZGl2O1xufTtcblxuLy8gLS0tLS0gbWFrZUFycmF5IC0tLS0tIC8vXG5cbnZhciBhcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiB1bmRlZmluZWQgb3IgbnVsbC4gIzZcbiAgaWYgKCBvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgaWYgKCBpc0FycmF5TGlrZSApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgcmV0dXJuIGFycmF5U2xpY2UuY2FsbCggb2JqICk7XG4gIH1cblxuICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgcmV0dXJuIFsgb2JqIF07XG59O1xuXG4vLyAtLS0tLSByZW1vdmVGcm9tIC0tLS0tIC8vXG5cbnV0aWxzLnJlbW92ZUZyb20gPSBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gIHZhciBpbmRleCA9IGFyeS5pbmRleE9mKCBvYmogKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBhcnkuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtICE9IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UXVlcnlFbGVtZW50IC0tLS0tIC8vXG5cbi8vIHVzZSBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xudXRpbHMuZ2V0UXVlcnlFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn07XG5cbi8vIC0tLS0tIGhhbmRsZUV2ZW50IC0tLS0tIC8vXG5cbi8vIGVuYWJsZSAub250eXBlIHRvIHRyaWdnZXIgZnJvbSAuYWRkRXZlbnRMaXN0ZW5lciggZWxlbSwgJ3R5cGUnIClcbnV0aWxzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGZpbHRlckZpbmRFbGVtZW50cyAtLS0tLSAvL1xuXG51dGlscy5maWx0ZXJGaW5kRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMsIHNlbGVjdG9yICkge1xuICAvLyBtYWtlIGFycmF5IG9mIGVsZW1zXG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB2YXIgZmZFbGVtcyA9IFtdO1xuXG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIC8vIGNoZWNrIHRoYXQgZWxlbSBpcyBhbiBhY3R1YWwgZWxlbWVudFxuICAgIGlmICggISggZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFkZCBlbGVtIGlmIG5vIHNlbGVjdG9yXG4gICAgaWYgKCAhc2VsZWN0b3IgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGEgc2VsZWN0b3JcbiAgICAvLyBmaWx0ZXJcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgIH1cbiAgICAvLyBmaW5kIGNoaWxkcmVuXG4gICAgdmFyIGNoaWxkRWxlbXMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XG4gICAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgY2hpbGRFbGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggY2hpbGRFbGVtc1tpXSApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZmRWxlbXM7XG59O1xuXG4vLyAtLS0tLSBkZWJvdW5jZU1ldGhvZCAtLS0tLSAvL1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCA9IGZ1bmN0aW9uKCBfY2xhc3MsIG1ldGhvZE5hbWUsIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEwMDtcbiAgLy8gb3JpZ2luYWwgbWV0aG9kXG4gIHZhciBtZXRob2QgPSBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF07XG4gIHZhciB0aW1lb3V0TmFtZSA9IG1ldGhvZE5hbWUgKyAnVGltZW91dCc7XG5cbiAgX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzWyB0aW1lb3V0TmFtZSBdID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBtZXRob2QuYXBwbHkoIF90aGlzLCBhcmdzICk7XG4gICAgICBkZWxldGUgX3RoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgfSwgdGhyZXNob2xkICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgdmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgLy8gZG8gYXN5bmMgdG8gYWxsb3cgZm9yIG90aGVyIHNjcmlwdHMgdG8gcnVuLiBtZXRhZml6enkvZmxpY2tpdHkjNDQxXG4gICAgc2V0VGltZW91dCggY2FsbGJhY2sgKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9qYW1lc3JvYmVydHMubmFtZS9ibG9nLzIwMTAvMDIvMjIvc3RyaW5nLWZ1bmN0aW9ucy1mb3ItamF2YXNjcmlwdC10cmltLXRvLWNhbWVsLWNhc2UtdG8tZGFzaGVkLWFuZC10by11bmRlcnNjb3JlL1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9KS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbi8qKlxuICogYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuICogaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbiAqIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbiAqL1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgdmFyIGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICB2YXIgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdbJyArIGRhdGFBdHRyICsgJ10nICk7XG4gICAgdmFyIGpzRGFzaEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5qcy0nICsgZGFzaGVkTmFtZXNwYWNlICk7XG4gICAgdmFyIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBkYXRhQXR0ckVsZW1zIClcbiAgICAgIC5jb25jYXQoIHV0aWxzLm1ha2VBcnJheSgganNEYXNoRWxlbXMgKSApO1xuICAgIHZhciBkYXRhT3B0aW9uc0F0dHIgPSBkYXRhQXR0ciArICctb3B0aW9ucyc7XG4gICAgdmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG5cbiAgICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgIHZhciBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICkgfHxcbiAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFPcHRpb25zQXR0ciApO1xuICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoICdFcnJvciBwYXJzaW5nICcgKyBkYXRhQXR0ciArICcgb24gJyArIGVsZW0uY2xhc3NOYW1lICtcbiAgICAgICAgICAnOiAnICsgZXJyb3IgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbmFtZXNwYWNlJylcbiAgICAgIGlmICggalF1ZXJ5ICkge1xuICAgICAgICBqUXVlcnkuZGF0YSggZWxlbSwgbmFtZXNwYWNlLCBpbnN0YW5jZSApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiB1dGlscztcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZml6enktdWktdXRpbHMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFkZCwgcmVtb3ZlIGNlbGxcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBhcHBlbmQgY2VsbHMgdG8gYSBkb2N1bWVudCBmcmFnbWVudFxuZnVuY3Rpb24gZ2V0Q2VsbHNGcmFnbWVudCggY2VsbHMgKSB7XG4gIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY2VsbHMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGwgKSB7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGNlbGwuZWxlbWVudCApO1xuICB9KTtcbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhZGQvcmVtb3ZlIGNlbGwgcHJvdG90eXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxuLyoqXG4gKiBJbnNlcnQsIHByZXBlbmQsIG9yIGFwcGVuZCBjZWxsc1xuICogQHBhcmFtIHtFbGVtZW50LCBBcnJheSwgTm9kZUxpc3R9IGVsZW1zXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4XG4gKi9cbnByb3RvLmluc2VydCA9IGZ1bmN0aW9uKCBlbGVtcywgaW5kZXggKSB7XG4gIHZhciBjZWxscyA9IHRoaXMuX21ha2VDZWxscyggZWxlbXMgKTtcbiAgaWYgKCAhY2VsbHMgfHwgIWNlbGxzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGxlbiA9IHRoaXMuY2VsbHMubGVuZ3RoO1xuICAvLyBkZWZhdWx0IHRvIGFwcGVuZFxuICBpbmRleCA9IGluZGV4ID09PSB1bmRlZmluZWQgPyBsZW4gOiBpbmRleDtcbiAgLy8gYWRkIGNlbGxzIHdpdGggZG9jdW1lbnQgZnJhZ21lbnRcbiAgdmFyIGZyYWdtZW50ID0gZ2V0Q2VsbHNGcmFnbWVudCggY2VsbHMgKTtcbiAgLy8gYXBwZW5kIHRvIHNsaWRlclxuICB2YXIgaXNBcHBlbmQgPSBpbmRleCA9PSBsZW47XG4gIGlmICggaXNBcHBlbmQgKSB7XG4gICAgdGhpcy5zbGlkZXIuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc2VydENlbGxFbGVtZW50ID0gdGhpcy5jZWxsc1sgaW5kZXggXS5lbGVtZW50O1xuICAgIHRoaXMuc2xpZGVyLmluc2VydEJlZm9yZSggZnJhZ21lbnQsIGluc2VydENlbGxFbGVtZW50ICk7XG4gIH1cbiAgLy8gYWRkIHRvIHRoaXMuY2VsbHNcbiAgaWYgKCBpbmRleCA9PT0gMCApIHtcbiAgICAvLyBwcmVwZW5kLCBhZGQgdG8gc3RhcnRcbiAgICB0aGlzLmNlbGxzID0gY2VsbHMuY29uY2F0KCB0aGlzLmNlbGxzICk7XG4gIH0gZWxzZSBpZiAoIGlzQXBwZW5kICkge1xuICAgIC8vIGFwcGVuZCwgYWRkIHRvIGVuZFxuICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNlbGxzLmNvbmNhdCggY2VsbHMgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpbnNlcnQgaW4gdGhpcy5jZWxsc1xuICAgIHZhciBlbmRDZWxscyA9IHRoaXMuY2VsbHMuc3BsaWNlKCBpbmRleCwgbGVuIC0gaW5kZXggKTtcbiAgICB0aGlzLmNlbGxzID0gdGhpcy5jZWxscy5jb25jYXQoIGNlbGxzICkuY29uY2F0KCBlbmRDZWxscyApO1xuICB9XG5cbiAgdGhpcy5fc2l6ZUNlbGxzKCBjZWxscyApO1xuXG4gIHZhciBzZWxlY3RlZEluZGV4RGVsdGEgPSBpbmRleCA+IHRoaXMuc2VsZWN0ZWRJbmRleCA/IDAgOiBjZWxscy5sZW5ndGg7XG4gIHRoaXMuX2NlbGxBZGRlZFJlbW92ZWQoIGluZGV4LCBzZWxlY3RlZEluZGV4RGVsdGEgKTtcbn07XG5cbnByb3RvLmFwcGVuZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdGhpcy5pbnNlcnQoIGVsZW1zLCB0aGlzLmNlbGxzLmxlbmd0aCApO1xufTtcblxucHJvdG8ucHJlcGVuZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdGhpcy5pbnNlcnQoIGVsZW1zLCAwICk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBjZWxsc1xuICogQHBhcmFtIHtFbGVtZW50LCBBcnJheSwgTm9kZUxpc3R9IGVsZW1zXG4gKi9cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGNlbGxzID0gdGhpcy5nZXRDZWxscyggZWxlbXMgKTtcbiAgdmFyIHNlbGVjdGVkSW5kZXhEZWx0YSA9IDA7XG4gIHZhciBsZW4gPSBjZWxscy5sZW5ndGg7XG4gIHZhciBpLCBjZWxsO1xuICAvLyBjYWxjdWxhdGUgc2VsZWN0ZWRJbmRleERlbHRhLCBlYXNpZXIgaWYgZG9uZSBpbiBzZXBlcmF0ZSBsb29wXG4gIGZvciAoIGk9MDsgaSA8IGxlbjsgaSsrICkge1xuICAgIGNlbGwgPSBjZWxsc1tpXTtcbiAgICB2YXIgd2FzQmVmb3JlID0gdGhpcy5jZWxscy5pbmRleE9mKCBjZWxsICkgPCB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgc2VsZWN0ZWRJbmRleERlbHRhIC09IHdhc0JlZm9yZSA/IDEgOiAwO1xuICB9XG5cbiAgZm9yICggaT0wOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgY2VsbCA9IGNlbGxzW2ldO1xuICAgIGNlbGwucmVtb3ZlKCk7XG4gICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjb2xsZWN0aW9uXG4gICAgdXRpbHMucmVtb3ZlRnJvbSggdGhpcy5jZWxscywgY2VsbCApO1xuICB9XG5cbiAgaWYgKCBjZWxscy5sZW5ndGggKSB7XG4gICAgLy8gdXBkYXRlIHN0dWZmXG4gICAgdGhpcy5fY2VsbEFkZGVkUmVtb3ZlZCggMCwgc2VsZWN0ZWRJbmRleERlbHRhICk7XG4gIH1cbn07XG5cbi8vIHVwZGF0ZXMgd2hlbiBjZWxscyBhcmUgYWRkZWQgb3IgcmVtb3ZlZFxucHJvdG8uX2NlbGxBZGRlZFJlbW92ZWQgPSBmdW5jdGlvbiggY2hhbmdlZENlbGxJbmRleCwgc2VsZWN0ZWRJbmRleERlbHRhICkge1xuICAvLyBUT0RPIHRoaXMgbWF0aCBpc24ndCBwZXJmZWN0IHdpdGggZ3JvdXBlZCBzbGlkZXNcbiAgc2VsZWN0ZWRJbmRleERlbHRhID0gc2VsZWN0ZWRJbmRleERlbHRhIHx8IDA7XG4gIHRoaXMuc2VsZWN0ZWRJbmRleCArPSBzZWxlY3RlZEluZGV4RGVsdGE7XG4gIHRoaXMuc2VsZWN0ZWRJbmRleCA9IE1hdGgubWF4KCAwLCBNYXRoLm1pbiggdGhpcy5zbGlkZXMubGVuZ3RoIC0gMSwgdGhpcy5zZWxlY3RlZEluZGV4ICkgKTtcblxuICB0aGlzLmNlbGxDaGFuZ2UoIGNoYW5nZWRDZWxsSW5kZXgsIHRydWUgKTtcbiAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgdGhpcy5lbWl0RXZlbnQoICdjZWxsQWRkZWRSZW1vdmVkJywgWyBjaGFuZ2VkQ2VsbEluZGV4LCBzZWxlY3RlZEluZGV4RGVsdGEgXSApO1xufTtcblxuLyoqXG4gKiBsb2dpYyB0byBiZSBydW4gYWZ0ZXIgYSBjZWxsJ3Mgc2l6ZSBjaGFuZ2VzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW0gLSBjZWxsJ3MgZWxlbWVudFxuICovXG5wcm90by5jZWxsU2l6ZUNoYW5nZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgY2VsbCA9IHRoaXMuZ2V0Q2VsbCggZWxlbSApO1xuICBpZiAoICFjZWxsICkge1xuICAgIHJldHVybjtcbiAgfVxuICBjZWxsLmdldFNpemUoKTtcblxuICB2YXIgaW5kZXggPSB0aGlzLmNlbGxzLmluZGV4T2YoIGNlbGwgKTtcbiAgdGhpcy5jZWxsQ2hhbmdlKCBpbmRleCApO1xufTtcblxuLyoqXG4gKiBsb2dpYyBhbnkgdGltZSBhIGNlbGwgaXMgY2hhbmdlZDogYWRkZWQsIHJlbW92ZWQsIG9yIHNpemUgY2hhbmdlZFxuICogQHBhcmFtIHtJbnRlZ2VyfSBjaGFuZ2VkQ2VsbEluZGV4IC0gaW5kZXggb2YgdGhlIGNoYW5nZWQgY2VsbCwgb3B0aW9uYWxcbiAqL1xucHJvdG8uY2VsbENoYW5nZSA9IGZ1bmN0aW9uKCBjaGFuZ2VkQ2VsbEluZGV4LCBpc1Bvc2l0aW9uaW5nU2xpZGVyICkge1xuICB2YXIgcHJldlNsaWRlYWJsZVdpZHRoID0gdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgdGhpcy5fcG9zaXRpb25DZWxscyggY2hhbmdlZENlbGxJbmRleCApO1xuICB0aGlzLl9nZXRXcmFwU2hpZnRDZWxscygpO1xuICB0aGlzLnNldEdhbGxlcnlTaXplKCk7XG4gIHRoaXMuZW1pdEV2ZW50KCAnY2VsbENoYW5nZScsIFsgY2hhbmdlZENlbGxJbmRleCBdICk7XG4gIC8vIHBvc2l0aW9uIHNsaWRlclxuICBpZiAoIHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsICkge1xuICAgIC8vIHNoaWZ0IHggYnkgY2hhbmdlIGluIHNsaWRlYWJsZVdpZHRoXG4gICAgLy8gVE9ETyBmaXggcG9zaXRpb24gc2hpZnRzIHdoZW4gcHJlcGVuZGluZyB3LyBmcmVlU2Nyb2xsXG4gICAgdmFyIGRlbHRhWCA9IHByZXZTbGlkZWFibGVXaWR0aCAtIHRoaXMuc2xpZGVhYmxlV2lkdGg7XG4gICAgdGhpcy54ICs9IGRlbHRhWCAqIHRoaXMuY2VsbEFsaWduO1xuICAgIHRoaXMucG9zaXRpb25TbGlkZXIoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBkbyBub3QgcG9zaXRpb24gc2xpZGVyIGFmdGVyIGxhenkgbG9hZFxuICAgIGlmICggaXNQb3NpdGlvbmluZ1NsaWRlciApIHtcbiAgICAgIHRoaXMucG9zaXRpb25TbGlkZXJBdFNlbGVjdGVkKCk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0KCB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiBGbGlja2l0eTtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvYWRkLXJlbW92ZS1jZWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9hZGQtcmVtb3ZlLWNlbGwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYW5pbWF0ZVxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscydcbiAgICBdLCBmdW5jdGlvbiggdXRpbHMgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuRmxpY2tpdHkgPSB3aW5kb3cuRmxpY2tpdHkgfHwge307XG4gICAgd2luZG93LkZsaWNraXR5LmFuaW1hdGVQcm90b3R5cGUgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIHV0aWxzICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlcXVlc3RBbmltYXRpb25GcmFtZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnZXQgckFGLCBwcmVmaXhlZCwgaWYgcHJlc2VudFxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuLy8gZmFsbGJhY2sgdG8gc2V0VGltZW91dFxudmFyIGxhc3RUaW1lID0gMDtcbmlmICggIXJlcXVlc3RBbmltYXRpb25GcmFtZSApICB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KCAwLCAxNiAtICggY3VyclRpbWUgLSBsYXN0VGltZSApICk7XG4gICAgdmFyIGlkID0gc2V0VGltZW91dCggY2FsbGJhY2ssIHRpbWVUb0NhbGwgKTtcbiAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFuaW1hdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIHByb3RvID0ge307XG5cbnByb3RvLnN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc0FuaW1hdGluZyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgdGhpcy5yZXN0aW5nRnJhbWVzID0gMDtcbiAgdGhpcy5hbmltYXRlKCk7XG59O1xuXG5wcm90by5hbmltYXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYXBwbHlEcmFnRm9yY2UoKTtcbiAgdGhpcy5hcHBseVNlbGVjdGVkQXR0cmFjdGlvbigpO1xuXG4gIHZhciBwcmV2aW91c1ggPSB0aGlzLng7XG5cbiAgdGhpcy5pbnRlZ3JhdGVQaHlzaWNzKCk7XG4gIHRoaXMucG9zaXRpb25TbGlkZXIoKTtcbiAgdGhpcy5zZXR0bGUoIHByZXZpb3VzWCApO1xuICAvLyBhbmltYXRlIG5leHQgZnJhbWVcbiAgaWYgKCB0aGlzLmlzQW5pbWF0aW5nICkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBmdW5jdGlvbiBhbmltYXRlRnJhbWUoKSB7XG4gICAgICBfdGhpcy5hbmltYXRlKCk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxudmFyIHRyYW5zZm9ybVByb3BlcnR5ID0gKCBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcbiAgaWYgKCB0eXBlb2Ygc3R5bGUudHJhbnNmb3JtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiAndHJhbnNmb3JtJztcbiAgfVxuICByZXR1cm4gJ1dlYmtpdFRyYW5zZm9ybSc7XG59KSgpO1xuXG5wcm90by5wb3NpdGlvblNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHRoaXMueDtcbiAgLy8gd3JhcCBwb3NpdGlvbiBhcm91bmRcbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCAmJiB0aGlzLmNlbGxzLmxlbmd0aCA+IDEgKSB7XG4gICAgeCA9IHV0aWxzLm1vZHVsbyggeCwgdGhpcy5zbGlkZWFibGVXaWR0aCApO1xuICAgIHggPSB4IC0gdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgICB0aGlzLnNoaWZ0V3JhcENlbGxzKCB4ICk7XG4gIH1cblxuICB4ID0geCArIHRoaXMuY3Vyc29yUG9zaXRpb247XG4gIC8vIHJldmVyc2UgaWYgcmlnaHQtdG8tbGVmdCBhbmQgdXNpbmcgdHJhbnNmb3JtXG4gIHggPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgJiYgdHJhbnNmb3JtUHJvcGVydHkgPyAteCA6IHg7XG4gIHZhciB2YWx1ZSA9IHRoaXMuZ2V0UG9zaXRpb25WYWx1ZSggeCApO1xuICAvLyB1c2UgM0QgdHJhbmZvcm1zIGZvciBoYXJkd2FyZSBhY2NlbGVyYXRpb24gb24gaU9TXG4gIC8vIGJ1dCB1c2UgMkQgd2hlbiBzZXR0bGVkLCBmb3IgYmV0dGVyIGZvbnQtcmVuZGVyaW5nXG4gIHRoaXMuc2xpZGVyLnN0eWxlWyB0cmFuc2Zvcm1Qcm9wZXJ0eSBdID0gdGhpcy5pc0FuaW1hdGluZyA/XG4gICAgJ3RyYW5zbGF0ZTNkKCcgKyB2YWx1ZSArICcsMCwwKScgOiAndHJhbnNsYXRlWCgnICsgdmFsdWUgKyAnKSc7XG5cbiAgLy8gc2Nyb2xsIGV2ZW50XG4gIHZhciBmaXJzdFNsaWRlID0gdGhpcy5zbGlkZXNbMF07XG4gIGlmICggZmlyc3RTbGlkZSApIHtcbiAgICB2YXIgcG9zaXRpb25YID0gLXRoaXMueCAtIGZpcnN0U2xpZGUudGFyZ2V0O1xuICAgIHZhciBwcm9ncmVzcyA9IHBvc2l0aW9uWCAvIHRoaXMuc2xpZGVzV2lkdGg7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnc2Nyb2xsJywgbnVsbCwgWyBwcm9ncmVzcywgcG9zaXRpb25YIF0gKTtcbiAgfVxufTtcblxucHJvdG8ucG9zaXRpb25TbGlkZXJBdFNlbGVjdGVkID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnggPSAtdGhpcy5zZWxlY3RlZFNsaWRlLnRhcmdldDtcbiAgdGhpcy5wb3NpdGlvblNsaWRlcigpO1xufTtcblxucHJvdG8uZ2V0UG9zaXRpb25WYWx1ZSA9IGZ1bmN0aW9uKCBwb3NpdGlvbiApIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICkge1xuICAgIC8vIHBlcmNlbnQgcG9zaXRpb24sIHJvdW5kIHRvIDIgZGlnaXRzLCBsaWtlIDEyLjM0JVxuICAgIHJldHVybiAoIE1hdGgucm91bmQoICggcG9zaXRpb24gLyB0aGlzLnNpemUuaW5uZXJXaWR0aCApICogMTAwMDAgKSAqIDAuMDEgKSsgJyUnO1xuICB9IGVsc2Uge1xuICAgIC8vIHBpeGVsIHBvc2l0aW9uaW5nXG4gICAgcmV0dXJuIE1hdGgucm91bmQoIHBvc2l0aW9uICkgKyAncHgnO1xuICB9XG59O1xuXG5wcm90by5zZXR0bGUgPSBmdW5jdGlvbiggcHJldmlvdXNYICkge1xuICAvLyBrZWVwIHRyYWNrIG9mIGZyYW1lcyB3aGVyZSB4IGhhc24ndCBtb3ZlZFxuICBpZiAoICF0aGlzLmlzUG9pbnRlckRvd24gJiYgTWF0aC5yb3VuZCggdGhpcy54ICogMTAwICkgPT0gTWF0aC5yb3VuZCggcHJldmlvdXNYICogMTAwICkgKSB7XG4gICAgdGhpcy5yZXN0aW5nRnJhbWVzKys7XG4gIH1cbiAgLy8gc3RvcCBhbmltYXRpbmcgaWYgcmVzdGluZyBmb3IgMyBvciBtb3JlIGZyYW1lc1xuICBpZiAoIHRoaXMucmVzdGluZ0ZyYW1lcyA+IDIgKSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIGRlbGV0ZSB0aGlzLmlzRnJlZVNjcm9sbGluZztcbiAgICAvLyByZW5kZXIgcG9zaXRpb24gd2l0aCB0cmFuc2xhdGVYIHdoZW4gc2V0dGxlZFxuICAgIHRoaXMucG9zaXRpb25TbGlkZXIoKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3NldHRsZScpO1xuICB9XG59O1xuXG5wcm90by5zaGlmdFdyYXBDZWxscyA9IGZ1bmN0aW9uKCB4ICkge1xuICAvLyBzaGlmdCBiZWZvcmUgY2VsbHNcbiAgdmFyIGJlZm9yZUdhcCA9IHRoaXMuY3Vyc29yUG9zaXRpb24gKyB4O1xuICB0aGlzLl9zaGlmdENlbGxzKCB0aGlzLmJlZm9yZVNoaWZ0Q2VsbHMsIGJlZm9yZUdhcCwgLTEgKTtcbiAgLy8gc2hpZnQgYWZ0ZXIgY2VsbHNcbiAgdmFyIGFmdGVyR2FwID0gdGhpcy5zaXplLmlubmVyV2lkdGggLSAoIHggKyB0aGlzLnNsaWRlYWJsZVdpZHRoICsgdGhpcy5jdXJzb3JQb3NpdGlvbiApO1xuICB0aGlzLl9zaGlmdENlbGxzKCB0aGlzLmFmdGVyU2hpZnRDZWxscywgYWZ0ZXJHYXAsIDEgKTtcbn07XG5cbnByb3RvLl9zaGlmdENlbGxzID0gZnVuY3Rpb24oIGNlbGxzLCBnYXAsIHNoaWZ0ICkge1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgY2VsbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGNlbGwgPSBjZWxsc1tpXTtcbiAgICB2YXIgY2VsbFNoaWZ0ID0gZ2FwID4gMCA/IHNoaWZ0IDogMDtcbiAgICBjZWxsLndyYXBTaGlmdCggY2VsbFNoaWZ0ICk7XG4gICAgZ2FwIC09IGNlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB9XG59O1xuXG5wcm90by5fdW5zaGlmdENlbGxzID0gZnVuY3Rpb24oIGNlbGxzICkge1xuICBpZiAoICFjZWxscyB8fCAhY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKCB2YXIgaT0wOyBpIDwgY2VsbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgY2VsbHNbaV0ud3JhcFNoaWZ0KCAwICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBoeXNpY3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8uaW50ZWdyYXRlUGh5c2ljcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eTtcbiAgdGhpcy52ZWxvY2l0eSAqPSB0aGlzLmdldEZyaWN0aW9uRmFjdG9yKCk7XG59O1xuXG5wcm90by5hcHBseUZvcmNlID0gZnVuY3Rpb24oIGZvcmNlICkge1xuICB0aGlzLnZlbG9jaXR5ICs9IGZvcmNlO1xufTtcblxucHJvdG8uZ2V0RnJpY3Rpb25GYWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIDEgLSB0aGlzLm9wdGlvbnNbIHRoaXMuaXNGcmVlU2Nyb2xsaW5nID8gJ2ZyZWVTY3JvbGxGcmljdGlvbicgOiAnZnJpY3Rpb24nIF07XG59O1xuXG5wcm90by5nZXRSZXN0aW5nUG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgLy8gbXkgdGhhbmtzIHRvIFN0ZXZlbiBXaXR0ZW5zLCB3aG8gc2ltcGxpZmllZCB0aGlzIG1hdGggZ3JlYXRseVxuICByZXR1cm4gdGhpcy54ICsgdGhpcy52ZWxvY2l0eSAvICggMSAtIHRoaXMuZ2V0RnJpY3Rpb25GYWN0b3IoKSApO1xufTtcblxucHJvdG8uYXBwbHlEcmFnRm9yY2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc1BvaW50ZXJEb3duICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBjaGFuZ2UgdGhlIHBvc2l0aW9uIHRvIGRyYWcgcG9zaXRpb24gYnkgYXBwbHlpbmcgZm9yY2VcbiAgdmFyIGRyYWdWZWxvY2l0eSA9IHRoaXMuZHJhZ1ggLSB0aGlzLng7XG4gIHZhciBkcmFnRm9yY2UgPSBkcmFnVmVsb2NpdHkgLSB0aGlzLnZlbG9jaXR5O1xuICB0aGlzLmFwcGx5Rm9yY2UoIGRyYWdGb3JjZSApO1xufTtcblxucHJvdG8uYXBwbHlTZWxlY3RlZEF0dHJhY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgLy8gZG8gbm90IGF0dHJhY3QgaWYgcG9pbnRlciBkb3duIG9yIG5vIGNlbGxzXG4gIGlmICggdGhpcy5pc1BvaW50ZXJEb3duIHx8IHRoaXMuaXNGcmVlU2Nyb2xsaW5nIHx8ICF0aGlzLmNlbGxzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGRpc3RhbmNlID0gdGhpcy5zZWxlY3RlZFNsaWRlLnRhcmdldCAqIC0xIC0gdGhpcy54O1xuICB2YXIgZm9yY2UgPSBkaXN0YW5jZSAqIHRoaXMub3B0aW9ucy5zZWxlY3RlZEF0dHJhY3Rpb247XG4gIHRoaXMuYXBwbHlGb3JjZSggZm9yY2UgKTtcbn07XG5cbnJldHVybiBwcm90bztcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvYW5pbWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvYW5pbWF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBGbGlja2l0eS5DZWxsXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgIF0sIGZ1bmN0aW9uKCBnZXRTaXplICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgZ2V0U2l6ZSApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuRmxpY2tpdHkgPSB3aW5kb3cuRmxpY2tpdHkgfHwge307XG4gICAgd2luZG93LkZsaWNraXR5LkNlbGwgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LmdldFNpemVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBnZXRTaXplICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIENlbGwoIGVsZW0sIHBhcmVudCApIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbTtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgdGhpcy5jcmVhdGUoKTtcbn1cblxudmFyIHByb3RvID0gQ2VsbC5wcm90b3R5cGU7XG5cbnByb3RvLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScgKTtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy5zaGlmdCA9IDA7XG59O1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlc2V0IHN0eWxlXG4gIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICB2YXIgc2lkZSA9IHRoaXMucGFyZW50Lm9yaWdpblNpZGU7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBzaWRlIF0gPSAnJztcbn07XG5cbnByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG59O1xuXG5wcm90by5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4ICkge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuICB0aGlzLnJlbmRlclBvc2l0aW9uKCB4ICk7XG59O1xuXG4vLyBzZXREZWZhdWx0VGFyZ2V0IHYxIG1ldGhvZCwgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHJlbW92ZSBpbiB2M1xucHJvdG8udXBkYXRlVGFyZ2V0ID0gcHJvdG8uc2V0RGVmYXVsdFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWFyZ2luUHJvcGVydHkgPSB0aGlzLnBhcmVudC5vcmlnaW5TaWRlID09ICdsZWZ0JyA/ICdtYXJnaW5MZWZ0JyA6ICdtYXJnaW5SaWdodCc7XG4gIHRoaXMudGFyZ2V0ID0gdGhpcy54ICsgdGhpcy5zaXplWyBtYXJnaW5Qcm9wZXJ0eSBdICtcbiAgICB0aGlzLnNpemUud2lkdGggKiB0aGlzLnBhcmVudC5jZWxsQWxpZ247XG59O1xuXG5wcm90by5yZW5kZXJQb3NpdGlvbiA9IGZ1bmN0aW9uKCB4ICkge1xuICAvLyByZW5kZXIgcG9zaXRpb24gb2YgY2VsbCB3aXRoIGluIHNsaWRlclxuICB2YXIgc2lkZSA9IHRoaXMucGFyZW50Lm9yaWdpblNpZGU7XG4gIHRoaXMuZWxlbWVudC5zdHlsZVsgc2lkZSBdID0gdGhpcy5wYXJlbnQuZ2V0UG9zaXRpb25WYWx1ZSggeCApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGZhY3RvciAtIDAsIDEsIG9yIC0xXG4qKi9cbnByb3RvLndyYXBTaGlmdCA9IGZ1bmN0aW9uKCBzaGlmdCApIHtcbiAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICB0aGlzLnJlbmRlclBvc2l0aW9uKCB0aGlzLnggKyB0aGlzLnBhcmVudC5zbGlkZWFibGVXaWR0aCAqIHNoaWZ0ICk7XG59O1xuXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xufTtcblxucmV0dXJuIENlbGw7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2NlbGwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2NlbGwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZHJhZ1xuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICd1bmlkcmFnZ2VyL3VuaWRyYWdnZXInLFxuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgIF0sIGZ1bmN0aW9uKCBGbGlja2l0eSwgVW5pZHJhZ2dlciwgdXRpbHMgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgVW5pZHJhZ2dlciwgdXRpbHMgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJy4vZmxpY2tpdHknKSxcbiAgICAgIHJlcXVpcmUoJ3VuaWRyYWdnZXInKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LkZsaWNraXR5ID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5GbGlja2l0eSxcbiAgICAgIHdpbmRvdy5VbmlkcmFnZ2VyLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlkcmFnZ2VyLCB1dGlscyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSBkZWZhdWx0cyAtLS0tLSAvL1xuXG51dGlscy5leHRlbmQoIEZsaWNraXR5LmRlZmF1bHRzLCB7XG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgZHJhZ1RocmVzaG9sZDogMyxcbn0pO1xuXG4vLyAtLS0tLSBjcmVhdGUgLS0tLS0gLy9cblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlRHJhZycpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkcmFnIHByb3RvdHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgcHJvdG8gPSBGbGlja2l0eS5wcm90b3R5cGU7XG51dGlscy5leHRlbmQoIHByb3RvLCBVbmlkcmFnZ2VyLnByb3RvdHlwZSApO1xucHJvdG8uX3RvdWNoQWN0aW9uVmFsdWUgPSAncGFuLXknO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGlzVG91Y2ggPSAnY3JlYXRlVG91Y2gnIGluIGRvY3VtZW50O1xudmFyIGlzVG91Y2htb3ZlU2Nyb2xsQ2FuY2VsZWQgPSBmYWxzZTtcblxucHJvdG8uX2NyZWF0ZURyYWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vbiggJ2FjdGl2YXRlJywgdGhpcy5iaW5kRHJhZyApO1xuICB0aGlzLm9uKCAndWlDaGFuZ2UnLCB0aGlzLl91aUNoYW5nZURyYWcgKTtcbiAgdGhpcy5vbiggJ2NoaWxkVUlQb2ludGVyRG93bicsIHRoaXMuX2NoaWxkVUlQb2ludGVyRG93bkRyYWcgKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLnVuYmluZERyYWcgKTtcbiAgLy8gSEFDSyAtIGFkZCBzZWVtaW5nbHkgaW5ub2N1b3VzIGhhbmRsZXIgdG8gZml4IGlPUyAxMCBzY3JvbGwgYmVoYXZpb3JcbiAgLy8gIzQ1NywgUnViYVhhL1NvcnRhYmxlIzk3M1xuICBpZiAoIGlzVG91Y2ggJiYgIWlzVG91Y2htb3ZlU2Nyb2xsQ2FuY2VsZWQgKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBmdW5jdGlvbigpIHt9KTtcbiAgICBpc1RvdWNobW92ZVNjcm9sbENhbmNlbGVkID0gdHJ1ZTtcbiAgfVxufTtcblxucHJvdG8uYmluZERyYWcgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmRyYWdnYWJsZSB8fCB0aGlzLmlzRHJhZ0JvdW5kICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtZHJhZ2dhYmxlJyk7XG4gIHRoaXMuaGFuZGxlcyA9IFsgdGhpcy52aWV3cG9ydCBdO1xuICB0aGlzLmJpbmRIYW5kbGVzKCk7XG4gIHRoaXMuaXNEcmFnQm91bmQgPSB0cnVlO1xufTtcblxucHJvdG8udW5iaW5kRHJhZyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzRHJhZ0JvdW5kICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZHJhZ2dhYmxlJyk7XG4gIHRoaXMudW5iaW5kSGFuZGxlcygpO1xuICBkZWxldGUgdGhpcy5pc0RyYWdCb3VuZDtcbn07XG5cbnByb3RvLl91aUNoYW5nZURyYWcgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuaXNGcmVlU2Nyb2xsaW5nO1xufTtcblxucHJvdG8uX2NoaWxkVUlQb2ludGVyRG93bkRyYWcgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRoaXMucG9pbnRlckRvd25Gb2N1cyggZXZlbnQgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvaW50ZXIgZXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIG5vZGVzIHRoYXQgaGF2ZSB0ZXh0IGZpZWxkc1xudmFyIGN1cnNvck5vZGVzID0ge1xuICBURVhUQVJFQTogdHJ1ZSxcbiAgSU5QVVQ6IHRydWUsXG4gIE9QVElPTjogdHJ1ZSxcbn07XG5cbi8vIGlucHV0IHR5cGVzIHRoYXQgZG8gbm90IGhhdmUgdGV4dCBmaWVsZHNcbnZhciBjbGlja1R5cGVzID0ge1xuICByYWRpbzogdHJ1ZSxcbiAgY2hlY2tib3g6IHRydWUsXG4gIGJ1dHRvbjogdHJ1ZSxcbiAgc3VibWl0OiB0cnVlLFxuICBpbWFnZTogdHJ1ZSxcbiAgZmlsZTogdHJ1ZSxcbn07XG5cbnByb3RvLnBvaW50ZXJEb3duID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICAvLyBkaXNtaXNzIGlucHV0cyB3aXRoIHRleHQgZmllbGRzLiAjNDAzLCAjNDA0XG4gIHZhciBpc0N1cnNvcklucHV0ID0gY3Vyc29yTm9kZXNbIGV2ZW50LnRhcmdldC5ub2RlTmFtZSBdICYmXG4gICAgIWNsaWNrVHlwZXNbIGV2ZW50LnRhcmdldC50eXBlIF07XG4gIGlmICggaXNDdXJzb3JJbnB1dCApIHtcbiAgICAvLyByZXNldCBwb2ludGVyRG93biBsb2dpY1xuICAgIHRoaXMuaXNQb2ludGVyRG93biA9IGZhbHNlO1xuICAgIGRlbGV0ZSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX2RyYWdQb2ludGVyRG93biggZXZlbnQsIHBvaW50ZXIgKTtcblxuICAvLyBrbHVkZ2UgdG8gYmx1ciBmb2N1c2VkIGlucHV0cyBpbiBkcmFnZ2VyXG4gIHZhciBmb2N1c2VkID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgaWYgKCBmb2N1c2VkICYmIGZvY3VzZWQuYmx1ciAmJiBmb2N1c2VkICE9IHRoaXMuZWxlbWVudCAmJlxuICAgIC8vIGRvIG5vdCBibHVyIGJvZHkgZm9yIElFOSAmIDEwLCAjMTE3XG4gICAgZm9jdXNlZCAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGZvY3VzZWQuYmx1cigpO1xuICB9XG4gIHRoaXMucG9pbnRlckRvd25Gb2N1cyggZXZlbnQgKTtcbiAgLy8gc3RvcCBpZiBpdCB3YXMgbW92aW5nXG4gIHRoaXMuZHJhZ1ggPSB0aGlzLng7XG4gIHRoaXMudmlld3BvcnQuY2xhc3NMaXN0LmFkZCgnaXMtcG9pbnRlci1kb3duJyk7XG4gIC8vIGJpbmQgbW92ZSBhbmQgZW5kIGV2ZW50c1xuICB0aGlzLl9iaW5kUG9zdFN0YXJ0RXZlbnRzKCBldmVudCApO1xuICAvLyB0cmFjayBzY3JvbGxpbmdcbiAgdGhpcy5wb2ludGVyRG93blNjcm9sbCA9IGdldFNjcm9sbFBvc2l0aW9uKCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgdGhpcyApO1xuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3BvaW50ZXJEb3duJywgZXZlbnQsIFsgcG9pbnRlciBdICk7XG59O1xuXG5wcm90by5wb2ludGVyRG93bkZvY3VzID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAvLyBmb2N1cyBlbGVtZW50LCBpZiBub3QgdG91Y2gsIGFuZCBpdHMgbm90IGFuIGlucHV0IG9yIHNlbGVjdFxuICB2YXIgY2FuUG9pbnRlckRvd24gPSBnZXRDYW5Qb2ludGVyRG93biggZXZlbnQgKTtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgfHwgY2FuUG9pbnRlckRvd24gKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBwcmV2U2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gIC8vIGhhY2sgdG8gZml4IHNjcm9sbCBqdW1wIGFmdGVyIGZvY3VzLCAjNzZcbiAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgIT0gcHJldlNjcm9sbFkgKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKCB3aW5kb3cucGFnZVhPZmZzZXQsIHByZXZTY3JvbGxZICk7XG4gIH1cbn07XG5cbnZhciBmb2N1c05vZGVzID0ge1xuICBJTlBVVDogdHJ1ZSxcbiAgU0VMRUNUOiB0cnVlLFxufTtcblxuZnVuY3Rpb24gZ2V0Q2FuUG9pbnRlckRvd24oIGV2ZW50ICkge1xuICB2YXIgaXNUb3VjaFN0YXJ0ID0gZXZlbnQudHlwZSA9PSAndG91Y2hzdGFydCc7XG4gIHZhciBpc1RvdWNoUG9pbnRlciA9IGV2ZW50LnBvaW50ZXJUeXBlID09ICd0b3VjaCc7XG4gIHZhciBpc0ZvY3VzTm9kZSA9IGZvY3VzTm9kZXNbIGV2ZW50LnRhcmdldC5ub2RlTmFtZSBdO1xuICByZXR1cm4gaXNUb3VjaFN0YXJ0IHx8IGlzVG91Y2hQb2ludGVyIHx8IGlzRm9jdXNOb2RlO1xufVxuXG5wcm90by5jYW5QcmV2ZW50RGVmYXVsdE9uUG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIHByZXZlbnQgZGVmYXVsdCwgdW5sZXNzIHRvdWNoc3RhcnQgb3IgaW5wdXRcbiAgdmFyIGNhblBvaW50ZXJEb3duID0gZ2V0Q2FuUG9pbnRlckRvd24oIGV2ZW50ICk7XG4gIHJldHVybiAhY2FuUG9pbnRlckRvd247XG59O1xuXG4vLyAtLS0tLSBtb3ZlIC0tLS0tIC8vXG5cbnByb3RvLmhhc0RyYWdTdGFydGVkID0gZnVuY3Rpb24oIG1vdmVWZWN0b3IgKSB7XG4gIHJldHVybiBNYXRoLmFicyggbW92ZVZlY3Rvci54ICkgPiB0aGlzLm9wdGlvbnMuZHJhZ1RocmVzaG9sZDtcbn07XG5cbi8vIC0tLS0tIHVwIC0tLS0tIC8vXG5cbnByb3RvLnBvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgZGVsZXRlIHRoaXMuaXNUb3VjaFNjcm9sbGluZztcbiAgdGhpcy52aWV3cG9ydC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1wb2ludGVyLWRvd24nKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAncG9pbnRlclVwJywgZXZlbnQsIFsgcG9pbnRlciBdICk7XG4gIHRoaXMuX2RyYWdQb2ludGVyVXAoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG5wcm90by5wb2ludGVyRG9uZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHRoaXMgKTtcbiAgZGVsZXRlIHRoaXMucG9pbnRlckRvd25TY3JvbGw7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkcmFnZ2luZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by5kcmFnU3RhcnQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB0aGlzLng7XG4gIHRoaXMuc3RhcnRBbmltYXRpb24oKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzICk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2RyYWdTdGFydCcsIGV2ZW50LCBbIHBvaW50ZXIgXSApO1xufTtcblxucHJvdG8ucG9pbnRlck1vdmUgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHZhciBtb3ZlVmVjdG9yID0gdGhpcy5fZHJhZ1BvaW50ZXJNb3ZlKCBldmVudCwgcG9pbnRlciApO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdwb2ludGVyTW92ZScsIGV2ZW50LCBbIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xuICB0aGlzLl9kcmFnTW92ZSggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKTtcbn07XG5cbnByb3RvLmRyYWdNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHRoaXMucHJldmlvdXNEcmFnWCA9IHRoaXMuZHJhZ1g7XG4gIC8vIHJldmVyc2UgaWYgcmlnaHQtdG8tbGVmdFxuICB2YXIgZGlyZWN0aW9uID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0ID8gLTEgOiAxO1xuICB2YXIgZHJhZ1ggPSB0aGlzLmRyYWdTdGFydFBvc2l0aW9uICsgbW92ZVZlY3Rvci54ICogZGlyZWN0aW9uO1xuXG4gIGlmICggIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kICYmIHRoaXMuc2xpZGVzLmxlbmd0aCApIHtcbiAgICAvLyBzbG93IGRyYWdcbiAgICB2YXIgb3JpZ2luQm91bmQgPSBNYXRoLm1heCggLXRoaXMuc2xpZGVzWzBdLnRhcmdldCwgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiApO1xuICAgIGRyYWdYID0gZHJhZ1ggPiBvcmlnaW5Cb3VuZCA/ICggZHJhZ1ggKyBvcmlnaW5Cb3VuZCApICogMC41IDogZHJhZ1g7XG4gICAgdmFyIGVuZEJvdW5kID0gTWF0aC5taW4oIC10aGlzLmdldExhc3RTbGlkZSgpLnRhcmdldCwgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiApO1xuICAgIGRyYWdYID0gZHJhZ1ggPCBlbmRCb3VuZCA/ICggZHJhZ1ggKyBlbmRCb3VuZCApICogMC41IDogZHJhZ1g7XG4gIH1cblxuICB0aGlzLmRyYWdYID0gZHJhZ1g7XG5cbiAgdGhpcy5kcmFnTW92ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdkcmFnTW92ZScsIGV2ZW50LCBbIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xufTtcblxucHJvdG8uZHJhZ0VuZCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCApIHtcbiAgICB0aGlzLmlzRnJlZVNjcm9sbGluZyA9IHRydWU7XG4gIH1cbiAgLy8gc2V0IHNlbGVjdGVkSW5kZXggYmFzZWQgb24gd2hlcmUgZmxpY2sgd2lsbCBlbmQgdXBcbiAgdmFyIGluZGV4ID0gdGhpcy5kcmFnRW5kUmVzdGluZ1NlbGVjdCgpO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgJiYgIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kICkge1xuICAgIC8vIGlmIGZyZWUtc2Nyb2xsICYgbm90IHdyYXAgYXJvdW5kXG4gICAgLy8gZG8gbm90IGZyZWUtc2Nyb2xsIGlmIGdvaW5nIG91dHNpZGUgb2YgYm91bmRpbmcgc2xpZGVzXG4gICAgLy8gc28gYm91bmRpbmcgc2xpZGVzIGNhbiBhdHRyYWN0IHNsaWRlciwgYW5kIGtlZXAgaXQgaW4gYm91bmRzXG4gICAgdmFyIHJlc3RpbmdYID0gdGhpcy5nZXRSZXN0aW5nUG9zaXRpb24oKTtcbiAgICB0aGlzLmlzRnJlZVNjcm9sbGluZyA9IC1yZXN0aW5nWCA+IHRoaXMuc2xpZGVzWzBdLnRhcmdldCAmJlxuICAgICAgLXJlc3RpbmdYIDwgdGhpcy5nZXRMYXN0U2xpZGUoKS50YXJnZXQ7XG4gIH0gZWxzZSBpZiAoICF0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCAmJiBpbmRleCA9PSB0aGlzLnNlbGVjdGVkSW5kZXggKSB7XG4gICAgLy8gYm9vc3Qgc2VsZWN0aW9uIGlmIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgY2hhbmdlZFxuICAgIGluZGV4ICs9IHRoaXMuZHJhZ0VuZEJvb3N0U2VsZWN0KCk7XG4gIH1cbiAgZGVsZXRlIHRoaXMucHJldmlvdXNEcmFnWDtcbiAgLy8gYXBwbHkgc2VsZWN0aW9uXG4gIC8vIFRPRE8gcmVmYWN0b3IgdGhpcywgc2VsZWN0aW5nIGhlcmUgZmVlbHMgd2VpcmRcbiAgLy8gSEFDSywgc2V0IGZsYWcgc28gZHJhZ2dpbmcgc3RheXMgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgdGhpcy5pc0RyYWdTZWxlY3QgPSB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZDtcbiAgdGhpcy5zZWxlY3QoIGluZGV4ICk7XG4gIGRlbGV0ZSB0aGlzLmlzRHJhZ1NlbGVjdDtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnZHJhZ0VuZCcsIGV2ZW50LCBbIHBvaW50ZXIgXSApO1xufTtcblxucHJvdG8uZHJhZ0VuZFJlc3RpbmdTZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3RpbmdYID0gdGhpcy5nZXRSZXN0aW5nUG9zaXRpb24oKTtcbiAgLy8gaG93IGZhciBhd2F5IGZyb20gc2VsZWN0ZWQgc2xpZGVcbiAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnMoIHRoaXMuZ2V0U2xpZGVEaXN0YW5jZSggLXJlc3RpbmdYLCB0aGlzLnNlbGVjdGVkSW5kZXggKSApO1xuICAvLyBnZXQgY2xvc2V0IHJlc3RpbmcgZ29pbmcgdXAgYW5kIGdvaW5nIGRvd25cbiAgdmFyIHBvc2l0aXZlUmVzdGluZyA9IHRoaXMuX2dldENsb3Nlc3RSZXN0aW5nKCByZXN0aW5nWCwgZGlzdGFuY2UsIDEgKTtcbiAgdmFyIG5lZ2F0aXZlUmVzdGluZyA9IHRoaXMuX2dldENsb3Nlc3RSZXN0aW5nKCByZXN0aW5nWCwgZGlzdGFuY2UsIC0xICk7XG4gIC8vIHVzZSBjbG9zZXIgcmVzdGluZyBmb3Igd3JhcC1hcm91bmRcbiAgdmFyIGluZGV4ID0gcG9zaXRpdmVSZXN0aW5nLmRpc3RhbmNlIDwgbmVnYXRpdmVSZXN0aW5nLmRpc3RhbmNlID9cbiAgICBwb3NpdGl2ZVJlc3RpbmcuaW5kZXggOiBuZWdhdGl2ZVJlc3RpbmcuaW5kZXg7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbi8qKlxuICogZ2l2ZW4gcmVzdGluZyBYIGFuZCBkaXN0YW5jZSB0byBzZWxlY3RlZCBjZWxsXG4gKiBnZXQgdGhlIGRpc3RhbmNlIGFuZCBpbmRleCBvZiB0aGUgY2xvc2VzdCBjZWxsXG4gKiBAcGFyYW0ge051bWJlcn0gcmVzdGluZ1ggLSBlc3RpbWF0ZWQgcG9zdC1mbGljayByZXN0aW5nIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gZGlzdGFuY2UgLSBkaXN0YW5jZSB0byBzZWxlY3RlZCBjZWxsXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluY3JlbWVudCAtICsxIG9yIC0xLCBnb2luZyB1cCBvciBkb3duXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIHsgZGlzdGFuY2U6IHtOdW1iZXJ9LCBpbmRleDoge0ludGVnZXJ9IH1cbiAqL1xucHJvdG8uX2dldENsb3Nlc3RSZXN0aW5nID0gZnVuY3Rpb24oIHJlc3RpbmdYLCBkaXN0YW5jZSwgaW5jcmVtZW50ICkge1xuICB2YXIgaW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gIHZhciBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuICB2YXIgY29uZGl0aW9uID0gdGhpcy5vcHRpb25zLmNvbnRhaW4gJiYgIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kID9cbiAgICAvLyBpZiBjb250YWluLCBrZWVwIGdvaW5nIGlmIGRpc3RhbmNlIGlzIGVxdWFsIHRvIG1pbkRpc3RhbmNlXG4gICAgZnVuY3Rpb24oIGQsIG1kICkgeyByZXR1cm4gZCA8PSBtZDsgfSA6IGZ1bmN0aW9uKCBkLCBtZCApIHsgcmV0dXJuIGQgPCBtZDsgfTtcbiAgd2hpbGUgKCBjb25kaXRpb24oIGRpc3RhbmNlLCBtaW5EaXN0YW5jZSApICkge1xuICAgIC8vIG1lYXN1cmUgZGlzdGFuY2UgdG8gbmV4dCBjZWxsXG4gICAgaW5kZXggKz0gaW5jcmVtZW50O1xuICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZGlzdGFuY2UgPSB0aGlzLmdldFNsaWRlRGlzdGFuY2UoIC1yZXN0aW5nWCwgaW5kZXggKTtcbiAgICBpZiAoIGRpc3RhbmNlID09PSBudWxsICkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoIGRpc3RhbmNlICk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXN0YW5jZTogbWluRGlzdGFuY2UsXG4gICAgLy8gc2VsZWN0ZWQgd2FzIHByZXZpb3VzIGluZGV4XG4gICAgaW5kZXg6IGluZGV4IC0gaW5jcmVtZW50XG4gIH07XG59O1xuXG4vKipcbiAqIG1lYXN1cmUgZGlzdGFuY2UgYmV0d2VlbiB4IGFuZCBhIHNsaWRlIHRhcmdldFxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaW5kZXggLSBzbGlkZSBpbmRleFxuICovXG5wcm90by5nZXRTbGlkZURpc3RhbmNlID0gZnVuY3Rpb24oIHgsIGluZGV4ICkge1xuICB2YXIgbGVuID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAvLyB3cmFwIGFyb3VuZCBpZiBhdCBsZWFzdCAyIHNsaWRlc1xuICB2YXIgaXNXcmFwQXJvdW5kID0gdGhpcy5vcHRpb25zLndyYXBBcm91bmQgJiYgbGVuID4gMTtcbiAgdmFyIHNsaWRlSW5kZXggPSBpc1dyYXBBcm91bmQgPyB1dGlscy5tb2R1bG8oIGluZGV4LCBsZW4gKSA6IGluZGV4O1xuICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1sgc2xpZGVJbmRleCBdO1xuICBpZiAoICFzbGlkZSApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBhZGQgZGlzdGFuY2UgZm9yIHdyYXAtYXJvdW5kIHNsaWRlc1xuICB2YXIgd3JhcCA9IGlzV3JhcEFyb3VuZCA/IHRoaXMuc2xpZGVhYmxlV2lkdGggKiBNYXRoLmZsb29yKCBpbmRleCAvIGxlbiApIDogMDtcbiAgcmV0dXJuIHggLSAoIHNsaWRlLnRhcmdldCArIHdyYXAgKTtcbn07XG5cbnByb3RvLmRyYWdFbmRCb29zdFNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAvLyBkbyBub3QgYm9vc3QgaWYgbm8gcHJldmlvdXNEcmFnWCBvciBkcmFnTW92ZVRpbWVcbiAgaWYgKCB0aGlzLnByZXZpb3VzRHJhZ1ggPT09IHVuZGVmaW5lZCB8fCAhdGhpcy5kcmFnTW92ZVRpbWUgfHxcbiAgICAvLyBvciBpZiBkcmFnIHdhcyBoZWxkIGZvciAxMDAgbXNcbiAgICBuZXcgRGF0ZSgpIC0gdGhpcy5kcmFnTW92ZVRpbWUgPiAxMDAgKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgZGlzdGFuY2UgPSB0aGlzLmdldFNsaWRlRGlzdGFuY2UoIC10aGlzLmRyYWdYLCB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgdmFyIGRlbHRhID0gdGhpcy5wcmV2aW91c0RyYWdYIC0gdGhpcy5kcmFnWDtcbiAgaWYgKCBkaXN0YW5jZSA+IDAgJiYgZGVsdGEgPiAwICkge1xuICAgIC8vIGJvb3N0IHRvIG5leHQgaWYgbW92aW5nIHRvd2FyZHMgdGhlIHJpZ2h0LCBhbmQgcG9zaXRpdmUgdmVsb2NpdHlcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICggZGlzdGFuY2UgPCAwICYmIGRlbHRhIDwgMCApIHtcbiAgICAvLyBib29zdCB0byBwcmV2aW91cyBpZiBtb3ZpbmcgdG93YXJkcyB0aGUgbGVmdCwgYW5kIG5lZ2F0aXZlIHZlbG9jaXR5XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuLy8gLS0tLS0gc3RhdGljQ2xpY2sgLS0tLS0gLy9cblxucHJvdG8uc3RhdGljQ2xpY2sgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIC8vIGdldCBjbGlja2VkQ2VsbCwgaWYgY2VsbCB3YXMgY2xpY2tlZFxuICB2YXIgY2xpY2tlZENlbGwgPSB0aGlzLmdldFBhcmVudENlbGwoIGV2ZW50LnRhcmdldCApO1xuICB2YXIgY2VsbEVsZW0gPSBjbGlja2VkQ2VsbCAmJiBjbGlja2VkQ2VsbC5lbGVtZW50O1xuICB2YXIgY2VsbEluZGV4ID0gY2xpY2tlZENlbGwgJiYgdGhpcy5jZWxscy5pbmRleE9mKCBjbGlja2VkQ2VsbCApO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdzdGF0aWNDbGljaycsIGV2ZW50LCBbIHBvaW50ZXIsIGNlbGxFbGVtLCBjZWxsSW5kZXggXSApO1xufTtcblxuLy8gLS0tLS0gc2Nyb2xsIC0tLS0tIC8vXG5cbnByb3RvLm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzY3JvbGwgPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICB2YXIgc2Nyb2xsTW92ZVggPSB0aGlzLnBvaW50ZXJEb3duU2Nyb2xsLnggLSBzY3JvbGwueDtcbiAgdmFyIHNjcm9sbE1vdmVZID0gdGhpcy5wb2ludGVyRG93blNjcm9sbC55IC0gc2Nyb2xsLnk7XG4gIC8vIGNhbmNlbCBjbGljay90YXAgaWYgc2Nyb2xsIGlzIHRvbyBtdWNoXG4gIGlmICggTWF0aC5hYnMoIHNjcm9sbE1vdmVYICkgPiAzIHx8IE1hdGguYWJzKCBzY3JvbGxNb3ZlWSApID4gMyApIHtcbiAgICB0aGlzLl9wb2ludGVyRG9uZSgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSB1dGlscyAtLS0tLSAvL1xuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH07XG59XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2RyYWcuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2RyYWcuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRmxpY2tpdHkgbWFpblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInLFxuICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscycsXG4gICAgICAnLi9jZWxsJyxcbiAgICAgICcuL3NsaWRlJyxcbiAgICAgICcuL2FuaW1hdGUnXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIENlbGwsIFNsaWRlLCBhbmltYXRlUHJvdG90eXBlICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgQ2VsbCwgU2xpZGUsIGFuaW1hdGVQcm90b3R5cGUgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9jZWxsJyksXG4gICAgICByZXF1aXJlKCcuL3NsaWRlJyksXG4gICAgICByZXF1aXJlKCcuL2FuaW1hdGUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB2YXIgX0ZsaWNraXR5ID0gd2luZG93LkZsaWNraXR5O1xuXG4gICAgd2luZG93LkZsaWNraXR5ID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgICBfRmxpY2tpdHkuQ2VsbCxcbiAgICAgIF9GbGlja2l0eS5TbGlkZSxcbiAgICAgIF9GbGlja2l0eS5hbmltYXRlUHJvdG90eXBlXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCBnZXRTaXplLFxuICB1dGlscywgQ2VsbCwgU2xpZGUsIGFuaW1hdGVQcm90b3R5cGUgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gdmFyc1xudmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG52YXIgZ2V0Q29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlO1xudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcblxuZnVuY3Rpb24gbW92ZUVsZW1lbnRzKCBlbGVtcywgdG9FbGVtICkge1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgd2hpbGUgKCBlbGVtcy5sZW5ndGggKSB7XG4gICAgdG9FbGVtLmFwcGVuZENoaWxkKCBlbGVtcy5zaGlmdCgpICk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmxpY2tpdHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG52YXIgR1VJRCA9IDA7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgRmxpY2tpdHkgaW50YW5jZXNcbnZhciBpbnN0YW5jZXMgPSB7fTtcblxuZnVuY3Rpb24gRmxpY2tpdHkoIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIHZhciBxdWVyeUVsZW1lbnQgPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnQgKTtcbiAgaWYgKCAhcXVlcnlFbGVtZW50ICkge1xuICAgIGlmICggY29uc29sZSApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoICdCYWQgZWxlbWVudCBmb3IgRmxpY2tpdHk6ICcgKyAoIHF1ZXJ5RWxlbWVudCB8fCBlbGVtZW50ICkgKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudCA9IHF1ZXJ5RWxlbWVudDtcbiAgLy8gZG8gbm90IGluaXRpYWxpemUgdHdpY2Ugb24gc2FtZSBlbGVtZW50XG4gIGlmICggdGhpcy5lbGVtZW50LmZsaWNraXR5R1VJRCApIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZXNbIHRoaXMuZWxlbWVudC5mbGlja2l0eUdVSUQgXTtcbiAgICBpbnN0YW5jZS5vcHRpb24oIG9wdGlvbnMgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvLyBhZGQgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICB9XG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuZXh0ZW5kKCB7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0cyApO1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuXG4gIC8vIGtpY2sgdGhpbmdzIG9mZlxuICB0aGlzLl9jcmVhdGUoKTtcbn1cblxuRmxpY2tpdHkuZGVmYXVsdHMgPSB7XG4gIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gIC8vIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgY2VsbEFsaWduOiAnY2VudGVyJyxcbiAgLy8gY2VsbFNlbGVjdG9yOiB1bmRlZmluZWQsXG4gIC8vIGNvbnRhaW46IGZhbHNlLFxuICBmcmVlU2Nyb2xsRnJpY3Rpb246IDAuMDc1LCAvLyBmcmljdGlvbiB3aGVuIGZyZWUtc2Nyb2xsaW5nXG4gIGZyaWN0aW9uOiAwLjI4LCAvLyBmcmljdGlvbiB3aGVuIHNlbGVjdGluZ1xuICBuYW1lc3BhY2VKUXVlcnlFdmVudHM6IHRydWUsXG4gIC8vIGluaXRpYWxJbmRleDogMCxcbiAgcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxuICByZXNpemU6IHRydWUsXG4gIHNlbGVjdGVkQXR0cmFjdGlvbjogMC4wMjUsXG4gIHNldEdhbGxlcnlTaXplOiB0cnVlXG4gIC8vIHdhdGNoQ1NTOiBmYWxzZSxcbiAgLy8gd3JhcEFyb3VuZDogZmFsc2Vcbn07XG5cbi8vIGhhc2ggb2YgbWV0aG9kcyB0cmlnZ2VyZWQgb24gX2NyZWF0ZSgpXG5GbGlja2l0eS5jcmVhdGVNZXRob2RzID0gW107XG5cbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcbi8vIGluaGVyaXQgRXZlbnRFbWl0dGVyXG51dGlscy5leHRlbmQoIHByb3RvLCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gYWRkIGlkIGZvciBGbGlja2l0eS5kYXRhXG4gIHZhciBpZCA9IHRoaXMuZ3VpZCA9ICsrR1VJRDtcbiAgdGhpcy5lbGVtZW50LmZsaWNraXR5R1VJRCA9IGlkOyAvLyBleHBhbmRvXG4gIGluc3RhbmNlc1sgaWQgXSA9IHRoaXM7IC8vIGFzc29jaWF0ZSB2aWEgaWRcbiAgLy8gaW5pdGlhbCBwcm9wZXJ0aWVzXG4gIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gIC8vIGhvdyBtYW55IGZyYW1lcyBzbGlkZXIgaGFzIGJlZW4gaW4gc2FtZSBwb3NpdGlvblxuICB0aGlzLnJlc3RpbmdGcmFtZXMgPSAwO1xuICAvLyBpbml0aWFsIHBoeXNpY3MgcHJvcGVydGllc1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgdGhpcy5vcmlnaW5TaWRlID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0ID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgLy8gY3JlYXRlIHZpZXdwb3J0ICYgc2xpZGVyXG4gIHRoaXMudmlld3BvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGhpcy52aWV3cG9ydC5jbGFzc05hbWUgPSAnZmxpY2tpdHktdmlld3BvcnQnO1xuICB0aGlzLl9jcmVhdGVTbGlkZXIoKTtcblxuICBpZiAoIHRoaXMub3B0aW9ucy5yZXNpemUgfHwgdGhpcy5vcHRpb25zLndhdGNoQ1NTICkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcyApO1xuICB9XG5cbiAgRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5mb3JFYWNoKCBmdW5jdGlvbiggbWV0aG9kICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCk7XG4gIH0sIHRoaXMgKTtcblxuICBpZiAoIHRoaXMub3B0aW9ucy53YXRjaENTUyApIHtcbiAgICB0aGlzLndhdGNoQ1NTKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hY3RpdmF0ZSgpO1xuICB9XG5cbn07XG5cbi8qKlxuICogc2V0IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKi9cbnByb3RvLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICB1dGlscy5leHRlbmQoIHRoaXMub3B0aW9ucywgb3B0cyApO1xufTtcblxucHJvdG8uYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzQWN0aXZlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZsaWNraXR5LWVuYWJsZWQnKTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZsaWNraXR5LXJ0bCcpO1xuICB9XG5cbiAgdGhpcy5nZXRTaXplKCk7XG4gIC8vIG1vdmUgaW5pdGlhbCBjZWxsIGVsZW1lbnRzIHNvIHRoZXkgY2FuIGJlIGxvYWRlZCBhcyBjZWxsc1xuICB2YXIgY2VsbEVsZW1zID0gdGhpcy5fZmlsdGVyRmluZENlbGxFbGVtZW50cyggdGhpcy5lbGVtZW50LmNoaWxkcmVuICk7XG4gIG1vdmVFbGVtZW50cyggY2VsbEVsZW1zLCB0aGlzLnNsaWRlciApO1xuICB0aGlzLnZpZXdwb3J0LmFwcGVuZENoaWxkKCB0aGlzLnNsaWRlciApO1xuICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoIHRoaXMudmlld3BvcnQgKTtcbiAgLy8gZ2V0IGNlbGxzIGZyb20gY2hpbGRyZW5cbiAgdGhpcy5yZWxvYWRDZWxscygpO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgKSB7XG4gICAgLy8gYWxsb3cgZWxlbWVudCB0byBmb2N1c2FibGVcbiAgICB0aGlzLmVsZW1lbnQudGFiSW5kZXggPSAwO1xuICAgIC8vIGxpc3RlbiBmb3Iga2V5IHByZXNzZXNcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzICk7XG4gIH1cblxuICB0aGlzLmVtaXRFdmVudCgnYWN0aXZhdGUnKTtcblxuICB2YXIgaW5kZXg7XG4gIHZhciBpbml0aWFsSW5kZXggPSB0aGlzLm9wdGlvbnMuaW5pdGlhbEluZGV4O1xuICBpZiAoIHRoaXMuaXNJbml0QWN0aXZhdGVkICkge1xuICAgIGluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICB9IGVsc2UgaWYgKCBpbml0aWFsSW5kZXggIT09IHVuZGVmaW5lZCApIHtcbiAgICBpbmRleCA9IHRoaXMuY2VsbHNbIGluaXRpYWxJbmRleCBdID8gaW5pdGlhbEluZGV4IDogMDtcbiAgfSBlbHNlIHtcbiAgICBpbmRleCA9IDA7XG4gIH1cbiAgLy8gc2VsZWN0IGluc3RhbnRseVxuICB0aGlzLnNlbGVjdCggaW5kZXgsIGZhbHNlLCB0cnVlICk7XG4gIC8vIGZsYWcgZm9yIGluaXRpYWwgYWN0aXZhdGlvbiwgZm9yIHVzaW5nIGluaXRpYWxJbmRleFxuICB0aGlzLmlzSW5pdEFjdGl2YXRlZCA9IHRydWU7XG59O1xuXG4vLyBzbGlkZXIgcG9zaXRpb25zIHRoZSBjZWxsc1xucHJvdG8uX2NyZWF0ZVNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAvLyBzbGlkZXIgZWxlbWVudCBkb2VzIGFsbCB0aGUgcG9zaXRpb25pbmdcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzbGlkZXIuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LXNsaWRlcic7XG4gIHNsaWRlci5zdHlsZVsgdGhpcy5vcmlnaW5TaWRlIF0gPSAwO1xuICB0aGlzLnNsaWRlciA9IHNsaWRlcjtcbn07XG5cbnByb3RvLl9maWx0ZXJGaW5kQ2VsbEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICByZXR1cm4gdXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzKCBlbGVtcywgdGhpcy5vcHRpb25zLmNlbGxTZWxlY3RvciApO1xufTtcblxuLy8gZ29lcyB0aHJvdWdoIGFsbCBjaGlsZHJlblxucHJvdG8ucmVsb2FkQ2VsbHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gIHRoaXMuY2VsbHMgPSB0aGlzLl9tYWtlQ2VsbHMoIHRoaXMuc2xpZGVyLmNoaWxkcmVuICk7XG4gIHRoaXMucG9zaXRpb25DZWxscygpO1xuICB0aGlzLl9nZXRXcmFwU2hpZnRDZWxscygpO1xuICB0aGlzLnNldEdhbGxlcnlTaXplKCk7XG59O1xuXG4vKipcbiAqIHR1cm4gZWxlbWVudHMgaW50byBGbGlja2l0eS5DZWxsc1xuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBIVE1MRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBjb2xsZWN0aW9uIG9mIG5ldyBGbGlja2l0eSBDZWxsc1xuICovXG5wcm90by5fbWFrZUNlbGxzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgY2VsbEVsZW1zID0gdGhpcy5fZmlsdGVyRmluZENlbGxFbGVtZW50cyggZWxlbXMgKTtcblxuICAvLyBjcmVhdGUgbmV3IEZsaWNraXR5IGZvciBjb2xsZWN0aW9uXG4gIHZhciBjZWxscyA9IGNlbGxFbGVtcy5tYXAoIGZ1bmN0aW9uKCBjZWxsRWxlbSApIHtcbiAgICByZXR1cm4gbmV3IENlbGwoIGNlbGxFbGVtLCB0aGlzICk7XG4gIH0sIHRoaXMgKTtcblxuICByZXR1cm4gY2VsbHM7XG59O1xuXG5wcm90by5nZXRMYXN0Q2VsbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jZWxsc1sgdGhpcy5jZWxscy5sZW5ndGggLSAxIF07XG59O1xuXG5wcm90by5nZXRMYXN0U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2xpZGVzWyB0aGlzLnNsaWRlcy5sZW5ndGggLSAxIF07XG59O1xuXG4vLyBwb3NpdGlvbnMgYWxsIGNlbGxzXG5wcm90by5wb3NpdGlvbkNlbGxzID0gZnVuY3Rpb24oKSB7XG4gIC8vIHNpemUgYWxsIGNlbGxzXG4gIHRoaXMuX3NpemVDZWxscyggdGhpcy5jZWxscyApO1xuICAvLyBwb3NpdGlvbiBhbGwgY2VsbHNcbiAgdGhpcy5fcG9zaXRpb25DZWxscyggMCApO1xufTtcblxuLyoqXG4gKiBwb3NpdGlvbiBjZXJ0YWluIGNlbGxzXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4IC0gd2hpY2ggY2VsbCB0byBzdGFydCB3aXRoXG4gKi9cbnByb3RvLl9wb3NpdGlvbkNlbGxzID0gZnVuY3Rpb24oIGluZGV4ICkge1xuICBpbmRleCA9IGluZGV4IHx8IDA7XG4gIC8vIGFsc28gbWVhc3VyZSBtYXhDZWxsSGVpZ2h0XG4gIC8vIHN0YXJ0IDAgaWYgcG9zaXRpb25pbmcgYWxsIGNlbGxzXG4gIHRoaXMubWF4Q2VsbEhlaWdodCA9IGluZGV4ID8gdGhpcy5tYXhDZWxsSGVpZ2h0IHx8IDAgOiAwO1xuICB2YXIgY2VsbFggPSAwO1xuICAvLyBnZXQgY2VsbFhcbiAgaWYgKCBpbmRleCA+IDAgKSB7XG4gICAgdmFyIHN0YXJ0Q2VsbCA9IHRoaXMuY2VsbHNbIGluZGV4IC0gMSBdO1xuICAgIGNlbGxYID0gc3RhcnRDZWxsLnggKyBzdGFydENlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB9XG4gIHZhciBsZW4gPSB0aGlzLmNlbGxzLmxlbmd0aDtcbiAgZm9yICggdmFyIGk9aW5kZXg7IGkgPCBsZW47IGkrKyApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbHNbaV07XG4gICAgY2VsbC5zZXRQb3NpdGlvbiggY2VsbFggKTtcbiAgICBjZWxsWCArPSBjZWxsLnNpemUub3V0ZXJXaWR0aDtcbiAgICB0aGlzLm1heENlbGxIZWlnaHQgPSBNYXRoLm1heCggY2VsbC5zaXplLm91dGVySGVpZ2h0LCB0aGlzLm1heENlbGxIZWlnaHQgKTtcbiAgfVxuICAvLyBrZWVwIHRyYWNrIG9mIGNlbGxYIGZvciB3cmFwLWFyb3VuZFxuICB0aGlzLnNsaWRlYWJsZVdpZHRoID0gY2VsbFg7XG4gIC8vIHNsaWRlc1xuICB0aGlzLnVwZGF0ZVNsaWRlcygpO1xuICAvLyBjb250YWluIHNsaWRlcyB0YXJnZXRcbiAgdGhpcy5fY29udGFpblNsaWRlcygpO1xuICAvLyB1cGRhdGUgc2xpZGVzV2lkdGhcbiAgdGhpcy5zbGlkZXNXaWR0aCA9IGxlbiA/IHRoaXMuZ2V0TGFzdFNsaWRlKCkudGFyZ2V0IC0gdGhpcy5zbGlkZXNbMF0udGFyZ2V0IDogMDtcbn07XG5cbi8qKlxuICogY2VsbC5nZXRTaXplKCkgb24gbXVsdGlwbGUgY2VsbHNcbiAqIEBwYXJhbSB7QXJyYXl9IGNlbGxzXG4gKi9cbnByb3RvLl9zaXplQ2VsbHMgPSBmdW5jdGlvbiggY2VsbHMgKSB7XG4gIGNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwuZ2V0U2l6ZSgpO1xuICB9KTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51cGRhdGVTbGlkZXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zbGlkZXMgPSBbXTtcbiAgaWYgKCAhdGhpcy5jZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNsaWRlID0gbmV3IFNsaWRlKCB0aGlzICk7XG4gIHRoaXMuc2xpZGVzLnB1c2goIHNsaWRlICk7XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLm9yaWdpblNpZGUgPT0gJ2xlZnQnO1xuICB2YXIgbmV4dE1hcmdpbiA9IGlzT3JpZ2luTGVmdCA/ICdtYXJnaW5SaWdodCcgOiAnbWFyZ2luTGVmdCc7XG5cbiAgdmFyIGNhbkNlbGxGaXQgPSB0aGlzLl9nZXRDYW5DZWxsRml0KCk7XG5cbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCwgaSApIHtcbiAgICAvLyBqdXN0IGFkZCBjZWxsIGlmIGZpcnN0IGNlbGwgaW4gc2xpZGVcbiAgICBpZiAoICFzbGlkZS5jZWxscy5sZW5ndGggKSB7XG4gICAgICBzbGlkZS5hZGRDZWxsKCBjZWxsICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNsaWRlV2lkdGggPSAoIHNsaWRlLm91dGVyV2lkdGggLSBzbGlkZS5maXJzdE1hcmdpbiApICtcbiAgICAgICggY2VsbC5zaXplLm91dGVyV2lkdGggLSBjZWxsLnNpemVbIG5leHRNYXJnaW4gXSApO1xuXG4gICAgaWYgKCBjYW5DZWxsRml0LmNhbGwoIHRoaXMsIGksIHNsaWRlV2lkdGggKSApIHtcbiAgICAgIHNsaWRlLmFkZENlbGwoIGNlbGwgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9lc24ndCBmaXQsIG5ldyBzbGlkZVxuICAgICAgc2xpZGUudXBkYXRlVGFyZ2V0KCk7XG5cbiAgICAgIHNsaWRlID0gbmV3IFNsaWRlKCB0aGlzICk7XG4gICAgICB0aGlzLnNsaWRlcy5wdXNoKCBzbGlkZSApO1xuICAgICAgc2xpZGUuYWRkQ2VsbCggY2VsbCApO1xuICAgIH1cbiAgfSwgdGhpcyApO1xuICAvLyBsYXN0IHNsaWRlXG4gIHNsaWRlLnVwZGF0ZVRhcmdldCgpO1xuICAvLyB1cGRhdGUgLnNlbGVjdGVkU2xpZGVcbiAgdGhpcy51cGRhdGVTZWxlY3RlZFNsaWRlKCk7XG59O1xuXG5wcm90by5fZ2V0Q2FuQ2VsbEZpdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ3JvdXBDZWxscyA9IHRoaXMub3B0aW9ucy5ncm91cENlbGxzO1xuICBpZiAoICFncm91cENlbGxzICkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgZ3JvdXBDZWxscyA9PSAnbnVtYmVyJyApIHtcbiAgICAvLyBncm91cCBieSBudW1iZXIuIDMgLT4gWzAsMSwyXSwgWzMsNCw1XSwgLi4uXG4gICAgdmFyIG51bWJlciA9IHBhcnNlSW50KCBncm91cENlbGxzLCAxMCApO1xuICAgIHJldHVybiBmdW5jdGlvbiggaSApIHtcbiAgICAgIHJldHVybiAoIGkgJSBudW1iZXIgKSAhPT0gMDtcbiAgICB9O1xuICB9XG4gIC8vIGRlZmF1bHQsIGdyb3VwIGJ5IHdpZHRoIG9mIHNsaWRlXG4gIC8vIHBhcnNlICc3NSVcbiAgdmFyIHBlcmNlbnRNYXRjaCA9IHR5cGVvZiBncm91cENlbGxzID09ICdzdHJpbmcnICYmXG4gICAgZ3JvdXBDZWxscy5tYXRjaCgvXihcXGQrKSUkLyk7XG4gIHZhciBwZXJjZW50ID0gcGVyY2VudE1hdGNoID8gcGFyc2VJbnQoIHBlcmNlbnRNYXRjaFsxXSwgMTAgKSAvIDEwMCA6IDE7XG4gIHJldHVybiBmdW5jdGlvbiggaSwgc2xpZGVXaWR0aCApIHtcbiAgICByZXR1cm4gc2xpZGVXaWR0aCA8PSAoIHRoaXMuc2l6ZS5pbm5lcldpZHRoICsgMSApICogcGVyY2VudDtcbiAgfTtcbn07XG5cbi8vIGFsaWFzIF9pbml0IGZvciBqUXVlcnkgcGx1Z2luIC5mbGlja2l0eSgpXG5wcm90by5faW5pdCA9XG5wcm90by5yZXBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucG9zaXRpb25DZWxscygpO1xuICB0aGlzLnBvc2l0aW9uU2xpZGVyQXRTZWxlY3RlZCgpO1xufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbiAgdGhpcy5zZXRDZWxsQWxpZ24oKTtcbiAgdGhpcy5jdXJzb3JQb3NpdGlvbiA9IHRoaXMuc2l6ZS5pbm5lcldpZHRoICogdGhpcy5jZWxsQWxpZ247XG59O1xuXG52YXIgY2VsbEFsaWduU2hvcnRoYW5kcyA9IHtcbiAgLy8gY2VsbCBhbGlnbiwgdGhlbiBiYXNlZCBvbiBvcmlnaW4gc2lkZVxuICBjZW50ZXI6IHtcbiAgICBsZWZ0OiAwLjUsXG4gICAgcmlnaHQ6IDAuNVxuICB9LFxuICBsZWZ0OiB7XG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMVxuICB9LFxuICByaWdodDoge1xuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6IDFcbiAgfVxufTtcblxucHJvdG8uc2V0Q2VsbEFsaWduID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaG9ydGhhbmQgPSBjZWxsQWxpZ25TaG9ydGhhbmRzWyB0aGlzLm9wdGlvbnMuY2VsbEFsaWduIF07XG4gIHRoaXMuY2VsbEFsaWduID0gc2hvcnRoYW5kID8gc2hvcnRoYW5kWyB0aGlzLm9yaWdpblNpZGUgXSA6IHRoaXMub3B0aW9ucy5jZWxsQWxpZ247XG59O1xuXG5wcm90by5zZXRHYWxsZXJ5U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMub3B0aW9ucy5zZXRHYWxsZXJ5U2l6ZSApIHtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ICYmIHRoaXMuc2VsZWN0ZWRTbGlkZSA/XG4gICAgICB0aGlzLnNlbGVjdGVkU2xpZGUuaGVpZ2h0IDogdGhpcy5tYXhDZWxsSGVpZ2h0O1xuICAgIHRoaXMudmlld3BvcnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgfVxufTtcblxucHJvdG8uX2dldFdyYXBTaGlmdENlbGxzID0gZnVuY3Rpb24oKSB7XG4gIC8vIG9ubHkgZm9yIHdyYXAtYXJvdW5kXG4gIGlmICggIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB1bnNoaWZ0IHByZXZpb3VzIGNlbGxzXG4gIHRoaXMuX3Vuc2hpZnRDZWxscyggdGhpcy5iZWZvcmVTaGlmdENlbGxzICk7XG4gIHRoaXMuX3Vuc2hpZnRDZWxscyggdGhpcy5hZnRlclNoaWZ0Q2VsbHMgKTtcbiAgLy8gZ2V0IGJlZm9yZSBjZWxsc1xuICAvLyBpbml0aWFsIGdhcFxuICB2YXIgZ2FwWCA9IHRoaXMuY3Vyc29yUG9zaXRpb247XG4gIHZhciBjZWxsSW5kZXggPSB0aGlzLmNlbGxzLmxlbmd0aCAtIDE7XG4gIHRoaXMuYmVmb3JlU2hpZnRDZWxscyA9IHRoaXMuX2dldEdhcENlbGxzKCBnYXBYLCBjZWxsSW5kZXgsIC0xICk7XG4gIC8vIGdldCBhZnRlciBjZWxsc1xuICAvLyBlbmRpbmcgZ2FwIGJldHdlZW4gbGFzdCBjZWxsIGFuZCBlbmQgb2YgZ2FsbGVyeSB2aWV3cG9ydFxuICBnYXBYID0gdGhpcy5zaXplLmlubmVyV2lkdGggLSB0aGlzLmN1cnNvclBvc2l0aW9uO1xuICAvLyBzdGFydCBjbG9uaW5nIGF0IGZpcnN0IGNlbGwsIHdvcmtpbmcgZm9yd2FyZHNcbiAgdGhpcy5hZnRlclNoaWZ0Q2VsbHMgPSB0aGlzLl9nZXRHYXBDZWxscyggZ2FwWCwgMCwgMSApO1xufTtcblxucHJvdG8uX2dldEdhcENlbGxzID0gZnVuY3Rpb24oIGdhcFgsIGNlbGxJbmRleCwgaW5jcmVtZW50ICkge1xuICAvLyBrZWVwIGFkZGluZyBjZWxscyB1bnRpbCB0aGUgY292ZXIgdGhlIGluaXRpYWwgZ2FwXG4gIHZhciBjZWxscyA9IFtdO1xuICB3aGlsZSAoIGdhcFggPiAwICkge1xuICAgIHZhciBjZWxsID0gdGhpcy5jZWxsc1sgY2VsbEluZGV4IF07XG4gICAgaWYgKCAhY2VsbCApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjZWxscy5wdXNoKCBjZWxsICk7XG4gICAgY2VsbEluZGV4ICs9IGluY3JlbWVudDtcbiAgICBnYXBYIC09IGNlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB9XG4gIHJldHVybiBjZWxscztcbn07XG5cbi8vIC0tLS0tIGNvbnRhaW4gLS0tLS0gLy9cblxuLy8gY29udGFpbiBjZWxsIHRhcmdldHMgc28gbm8gZXhjZXNzIHNsaWRpbmdcbnByb3RvLl9jb250YWluU2xpZGVzID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5jb250YWluIHx8IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kIHx8ICF0aGlzLmNlbGxzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGlzUmlnaHRUb0xlZnQgPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQ7XG4gIHZhciBiZWdpbk1hcmdpbiA9IGlzUmlnaHRUb0xlZnQgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnO1xuICB2YXIgZW5kTWFyZ2luID0gaXNSaWdodFRvTGVmdCA/ICdtYXJnaW5MZWZ0JyA6ICdtYXJnaW5SaWdodCc7XG4gIHZhciBjb250ZW50V2lkdGggPSB0aGlzLnNsaWRlYWJsZVdpZHRoIC0gdGhpcy5nZXRMYXN0Q2VsbCgpLnNpemVbIGVuZE1hcmdpbiBdO1xuICAvLyBjb250ZW50IGlzIGxlc3MgdGhhbiBnYWxsZXJ5IHNpemVcbiAgdmFyIGlzQ29udGVudFNtYWxsZXIgPSBjb250ZW50V2lkdGggPCB0aGlzLnNpemUuaW5uZXJXaWR0aDtcbiAgLy8gYm91bmRzXG4gIHZhciBiZWdpbkJvdW5kID0gdGhpcy5jdXJzb3JQb3NpdGlvbiArIHRoaXMuY2VsbHNbMF0uc2l6ZVsgYmVnaW5NYXJnaW4gXTtcbiAgdmFyIGVuZEJvdW5kID0gY29udGVudFdpZHRoIC0gdGhpcy5zaXplLmlubmVyV2lkdGggKiAoIDEgLSB0aGlzLmNlbGxBbGlnbiApO1xuICAvLyBjb250YWluIGVhY2ggY2VsbCB0YXJnZXRcbiAgdGhpcy5zbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRlICkge1xuICAgIGlmICggaXNDb250ZW50U21hbGxlciApIHtcbiAgICAgIC8vIGFsbCBjZWxscyBmaXQgaW5zaWRlIGdhbGxlcnlcbiAgICAgIHNsaWRlLnRhcmdldCA9IGNvbnRlbnRXaWR0aCAqIHRoaXMuY2VsbEFsaWduO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb250YWluIHRvIGJvdW5kc1xuICAgICAgc2xpZGUudGFyZ2V0ID0gTWF0aC5tYXgoIHNsaWRlLnRhcmdldCwgYmVnaW5Cb3VuZCApO1xuICAgICAgc2xpZGUudGFyZ2V0ID0gTWF0aC5taW4oIHNsaWRlLnRhcmdldCwgZW5kQm91bmQgKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG4vKipcbiAqIGVtaXRzIGV2ZW50cyB2aWEgZXZlbnRFbWl0dGVyIGFuZCBqUXVlcnkgZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIG5hbWUgb2YgZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gb3JpZ2luYWwgZXZlbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgLSBleHRyYSBhcmd1bWVudHNcbiAqL1xucHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgYXJncyApIHtcbiAgdmFyIGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcblxuICBpZiAoIGpRdWVyeSAmJiB0aGlzLiRlbGVtZW50ICkge1xuICAgIC8vIGRlZmF1bHQgdHJpZ2dlciB3aXRoIHR5cGUgaWYgbm8gZXZlbnRcbiAgICB0eXBlICs9IHRoaXMub3B0aW9ucy5uYW1lc3BhY2VKUXVlcnlFdmVudHMgPyAnLmZsaWNraXR5JyA6ICcnO1xuICAgIHZhciAkZXZlbnQgPSB0eXBlO1xuICAgIGlmICggZXZlbnQgKSB7XG4gICAgICAvLyBjcmVhdGUgalF1ZXJ5IGV2ZW50XG4gICAgICB2YXIgalFFdmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnQgKTtcbiAgICAgIGpRRXZlbnQudHlwZSA9IHR5cGU7XG4gICAgICAkZXZlbnQgPSBqUUV2ZW50O1xuICAgIH1cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZWxlY3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4IC0gaW5kZXggb2YgdGhlIHNsaWRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzV3JhcCAtIHdpbGwgd3JhcC1hcm91bmQgdG8gbGFzdC9maXJzdCBpZiBhdCB0aGUgZW5kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudCAtIHdpbGwgaW1tZWRpYXRlbHkgc2V0IHBvc2l0aW9uIGF0IHNlbGVjdGVkIGNlbGxcbiAqL1xucHJvdG8uc2VsZWN0ID0gZnVuY3Rpb24oIGluZGV4LCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgaWYgKCAhdGhpcy5pc0FjdGl2ZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaW5kZXggPSBwYXJzZUludCggaW5kZXgsIDEwICk7XG4gIHRoaXMuX3dyYXBTZWxlY3QoIGluZGV4ICk7XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCB8fCBpc1dyYXAgKSB7XG4gICAgaW5kZXggPSB1dGlscy5tb2R1bG8oIGluZGV4LCB0aGlzLnNsaWRlcy5sZW5ndGggKTtcbiAgfVxuICAvLyBiYWlsIGlmIGludmFsaWQgaW5kZXhcbiAgaWYgKCAhdGhpcy5zbGlkZXNbIGluZGV4IF0gKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB0aGlzLnVwZGF0ZVNlbGVjdGVkU2xpZGUoKTtcbiAgaWYgKCBpc0luc3RhbnQgKSB7XG4gICAgdGhpcy5wb3NpdGlvblNsaWRlckF0U2VsZWN0ZWQoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gIH1cbiAgaWYgKCB0aGlzLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgKSB7XG4gICAgdGhpcy5zZXRHYWxsZXJ5U2l6ZSgpO1xuICB9XG5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzZWxlY3QnKTtcbiAgLy8gb2xkIHYxIGV2ZW50IG5hbWUsIHJlbW92ZSBpbiB2M1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NlbGxTZWxlY3QnKTtcbn07XG5cbi8vIHdyYXBzIHBvc2l0aW9uIGZvciB3cmFwQXJvdW5kLCB0byBtb3ZlIHRvIGNsb3Nlc3Qgc2xpZGUuICMxMTNcbnByb3RvLl93cmFwU2VsZWN0ID0gZnVuY3Rpb24oIGluZGV4ICkge1xuICB2YXIgbGVuID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICB2YXIgaXNXcmFwcGluZyA9IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kICYmIGxlbiA+IDE7XG4gIGlmICggIWlzV3JhcHBpbmcgKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIHZhciB3cmFwSW5kZXggPSB1dGlscy5tb2R1bG8oIGluZGV4LCBsZW4gKTtcbiAgLy8gZ28gdG8gc2hvcnRlc3RcbiAgdmFyIGRlbHRhID0gTWF0aC5hYnMoIHdyYXBJbmRleCAtIHRoaXMuc2VsZWN0ZWRJbmRleCApO1xuICB2YXIgYmFja1dyYXBEZWx0YSA9IE1hdGguYWJzKCAoIHdyYXBJbmRleCArIGxlbiApIC0gdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIHZhciBmb3Jld2FyZFdyYXBEZWx0YSA9IE1hdGguYWJzKCAoIHdyYXBJbmRleCAtIGxlbiApIC0gdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIGlmICggIXRoaXMuaXNEcmFnU2VsZWN0ICYmIGJhY2tXcmFwRGVsdGEgPCBkZWx0YSApIHtcbiAgICBpbmRleCArPSBsZW47XG4gIH0gZWxzZSBpZiAoICF0aGlzLmlzRHJhZ1NlbGVjdCAmJiBmb3Jld2FyZFdyYXBEZWx0YSA8IGRlbHRhICkge1xuICAgIGluZGV4IC09IGxlbjtcbiAgfVxuICAvLyB3cmFwIHBvc2l0aW9uIHNvIHNsaWRlciBpcyB3aXRoaW4gbm9ybWFsIGFyZWFcbiAgaWYgKCBpbmRleCA8IDAgKSB7XG4gICAgdGhpcy54IC09IHRoaXMuc2xpZGVhYmxlV2lkdGg7XG4gIH0gZWxzZSBpZiAoIGluZGV4ID49IGxlbiApIHtcbiAgICB0aGlzLnggKz0gdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgfVxufTtcblxucHJvdG8ucHJldmlvdXMgPSBmdW5jdGlvbiggaXNXcmFwLCBpc0luc3RhbnQgKSB7XG4gIHRoaXMuc2VsZWN0KCB0aGlzLnNlbGVjdGVkSW5kZXggLSAxLCBpc1dyYXAsIGlzSW5zdGFudCApO1xufTtcblxucHJvdG8ubmV4dCA9IGZ1bmN0aW9uKCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgdGhpcy5zZWxlY3QoIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEsIGlzV3JhcCwgaXNJbnN0YW50ICk7XG59O1xuXG5wcm90by51cGRhdGVTZWxlY3RlZFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzbGlkZSA9IHRoaXMuc2xpZGVzWyB0aGlzLnNlbGVjdGVkSW5kZXggXTtcbiAgLy8gc2VsZWN0ZWRJbmRleCBjb3VsZCBiZSBvdXRzaWRlIG9mIHNsaWRlcywgaWYgdHJpZ2dlcmVkIGJlZm9yZSByZXNpemUoKVxuICBpZiAoICFzbGlkZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdW5zZWxlY3QgcHJldmlvdXMgc2VsZWN0ZWQgc2xpZGVcbiAgdGhpcy51bnNlbGVjdFNlbGVjdGVkU2xpZGUoKTtcbiAgLy8gdXBkYXRlIG5ldyBzZWxlY3RlZCBzbGlkZVxuICB0aGlzLnNlbGVjdGVkU2xpZGUgPSBzbGlkZTtcbiAgc2xpZGUuc2VsZWN0KCk7XG4gIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHNsaWRlLmNlbGxzO1xuICB0aGlzLnNlbGVjdGVkRWxlbWVudHMgPSBzbGlkZS5nZXRDZWxsRWxlbWVudHMoKTtcbiAgLy8gSEFDSzogc2VsZWN0ZWRDZWxsICYgc2VsZWN0ZWRFbGVtZW50IGlzIGZpcnN0IGNlbGwgaW4gc2xpZGUsIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIC8vIFJlbW92ZSBpbiB2Mz9cbiAgdGhpcy5zZWxlY3RlZENlbGwgPSBzbGlkZS5jZWxsc1swXTtcbiAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLnNlbGVjdGVkRWxlbWVudHNbMF07XG59O1xuXG5wcm90by51bnNlbGVjdFNlbGVjdGVkU2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLnNlbGVjdGVkU2xpZGUgKSB7XG4gICAgdGhpcy5zZWxlY3RlZFNsaWRlLnVuc2VsZWN0KCk7XG4gIH1cbn07XG5cbi8qKlxuICogc2VsZWN0IHNsaWRlIGZyb20gbnVtYmVyIG9yIGNlbGwgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50IG9yIE51bWJlcn0gZWxlbVxuICovXG5wcm90by5zZWxlY3RDZWxsID0gZnVuY3Rpb24oIHZhbHVlLCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgLy8gZ2V0IGNlbGxcbiAgdmFyIGNlbGw7XG4gIGlmICggdHlwZW9mIHZhbHVlID09ICdudW1iZXInICkge1xuICAgIGNlbGwgPSB0aGlzLmNlbGxzWyB2YWx1ZSBdO1xuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBzdHJpbmcgYXMgc2VsZWN0b3JcbiAgICBpZiAoIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyApIHtcbiAgICAgIHZhbHVlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoIHZhbHVlICk7XG4gICAgfVxuICAgIC8vIGdldCBjZWxsIGZyb20gZWxlbWVudFxuICAgIGNlbGwgPSB0aGlzLmdldENlbGwoIHZhbHVlICk7XG4gIH1cbiAgLy8gc2VsZWN0IHNsaWRlIHRoYXQgaGFzIGNlbGxcbiAgZm9yICggdmFyIGk9MDsgY2VsbCAmJiBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIHNsaWRlID0gdGhpcy5zbGlkZXNbaV07XG4gICAgdmFyIGluZGV4ID0gc2xpZGUuY2VsbHMuaW5kZXhPZiggY2VsbCApO1xuICAgIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgICB0aGlzLnNlbGVjdCggaSwgaXNXcmFwLCBpc0luc3RhbnQgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldCBjZWxscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldCBGbGlja2l0eS5DZWxsLCBnaXZlbiBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtGbGlja2l0eS5DZWxsfSBpdGVtXG4gKi9cbnByb3RvLmdldENlbGwgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gbG9vcCB0aHJvdWdoIGNlbGxzIHRvIGdldCB0aGUgb25lIHRoYXQgbWF0Y2hlc1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbHNbaV07XG4gICAgaWYgKCBjZWxsLmVsZW1lbnQgPT0gZWxlbSApIHtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgY29sbGVjdGlvbiBvZiBGbGlja2l0eS5DZWxscywgZ2l2ZW4gRWxlbWVudHNcbiAqIEBwYXJhbSB7RWxlbWVudCwgQXJyYXksIE5vZGVMaXN0fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBjZWxscyAtIEZsaWNraXR5LkNlbGxzXG4gKi9cbnByb3RvLmdldENlbGxzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGNlbGxzID0gW107XG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIHZhciBjZWxsID0gdGhpcy5nZXRDZWxsKCBlbGVtICk7XG4gICAgaWYgKCBjZWxsICkge1xuICAgICAgY2VsbHMucHVzaCggY2VsbCApO1xuICAgIH1cbiAgfSwgdGhpcyApO1xuICByZXR1cm4gY2VsbHM7XG59O1xuXG4vKipcbiAqIGdldCBjZWxsIGVsZW1lbnRzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGNlbGxFbGVtc1xuICovXG5wcm90by5nZXRDZWxsRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2VsbHMubWFwKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICByZXR1cm4gY2VsbC5lbGVtZW50O1xuICB9KTtcbn07XG5cbi8qKlxuICogZ2V0IHBhcmVudCBjZWxsIGZyb20gYW4gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7RmxpY2tpdC5DZWxsfSBjZWxsXG4gKi9cbnByb3RvLmdldFBhcmVudENlbGwgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gZmlyc3QgY2hlY2sgaWYgZWxlbSBpcyBjZWxsXG4gIHZhciBjZWxsID0gdGhpcy5nZXRDZWxsKCBlbGVtICk7XG4gIGlmICggY2VsbCApIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfVxuICAvLyB0cnkgdG8gZ2V0IHBhcmVudCBjZWxsIGVsZW1cbiAgZWxlbSA9IHV0aWxzLmdldFBhcmVudCggZWxlbSwgJy5mbGlja2l0eS1zbGlkZXIgPiAqJyApO1xuICByZXR1cm4gdGhpcy5nZXRDZWxsKCBlbGVtICk7XG59O1xuXG4vKipcbiAqIGdldCBjZWxscyBhZGphY2VudCB0byBhIHNsaWRlXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGFkakNvdW50IC0gbnVtYmVyIG9mIGFkamFjZW50IHNsaWRlc1xuICogQHBhcmFtIHtJbnRlZ2VyfSBpbmRleCAtIGluZGV4IG9mIHNsaWRlIHRvIHN0YXJ0XG4gKiBAcmV0dXJucyB7QXJyYXl9IGNlbGxzIC0gYXJyYXkgb2YgRmxpY2tpdHkuQ2VsbHNcbiAqL1xucHJvdG8uZ2V0QWRqYWNlbnRDZWxsRWxlbWVudHMgPSBmdW5jdGlvbiggYWRqQ291bnQsIGluZGV4ICkge1xuICBpZiAoICFhZGpDb3VudCApIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFNsaWRlLmdldENlbGxFbGVtZW50cygpO1xuICB9XG4gIGluZGV4ID0gaW5kZXggPT09IHVuZGVmaW5lZCA/IHRoaXMuc2VsZWN0ZWRJbmRleCA6IGluZGV4O1xuXG4gIHZhciBsZW4gPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gIGlmICggMSArICggYWRqQ291bnQgKiAyICkgPj0gbGVuICkge1xuICAgIHJldHVybiB0aGlzLmdldENlbGxFbGVtZW50cygpO1xuICB9XG5cbiAgdmFyIGNlbGxFbGVtcyA9IFtdO1xuICBmb3IgKCB2YXIgaSA9IGluZGV4IC0gYWRqQ291bnQ7IGkgPD0gaW5kZXggKyBhZGpDb3VudCA7IGkrKyApIHtcbiAgICB2YXIgc2xpZGVJbmRleCA9IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kID8gdXRpbHMubW9kdWxvKCBpLCBsZW4gKSA6IGk7XG4gICAgdmFyIHNsaWRlID0gdGhpcy5zbGlkZXNbIHNsaWRlSW5kZXggXTtcbiAgICBpZiAoIHNsaWRlICkge1xuICAgICAgY2VsbEVsZW1zID0gY2VsbEVsZW1zLmNvbmNhdCggc2xpZGUuZ2V0Q2VsbEVsZW1lbnRzKCkgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNlbGxFbGVtcztcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51aUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVtaXRFdmVudCgndWlDaGFuZ2UnKTtcbn07XG5cbnByb3RvLmNoaWxkVUlQb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdjaGlsZFVJUG9pbnRlckRvd24nLCBbIGV2ZW50IF0gKTtcbn07XG5cbi8vIC0tLS0tIHJlc2l6ZSAtLS0tLSAvL1xuXG5wcm90by5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLndhdGNoQ1NTKCk7XG4gIHRoaXMucmVzaXplKCk7XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggRmxpY2tpdHksICdvbnJlc2l6ZScsIDE1MCApO1xuXG5wcm90by5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc0FjdGl2ZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5nZXRTaXplKCk7XG4gIC8vIHdyYXAgdmFsdWVzXG4gIGlmICggdGhpcy5vcHRpb25zLndyYXBBcm91bmQgKSB7XG4gICAgdGhpcy54ID0gdXRpbHMubW9kdWxvKCB0aGlzLngsIHRoaXMuc2xpZGVhYmxlV2lkdGggKTtcbiAgfVxuICB0aGlzLnBvc2l0aW9uQ2VsbHMoKTtcbiAgdGhpcy5fZ2V0V3JhcFNoaWZ0Q2VsbHMoKTtcbiAgdGhpcy5zZXRHYWxsZXJ5U2l6ZSgpO1xuICB0aGlzLmVtaXRFdmVudCgncmVzaXplJyk7XG4gIC8vIHVwZGF0ZSBzZWxlY3RlZCBpbmRleCBmb3IgZ3JvdXAgc2xpZGVzLCBpbnN0YW50XG4gIC8vIFRPRE86IHBvc2l0aW9uIGNhbiBiZSBsb3N0IGJldHdlZW4gZ3JvdXBzIG9mIHZhcmlvdXMgbnVtYmVyc1xuICB2YXIgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnRzICYmIHRoaXMuc2VsZWN0ZWRFbGVtZW50c1swXTtcbiAgdGhpcy5zZWxlY3RDZWxsKCBzZWxlY3RlZEVsZW1lbnQsIGZhbHNlLCB0cnVlICk7XG59O1xuXG4vLyB3YXRjaGVzIHRoZSA6YWZ0ZXIgcHJvcGVydHksIGFjdGl2YXRlcy9kZWFjdGl2YXRlc1xucHJvdG8ud2F0Y2hDU1MgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdhdGNoT3B0aW9uID0gdGhpcy5vcHRpb25zLndhdGNoQ1NTO1xuICBpZiAoICF3YXRjaE9wdGlvbiApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgYWZ0ZXJDb250ZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy5lbGVtZW50LCAnOmFmdGVyJyApLmNvbnRlbnQ7XG4gIC8vIGFjdGl2YXRlIGlmIDphZnRlciB7IGNvbnRlbnQ6ICdmbGlja2l0eScgfVxuICBpZiAoIGFmdGVyQ29udGVudC5pbmRleE9mKCdmbGlja2l0eScpICE9IC0xICkge1xuICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgfVxufTtcblxuLy8gLS0tLS0ga2V5ZG93biAtLS0tLSAvL1xuXG4vLyBnbyBwcmV2aW91cy9uZXh0IGlmIGxlZnQvcmlnaHQga2V5cyBwcmVzc2VkXG5wcm90by5vbmtleWRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIG9ubHkgd29yayBpZiBlbGVtZW50IGlzIGluIGZvY3VzXG4gIGlmICggIXRoaXMub3B0aW9ucy5hY2Nlc3NpYmlsaXR5IHx8XG4gICAgKCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gdGhpcy5lbGVtZW50ICkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCBldmVudC5rZXlDb2RlID09IDM3ICkge1xuICAgIC8vIGdvIGxlZnRcbiAgICB2YXIgbGVmdE1ldGhvZCA9IHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCA/ICduZXh0JyA6ICdwcmV2aW91cyc7XG4gICAgdGhpcy51aUNoYW5nZSgpO1xuICAgIHRoaXNbIGxlZnRNZXRob2QgXSgpO1xuICB9IGVsc2UgaWYgKCBldmVudC5rZXlDb2RlID09IDM5ICkge1xuICAgIC8vIGdvIHJpZ2h0XG4gICAgdmFyIHJpZ2h0TWV0aG9kID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0ID8gJ3ByZXZpb3VzJyA6ICduZXh0JztcbiAgICB0aGlzLnVpQ2hhbmdlKCk7XG4gICAgdGhpc1sgcmlnaHRNZXRob2QgXSgpO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZXN0cm95IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGRlYWN0aXZhdGUgYWxsIEZsaWNraXR5IGZ1bmN0aW9uYWxpdHksIGJ1dCBrZWVwIHN0dWZmIGF2YWlsYWJsZVxucHJvdG8uZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzQWN0aXZlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpY2tpdHktZW5hYmxlZCcpO1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpY2tpdHktcnRsJyk7XG4gIC8vIGRlc3Ryb3kgY2VsbHNcbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLmRlc3Ryb3koKTtcbiAgfSk7XG4gIHRoaXMudW5zZWxlY3RTZWxlY3RlZFNsaWRlKCk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCggdGhpcy52aWV3cG9ydCApO1xuICAvLyBtb3ZlIGNoaWxkIGVsZW1lbnRzIGJhY2sgaW50byBlbGVtZW50XG4gIG1vdmVFbGVtZW50cyggdGhpcy5zbGlkZXIuY2hpbGRyZW4sIHRoaXMuZWxlbWVudCApO1xuICBpZiAoIHRoaXMub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ICkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYkluZGV4Jyk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcyApO1xuICB9XG4gIC8vIHNldCBmbGFnc1xuICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIHRoaXMuZW1pdEV2ZW50KCdkZWFjdGl2YXRlJyk7XG59O1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5lbWl0RXZlbnQoJ2Rlc3Ryb3knKTtcbiAgaWYgKCBqUXVlcnkgJiYgdGhpcy4kZWxlbWVudCApIHtcbiAgICBqUXVlcnkucmVtb3ZlRGF0YSggdGhpcy5lbGVtZW50LCAnZmxpY2tpdHknICk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5mbGlja2l0eUdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIHRoaXMuZ3VpZCBdO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJvdG90eXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmV4dGVuZCggcHJvdG8sIGFuaW1hdGVQcm90b3R5cGUgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZXh0cmFzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IEZsaWNraXR5IGluc3RhbmNlIGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7RmxpY2tpdHl9XG4gKi9cbkZsaWNraXR5LmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICB2YXIgaWQgPSBlbGVtICYmIGVsZW0uZmxpY2tpdHlHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxudXRpbHMuaHRtbEluaXQoIEZsaWNraXR5LCAnZmxpY2tpdHknICk7XG5cbmlmICggalF1ZXJ5ICYmIGpRdWVyeS5icmlkZ2V0ICkge1xuICBqUXVlcnkuYnJpZGdldCggJ2ZsaWNraXR5JywgRmxpY2tpdHkgKTtcbn1cblxuLy8gc2V0IGludGVybmFsIGpRdWVyeSwgZm9yIFdlYnBhY2sgKyBqUXVlcnkgdjMsICM0NzhcbkZsaWNraXR5LnNldEpRdWVyeSA9IGZ1bmN0aW9uKCBqcSApIHtcbiAgalF1ZXJ5ID0ganE7XG59O1xuXG5GbGlja2l0eS5DZWxsID0gQ2VsbDtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9mbGlja2l0eS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvZmxpY2tpdHkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBGbGlja2l0eSB2Mi4wLjExXG4gKiBUb3VjaCwgcmVzcG9uc2l2ZSwgZmxpY2thYmxlIGNhcm91c2Vsc1xuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIEZsaWNraXR5IENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcbiAqXG4gKiBodHRwOi8vZmxpY2tpdHkubWV0YWZpenp5LmNvXG4gKiBDb3B5cmlnaHQgMjAxNyBNZXRhZml6enlcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJy4vZmxpY2tpdHknLFxuICAgICAgJy4vZHJhZycsXG4gICAgICAnLi9wcmV2LW5leHQtYnV0dG9uJyxcbiAgICAgICcuL3BhZ2UtZG90cycsXG4gICAgICAnLi9wbGF5ZXInLFxuICAgICAgJy4vYWRkLXJlbW92ZS1jZWxsJyxcbiAgICAgICcuL2xhenlsb2FkJ1xuICAgIF0sIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJy4vZmxpY2tpdHknKSxcbiAgICAgIHJlcXVpcmUoJy4vZHJhZycpLFxuICAgICAgcmVxdWlyZSgnLi9wcmV2LW5leHQtYnV0dG9uJyksXG4gICAgICByZXF1aXJlKCcuL3BhZ2UtZG90cycpLFxuICAgICAgcmVxdWlyZSgnLi9wbGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJy4vYWRkLXJlbW92ZS1jZWxsJyksXG4gICAgICByZXF1aXJlKCcuL2xhenlsb2FkJylcbiAgICApO1xuICB9XG5cbn0pKCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEZsaWNraXR5ICkge1xuICAvKmpzaGludCBzdHJpY3Q6IGZhbHNlKi9cbiAgcmV0dXJuIEZsaWNraXR5O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbGF6eWxvYWRcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApIHtcbid1c2Ugc3RyaWN0JztcblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlTGF6eWxvYWQnKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZUxhenlsb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub24oICdzZWxlY3QnLCB0aGlzLmxhenlMb2FkICk7XG59O1xuXG5wcm90by5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF6eUxvYWQgPSB0aGlzLm9wdGlvbnMubGF6eUxvYWQ7XG4gIGlmICggIWxhenlMb2FkICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBnZXQgYWRqYWNlbnQgY2VsbHMsIHVzZSBsYXp5TG9hZCBvcHRpb24gZm9yIGFkamFjZW50IGNvdW50XG4gIHZhciBhZGpDb3VudCA9IHR5cGVvZiBsYXp5TG9hZCA9PSAnbnVtYmVyJyA/IGxhenlMb2FkIDogMDtcbiAgdmFyIGNlbGxFbGVtcyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxsRWxlbWVudHMoIGFkakNvdW50ICk7XG4gIC8vIGdldCBsYXp5IGltYWdlcyBpbiB0aG9zZSBjZWxsc1xuICB2YXIgbGF6eUltYWdlcyA9IFtdO1xuICBjZWxsRWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGxFbGVtICkge1xuICAgIHZhciBsYXp5Q2VsbEltYWdlcyA9IGdldENlbGxMYXp5SW1hZ2VzKCBjZWxsRWxlbSApO1xuICAgIGxhenlJbWFnZXMgPSBsYXp5SW1hZ2VzLmNvbmNhdCggbGF6eUNlbGxJbWFnZXMgKTtcbiAgfSk7XG4gIC8vIGxvYWQgbGF6eSBpbWFnZXNcbiAgbGF6eUltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbiggaW1nICkge1xuICAgIG5ldyBMYXp5TG9hZGVyKCBpbWcsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xufTtcblxuZnVuY3Rpb24gZ2V0Q2VsbExhenlJbWFnZXMoIGNlbGxFbGVtICkge1xuICAvLyBjaGVjayBpZiBjZWxsIGVsZW1lbnQgaXMgbGF6eSBpbWFnZVxuICBpZiAoIGNlbGxFbGVtLm5vZGVOYW1lID09ICdJTUcnICYmXG4gICAgY2VsbEVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkJykgKSB7XG4gICAgcmV0dXJuIFsgY2VsbEVsZW0gXTtcbiAgfVxuICAvLyBzZWxlY3QgbGF6eSBpbWFnZXMgaW4gY2VsbFxuICB2YXIgaW1ncyA9IGNlbGxFbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkXScpO1xuICByZXR1cm4gdXRpbHMubWFrZUFycmF5KCBpbWdzICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExhenlMb2FkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBjbGFzcyB0byBoYW5kbGUgbG9hZGluZyBpbWFnZXNcbiAqL1xuZnVuY3Rpb24gTGF6eUxvYWRlciggaW1nLCBmbGlja2l0eSApIHtcbiAgdGhpcy5pbWcgPSBpbWc7XG4gIHRoaXMuZmxpY2tpdHkgPSBmbGlja2l0eTtcbiAgdGhpcy5sb2FkKCk7XG59XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgLy8gbG9hZCBpbWFnZVxuICB0aGlzLmltZy5zcmMgPSB0aGlzLmltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQnKTtcbiAgLy8gcmVtb3ZlIGF0dHJcbiAgdGhpcy5pbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkJyk7XG59O1xuXG5MYXp5TG9hZGVyLnByb3RvdHlwZS5vbmxvYWQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuY29tcGxldGUoIGV2ZW50LCAnZmxpY2tpdHktbGF6eWxvYWRlZCcgKTtcbn07XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuY29tcGxldGUoIGV2ZW50LCAnZmxpY2tpdHktbGF6eWVycm9yJyApO1xufTtcblxuTGF6eUxvYWRlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiggZXZlbnQsIGNsYXNzTmFtZSApIHtcbiAgLy8gdW5iaW5kIGV2ZW50c1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuXG4gIHZhciBjZWxsID0gdGhpcy5mbGlja2l0eS5nZXRQYXJlbnRDZWxsKCB0aGlzLmltZyApO1xuICB2YXIgY2VsbEVsZW0gPSBjZWxsICYmIGNlbGwuZWxlbWVudDtcbiAgdGhpcy5mbGlja2l0eS5jZWxsU2l6ZUNoYW5nZSggY2VsbEVsZW0gKTtcblxuICB0aGlzLmltZy5jbGFzc0xpc3QuYWRkKCBjbGFzc05hbWUgKTtcbiAgdGhpcy5mbGlja2l0eS5kaXNwYXRjaEV2ZW50KCAnbGF6eUxvYWQnLCBldmVudCwgY2VsbEVsZW0gKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5GbGlja2l0eS5MYXp5TG9hZGVyID0gTGF6eUxvYWRlcjtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9sYXp5bG9hZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvbGF6eWxvYWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcGFnZSBkb3RzXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJy4vZmxpY2tpdHknLFxuICAgICAgJ3RhcC1saXN0ZW5lci90YXAtbGlzdGVuZXInLFxuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgIF0sIGZ1bmN0aW9uKCBGbGlja2l0eSwgVGFwTGlzdGVuZXIsIHV0aWxzICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFRhcExpc3RlbmVyLCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgndGFwLWxpc3RlbmVyJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRmxpY2tpdHksXG4gICAgICB3aW5kb3cuVGFwTGlzdGVuZXIsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFRhcExpc3RlbmVyLCB1dGlscyApIHtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUGFnZURvdHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBQYWdlRG90cyggcGFyZW50ICkge1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5fY3JlYXRlKCk7XG59XG5cblBhZ2VEb3RzLnByb3RvdHlwZSA9IG5ldyBUYXBMaXN0ZW5lcigpO1xuXG5QYWdlRG90cy5wcm90b3R5cGUuX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjcmVhdGUgaG9sZGVyIGVsZW1lbnRcbiAgdGhpcy5ob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICB0aGlzLmhvbGRlci5jbGFzc05hbWUgPSAnZmxpY2tpdHktcGFnZS1kb3RzJztcbiAgLy8gY3JlYXRlIGRvdHMsIGFycmF5IG9mIGVsZW1lbnRzXG4gIHRoaXMuZG90cyA9IFtdO1xuICAvLyBldmVudHNcbiAgdGhpcy5vbiggJ3RhcCcsIHRoaXMub25UYXAgKTtcbiAgdGhpcy5vbiggJ3BvaW50ZXJEb3duJywgdGhpcy5wYXJlbnQuY2hpbGRVSVBvaW50ZXJEb3duLmJpbmQoIHRoaXMucGFyZW50ICkgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldERvdHMoKTtcbiAgdGhpcy5iaW5kVGFwKCB0aGlzLmhvbGRlciApO1xuICAvLyBhZGQgdG8gRE9NXG4gIHRoaXMucGFyZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQoIHRoaXMuaG9sZGVyICk7XG59O1xuXG5QYWdlRG90cy5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgZnJvbSBET01cbiAgdGhpcy5wYXJlbnQuZWxlbWVudC5yZW1vdmVDaGlsZCggdGhpcy5ob2xkZXIgKTtcbiAgVGFwTGlzdGVuZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCggdGhpcyApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLnNldERvdHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGRpZmZlcmVuY2UgYmV0d2VlbiBudW1iZXIgb2Ygc2xpZGVzIGFuZCBudW1iZXIgb2YgZG90c1xuICB2YXIgZGVsdGEgPSB0aGlzLnBhcmVudC5zbGlkZXMubGVuZ3RoIC0gdGhpcy5kb3RzLmxlbmd0aDtcbiAgaWYgKCBkZWx0YSA+IDAgKSB7XG4gICAgdGhpcy5hZGREb3RzKCBkZWx0YSApO1xuICB9IGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XG4gICAgdGhpcy5yZW1vdmVEb3RzKCAtZGVsdGEgKTtcbiAgfVxufTtcblxuUGFnZURvdHMucHJvdG90eXBlLmFkZERvdHMgPSBmdW5jdGlvbiggY291bnQgKSB7XG4gIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgdmFyIG5ld0RvdHMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IHRoaXMuZG90cy5sZW5ndGg7XG4gIHZhciBtYXggPSBsZW5ndGggKyBjb3VudDtcblxuICBmb3IgKCB2YXIgaSA9IGxlbmd0aDsgaSA8IG1heDsgaSsrICkge1xuICAgIHZhciBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRvdC5jbGFzc05hbWUgPSAnZG90JztcbiAgICBkb3Quc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdQYWdlIGRvdCAnICsgKCBpICsgMSApICk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGRvdCApO1xuICAgIG5ld0RvdHMucHVzaCggZG90ICk7XG4gIH1cblxuICB0aGlzLmhvbGRlci5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcbiAgdGhpcy5kb3RzID0gdGhpcy5kb3RzLmNvbmNhdCggbmV3RG90cyApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLnJlbW92ZURvdHMgPSBmdW5jdGlvbiggY291bnQgKSB7XG4gIC8vIHJlbW92ZSBmcm9tIHRoaXMuZG90cyBjb2xsZWN0aW9uXG4gIHZhciByZW1vdmVEb3RzID0gdGhpcy5kb3RzLnNwbGljZSggdGhpcy5kb3RzLmxlbmd0aCAtIGNvdW50LCBjb3VudCApO1xuICAvLyByZW1vdmUgZnJvbSBET01cbiAgcmVtb3ZlRG90cy5mb3JFYWNoKCBmdW5jdGlvbiggZG90ICkge1xuICAgIHRoaXMuaG9sZGVyLnJlbW92ZUNoaWxkKCBkb3QgKTtcbiAgfSwgdGhpcyApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGVkID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBvbiBwcmV2aW91c1xuICBpZiAoIHRoaXMuc2VsZWN0ZWREb3QgKSB7XG4gICAgdGhpcy5zZWxlY3RlZERvdC5jbGFzc05hbWUgPSAnZG90JztcbiAgICB0aGlzLnNlbGVjdGVkRG90LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gIH1cbiAgLy8gZG9uJ3QgcHJvY2VlZCBpZiBubyBkb3RzXG4gIGlmICggIXRoaXMuZG90cy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuc2VsZWN0ZWREb3QgPSB0aGlzLmRvdHNbIHRoaXMucGFyZW50LnNlbGVjdGVkSW5kZXggXTtcbiAgdGhpcy5zZWxlY3RlZERvdC5jbGFzc05hbWUgPSAnZG90IGlzLXNlbGVjdGVkJztcbiAgdGhpcy5zZWxlY3RlZERvdC5zZXRBdHRyaWJ1dGUoICdhcmlhLWN1cnJlbnQnLCAnc3RlcCcgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5vblRhcCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgLy8gb25seSBjYXJlIGFib3V0IGRvdCBjbGlja3NcbiAgaWYgKCB0YXJnZXQubm9kZU5hbWUgIT0gJ0xJJyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnBhcmVudC51aUNoYW5nZSgpO1xuICB2YXIgaW5kZXggPSB0aGlzLmRvdHMuaW5kZXhPZiggdGFyZ2V0ICk7XG4gIHRoaXMucGFyZW50LnNlbGVjdCggaW5kZXggKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGVhY3RpdmF0ZSgpO1xufTtcblxuRmxpY2tpdHkuUGFnZURvdHMgPSBQYWdlRG90cztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmxpY2tpdHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBGbGlja2l0eS5kZWZhdWx0cywge1xuICBwYWdlRG90czogdHJ1ZVxufSk7XG5cbkZsaWNraXR5LmNyZWF0ZU1ldGhvZHMucHVzaCgnX2NyZWF0ZVBhZ2VEb3RzJyk7XG5cbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZVBhZ2VEb3RzID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5wYWdlRG90cyApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5wYWdlRG90cyA9IG5ldyBQYWdlRG90cyggdGhpcyApO1xuICAvLyBldmVudHNcbiAgdGhpcy5vbiggJ2FjdGl2YXRlJywgdGhpcy5hY3RpdmF0ZVBhZ2VEb3RzICk7XG4gIHRoaXMub24oICdzZWxlY3QnLCB0aGlzLnVwZGF0ZVNlbGVjdGVkUGFnZURvdHMgKTtcbiAgdGhpcy5vbiggJ2NlbGxDaGFuZ2UnLCB0aGlzLnVwZGF0ZVBhZ2VEb3RzICk7XG4gIHRoaXMub24oICdyZXNpemUnLCB0aGlzLnVwZGF0ZVBhZ2VEb3RzICk7XG4gIHRoaXMub24oICdkZWFjdGl2YXRlJywgdGhpcy5kZWFjdGl2YXRlUGFnZURvdHMgKTtcbn07XG5cbnByb3RvLmFjdGl2YXRlUGFnZURvdHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wYWdlRG90cy5hY3RpdmF0ZSgpO1xufTtcblxucHJvdG8udXBkYXRlU2VsZWN0ZWRQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLnVwZGF0ZVNlbGVjdGVkKCk7XG59O1xuXG5wcm90by51cGRhdGVQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLnNldERvdHMoKTtcbn07XG5cbnByb3RvLmRlYWN0aXZhdGVQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLmRlYWN0aXZhdGUoKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5GbGlja2l0eS5QYWdlRG90cyA9IFBhZ2VEb3RzO1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3BhZ2UtZG90cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvcGFnZS1kb3RzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHBsYXllciAmIGF1dG9QbGF5XG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgJy4vZmxpY2tpdHknXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciwgdXRpbHMsIEZsaWNraXR5ICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIEV2RW1pdHRlciwgdXRpbHMsIEZsaWNraXR5ICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICAgIHdpbmRvdy5GbGlja2l0eVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBFdkVtaXR0ZXIsIHV0aWxzLCBGbGlja2l0eSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQYWdlIFZpc2liaWxpdHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL1VzZXJfZXhwZXJpZW5jZS9Vc2luZ190aGVfUGFnZV9WaXNpYmlsaXR5X0FQSVxuXG52YXIgaGlkZGVuUHJvcGVydHksIHZpc2liaWxpdHlFdmVudDtcbmlmICggJ2hpZGRlbicgaW4gZG9jdW1lbnQgKSB7XG4gIGhpZGRlblByb3BlcnR5ID0gJ2hpZGRlbic7XG4gIHZpc2liaWxpdHlFdmVudCA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAoICd3ZWJraXRIaWRkZW4nIGluIGRvY3VtZW50ICkge1xuICBoaWRkZW5Qcm9wZXJ0eSA9ICd3ZWJraXRIaWRkZW4nO1xuICB2aXNpYmlsaXR5RXZlbnQgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBsYXllciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBQbGF5ZXIoIHBhcmVudCApIHtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuc3RhdGUgPSAnc3RvcHBlZCc7XG4gIC8vIHZpc2liaWxpdHkgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgaWYgKCB2aXNpYmlsaXR5RXZlbnQgKSB7XG4gICAgdGhpcy5vblZpc2liaWxpdHlDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZSgpO1xuICAgIH0uYmluZCggdGhpcyApO1xuICAgIHRoaXMub25WaXNpYmlsaXR5UGxheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy52aXNpYmlsaXR5UGxheSgpO1xuICAgIH0uYmluZCggdGhpcyApO1xuICB9XG59XG5cblBsYXllci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8vIHN0YXJ0IHBsYXlcblBsYXllci5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc3RhdGUgPT0gJ3BsYXlpbmcnICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBkbyBub3QgcGxheSBpZiBwYWdlIGlzIGhpZGRlbiwgc3RhcnQgcGxheWluZyB3aGVuIHBhZ2UgaXMgdmlzaWJsZVxuICB2YXIgaXNQYWdlSGlkZGVuID0gZG9jdW1lbnRbIGhpZGRlblByb3BlcnR5IF07XG4gIGlmICggdmlzaWJpbGl0eUV2ZW50ICYmIGlzUGFnZUhpZGRlbiApIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCB2aXNpYmlsaXR5RXZlbnQsIHRoaXMub25WaXNpYmlsaXR5UGxheSApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc3RhdGUgPSAncGxheWluZyc7XG4gIC8vIGxpc3RlbiB0byB2aXNpYmlsaXR5IGNoYW5nZVxuICBpZiAoIHZpc2liaWxpdHlFdmVudCApIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCB2aXNpYmlsaXR5RXZlbnQsIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlICk7XG4gIH1cbiAgLy8gc3RhcnQgdGlja2luZ1xuICB0aGlzLnRpY2soKTtcbn07XG5cblBsYXllci5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xuICAvLyBkbyBub3QgdGljayBpZiBub3QgcGxheWluZ1xuICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3BsYXlpbmcnICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aW1lID0gdGhpcy5wYXJlbnQub3B0aW9ucy5hdXRvUGxheTtcbiAgLy8gZGVmYXVsdCB0byAzIHNlY29uZHNcbiAgdGltZSA9IHR5cGVvZiB0aW1lID09ICdudW1iZXInID8gdGltZSA6IDMwMDA7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIC8vIEhBQ0s6IHJlc2V0IHRpY2tzIGlmIHN0b3BwZWQgYW5kIHN0YXJ0ZWQgd2l0aGluIGludGVydmFsXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMucGFyZW50Lm5leHQoIHRydWUgKTtcbiAgICBfdGhpcy50aWNrKCk7XG4gIH0sIHRpbWUgKTtcbn07XG5cblBsYXllci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnN0YXRlID0gJ3N0b3BwZWQnO1xuICB0aGlzLmNsZWFyKCk7XG4gIC8vIHJlbW92ZSB2aXNpYmlsaXR5IGNoYW5nZSBldmVudFxuICBpZiAoIHZpc2liaWxpdHlFdmVudCApIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB2aXNpYmlsaXR5RXZlbnQsIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlICk7XG4gIH1cbn07XG5cblBsYXllci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgY2xlYXJUaW1lb3V0KCB0aGlzLnRpbWVvdXQgKTtcbn07XG5cblBsYXllci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLnN0YXRlID09ICdwbGF5aW5nJyApIHtcbiAgICB0aGlzLnN0YXRlID0gJ3BhdXNlZCc7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLnVucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmUtc3RhcnQgcGxheSBpZiBwYXVzZWRcbiAgaWYgKCB0aGlzLnN0YXRlID09ICdwYXVzZWQnICkge1xuICAgIHRoaXMucGxheSgpO1xuICB9XG59O1xuXG4vLyBwYXVzZSBpZiBwYWdlIHZpc2liaWxpdHkgaXMgaGlkZGVuLCB1bnBhdXNlIGlmIHZpc2libGVcblBsYXllci5wcm90b3R5cGUudmlzaWJpbGl0eUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXNQYWdlSGlkZGVuID0gZG9jdW1lbnRbIGhpZGRlblByb3BlcnR5IF07XG4gIHRoaXNbIGlzUGFnZUhpZGRlbiA/ICdwYXVzZScgOiAndW5wYXVzZScgXSgpO1xufTtcblxuUGxheWVyLnByb3RvdHlwZS52aXNpYmlsaXR5UGxheSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXkoKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggdmlzaWJpbGl0eUV2ZW50LCB0aGlzLm9uVmlzaWJpbGl0eVBsYXkgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZsaWNraXR5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmV4dGVuZCggRmxpY2tpdHkuZGVmYXVsdHMsIHtcbiAgcGF1c2VBdXRvUGxheU9uSG92ZXI6IHRydWVcbn0pO1xuXG5GbGlja2l0eS5jcmVhdGVNZXRob2RzLnB1c2goJ19jcmVhdGVQbGF5ZXInKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoIHRoaXMgKTtcblxuICB0aGlzLm9uKCAnYWN0aXZhdGUnLCB0aGlzLmFjdGl2YXRlUGxheWVyICk7XG4gIHRoaXMub24oICd1aUNoYW5nZScsIHRoaXMuc3RvcFBsYXllciApO1xuICB0aGlzLm9uKCAncG9pbnRlckRvd24nLCB0aGlzLnN0b3BQbGF5ZXIgKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQbGF5ZXIgKTtcbn07XG5cbnByb3RvLmFjdGl2YXRlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5hdXRvUGxheSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5wbGF5ZXIucGxheSgpO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCB0aGlzICk7XG59O1xuXG4vLyBQbGF5ZXIgQVBJLCBkb24ndCBoYXRlIHRoZSAuLi4gdGhhbmtzIEkga25vdyB3aGVyZSB0aGUgZG9vciBpc1xuXG5wcm90by5wbGF5UGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyLnBsYXkoKTtcbn07XG5cbnByb3RvLnN0b3BQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIuc3RvcCgpO1xufTtcblxucHJvdG8ucGF1c2VQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbn07XG5cbnByb3RvLnVucGF1c2VQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIudW5wYXVzZSgpO1xufTtcblxucHJvdG8uZGVhY3RpdmF0ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllci5zdG9wKCk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2VlbnRlcicsIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tIG1vdXNlZW50ZXIvbGVhdmUgLS0tLS0gLy9cblxuLy8gcGF1c2UgYXV0by1wbGF5IG9uIGhvdmVyXG5wcm90by5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnBhdXNlQXV0b1BsYXlPbkhvdmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCB0aGlzICk7XG59O1xuXG4vLyByZXN1bWUgYXV0by1wbGF5IG9uIGhvdmVyIG9mZlxucHJvdG8ub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyLnVucGF1c2UoKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbkZsaWNraXR5LlBsYXllciA9IFBsYXllcjtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9wbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3BsYXllci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBwcmV2L25leHQgYnV0dG9uc1xuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICd0YXAtbGlzdGVuZXIvdGFwLWxpc3RlbmVyJyxcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscydcbiAgICBdLCBmdW5jdGlvbiggRmxpY2tpdHksIFRhcExpc3RlbmVyLCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBUYXBMaXN0ZW5lciwgdXRpbHMgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJy4vZmxpY2tpdHknKSxcbiAgICAgIHJlcXVpcmUoJ3RhcC1saXN0ZW5lcicpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LlRhcExpc3RlbmVyLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBUYXBMaXN0ZW5lciwgdXRpbHMgKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdmdVUkkgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQcmV2TmV4dEJ1dHRvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBQcmV2TmV4dEJ1dHRvbiggZGlyZWN0aW9uLCBwYXJlbnQgKSB7XG4gIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5fY3JlYXRlKCk7XG59XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZSA9IG5ldyBUYXBMaXN0ZW5lcigpO1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBwcm9wZXJ0aWVzXG4gIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcbiAgdGhpcy5pc1ByZXZpb3VzID0gdGhpcy5kaXJlY3Rpb24gPT0gLTE7XG4gIHZhciBsZWZ0RGlyZWN0aW9uID0gdGhpcy5wYXJlbnQub3B0aW9ucy5yaWdodFRvTGVmdCA/IDEgOiAtMTtcbiAgdGhpcy5pc0xlZnQgPSB0aGlzLmRpcmVjdGlvbiA9PSBsZWZ0RGlyZWN0aW9uO1xuXG4gIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LXByZXYtbmV4dC1idXR0b24nO1xuICBlbGVtZW50LmNsYXNzTmFtZSArPSB0aGlzLmlzUHJldmlvdXMgPyAnIHByZXZpb3VzJyA6ICcgbmV4dCc7XG4gIC8vIHByZXZlbnQgYnV0dG9uIGZyb20gc3VibWl0dGluZyBmb3JtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEwODM2MDc2LzE4MjE4M1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ3R5cGUnLCAnYnV0dG9uJyApO1xuICAvLyBpbml0IGFzIGRpc2FibGVkXG4gIHRoaXMuZGlzYWJsZSgpO1xuXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIHRoaXMuaXNQcmV2aW91cyA/ICdwcmV2aW91cycgOiAnbmV4dCcgKTtcblxuICAvLyBjcmVhdGUgYXJyb3dcbiAgdmFyIHN2ZyA9IHRoaXMuY3JlYXRlU1ZHKCk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoIHN2ZyApO1xuICAvLyBldmVudHNcbiAgdGhpcy5vbiggJ3RhcCcsIHRoaXMub25UYXAgKTtcbiAgdGhpcy5wYXJlbnQub24oICdzZWxlY3QnLCB0aGlzLnVwZGF0ZS5iaW5kKCB0aGlzICkgKTtcbiAgdGhpcy5vbiggJ3BvaW50ZXJEb3duJywgdGhpcy5wYXJlbnQuY2hpbGRVSVBvaW50ZXJEb3duLmJpbmQoIHRoaXMucGFyZW50ICkgKTtcbn07XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmJpbmRUYXAoIHRoaXMuZWxlbWVudCApO1xuICAvLyBjbGljayBldmVudHMgZnJvbSBrZXlib2FyZFxuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcyApO1xuICAvLyBhZGQgdG8gRE9NXG4gIHRoaXMucGFyZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVtb3ZlIGZyb20gRE9NXG4gIHRoaXMucGFyZW50LmVsZW1lbnQucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xuICAvLyBkbyByZWd1bGFyIFRhcExpc3RlbmVyIGRlc3Ryb3lcbiAgVGFwTGlzdGVuZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCggdGhpcyApO1xuICAvLyBjbGljayBldmVudHMgZnJvbSBrZXlib2FyZFxuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcyApO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmNyZWF0ZVNWRyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBzdmdVUkksICdzdmcnKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSggJ3ZpZXdCb3gnLCAnMCAwIDEwMCAxMDAnICk7XG4gIHZhciBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBzdmdVUkksICdwYXRoJyk7XG4gIHZhciBwYXRoTW92ZW1lbnRzID0gZ2V0QXJyb3dNb3ZlbWVudHMoIHRoaXMucGFyZW50Lm9wdGlvbnMuYXJyb3dTaGFwZSApO1xuICBwYXRoLnNldEF0dHJpYnV0ZSggJ2QnLCBwYXRoTW92ZW1lbnRzICk7XG4gIHBhdGguc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnYXJyb3cnICk7XG4gIC8vIHJvdGF0ZSBhcnJvd1xuICBpZiAoICF0aGlzLmlzTGVmdCApIHtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSggJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMTAwLCAxMDApIHJvdGF0ZSgxODApICcgKTtcbiAgfVxuICBzdmcuYXBwZW5kQ2hpbGQoIHBhdGggKTtcbiAgcmV0dXJuIHN2Zztcbn07XG5cbi8vIGdldCBTVkcgcGF0aCBtb3ZtZW1lbnRcbmZ1bmN0aW9uIGdldEFycm93TW92ZW1lbnRzKCBzaGFwZSApIHtcbiAgLy8gdXNlIHNoYXBlIGFzIG1vdmVtZW50IGlmIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBzaGFwZSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gc2hhcGU7XG4gIH1cbiAgLy8gY3JlYXRlIG1vdmVtZW50IHN0cmluZ1xuICByZXR1cm4gJ00gJyArIHNoYXBlLngwICsgJyw1MCcgK1xuICAgICcgTCAnICsgc2hhcGUueDEgKyAnLCcgKyAoIHNoYXBlLnkxICsgNTAgKSArXG4gICAgJyBMICcgKyBzaGFwZS54MiArICcsJyArICggc2hhcGUueTIgKyA1MCApICtcbiAgICAnIEwgJyArIHNoYXBlLngzICsgJyw1MCAnICtcbiAgICAnIEwgJyArIHNoYXBlLngyICsgJywnICsgKCA1MCAtIHNoYXBlLnkyICkgK1xuICAgICcgTCAnICsgc2hhcGUueDEgKyAnLCcgKyAoIDUwIC0gc2hhcGUueTEgKSArXG4gICAgJyBaJztcbn1cblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLm9uVGFwID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuaXNFbmFibGVkICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBhcmVudC51aUNoYW5nZSgpO1xuICB2YXIgbWV0aG9kID0gdGhpcy5pc1ByZXZpb3VzID8gJ3ByZXZpb3VzJyA6ICduZXh0JztcbiAgdGhpcy5wYXJlbnRbIG1ldGhvZCBdKCk7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSB1dGlscy5oYW5kbGVFdmVudDtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgLy8gb25seSBhbGxvdyBjbGlja3MgZnJvbSBrZXlib2FyZFxuICB2YXIgZm9jdXNlZCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIGlmICggZm9jdXNlZCAmJiBmb2N1c2VkID09IHRoaXMuZWxlbWVudCApIHtcbiAgICB0aGlzLm9uVGFwKCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc0VuYWJsZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzRW5hYmxlZCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgdGhpcy5pc0VuYWJsZWQgPSBmYWxzZTtcbn07XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gaW5kZXggb2YgZmlyc3Qgb3IgbGFzdCBzbGlkZSwgaWYgcHJldmlvdXMgb3IgbmV4dFxuICB2YXIgc2xpZGVzID0gdGhpcy5wYXJlbnQuc2xpZGVzO1xuICAvLyBlbmFibGUgaXMgd3JhcEFyb3VuZCBhbmQgYXQgbGVhc3QgMiBzbGlkZXNcbiAgaWYgKCB0aGlzLnBhcmVudC5vcHRpb25zLndyYXBBcm91bmQgJiYgc2xpZGVzLmxlbmd0aCA+IDEgKSB7XG4gICAgdGhpcy5lbmFibGUoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IHNsaWRlcy5sZW5ndGggPyBzbGlkZXMubGVuZ3RoIC0gMSA6IDA7XG4gIHZhciBib3VuZEluZGV4ID0gdGhpcy5pc1ByZXZpb3VzID8gMCA6IGxhc3RJbmRleDtcbiAgdmFyIG1ldGhvZCA9IHRoaXMucGFyZW50LnNlbGVjdGVkSW5kZXggPT0gYm91bmRJbmRleCA/ICdkaXNhYmxlJyA6ICdlbmFibGUnO1xuICB0aGlzWyBtZXRob2QgXSgpO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kZWFjdGl2YXRlKCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGbGlja2l0eSBwcm90b3R5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBGbGlja2l0eS5kZWZhdWx0cywge1xuICBwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXG4gIGFycm93U2hhcGU6IHtcbiAgICB4MDogMTAsXG4gICAgeDE6IDYwLCB5MTogNTAsXG4gICAgeDI6IDcwLCB5MjogNDAsXG4gICAgeDM6IDMwXG4gIH1cbn0pO1xuXG5GbGlja2l0eS5jcmVhdGVNZXRob2RzLnB1c2goJ19jcmVhdGVQcmV2TmV4dEJ1dHRvbnMnKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZVByZXZOZXh0QnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMucHJldk5leHRCdXR0b25zICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMucHJldkJ1dHRvbiA9IG5ldyBQcmV2TmV4dEJ1dHRvbiggLTEsIHRoaXMgKTtcbiAgdGhpcy5uZXh0QnV0dG9uID0gbmV3IFByZXZOZXh0QnV0dG9uKCAxLCB0aGlzICk7XG5cbiAgdGhpcy5vbiggJ2FjdGl2YXRlJywgdGhpcy5hY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyApO1xufTtcblxucHJvdG8uYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcmV2QnV0dG9uLmFjdGl2YXRlKCk7XG4gIHRoaXMubmV4dEJ1dHRvbi5hY3RpdmF0ZSgpO1xuICB0aGlzLm9uKCAnZGVhY3RpdmF0ZScsIHRoaXMuZGVhY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyApO1xufTtcblxucHJvdG8uZGVhY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnByZXZCdXR0b24uZGVhY3RpdmF0ZSgpO1xuICB0aGlzLm5leHRCdXR0b24uZGVhY3RpdmF0ZSgpO1xuICB0aGlzLm9mZiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5GbGlja2l0eS5QcmV2TmV4dEJ1dHRvbiA9IFByZXZOZXh0QnV0dG9uO1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3ByZXYtbmV4dC1idXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3ByZXYtbmV4dC1idXR0b24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2xpZGVcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5GbGlja2l0eSA9IHdpbmRvdy5GbGlja2l0eSB8fCB7fTtcbiAgICB3aW5kb3cuRmxpY2tpdHkuU2xpZGUgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTbGlkZSggcGFyZW50ICkge1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5pc09yaWdpbkxlZnQgPSBwYXJlbnQub3JpZ2luU2lkZSA9PSAnbGVmdCc7XG4gIHRoaXMuY2VsbHMgPSBbXTtcbiAgdGhpcy5vdXRlcldpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xufVxuXG52YXIgcHJvdG8gPSBTbGlkZS5wcm90b3R5cGU7XG5cbnByb3RvLmFkZENlbGwgPSBmdW5jdGlvbiggY2VsbCApIHtcbiAgdGhpcy5jZWxscy5wdXNoKCBjZWxsICk7XG4gIHRoaXMub3V0ZXJXaWR0aCArPSBjZWxsLnNpemUub3V0ZXJXaWR0aDtcbiAgdGhpcy5oZWlnaHQgPSBNYXRoLm1heCggY2VsbC5zaXplLm91dGVySGVpZ2h0LCB0aGlzLmhlaWdodCApO1xuICAvLyBmaXJzdCBjZWxsIHN0dWZmXG4gIGlmICggdGhpcy5jZWxscy5sZW5ndGggPT0gMSApIHtcbiAgICB0aGlzLnggPSBjZWxsLng7IC8vIHggY29tZXMgZnJvbSBmaXJzdCBjZWxsXG4gICAgdmFyIGJlZ2luTWFyZ2luID0gdGhpcy5pc09yaWdpbkxlZnQgPyAnbWFyZ2luTGVmdCcgOiAnbWFyZ2luUmlnaHQnO1xuICAgIHRoaXMuZmlyc3RNYXJnaW4gPSBjZWxsLnNpemVbIGJlZ2luTWFyZ2luIF07XG4gIH1cbn07XG5cbnByb3RvLnVwZGF0ZVRhcmdldCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZW5kTWFyZ2luID0gdGhpcy5pc09yaWdpbkxlZnQgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnO1xuICB2YXIgbGFzdENlbGwgPSB0aGlzLmdldExhc3RDZWxsKCk7XG4gIHZhciBsYXN0TWFyZ2luID0gbGFzdENlbGwgPyBsYXN0Q2VsbC5zaXplWyBlbmRNYXJnaW4gXSA6IDA7XG4gIHZhciBzbGlkZVdpZHRoID0gdGhpcy5vdXRlcldpZHRoIC0gKCB0aGlzLmZpcnN0TWFyZ2luICsgbGFzdE1hcmdpbiApO1xuICB0aGlzLnRhcmdldCA9IHRoaXMueCArIHRoaXMuZmlyc3RNYXJnaW4gKyBzbGlkZVdpZHRoICogdGhpcy5wYXJlbnQuY2VsbEFsaWduO1xufTtcblxucHJvdG8uZ2V0TGFzdENlbGwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2VsbHNbIHRoaXMuY2VsbHMubGVuZ3RoIC0gMSBdO1xufTtcblxucHJvdG8uc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2hhbmdlU2VsZWN0ZWQoIHRydWUgKTtcbn07XG5cbnByb3RvLnVuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2hhbmdlU2VsZWN0ZWQoIGZhbHNlICk7XG59O1xuXG5wcm90by5jaGFuZ2VTZWxlY3RlZCA9IGZ1bmN0aW9uKCBpc1NlbGVjdGVkICkge1xuICB2YXIgY2xhc3NNZXRob2QgPSBpc1NlbGVjdGVkID8gJ2FkZCcgOiAncmVtb3ZlJztcbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLmVsZW1lbnQuY2xhc3NMaXN0WyBjbGFzc01ldGhvZCBdKCdpcy1zZWxlY3RlZCcpO1xuICAgIGNlbGwuZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLXNlbGVjdGVkJywgaXNTZWxlY3RlZC50b1N0cmluZygpICk7XG4gIH0pO1xufTtcblxucHJvdG8uZ2V0Q2VsbEVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNlbGxzLm1hcCggZnVuY3Rpb24oIGNlbGwgKSB7XG4gICAgcmV0dXJuIGNlbGwuZWxlbWVudDtcbiAgfSk7XG59O1xuXG5yZXR1cm4gU2xpZGU7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3NsaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9zbGlkZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIGdldFNpemUgdjIuMC4yXG4gKiBtZWFzdXJlIHNpemUgb2YgZWxlbWVudHNcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlLCBjb25zb2xlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSgpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZ2V0U2l6ZSA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdldCBhIG51bWJlciBmcm9tIGEgc3RyaW5nLCBub3QgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBnZXRTdHlsZVNpemUoIHZhbHVlICkge1xuICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgLy8gbm90IGEgcGVyY2VudCBsaWtlICcxMDAlJywgYW5kIGEgbnVtYmVyXG4gIHZhciBpc1ZhbGlkID0gdmFsdWUuaW5kZXhPZignJScpID09IC0xICYmICFpc05hTiggbnVtICk7XG4gIHJldHVybiBpc1ZhbGlkICYmIG51bTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBsb2dFcnJvciA9IHR5cGVvZiBjb25zb2xlID09ICd1bmRlZmluZWQnID8gbm9vcCA6XG4gIGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuICAgIGNvbnNvbGUuZXJyb3IoIG1lc3NhZ2UgKTtcbiAgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWVhc3VyZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBtZWFzdXJlbWVudHMgPSBbXG4gICdwYWRkaW5nTGVmdCcsXG4gICdwYWRkaW5nUmlnaHQnLFxuICAncGFkZGluZ1RvcCcsXG4gICdwYWRkaW5nQm90dG9tJyxcbiAgJ21hcmdpbkxlZnQnLFxuICAnbWFyZ2luUmlnaHQnLFxuICAnbWFyZ2luVG9wJyxcbiAgJ21hcmdpbkJvdHRvbScsXG4gICdib3JkZXJMZWZ0V2lkdGgnLFxuICAnYm9yZGVyUmlnaHRXaWR0aCcsXG4gICdib3JkZXJUb3BXaWR0aCcsXG4gICdib3JkZXJCb3R0b21XaWR0aCdcbl07XG5cbnZhciBtZWFzdXJlbWVudHNMZW5ndGggPSBtZWFzdXJlbWVudHMubGVuZ3RoO1xuXG5mdW5jdGlvbiBnZXRaZXJvU2l6ZSgpIHtcbiAgdmFyIHNpemUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGlubmVyV2lkdGg6IDAsXG4gICAgaW5uZXJIZWlnaHQ6IDAsXG4gICAgb3V0ZXJXaWR0aDogMCxcbiAgICBvdXRlckhlaWdodDogMFxuICB9O1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9XG4gIHJldHVybiBzaXplO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTdHlsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldFN0eWxlLCBnZXQgc3R5bGUgb2YgZWxlbWVudCwgY2hlY2sgZm9yIEZpcmVmb3ggYnVnXG4gKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUoIGVsZW0gKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcbiAgaWYgKCAhc3R5bGUgKSB7XG4gICAgbG9nRXJyb3IoICdTdHlsZSByZXR1cm5lZCAnICsgc3R5bGUgK1xuICAgICAgJy4gQXJlIHlvdSBydW5uaW5nIHRoaXMgY29kZSBpbiBhIGhpZGRlbiBpZnJhbWUgb24gRmlyZWZveD8gJyArXG4gICAgICAnU2VlIGh0dHA6Ly9iaXQubHkvZ2V0c2l6ZWJ1ZzEnICk7XG4gIH1cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgaXNTZXR1cCA9IGZhbHNlO1xuXG52YXIgaXNCb3hTaXplT3V0ZXI7XG5cbi8qKlxuICogc2V0dXBcbiAqIGNoZWNrIGlzQm94U2l6ZXJPdXRlclxuICogZG8gb24gZmlyc3QgZ2V0U2l6ZSgpIHJhdGhlciB0aGFuIG9uIHBhZ2UgbG9hZCBmb3IgRmlyZWZveCBidWdcbiAqL1xuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIC8vIHNldHVwIG9uY2VcbiAgaWYgKCBpc1NldHVwICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpc1NldHVwID0gdHJ1ZTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBib3ggc2l6aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLyoqXG4gICAqIFdlYktpdCBtZWFzdXJlcyB0aGUgb3V0ZXItd2lkdGggb24gc3R5bGUud2lkdGggb24gYm9yZGVyLWJveCBlbGVtc1xuICAgKiBJRSAmIEZpcmVmb3g8MjkgbWVhc3VyZXMgdGhlIGlubmVyLXdpZHRoXG4gICAqL1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5zdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gIGRpdi5zdHlsZS5wYWRkaW5nID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuXG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoIGRpdiApO1xuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZGl2ICk7XG5cbiAgZ2V0U2l6ZS5pc0JveFNpemVPdXRlciA9IGlzQm94U2l6ZU91dGVyID0gZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApID09IDIwMDtcbiAgYm9keS5yZW1vdmVDaGlsZCggZGl2ICk7XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBnZXRTaXplKCBlbGVtICkge1xuICBzZXR1cCgpO1xuXG4gIC8vIHVzZSBxdWVyeVNlbGV0b3IgaWYgZWxlbSBpcyBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG5cbiAgLy8gZG8gbm90IHByb2NlZWQgb24gbm9uLW9iamVjdHNcbiAgaWYgKCAhZWxlbSB8fCB0eXBlb2YgZWxlbSAhPSAnb2JqZWN0JyB8fCAhZWxlbS5ub2RlVHlwZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZWxlbSApO1xuXG4gIC8vIGlmIGhpZGRlbiwgZXZlcnl0aGluZyBpcyAwXG4gIGlmICggc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgKSB7XG4gICAgcmV0dXJuIGdldFplcm9TaXplKCk7XG4gIH1cblxuICB2YXIgc2l6ZSA9IHt9O1xuICBzaXplLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgc2l6ZS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICB2YXIgaXNCb3JkZXJCb3ggPSBzaXplLmlzQm9yZGVyQm94ID0gc3R5bGUuYm94U2l6aW5nID09ICdib3JkZXItYm94JztcblxuICAvLyBnZXQgYWxsIG1lYXN1cmVtZW50c1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlWyBtZWFzdXJlbWVudCBdO1xuICAgIHZhciBudW0gPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuICAgIC8vIGFueSAnYXV0bycsICdtZWRpdW0nIHZhbHVlIHdpbGwgYmUgMFxuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAhaXNOYU4oIG51bSApID8gbnVtIDogMDtcbiAgfVxuXG4gIHZhciBwYWRkaW5nV2lkdGggPSBzaXplLnBhZGRpbmdMZWZ0ICsgc2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHZhciBwYWRkaW5nSGVpZ2h0ID0gc2l6ZS5wYWRkaW5nVG9wICsgc2l6ZS5wYWRkaW5nQm90dG9tO1xuICB2YXIgbWFyZ2luV2lkdGggPSBzaXplLm1hcmdpbkxlZnQgKyBzaXplLm1hcmdpblJpZ2h0O1xuICB2YXIgbWFyZ2luSGVpZ2h0ID0gc2l6ZS5tYXJnaW5Ub3AgKyBzaXplLm1hcmdpbkJvdHRvbTtcbiAgdmFyIGJvcmRlcldpZHRoID0gc2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBzaXplLmJvcmRlclJpZ2h0V2lkdGg7XG4gIHZhciBib3JkZXJIZWlnaHQgPSBzaXplLmJvcmRlclRvcFdpZHRoICsgc2l6ZS5ib3JkZXJCb3R0b21XaWR0aDtcblxuICB2YXIgaXNCb3JkZXJCb3hTaXplT3V0ZXIgPSBpc0JvcmRlckJveCAmJiBpc0JveFNpemVPdXRlcjtcblxuICAvLyBvdmVyd3JpdGUgd2lkdGggYW5kIGhlaWdodCBpZiB3ZSBjYW4gZ2V0IGl0IGZyb20gc3R5bGVcbiAgdmFyIHN0eWxlV2lkdGggPSBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICk7XG4gIGlmICggc3R5bGVXaWR0aCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS53aWR0aCA9IHN0eWxlV2lkdGggK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICB9XG5cbiAgdmFyIHN0eWxlSGVpZ2h0ID0gZ2V0U3R5bGVTaXplKCBzdHlsZS5oZWlnaHQgKTtcbiAgaWYgKCBzdHlsZUhlaWdodCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS5oZWlnaHQgPSBzdHlsZUhlaWdodCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcbiAgfVxuXG4gIHNpemUuaW5uZXJXaWR0aCA9IHNpemUud2lkdGggLSAoIHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIHNpemUuaW5uZXJIZWlnaHQgPSBzaXplLmhlaWdodCAtICggcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuXG4gIHNpemUub3V0ZXJXaWR0aCA9IHNpemUud2lkdGggKyBtYXJnaW5XaWR0aDtcbiAgc2l6ZS5vdXRlckhlaWdodCA9IHNpemUuaGVpZ2h0ICsgbWFyZ2luSGVpZ2h0O1xuXG4gIHJldHVybiBzaXplO1xufVxuXG5yZXR1cm4gZ2V0U2l6ZTtcblxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXQtc2l6ZS9nZXQtc2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZ2V0LXNpemUvZ2V0LXNpemUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBUYXAgbGlzdGVuZXIgdjIuMC4wXG4gKiBsaXN0ZW5zIHRvIHRhcHNcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ3VuaXBvaW50ZXIvdW5pcG9pbnRlcidcbiAgICBdLCBmdW5jdGlvbiggVW5pcG9pbnRlciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIFVuaXBvaW50ZXIgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ3VuaXBvaW50ZXInKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuVGFwTGlzdGVuZXIgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LlVuaXBvaW50ZXJcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBVbmlwb2ludGVyICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBUYXBMaXN0ZW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBUYXBMaXN0ZW5lciggZWxlbSApIHtcbiAgdGhpcy5iaW5kVGFwKCBlbGVtICk7XG59XG5cbi8vIGluaGVyaXQgVW5pcG9pbnRlciAmIEV2ZW50RW1pdHRlclxudmFyIHByb3RvID0gVGFwTGlzdGVuZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVW5pcG9pbnRlci5wcm90b3R5cGUgKTtcblxuLyoqXG4gKiBiaW5kIHRhcCBldmVudCB0byBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8uYmluZFRhcCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoICFlbGVtICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnVuYmluZFRhcCgpO1xuICB0aGlzLnRhcEVsZW1lbnQgPSBlbGVtO1xuICB0aGlzLl9iaW5kU3RhcnRFdmVudCggZWxlbSwgdHJ1ZSApO1xufTtcblxucHJvdG8udW5iaW5kVGFwID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMudGFwRWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5fYmluZFN0YXJ0RXZlbnQoIHRoaXMudGFwRWxlbWVudCwgdHJ1ZSApO1xuICBkZWxldGUgdGhpcy50YXBFbGVtZW50O1xufTtcblxuLyoqXG4gKiBwb2ludGVyIHVwXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICovXG5wcm90by5wb2ludGVyVXAgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIC8vIGlnbm9yZSBlbXVsYXRlZCBtb3VzZSB1cCBjbGlja3NcbiAgaWYgKCB0aGlzLmlzSWdub3JpbmdNb3VzZVVwICYmIGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwb2ludGVyUG9pbnQgPSBVbmlwb2ludGVyLmdldFBvaW50ZXJQb2ludCggcG9pbnRlciApO1xuICB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy50YXBFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2Nyb2xsWCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIC8vIGNhbGN1bGF0ZSBpZiBwb2ludGVyIGlzIGluc2lkZSB0YXBFbGVtZW50XG4gIHZhciBpc0luc2lkZSA9IHBvaW50ZXJQb2ludC54ID49IGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2Nyb2xsWCAmJlxuICAgIHBvaW50ZXJQb2ludC54IDw9IGJvdW5kaW5nUmVjdC5yaWdodCArIHNjcm9sbFggJiZcbiAgICBwb2ludGVyUG9pbnQueSA+PSBib3VuZGluZ1JlY3QudG9wICsgc2Nyb2xsWSAmJlxuICAgIHBvaW50ZXJQb2ludC55IDw9IGJvdW5kaW5nUmVjdC5ib3R0b20gKyBzY3JvbGxZO1xuICAvLyB0cmlnZ2VyIGNhbGxiYWNrIGlmIHBvaW50ZXIgaXMgaW5zaWRlIGVsZW1lbnRcbiAgaWYgKCBpc0luc2lkZSApIHtcbiAgICB0aGlzLmVtaXRFdmVudCggJ3RhcCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xuICB9XG5cbiAgLy8gc2V0IGZsYWcgZm9yIGVtdWxhdGVkIGNsaWNrcyAzMDBtcyBhZnRlciB0b3VjaGVuZFxuICBpZiAoIGV2ZW50LnR5cGUgIT0gJ21vdXNldXAnICkge1xuICAgIHRoaXMuaXNJZ25vcmluZ01vdXNlVXAgPSB0cnVlO1xuICAgIC8vIHJlc2V0IGZsYWcgYWZ0ZXIgMzAwbXNcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgZGVsZXRlIF90aGlzLmlzSWdub3JpbmdNb3VzZVVwO1xuICAgIH0sIDQwMCApO1xuICB9XG59O1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucG9pbnRlckRvbmUoKTtcbiAgdGhpcy51bmJpbmRUYXAoKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gVGFwTGlzdGVuZXI7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RhcC1saXN0ZW5lci90YXAtbGlzdGVuZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3RhcC1saXN0ZW5lci90YXAtbGlzdGVuZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBVbmlkcmFnZ2VyIHYyLjIuM1xuICogRHJhZ2dhYmxlIGJhc2UgY2xhc3NcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICd1bmlwb2ludGVyL3VuaXBvaW50ZXInXG4gICAgXSwgZnVuY3Rpb24oIFVuaXBvaW50ZXIgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBVbmlwb2ludGVyICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCd1bmlwb2ludGVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LlVuaWRyYWdnZXIgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LlVuaXBvaW50ZXJcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBVbmlwb2ludGVyICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVuaWRyYWdnZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gVW5pZHJhZ2dlcigpIHt9XG5cbi8vIGluaGVyaXQgVW5pcG9pbnRlciAmIEV2RW1pdHRlclxudmFyIHByb3RvID0gVW5pZHJhZ2dlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBVbmlwb2ludGVyLnByb3RvdHlwZSApO1xuXG4vLyAtLS0tLSBiaW5kIHN0YXJ0IC0tLS0tIC8vXG5cbnByb3RvLmJpbmRIYW5kbGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2JpbmRIYW5kbGVzKCB0cnVlICk7XG59O1xuXG5wcm90by51bmJpbmRIYW5kbGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2JpbmRIYW5kbGVzKCBmYWxzZSApO1xufTtcblxuLyoqXG4gKiB3b3JrcyBhcyB1bmJpbmRlciwgYXMgeW91IGNhbiAuYmluZEhhbmRsZXMoIGZhbHNlICkgdG8gdW5iaW5kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzQmluZCAtIHdpbGwgdW5iaW5kIGlmIGZhbHNleVxuICovXG5wcm90by5fYmluZEhhbmRsZXMgPSBmdW5jdGlvbiggaXNCaW5kICkge1xuICAvLyBtdW5nZSBpc0JpbmQsIGRlZmF1bHQgdG8gdHJ1ZVxuICBpc0JpbmQgPSBpc0JpbmQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWlzQmluZDtcbiAgLy8gYmluZCBlYWNoIGhhbmRsZVxuICB2YXIgYmluZE1ldGhvZCA9IGlzQmluZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgZm9yICggdmFyIGk9MDsgaSA8IHRoaXMuaGFuZGxlcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgaGFuZGxlID0gdGhpcy5oYW5kbGVzW2ldO1xuICAgIHRoaXMuX2JpbmRTdGFydEV2ZW50KCBoYW5kbGUsIGlzQmluZCApO1xuICAgIGhhbmRsZVsgYmluZE1ldGhvZCBdKCAnY2xpY2snLCB0aGlzICk7XG4gICAgLy8gdG91Y2gtYWN0aW9uOiBub25lIHRvIG92ZXJyaWRlIGJyb3dzZXIgdG91Y2ggZ2VzdHVyZXNcbiAgICAvLyBtZXRhZml6enkvZmxpY2tpdHkjNTQwXG4gICAgaWYgKCB3aW5kb3cuUG9pbnRlckV2ZW50ICkge1xuICAgICAgaGFuZGxlLnN0eWxlLnRvdWNoQWN0aW9uID0gaXNCaW5kID8gdGhpcy5fdG91Y2hBY3Rpb25WYWx1ZSA6ICcnO1xuICAgIH1cbiAgfVxufTtcblxuLy8gcHJvdG90eXBlIHNvIGl0IGNhbiBiZSBvdmVyd3JpdGVhYmxlIGJ5IEZsaWNraXR5XG5wcm90by5fdG91Y2hBY3Rpb25WYWx1ZSA9ICdub25lJztcblxuLy8gLS0tLS0gc3RhcnQgZXZlbnQgLS0tLS0gLy9cblxuLyoqXG4gKiBwb2ludGVyIHN0YXJ0XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICovXG5wcm90by5wb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gZGlzbWlzcyByYW5nZSBzbGlkZXJzXG4gIGlmICggZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09ICdJTlBVVCcgJiYgZXZlbnQudGFyZ2V0LnR5cGUgPT0gJ3JhbmdlJyApIHtcbiAgICAvLyByZXNldCBwb2ludGVyRG93biBsb2dpY1xuICAgIHRoaXMuaXNQb2ludGVyRG93biA9IGZhbHNlO1xuICAgIGRlbGV0ZSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX2RyYWdQb2ludGVyRG93biggZXZlbnQsIHBvaW50ZXIgKTtcbiAgLy8ga2x1ZGdlIHRvIGJsdXIgZm9jdXNlZCBpbnB1dHMgaW4gZHJhZ2dlclxuICB2YXIgZm9jdXNlZCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIGlmICggZm9jdXNlZCAmJiBmb2N1c2VkLmJsdXIgKSB7XG4gICAgZm9jdXNlZC5ibHVyKCk7XG4gIH1cbiAgLy8gYmluZCBtb3ZlIGFuZCBlbmQgZXZlbnRzXG4gIHRoaXMuX2JpbmRQb3N0U3RhcnRFdmVudHMoIGV2ZW50ICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlckRvd24nLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIGJhc2UgcG9pbnRlciBkb3duIGxvZ2ljXG5wcm90by5fZHJhZ1BvaW50ZXJEb3duID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICAvLyB0cmFjayB0byBzZWUgd2hlbiBkcmFnZ2luZyBzdGFydHNcbiAgdGhpcy5wb2ludGVyRG93blBvaW50ID0gVW5pcG9pbnRlci5nZXRQb2ludGVyUG9pbnQoIHBvaW50ZXIgKTtcblxuICB2YXIgY2FuUHJldmVudERlZmF1bHQgPSB0aGlzLmNhblByZXZlbnREZWZhdWx0T25Qb2ludGVyRG93biggZXZlbnQsIHBvaW50ZXIgKTtcbiAgaWYgKCBjYW5QcmV2ZW50RGVmYXVsdCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG4vLyBvdmVyd3JpdGVhYmxlIG1ldGhvZCBzbyBGbGlja2l0eSBjYW4gcHJldmVudCBmb3Igc2Nyb2xsaW5nXG5wcm90by5jYW5QcmV2ZW50RGVmYXVsdE9uUG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIHByZXZlbnQgZGVmYXVsdCwgdW5sZXNzIHRvdWNoc3RhcnQgb3IgPHNlbGVjdD5cbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPSAnU0VMRUNUJztcbn07XG5cbi8vIC0tLS0tIG1vdmUgZXZlbnQgLS0tLS0gLy9cblxuLyoqXG4gKiBkcmFnIG1vdmVcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLnBvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgbW92ZVZlY3RvciA9IHRoaXMuX2RyYWdQb2ludGVyTW92ZSggZXZlbnQsIHBvaW50ZXIgKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyTW92ZScsIFsgZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xuICB0aGlzLl9kcmFnTW92ZSggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKTtcbn07XG5cbi8vIGJhc2UgcG9pbnRlciBtb3ZlIGxvZ2ljXG5wcm90by5fZHJhZ1BvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgbW92ZVBvaW50ID0gVW5pcG9pbnRlci5nZXRQb2ludGVyUG9pbnQoIHBvaW50ZXIgKTtcbiAgdmFyIG1vdmVWZWN0b3IgPSB7XG4gICAgeDogbW92ZVBvaW50LnggLSB0aGlzLnBvaW50ZXJEb3duUG9pbnQueCxcbiAgICB5OiBtb3ZlUG9pbnQueSAtIHRoaXMucG9pbnRlckRvd25Qb2ludC55XG4gIH07XG4gIC8vIHN0YXJ0IGRyYWcgaWYgcG9pbnRlciBoYXMgbW92ZWQgZmFyIGVub3VnaCB0byBzdGFydCBkcmFnXG4gIGlmICggIXRoaXMuaXNEcmFnZ2luZyAmJiB0aGlzLmhhc0RyYWdTdGFydGVkKCBtb3ZlVmVjdG9yICkgKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0KCBldmVudCwgcG9pbnRlciApO1xuICB9XG4gIHJldHVybiBtb3ZlVmVjdG9yO1xufTtcblxuLy8gY29uZGl0aW9uIGlmIHBvaW50ZXIgaGFzIG1vdmVkIGZhciBlbm91Z2ggdG8gc3RhcnQgZHJhZ1xucHJvdG8uaGFzRHJhZ1N0YXJ0ZWQgPSBmdW5jdGlvbiggbW92ZVZlY3RvciApIHtcbiAgcmV0dXJuIE1hdGguYWJzKCBtb3ZlVmVjdG9yLnggKSA+IDMgfHwgTWF0aC5hYnMoIG1vdmVWZWN0b3IueSApID4gMztcbn07XG5cblxuLy8gLS0tLS0gZW5kIGV2ZW50IC0tLS0tIC8vXG5cbi8qKlxuICogcG9pbnRlciB1cFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqL1xucHJvdG8ucG9pbnRlclVwID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ3BvaW50ZXJVcCcsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xuICB0aGlzLl9kcmFnUG9pbnRlclVwKCBldmVudCwgcG9pbnRlciApO1xufTtcblxucHJvdG8uX2RyYWdQb2ludGVyVXAgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIGlmICggdGhpcy5pc0RyYWdnaW5nICkge1xuICAgIHRoaXMuX2RyYWdFbmQoIGV2ZW50LCBwb2ludGVyICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcG9pbnRlciBkaWRuJ3QgbW92ZSBlbm91Z2ggZm9yIGRyYWcgdG8gc3RhcnRcbiAgICB0aGlzLl9zdGF0aWNDbGljayggZXZlbnQsIHBvaW50ZXIgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZHJhZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBkcmFnU3RhcnRcbnByb3RvLl9kcmFnU3RhcnQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gIHRoaXMuZHJhZ1N0YXJ0UG9pbnQgPSBVbmlwb2ludGVyLmdldFBvaW50ZXJQb2ludCggcG9pbnRlciApO1xuICAvLyBwcmV2ZW50IGNsaWNrc1xuICB0aGlzLmlzUHJldmVudGluZ0NsaWNrcyA9IHRydWU7XG5cbiAgdGhpcy5kcmFnU3RhcnQoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG5wcm90by5kcmFnU3RhcnQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAnZHJhZ1N0YXJ0JywgWyBldmVudCwgcG9pbnRlciBdICk7XG59O1xuXG4vLyBkcmFnTW92ZVxucHJvdG8uX2RyYWdNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICkge1xuICAvLyBkbyBub3QgZHJhZyBpZiBub3QgZHJhZ2dpbmcgeWV0XG4gIGlmICggIXRoaXMuaXNEcmFnZ2luZyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmRyYWdNb3ZlKCBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciApO1xufTtcblxucHJvdG8uZHJhZ01vdmUgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRoaXMuZW1pdEV2ZW50KCAnZHJhZ01vdmUnLCBbIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yIF0gKTtcbn07XG5cbi8vIGRyYWdFbmRcbnByb3RvLl9kcmFnRW5kID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICAvLyBzZXQgZmxhZ3NcbiAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gIC8vIHJlLWVuYWJsZSBjbGlja2luZyBhc3luY1xuICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpcy5pc1ByZXZlbnRpbmdDbGlja3M7XG4gIH0uYmluZCggdGhpcyApICk7XG5cbiAgdGhpcy5kcmFnRW5kKCBldmVudCwgcG9pbnRlciApO1xufTtcblxucHJvdG8uZHJhZ0VuZCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdkcmFnRW5kJywgWyBldmVudCwgcG9pbnRlciBdICk7XG59O1xuXG4vLyAtLS0tLSBvbmNsaWNrIC0tLS0tIC8vXG5cbi8vIGhhbmRsZSBhbGwgY2xpY2tzIGFuZCBwcmV2ZW50IGNsaWNrcyB3aGVuIGRyYWdnaW5nXG5wcm90by5vbmNsaWNrID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoIHRoaXMuaXNQcmV2ZW50aW5nQ2xpY2tzICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIHN0YXRpY0NsaWNrIC0tLS0tIC8vXG5cbi8vIHRyaWdnZXJlZCBhZnRlciBwb2ludGVyIGRvd24gJiB1cCB3aXRoIG5vL3RpbnkgbW92ZW1lbnRcbnByb3RvLl9zdGF0aWNDbGljayA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gaWdub3JlIGVtdWxhdGVkIG1vdXNlIHVwIGNsaWNrc1xuICBpZiAoIHRoaXMuaXNJZ25vcmluZ01vdXNlVXAgJiYgZXZlbnQudHlwZSA9PSAnbW91c2V1cCcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gYWxsb3cgY2xpY2sgaW4gPGlucHV0PnMgYW5kIDx0ZXh0YXJlYT5zXG4gIHZhciBub2RlTmFtZSA9IGV2ZW50LnRhcmdldC5ub2RlTmFtZTtcbiAgaWYgKCBub2RlTmFtZSA9PSAnSU5QVVQnIHx8IG5vZGVOYW1lID09ICdURVhUQVJFQScgKSB7XG4gICAgZXZlbnQudGFyZ2V0LmZvY3VzKCk7XG4gIH1cbiAgdGhpcy5zdGF0aWNDbGljayggZXZlbnQsIHBvaW50ZXIgKTtcblxuICAvLyBzZXQgZmxhZyBmb3IgZW11bGF0ZWQgY2xpY2tzIDMwMG1zIGFmdGVyIHRvdWNoZW5kXG4gIGlmICggZXZlbnQudHlwZSAhPSAnbW91c2V1cCcgKSB7XG4gICAgdGhpcy5pc0lnbm9yaW5nTW91c2VVcCA9IHRydWU7XG4gICAgLy8gcmVzZXQgZmxhZyBhZnRlciAzMDBtc1xuICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgZGVsZXRlIHRoaXMuaXNJZ25vcmluZ01vdXNlVXA7XG4gICAgfS5iaW5kKCB0aGlzICksIDQwMCApO1xuICB9XG59O1xuXG5wcm90by5zdGF0aWNDbGljayA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdzdGF0aWNDbGljaycsIFsgZXZlbnQsIHBvaW50ZXIgXSApO1xufTtcblxuLy8gLS0tLS0gdXRpbHMgLS0tLS0gLy9cblxuVW5pZHJhZ2dlci5nZXRQb2ludGVyUG9pbnQgPSBVbmlwb2ludGVyLmdldFBvaW50ZXJQb2ludDtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiBVbmlkcmFnZ2VyO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91bmlkcmFnZ2VyL3VuaWRyYWdnZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3VuaWRyYWdnZXIvdW5pZHJhZ2dlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIFVuaXBvaW50ZXIgdjIuMi4xXG4gKiBiYXNlIGNsYXNzIGZvciBkb2luZyBvbmUgdGhpbmcgd2l0aCBwb2ludGVyIGV2ZW50XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbCBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcidcbiAgICBdLCBmdW5jdGlvbiggRXZFbWl0dGVyICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LlVuaXBvaW50ZXIgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkV2RW1pdHRlclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gVW5pcG9pbnRlcigpIHt9XG5cbi8vIGluaGVyaXQgRXZFbWl0dGVyXG52YXIgcHJvdG8gPSBVbmlwb2ludGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxucHJvdG8uYmluZFN0YXJ0RXZlbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdGhpcy5fYmluZFN0YXJ0RXZlbnQoIGVsZW0sIHRydWUgKTtcbn07XG5cbnByb3RvLnVuYmluZFN0YXJ0RXZlbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdGhpcy5fYmluZFN0YXJ0RXZlbnQoIGVsZW0sIGZhbHNlICk7XG59O1xuXG4vKipcbiAqIHdvcmtzIGFzIHVuYmluZGVyLCBhcyB5b3UgY2FuIC5fYmluZFN0YXJ0KCBmYWxzZSApIHRvIHVuYmluZFxuICogQHBhcmFtIHtCb29sZWFufSBpc0JpbmQgLSB3aWxsIHVuYmluZCBpZiBmYWxzZXlcbiAqL1xucHJvdG8uX2JpbmRTdGFydEV2ZW50ID0gZnVuY3Rpb24oIGVsZW0sIGlzQmluZCApIHtcbiAgLy8gbXVuZ2UgaXNCaW5kLCBkZWZhdWx0IHRvIHRydWVcbiAgaXNCaW5kID0gaXNCaW5kID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFpc0JpbmQ7XG4gIHZhciBiaW5kTWV0aG9kID0gaXNCaW5kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXG4gIGlmICggd2luZG93LlBvaW50ZXJFdmVudCApIHtcbiAgICAvLyBQb2ludGVyIEV2ZW50cy4gQ2hyb21lIDU1LCBJRTExLCBFZGdlIDE0XG4gICAgZWxlbVsgYmluZE1ldGhvZCBdKCAncG9pbnRlcmRvd24nLCB0aGlzICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gbGlzdGVuIGZvciBib3RoLCBmb3IgZGV2aWNlcyBsaWtlIENocm9tZSBQaXhlbFxuICAgIGVsZW1bIGJpbmRNZXRob2QgXSggJ21vdXNlZG93bicsIHRoaXMgKTtcbiAgICBlbGVtWyBiaW5kTWV0aG9kIF0oICd0b3VjaHN0YXJ0JywgdGhpcyApO1xuICB9XG59O1xuXG4vLyB0cmlnZ2VyIGhhbmRsZXIgbWV0aG9kcyBmb3IgZXZlbnRzXG5wcm90by5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyByZXR1cm5zIHRoZSB0b3VjaCB0aGF0IHdlJ3JlIGtlZXBpbmcgdHJhY2sgb2ZcbnByb3RvLmdldFRvdWNoID0gZnVuY3Rpb24oIHRvdWNoZXMgKSB7XG4gIGZvciAoIHZhciBpPTA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciB0b3VjaCA9IHRvdWNoZXNbaV07XG4gICAgaWYgKCB0b3VjaC5pZGVudGlmaWVyID09IHRoaXMucG9pbnRlcklkZW50aWZpZXIgKSB7XG4gICAgICByZXR1cm4gdG91Y2g7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLSBzdGFydCBldmVudCAtLS0tLSAvL1xuXG5wcm90by5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gZGlzbWlzcyBjbGlja3MgZnJvbSByaWdodCBvciBtaWRkbGUgYnV0dG9uc1xuICB2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuICBpZiAoIGJ1dHRvbiAmJiAoIGJ1dHRvbiAhPT0gMCAmJiBidXR0b24gIT09IDEgKSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5fcG9pbnRlckRvd24oIGV2ZW50LCBldmVudCApO1xufTtcblxucHJvdG8ub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyRG93biggZXZlbnQsIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdICk7XG59O1xuXG5wcm90by5vbnBvaW50ZXJkb3duID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyRG93biggZXZlbnQsIGV2ZW50ICk7XG59O1xuXG4vKipcbiAqIHBvaW50ZXIgc3RhcnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLl9wb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gZGlzbWlzcyByaWdodCBjbGljayBhbmQgb3RoZXIgcG9pbnRlcnNcbiAgLy8gYnV0dG9uID0gMCBpcyBva2F5LCAxLTQgbm90XG4gIGlmICggZXZlbnQuYnV0dG9uIHx8IHRoaXMuaXNQb2ludGVyRG93biApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmlzUG9pbnRlckRvd24gPSB0cnVlO1xuICAvLyBzYXZlIHBvaW50ZXIgaWRlbnRpZmllciB0byBtYXRjaCB1cCB0b3VjaCBldmVudHNcbiAgdGhpcy5wb2ludGVySWRlbnRpZmllciA9IHBvaW50ZXIucG9pbnRlcklkICE9PSB1bmRlZmluZWQgP1xuICAgIC8vIHBvaW50ZXJJZCBmb3IgcG9pbnRlciBldmVudHMsIHRvdWNoLmluZGVudGlmaWVyIGZvciB0b3VjaCBldmVudHNcbiAgICBwb2ludGVyLnBvaW50ZXJJZCA6IHBvaW50ZXIuaWRlbnRpZmllcjtcblxuICB0aGlzLnBvaW50ZXJEb3duKCBldmVudCwgcG9pbnRlciApO1xufTtcblxucHJvdG8ucG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuX2JpbmRQb3N0U3RhcnRFdmVudHMoIGV2ZW50ICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlckRvd24nLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIGhhc2ggb2YgZXZlbnRzIHRvIGJlIGJvdW5kIGFmdGVyIHN0YXJ0IGV2ZW50XG52YXIgcG9zdFN0YXJ0RXZlbnRzID0ge1xuICBtb3VzZWRvd246IFsgJ21vdXNlbW92ZScsICdtb3VzZXVwJyBdLFxuICB0b3VjaHN0YXJ0OiBbICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnIF0sXG4gIHBvaW50ZXJkb3duOiBbICdwb2ludGVybW92ZScsICdwb2ludGVydXAnLCAncG9pbnRlcmNhbmNlbCcgXSxcbn07XG5cbnByb3RvLl9iaW5kUG9zdFN0YXJ0RXZlbnRzID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoICFldmVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZ2V0IHByb3BlciBldmVudHMgdG8gbWF0Y2ggc3RhcnQgZXZlbnRcbiAgdmFyIGV2ZW50cyA9IHBvc3RTdGFydEV2ZW50c1sgZXZlbnQudHlwZSBdO1xuICAvLyBiaW5kIGV2ZW50cyB0byBub2RlXG4gIGV2ZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xuICAvLyBzYXZlIHRoZXNlIGFyZ3VtZW50c1xuICB0aGlzLl9ib3VuZFBvaW50ZXJFdmVudHMgPSBldmVudHM7XG59O1xuXG5wcm90by5fdW5iaW5kUG9zdFN0YXJ0RXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGZvciBfYm91bmRFdmVudHMsIGluIGNhc2UgZHJhZ0VuZCB0cmlnZ2VyZWQgdHdpY2UgKG9sZCBJRTggYnVnKVxuICBpZiAoICF0aGlzLl9ib3VuZFBvaW50ZXJFdmVudHMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuX2JvdW5kUG9pbnRlckV2ZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xuXG4gIGRlbGV0ZSB0aGlzLl9ib3VuZFBvaW50ZXJFdmVudHM7XG59O1xuXG4vLyAtLS0tLSBtb3ZlIGV2ZW50IC0tLS0tIC8vXG5cbnByb3RvLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyTW92ZSggZXZlbnQsIGV2ZW50ICk7XG59O1xuXG5wcm90by5vbnBvaW50ZXJtb3ZlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoIGV2ZW50LnBvaW50ZXJJZCA9PSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyICkge1xuICAgIHRoaXMuX3BvaW50ZXJNb3ZlKCBldmVudCwgZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8ub250b3VjaG1vdmUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goIGV2ZW50LmNoYW5nZWRUb3VjaGVzICk7XG4gIGlmICggdG91Y2ggKSB7XG4gICAgdGhpcy5fcG9pbnRlck1vdmUoIGV2ZW50LCB0b3VjaCApO1xuICB9XG59O1xuXG4vKipcbiAqIHBvaW50ZXIgbW92ZVxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqIEBwcml2YXRlXG4gKi9cbnByb3RvLl9wb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5wb2ludGVyTW92ZSggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbi8vIHB1YmxpY1xucHJvdG8ucG9pbnRlck1vdmUgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlck1vdmUnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIGVuZCBldmVudCAtLS0tLSAvL1xuXG5cbnByb3RvLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5fcG9pbnRlclVwKCBldmVudCwgZXZlbnQgKTtcbn07XG5cbnByb3RvLm9ucG9pbnRlcnVwID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoIGV2ZW50LnBvaW50ZXJJZCA9PSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyICkge1xuICAgIHRoaXMuX3BvaW50ZXJVcCggZXZlbnQsIGV2ZW50ICk7XG4gIH1cbn07XG5cbnByb3RvLm9udG91Y2hlbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goIGV2ZW50LmNoYW5nZWRUb3VjaGVzICk7XG4gIGlmICggdG91Y2ggKSB7XG4gICAgdGhpcy5fcG9pbnRlclVwKCBldmVudCwgdG91Y2ggKTtcbiAgfVxufTtcblxuLyoqXG4gKiBwb2ludGVyIHVwXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX3BvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5fcG9pbnRlckRvbmUoKTtcbiAgdGhpcy5wb2ludGVyVXAoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG4vLyBwdWJsaWNcbnByb3RvLnBvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyVXAnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIHBvaW50ZXIgZG9uZSAtLS0tLSAvL1xuXG4vLyB0cmlnZ2VyZWQgb24gcG9pbnRlciB1cCAmIHBvaW50ZXIgY2FuY2VsXG5wcm90by5fcG9pbnRlckRvbmUgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVzZXQgcHJvcGVydGllc1xuICB0aGlzLmlzUG9pbnRlckRvd24gPSBmYWxzZTtcbiAgZGVsZXRlIHRoaXMucG9pbnRlcklkZW50aWZpZXI7XG4gIC8vIHJlbW92ZSBldmVudHNcbiAgdGhpcy5fdW5iaW5kUG9zdFN0YXJ0RXZlbnRzKCk7XG4gIHRoaXMucG9pbnRlckRvbmUoKTtcbn07XG5cbnByb3RvLnBvaW50ZXJEb25lID0gbm9vcDtcblxuLy8gLS0tLS0gcG9pbnRlciBjYW5jZWwgLS0tLS0gLy9cblxucHJvdG8ub25wb2ludGVyY2FuY2VsID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoIGV2ZW50LnBvaW50ZXJJZCA9PSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyICkge1xuICAgIHRoaXMuX3BvaW50ZXJDYW5jZWwoIGV2ZW50LCBldmVudCApO1xuICB9XG59O1xuXG5wcm90by5vbnRvdWNoY2FuY2VsID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgdG91Y2ggPSB0aGlzLmdldFRvdWNoKCBldmVudC5jaGFuZ2VkVG91Y2hlcyApO1xuICBpZiAoIHRvdWNoICkge1xuICAgIHRoaXMuX3BvaW50ZXJDYW5jZWwoIGV2ZW50LCB0b3VjaCApO1xuICB9XG59O1xuXG4vKipcbiAqIHBvaW50ZXIgY2FuY2VsXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX3BvaW50ZXJDYW5jZWwgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuX3BvaW50ZXJEb25lKCk7XG4gIHRoaXMucG9pbnRlckNhbmNlbCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbi8vIHB1YmxpY1xucHJvdG8ucG9pbnRlckNhbmNlbCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyQ2FuY2VsJywgWyBldmVudCwgcG9pbnRlciBdICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxuLy8gdXRpbGl0eSBmdW5jdGlvbiBmb3IgZ2V0dGluZyB4L3kgY29vcmRzIGZyb20gZXZlbnRcblVuaXBvaW50ZXIuZ2V0UG9pbnRlclBvaW50ID0gZnVuY3Rpb24oIHBvaW50ZXIgKSB7XG4gIHJldHVybiB7XG4gICAgeDogcG9pbnRlci5wYWdlWCxcbiAgICB5OiBwb2ludGVyLnBhZ2VZXG4gIH07XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIFVuaXBvaW50ZXI7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3VuaXBvaW50ZXIvdW5pcG9pbnRlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdW5pcG9pbnRlci91bmlwb2ludGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=