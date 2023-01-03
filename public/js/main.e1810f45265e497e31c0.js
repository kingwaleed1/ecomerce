/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + chunkId + "." + {"2":"33ffa866e5186037fdd4","3":"d6e1eeefc99a5d3f8b5f","4":"0fcb3b853fca7d728868"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([204,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return displayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return displayMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return displayActionMessage; });
/* eslint-disable no-nested-ternary */
var displayDate = function displayDate(timestamp) {
  var date = new Date(timestamp);
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear(); // return day + ' ' + monthNames[monthIndex] + ' ' + year;

  return "".concat(monthNames[monthIndex], " ").concat(day, ", ").concat(year);
};
var displayMoney = function displayMoney(n) {
  var format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'Pkr'
  }); // or use toLocaleString()

  return format.format(n);
};
var displayActionMessage = function displayActionMessage(msg) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
  var div = document.createElement('div');
  var span = document.createElement('span');
  div.className = "toast ".concat(status === 'info' ? 'toast-info' : status === 'success' ? 'toast-success' : 'toast-error');
  span.className = 'toast-msg';
  span.textContent = msg;
  div.appendChild(span);

  if (document.querySelector('.toast')) {
    document.body.removeChild(document.querySelector('.toast'));
    document.body.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  setTimeout(function () {
    try {
      document.body.removeChild(div);
    } catch (e) {
      console.log(e);
    }
  }, 3000);
};

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(205);
module.exports = __webpack_require__(432);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var CircularProgress = function CircularProgress(_ref) {
  var style = _ref.style,
      visible = _ref.visible,
      theme = _ref.theme;

  var className = function className() {
    switch (theme) {
      case 'light':
        return 'circular-progress-light';

      case 'dark':
        return 'circular-progress-dark';

      default:
        return null;
    }
  };

  return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className(),
    style: style
  }) : null;
};

CircularProgress.defaultProps = {
  visible: true,
  theme: 'dark',
  style: {}
};
CircularProgress.propType = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (CircularProgress);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ImageLoader = function ImageLoader(props) {
  var _loaded = {};
  var spinnerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_loaded[props.src]),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var onLoad = function onLoad() {
    _loaded[props.src] = true;
    setLoaded(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !loaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CircularProgress__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: spinnerStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: props.alt || '',
    className: "".concat(props.className || '', " ").concat(loaded ? 'is-img-loaded' : 'is-img-loading'),
    onLoad: onLoad,
    src: props.src
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ImageLoader);

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(395);

// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/style.css
var style = __webpack_require__(396);

// EXTERNAL MODULE: ./src/styles/style.scss
var styles_style = __webpack_require__(397);

// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(198);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);

// CONCATENATED MODULE: ./static/logo-full.png
/* harmony default export */ var logo_full = (__webpack_require__.p + "images/logo-full.880a0169f0ef8b746550afd21c43e0de.png");
// CONCATENATED MODULE: ./src/components/ui/Preloader.jsx



var Preloader_Preloader = function Preloader() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "preloader"
  }, /*#__PURE__*/react_default.a.createElement("svg", {
    className: "logo-symbol",
    viewBox: "0 0 41.25 41.25"
  }, /*#__PURE__*/react_default.a.createElement("circle", {
    cx: "20.62",
    cy: "20.62",
    r: "20.62"
  }), /*#__PURE__*/react_default.a.createElement("circle", {
    className: "fill-white",
    cx: "29.97",
    cy: "14.93",
    r: "6.58"
  })), /*#__PURE__*/react_default.a.createElement("img", {
    src: logo_full
  }));
};

/* harmony default export */ var ui_Preloader = (Preloader_Preloader);
// CONCATENATED MODULE: ./src/constants/constants.js
var GET_PRODUCTS = 'GET_PRODUCTS';
var SEARCH_PRODUCT = 'SEARCH_PRODUCT';
var SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
var GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
var ADD_PRODUCT = 'ADD_PRODUCT';
var ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
var REMOVE_PRODUCT = 'REMOVE_PRODUCT';
var REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
var EDIT_PRODUCT = 'EDIT_PRODUCT';
var EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
var CANCEL_GET_PRODUCTS = 'CANCEL_GET_PRODUCTS';
var CLEAR_SEARCH_STATE = 'CLEAR_SEARCH_STATE';
var SET_LAST_REF_KEY = 'SET_LAST_REF_KEY';
var SET_BASKET_ITEMS = 'SET_BASKET_ITEMS';
var ADD_TO_BASKET = 'ADD_TO_BASKET';
var REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
var CLEAR_BASKET = 'CLEAR_BASKET';
var ADD_QTY_ITEM = 'ADD_QTY_ITEM';
var MINUS_QTY_ITEM = 'MINUS_QTY_ITEM';
var SET_CHECKOUT_SHIPPING_DETAILS = 'SET_CHECKOUT_SHIPPING_DETAILS';
var SET_CHECKOUT_PAYMENT_DETAILS = 'SET_CHECKOUT_PAYMENT_DETAILS';
var RESET_CHECKOUT = 'RESET_CHECKOUT';
var SIGNIN = 'SIGNIN';
var SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
var SIGNUP = 'SIGNUP';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNOUT = 'SIGNOUT';
var SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
var SET_AUTH_STATUS = 'SET_AUTH_STATUS';
var SIGNIN_WITH_GOOGLE = 'SIGNIN_WITH_GOOGLE';
var SIGNIN_WITH_FACEBOOK = 'SIGNIN_WITH_FACEBOOK';
var SIGNIN_WITH_GITHUB = 'SIGNIN_WITH_GITHUB';
var ON_AUTHSTATE_CHANGED = 'ON_AUTHSTATE_CHANGED';
var SET_AUTH_PERSISTENCE = 'SET_AUTH_PERSISTENCE';
var ON_AUTHSTATE_SUCCESS = 'ON_AUTHSTATE_SUCCESS';
var ON_AUTHSTATE_FAIL = 'ON_AUTHSTATE_FAIL';
var RESET_PASSWORD = 'RESET_PASSWORD';
var UPDATE_EMAIL = 'UPDATE_EMAIL';
var SET_PROFILE = 'SET_PROFILE';
var UPDATE_PROFILE = 'UPDATE_PROFILE';
var UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
var CLEAR_PROFILE = 'CLEAR_PROFILE';
var SET_TEXT_FILTER = 'SET_TEXT_FILTER';
var SET_BRAND_FILTER = 'SET_BRAND_FILTER';
var SET_MIN_PRICE_FILTER = 'SET_MIN_PRICE_FILTER';
var SET_MAX_PRICE_FILTER = 'SET_MAX_PRICE_FILTER';
var RESET_FILTER = 'RESET_FILTER';
var APPLY_FILTER = 'APPLY_FILTER';
var CLEAR_RECENT_SEARCH = 'CLEAR_RECENT_SEARCH';
var REMOVE_SELECTED_RECENT = 'REMOVE_SELECTED_RECENT';
var REGISTER_USER = 'REGISTER_USER';
var GET_USER = 'GET_USER';
var ADD_USER = 'ADD_USER';
var DELETE_USER = 'DELETE_USER';
var EDIT_USER = 'EDIT_USER';
var LOADING = 'LOADING';
var IS_AUTHENTICATING = 'IS_AUTHENTICATING';
var SET_REQUEST_STATUS = 'SET_REQUEST_STATUS';
// CONCATENATED MODULE: ./src/redux/actions/authActions.js

var authActions_signIn = function signIn(email, password) {
  return {
    type: SIGNIN,
    payload: {
      email: email,
      password: password
    }
  };
};
var authActions_signInWithGoogle = function signInWithGoogle() {
  return {
    type: SIGNIN_WITH_GOOGLE
  };
};
var authActions_signInWithFacebook = function signInWithFacebook() {
  return {
    type: SIGNIN_WITH_FACEBOOK
  };
};
var authActions_signInWithGithub = function signInWithGithub() {
  return {
    type: SIGNIN_WITH_GITHUB
  };
};
var authActions_signUp = function signUp(user) {
  return {
    type: SIGNUP,
    payload: user
  };
};
var authActions_signInSuccess = function signInSuccess(auth) {
  return {
    type: SIGNIN_SUCCESS,
    payload: auth
  };
};
var authActions_setAuthPersistence = function setAuthPersistence() {
  return {
    type: SET_AUTH_PERSISTENCE
  };
};
var authActions_signOut = function signOut() {
  return {
    type: SIGNOUT
  };
};
var authActions_signOutSuccess = function signOutSuccess() {
  return {
    type: SIGNOUT_SUCCESS
  };
};
var authActions_onAuthStateChanged = function onAuthStateChanged() {
  return {
    type: ON_AUTHSTATE_CHANGED
  };
};
var authActions_onAuthStateSuccess = function onAuthStateSuccess(user) {
  return {
    type: ON_AUTHSTATE_SUCCESS,
    payload: user
  };
};
var authActions_onAuthStateFail = function onAuthStateFail(error) {
  return {
    type: ON_AUTHSTATE_FAIL,
    payload: error
  };
};
var authActions_resetPassword = function resetPassword(email) {
  return {
    type: RESET_PASSWORD,
    payload: email
  };
};
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/redux-persist/es/index.js + 11 modules
var es = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/index.js
var storage = __webpack_require__(200);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage);

// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js + 2 modules
var redux_saga_core_npm_proxy_esm = __webpack_require__(203);

// CONCATENATED MODULE: ./src/redux/reducers/productReducer.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var productReducer_initState = {
  lastRefKey: null,
  total: 0,
  items: []
};
/* harmony default export */ var productReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lastRefKey: null,
    total: 0,
    items: [],
    searchedProducts: productReducer_initState
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.payload.products))
      });

    case ADD_PRODUCT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [].concat(_toConsumableArray(state.items), [action.payload])
      });

    case SEARCH_PRODUCT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: {
          lastRefKey: action.payload.lastKey,
          total: action.payload.total,
          items: [].concat(_toConsumableArray(state.searchedProducts.items), _toConsumableArray(action.payload.products))
        }
      });

    case CLEAR_SEARCH_STATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: productReducer_initState
      });

    case REMOVE_PRODUCT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(function (product) {
          return product.id !== action.payload;
        })
      });

    case EDIT_PRODUCT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.map(function (product) {
          if (product.id === action.payload.id) {
            return _objectSpread(_objectSpread({}, product), action.payload.updates);
          }

          return product;
        })
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/basketReducer.js
function basketReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function basketReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { basketReducer_ownKeys(Object(source), true).forEach(function (key) { basketReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { basketReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function basketReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function basketReducer_toConsumableArray(arr) { return basketReducer_arrayWithoutHoles(arr) || basketReducer_iterableToArray(arr) || basketReducer_unsupportedIterableToArray(arr) || basketReducer_nonIterableSpread(); }

function basketReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function basketReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return basketReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return basketReducer_arrayLikeToArray(o, minLen); }

function basketReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function basketReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return basketReducer_arrayLikeToArray(arr); }

function basketReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ var basketReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_BASKET_ITEMS:
      return action.payload;

    case ADD_TO_BASKET:
      return state.some(function (product) {
        return product.id === action.payload.id;
      }) ? state : [].concat(basketReducer_toConsumableArray(state), [action.payload]);

    case REMOVE_FROM_BASKET:
      return state.filter(function (product) {
        return product.id !== action.payload;
      });

    case CLEAR_BASKET:
      return [];

    case ADD_QTY_ITEM:
      return state.map(function (product) {
        if (product.id === action.payload) {
          return basketReducer_objectSpread(basketReducer_objectSpread({}, product), {}, {
            quantity: product.quantity + 1
          });
        }

        return product;
      });

    case MINUS_QTY_ITEM:
      return state.map(function (product) {
        if (product.id === action.payload) {
          return basketReducer_objectSpread(basketReducer_objectSpread({}, product), {}, {
            quantity: product.quantity - 1
          });
        }

        return product;
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/authReducer.js

var authReducer_initState = {// id: 'test-123',
  // role: 'ADMIN',
  // provider: 'password'
};
/* harmony default export */ var authReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : authReducer_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        id: action.payload.id,
        role: action.payload.role,
        provider: action.payload.provider
      };

    case SIGNOUT_SUCCESS:
      return {};

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/profileReducer.js
function profileReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function profileReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profileReducer_ownKeys(Object(source), true).forEach(function (key) { profileReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profileReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profileReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import profile from 'static/profile.jpg';
// import banner from 'static/banner.jpg';
// const initState = {
//   fullname: 'Pedro Juan',
//   email: 'juanpedro@gmail.com',
//   address: '',
//   mobile: {},
//   avatar: profile,
//   banner,
//   dateJoined: 1954234787348
// };

/* harmony default export */ var profileReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_PROFILE:
      return action.payload;

    case UPDATE_PROFILE_SUCCESS:
      return profileReducer_objectSpread(profileReducer_objectSpread({}, state), action.payload);

    case CLEAR_PROFILE:
      return {};

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/filterReducer.js
function filterReducer_toConsumableArray(arr) { return filterReducer_arrayWithoutHoles(arr) || filterReducer_iterableToArray(arr) || filterReducer_unsupportedIterableToArray(arr) || filterReducer_nonIterableSpread(); }

function filterReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function filterReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return filterReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return filterReducer_arrayLikeToArray(o, minLen); }

function filterReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function filterReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return filterReducer_arrayLikeToArray(arr); }

function filterReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function filterReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function filterReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { filterReducer_ownKeys(Object(source), true).forEach(function (key) { filterReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { filterReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function filterReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var filterReducer_initState = {
  recent: [],
  keyword: '',
  brand: '',
  minPrice: 0,
  maxPrice: 0,
  sortBy: ''
};
/* harmony default export */ var filterReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : filterReducer_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_TEXT_FILTER:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        recent: !!state.recent.find(function (n) {
          return n === action.payload;
        }) || action.payload === '' ? state.recent : [action.payload].concat(filterReducer_toConsumableArray(state.recent)),
        keyword: action.payload
      });

    case SET_BRAND_FILTER:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        brand: action.payload
      });

    case SET_MAX_PRICE_FILTER:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        maxPrice: action.payload
      });

    case SET_MIN_PRICE_FILTER:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        minPrice: action.payload
      });

    case RESET_FILTER:
      return filterReducer_initState;

    case CLEAR_RECENT_SEARCH:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        recent: []
      });

    case REMOVE_SELECTED_RECENT:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), {}, {
        recent: state.recent.filter(function (item) {
          return item !== action.payload;
        })
      });

    case APPLY_FILTER:
      return filterReducer_objectSpread(filterReducer_objectSpread({}, state), action.payload);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/checkoutReducer.js
function checkoutReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkoutReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkoutReducer_ownKeys(Object(source), true).forEach(function (key) { checkoutReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkoutReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkoutReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var defaultState = {
  shipping: {},
  payment: {
    type: 'paypal',
    data: {}
  }
};
/* harmony default export */ var checkoutReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_CHECKOUT_SHIPPING_DETAILS:
      return checkoutReducer_objectSpread(checkoutReducer_objectSpread({}, state), {}, {
        shipping: action.payload
      });

    case SET_CHECKOUT_PAYMENT_DETAILS:
      return checkoutReducer_objectSpread(checkoutReducer_objectSpread({}, state), {}, {
        payment: action.payload
      });

    case RESET_CHECKOUT:
      return defaultState;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/userReducer.js
function userReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function userReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { userReducer_ownKeys(Object(source), true).forEach(function (key) { userReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { userReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function userReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function userReducer_toConsumableArray(arr) { return userReducer_arrayWithoutHoles(arr) || userReducer_iterableToArray(arr) || userReducer_unsupportedIterableToArray(arr) || userReducer_nonIterableSpread(); }

function userReducer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function userReducer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return userReducer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return userReducer_arrayLikeToArray(o, minLen); }

function userReducer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function userReducer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return userReducer_arrayLikeToArray(arr); }

function userReducer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // const initState = [
//   {
//     firstname: 'Gago',
//     lastname: 'Ka',
//     email: 'gagoka@mail.com',
//     password: 'gagooo',
//     avatar: '',
//     banner: '',
//     dateJoined: 0
//   }
// ];

/* harmony default export */ var userReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_USER:
      return [].concat(userReducer_toConsumableArray(state), [action.payload]);

    case EDIT_USER:
      return state.map(function (user) {
        if (user.id === action.payload.id) {
          return userReducer_objectSpread(userReducer_objectSpread({}, user), action.payload);
        }

        return user;
      });

    case DELETE_USER:
      return state.filter(function (user) {
        return user.id !== action.payload;
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/miscReducer.js
function miscReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function miscReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { miscReducer_ownKeys(Object(source), true).forEach(function (key) { miscReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { miscReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function miscReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var miscReducer_initState = {
  loading: false,
  isAuthenticating: false,
  authStatus: {},
  requestStatus: null,
  theme: 'light'
};
/* harmony default export */ var miscReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : miscReducer_initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOADING:
      return miscReducer_objectSpread(miscReducer_objectSpread({}, state), {}, {
        loading: action.payload
      });

    case IS_AUTHENTICATING:
      return miscReducer_objectSpread(miscReducer_objectSpread({}, state), {}, {
        isAuthenticating: action.payload
      });

    case SET_REQUEST_STATUS:
      return miscReducer_objectSpread(miscReducer_objectSpread({}, state), {}, {
        requestStatus: action.payload
      });

    case SET_AUTH_STATUS:
      return miscReducer_objectSpread(miscReducer_objectSpread({}, state), {}, {
        authStatus: action.payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/index.js








var rootReducer = {
  products: productReducer,
  basket: basketReducer,
  auth: authReducer,
  profile: profileReducer,
  filter: filterReducer,
  users: userReducer,
  checkout: checkoutReducer,
  app: miscReducer
};
/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 1 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.cjs.js
var index_cjs = __webpack_require__(48);
var index_cjs_default = /*#__PURE__*/__webpack_require__.n(index_cjs);

// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.esm.js
var index_esm = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.esm.js
var dist_index_esm = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/firebase/storage/dist/index.esm.js + 1 modules
var storage_dist_index_esm = __webpack_require__(433);

// CONCATENATED MODULE: ./src/firebase/firebase.js
function firebase_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function firebase_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { firebase_ownKeys(Object(source), true).forEach(function (key) { firebase_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { firebase_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function firebase_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var firebaseConfig = {
  apiKey: "AIzaSyAgH2Cjd7jjntfv8aidMnCdmh-3WIS5LlU",
  authDomain: "pk-noodles.firebaseapp.com",
  databaseURL: "https://pk-noodles.firebaseio.com",
  projectId: "pk-noodles",
  storageBucket: "pk-noodles.appspot.com",
  messagingSenderId: "888696490067",
  appId: "1:888696490067:web:fac1e89c86ed7d8c7d1ea6"
};

var firebase_Firebase = function Firebase() {
  var _this = this;

  _classCallCheck(this, Firebase);

  firebase_defineProperty(this, "createAccount", function (email, password) {
    return _this.auth.createUserWithEmailAndPassword(email, password);
  });

  firebase_defineProperty(this, "signIn", function (email, password) {
    return _this.auth.signInWithEmailAndPassword(email, password);
  });

  firebase_defineProperty(this, "signInWithGoogle", function () {
    return _this.auth.signInWithPopup(new index_cjs_default.a.auth.GoogleAuthProvider());
  });

  firebase_defineProperty(this, "signInWithFacebook", function () {
    return _this.auth.signInWithPopup(new index_cjs_default.a.auth.FacebookAuthProvider());
  });

  firebase_defineProperty(this, "signInWithGithub", function () {
    return _this.auth.signInWithPopup(new index_cjs_default.a.auth.GithubAuthProvider());
  });

  firebase_defineProperty(this, "signOut", function () {
    return _this.auth.signOut();
  });

  firebase_defineProperty(this, "passwordReset", function (email) {
    return _this.auth.sendPasswordResetEmail(email);
  });

  firebase_defineProperty(this, "addUser", function (id, user) {
    return _this.db.collection('users').doc(id).set(user);
  });

  firebase_defineProperty(this, "getUser", function (id) {
    return _this.db.collection('users').doc(id).get();
  });

  firebase_defineProperty(this, "passwordUpdate", function (password) {
    return _this.auth.currentUser.updatePassword(password);
  });

  firebase_defineProperty(this, "changePassword", function (currentPassword, newPassword) {
    return new Promise(function (resolve, reject) {
      _this.reauthenticate(currentPassword).then(function () {
        var user = _this.auth.currentUser;
        user.updatePassword(newPassword).then(function () {
          resolve('Password updated successfully!');
        })["catch"](function (error) {
          return reject(error);
        });
      })["catch"](function (error) {
        return reject(error);
      });
    });
  });

  firebase_defineProperty(this, "reauthenticate", function (currentPassword) {
    var user = _this.auth.currentUser;
    var cred = index_cjs_default.a.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  });

  firebase_defineProperty(this, "updateEmail", function (currentPassword, newEmail) {
    return new Promise(function (resolve, reject) {
      _this.reauthenticate(currentPassword).then(function () {
        var user = _this.auth.currentUser;
        user.updateEmail(newEmail).then(function () {
          resolve('Email Successfully updated');
        })["catch"](function (error) {
          return reject(error);
        });
      })["catch"](function (error) {
        return reject(error);
      });
    });
  });

  firebase_defineProperty(this, "updateProfile", function (id, updates) {
    return _this.db.collection('users').doc(id).update(updates);
  });

  firebase_defineProperty(this, "onAuthStateChanged", function () {
    return new Promise(function (resolve, reject) {
      _this.auth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject(new Error('Auth State Changed failed'));
        }
      });
    });
  });

  firebase_defineProperty(this, "saveBasketItems", function (items, userId) {
    return _this.db.collection('users').doc(userId).update({
      basket: items
    });
  });

  firebase_defineProperty(this, "setAuthPersistence", function () {
    return _this.auth.setPersistence(index_cjs_default.a.auth.Auth.Persistence.LOCAL);
  });

  firebase_defineProperty(this, "getProduct", function (id) {
    return _this.db.collection('products').doc(id).get();
  });

  firebase_defineProperty(this, "getProducts", function (lastRefKey, searchKey) {
    var didTimeout = false;
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
        var productsRef, queryRef, query, snapshot, products, lastKey, timeout, totalQueryRef, totalQuery, totalResult, total, _snapshot, _products, _lastKey;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                productsRef = _this.db.collection('products');
                queryRef = productsRef.orderBy(index_cjs_default.a.firestore.FieldPath.documentId());

                if (!lastRefKey) {
                  _context.next = 20;
                  break;
                }

                query = queryRef.startAfter(lastRefKey).limit(12);

                if (searchKey) {
                  query = productsRef.orderBy('name_lower').startAfter(lastRefKey).where('name_lower', '>=', searchKey).where('name_lower', '<=', searchKey + "\uF8FF").limit(12);
                }

                _context.prev = 5;
                _context.next = 8;
                return query.get();

              case 8:
                snapshot = _context.sent;
                products = [];
                snapshot.forEach(function (doc) {
                  return products.push(firebase_objectSpread({
                    id: doc.id
                  }, doc.data()));
                });
                lastKey = snapshot.docs[snapshot.docs.length - 1];
                resolve({
                  products: products,
                  lastKey: lastKey
                });
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);
                reject(':( Failed to fetch products.');

              case 18:
                _context.next = 42;
                break;

              case 20:
                timeout = setTimeout(function () {
                  didTimeout = true;
                  reject('Request timeout, please try again');
                }, 15000);
                _context.prev = 21;
                // getting the total count of data
                // adding shallow parameter for smaller response size
                // better than making a query from firebase
                // NOT AVAILEBLE IN FIRESTORE const request = await fetch(`${process.env.FIREBASE_DB_URL}/products.json?shallow=true`);
                totalQueryRef = _this.db.collection('products');
                totalQuery = totalQueryRef;

                if (searchKey) {
                  queryRef = productsRef.orderBy('name_lower');
                  totalQuery = totalQueryRef.where('name_lower', '>=', searchKey).where('name_lower', '<=', searchKey + "\uF8FF");
                  productsRef = queryRef.where('name_lower', '>=', searchKey).where('name_lower', '<=', searchKey + "\uF8FF").limit(12);
                }

                _context.next = 27;
                return totalQuery.get();

              case 27:
                totalResult = _context.sent;
                total = totalResult.docs.length;
                _context.next = 31;
                return productsRef.limit(12).get();

              case 31:
                _snapshot = _context.sent;
                clearTimeout(timeout);

                if (!didTimeout) {
                  _products = [];

                  _snapshot.forEach(function (doc) {
                    return _products.push(firebase_objectSpread({
                      id: doc.id
                    }, doc.data()));
                  });

                  _lastKey = _snapshot.docs[_snapshot.docs.length - 1];
                  resolve({
                    products: _products,
                    lastKey: _lastKey,
                    total: total
                  });
                }

                _context.next = 42;
                break;

              case 36:
                _context.prev = 36;
                _context.t1 = _context["catch"](21);

                if (!didTimeout) {
                  _context.next = 40;
                  break;
                }

                return _context.abrupt("return");

              case 40:
                console.log('Failed to fetch products: An error occured while trying to fetch products or there may be no product ', _context.t1);
                reject(':( Failed to fetch products.');

              case 42:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 15], [21, 36]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  });

  firebase_defineProperty(this, "getFeaturedProducts", function () {
    var itemsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
    return _this.db.collection('products').where('isFeatured', '==', true).limit(itemsCount).get();
  });

  firebase_defineProperty(this, "getRecommendedProducts", function () {
    var itemsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
    return _this.db.collection('products').where('isRecommended', '==', true).limit(itemsCount).get();
  });

  firebase_defineProperty(this, "addProduct", function (id, product) {
    return _this.db.collection('products').doc(id).set(product);
  });

  firebase_defineProperty(this, "generateKey", function () {
    return _this.db.collection('products').doc().id;
  });

  firebase_defineProperty(this, "storeImage", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, folder, imageFile) {
      var snapshot, downloadURL;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.storage.ref(folder).child(id).put(imageFile);

            case 2:
              snapshot = _context2.sent;
              _context2.next = 5;
              return snapshot.ref.getDownloadURL();

            case 5:
              downloadURL = _context2.sent;
              return _context2.abrupt("return", downloadURL);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }());

  firebase_defineProperty(this, "deleteImage", function (id) {
    return _this.storage.ref('products').child(id)["delete"]();
  });

  firebase_defineProperty(this, "editProduct", function (id, updates) {
    return _this.db.collection('products').doc(id).update(updates);
  });

  firebase_defineProperty(this, "removeProduct", function (id) {
    return _this.db.collection('products').doc(id)["delete"]();
  });

  index_cjs_default.a.initializeApp(firebaseConfig);
  this.storage = index_cjs_default.a.storage();
  this.db = index_cjs_default.a.firestore();
  this.auth = index_cjs_default.a.auth();
} // AUTH ACTIONS 
// --------
;

var firebase = new firebase_Firebase(); // If you want to add a new field to every single document, run this
// delete or comment after first run or it may override what you have edited on first run.
// (async function () {
// 	const col = await firebase.db.collection('products').get();
// 	col.forEach((doc) => {
// 		doc.ref.update({
// 			isRecommended: false
// 		});
// 	})
// })()

/* harmony default export */ var firebase_firebase = (firebase);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 2 modules
var esm_history = __webpack_require__(37);

// EXTERNAL MODULE: ./src/constants/routes.js
var routes = __webpack_require__(5);

// CONCATENATED MODULE: ./src/hooks/useDocumentTitle.js


var useDocumentTitle_useDocumentTitle = function useDocumentTitle(title) {
  Object(react["useLayoutEffect"])(function () {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Salinaka - eCommerce React App';
    }
  }, [title]);
};

/* harmony default export */ var hooks_useDocumentTitle = (useDocumentTitle_useDocumentTitle);
// CONCATENATED MODULE: ./src/hooks/useScrollTop.js



var useScrollTop_useScrollTop = function useScrollTop() {
  Object(react["useEffect"])(function () {
    window.scrollTo(0, 0);
  }, []);
};

/* harmony default export */ var hooks_useScrollTop = (useScrollTop_useScrollTop);
// CONCATENATED MODULE: ./src/views/admin/dashboard/index.js




var dashboard_Dashboard = function Dashboard() {
  hooks_useDocumentTitle('Welcome | Admin Dashboard');
  hooks_useScrollTop();
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Welcome to admin dashboard"));
};

/* harmony default export */ var dashboard = (dashboard_Dashboard);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var react_redux_es = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/redux/actions/filterActions.js

var filterActions_setTextFilter = function setTextFilter(keyword) {
  return {
    type: SET_TEXT_FILTER,
    payload: keyword
  };
};
var filterActions_setBrandFilter = function setBrandFilter(brand) {
  return {
    type: SET_BRAND_FILTER,
    payload: brand
  };
};
var filterActions_setMinPriceFilter = function setMinPriceFilter(min) {
  return {
    type: SET_MIN_PRICE_FILTER,
    payload: min
  };
};
var filterActions_setMaxPriceFilter = function setMaxPriceFilter(max) {
  return {
    type: SET_MAX_PRICE_FILTER,
    payload: max
  };
};
var filterActions_resetFilter = function resetFilter() {
  return {
    type: RESET_FILTER
  };
};
var filterActions_clearRecentSearch = function clearRecentSearch() {
  return {
    type: CLEAR_RECENT_SEARCH
  };
};
var filterActions_removeSelectedRecent = function removeSelectedRecent(keyword) {
  return {
    type: REMOVE_SELECTED_RECENT,
    payload: keyword
  };
};
var filterActions_applyFilter = function applyFilter(filters) {
  return {
    type: APPLY_FILTER,
    payload: filters
  };
};
// CONCATENATED MODULE: ./src/components/product/ProductAppliedFilters.jsx
/* eslint-disable no-nested-ternary */





var ProductAppliedFilters_ProductAppliedFilters = function ProductAppliedFilters(_ref) {
  var filter = _ref.filter;
  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var fields = ['brand', 'minPrice', 'maxPrice', 'sortBy', 'keyword'];

  var onRemoveKeywordFilter = function onRemoveKeywordFilter() {
    dispatch(filterActions_applyFilter({
      keyword: ''
    }));
  };

  var onRemovePriceRangeFilter = function onRemovePriceRangeFilter() {
    dispatch(filterActions_applyFilter({
      minPrice: 0,
      maxPrice: 0
    }));
  };

  var onRemoveBrandFilter = function onRemoveBrandFilter() {
    dispatch(filterActions_applyFilter({
      brand: ''
    }));
  };

  var onRemoveSortFilter = function onRemoveSortFilter() {
    dispatch(filterActions_applyFilter({
      sortBy: ''
    }));
  };

  return !fields.some(function (key) {
    return !!filter[key];
  }) ? null : /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-applied-filters"
  }, filter.keyword && /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block"
  }, "Keyword"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "pill-content margin-0"
  }, filter.keyword), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-remove",
    onClick: onRemoveKeywordFilter
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))))), filter.brand && /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block"
  }, "Brand"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "pill-content margin-0"
  }, filter.brand), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-remove",
    onClick: onRemoveBrandFilter
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))))), (!!filter.minPrice || !!filter.maxPrice) && /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block"
  }, "Price Range"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "pill-content margin-0"
  }, "$", filter.minPrice, " - $", filter.maxPrice), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-remove",
    onClick: onRemovePriceRangeFilter
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))))), filter.sortBy && /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block"
  }, "Sort By"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill padding-right-l"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "pill-content margin-0"
  }, filter.sortBy === 'price-desc' ? 'Price High - Low' : filter.sortBy === 'price-asc' ? 'Price Low - High' : filter.sortBy === 'name-desc' ? 'Name Z - A' : 'Name A - Z'), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pill-remove",
    onClick: onRemoveSortFilter
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0 text-subtle"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))))));
};

ProductAppliedFilters_ProductAppliedFilters.propType = {
  filter: prop_types_default.a.shape({
    brand: prop_types_default.a.string,
    keyword: prop_types_default.a.string,
    minPrice: prop_types_default.a.number,
    maxPrice: prop_types_default.a.number
  })
};
/* harmony default export */ var product_ProductAppliedFilters = (ProductAppliedFilters_ProductAppliedFilters);
// CONCATENATED MODULE: ./src/selectors/selector.js
/* eslint-disable no-plusplus */

/* eslint-disable no-else-return */
var selectFilter = function selectFilter(products, filter) {
  if (!products || products.length === 0) return [];
  var keyword = filter.keyword.toLowerCase();
  return products.filter(function (product) {
    var isInRange = filter.maxPrice ? product.price >= filter.minPrice && product.price <= filter.maxPrice : true;
    var matchKeyword = product.keywords ? product.keywords.includes(keyword) : true; // const matchName = product.name ? product.name.toLowerCase().includes(keyword) : true;

    var matchDescription = product.description ? product.description.toLowerCase().includes(keyword) : true;
    var matchBrand = product.brand ? product.brand.toLowerCase().includes(filter.brand) : true;
    return (matchKeyword || matchDescription) && matchBrand && isInRange;
  }).sort(function (a, b) {
    if (filter.sortBy === 'name-desc') {
      return a.name < b.name ? 1 : -1;
    } else if (filter.sortBy === 'name-asc') {
      return a.name > b.name ? 1 : -1;
    } else if (filter.sortBy === 'price-desc') {
      return a.price < b.price ? 1 : -1;
    } else if (filter.sortBy === 'price-asc') {
      return a.price > b.price ? 1 : -1;
    }
  });
}; // Select product with highest price

var selectMax = function selectMax(products) {
  if (!products || products.length === 0) return 0;
  var high = products[0];

  for (var i = 0; i < products.length; i++) {
    if (products[i].price > high.price) {
      high = products[i];
    }
  }

  return Math.floor(high.price);
}; // Select product with lowest price

var selectMin = function selectMin(products) {
  if (!products || products.length === 0) return 0;
  var low = products[0];

  for (var i = 0; i < products.length; i++) {
    if (products[i].price < low.price) {
      low = products[i];
    }
  }

  return Math.floor(low.price);
};
// CONCATENATED MODULE: ./src/redux/actions/productActions.js

var productActions_getProducts = function getProducts(lastRef) {
  return {
    type: GET_PRODUCTS,
    payload: lastRef
  };
};
var productActions_getProductsSuccess = function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products
  };
};
var productActions_cancelGetProducts = function cancelGetProducts() {
  return {
    type: CANCEL_GET_PRODUCTS
  };
};
var productActions_addProduct = function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};
var productActions_searchProduct = function searchProduct(lastRefKey, searchKey) {
  return {
    type: SEARCH_PRODUCT,
    payload: {
      lastRefKey: lastRefKey,
      searchKey: searchKey
    }
  };
};
var productActions_searchProductSuccess = function searchProductSuccess(products) {
  return {
    type: SEARCH_PRODUCT_SUCCESS,
    payload: products
  };
};
var productActions_clearSearchState = function clearSearchState() {
  return {
    type: CLEAR_SEARCH_STATE
  };
};
var productActions_addProductSuccess = function addProductSuccess(product) {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: product
  };
};
var productActions_removeProduct = function removeProduct(id) {
  return {
    type: REMOVE_PRODUCT,
    payload: id
  };
};
var productActions_removeProductSuccess = function removeProductSuccess(id) {
  return {
    type: REMOVE_PRODUCT_SUCCESS,
    payload: id
  };
};
var productActions_editProduct = function editProduct(id, updates) {
  return {
    type: EDIT_PRODUCT,
    payload: {
      id: id,
      updates: updates
    }
  };
};
var productActions_editProductSuccess = function editProductSuccess(updates) {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    payload: updates
  };
};
// CONCATENATED MODULE: ./src/redux/actions/miscActions.js

var miscActions_setLoading = function setLoading() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: LOADING,
    payload: bool
  };
};
var miscActions_setAuthenticating = function setAuthenticating() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: IS_AUTHENTICATING,
    payload: bool
  };
};
var miscActions_setRequestStatus = function setRequestStatus(status) {
  return {
    type: SET_REQUEST_STATUS,
    payload: status
  };
};
var miscActions_setAuthStatus = function setAuthStatus(status) {
  return {
    type: SET_AUTH_STATUS,
    payload: status
  };
};
// CONCATENATED MODULE: ./src/components/ui/MessageDisplay.jsx


var MessageDisplay_MessageDisplay = function MessageDisplay(_ref) {
  var message = _ref.message,
      desc = _ref.desc,
      buttonLabel = _ref.buttonLabel,
      action = _ref.action;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center"
  }, message || 'Message'), desc && /*#__PURE__*/react_default.a.createElement("span", null, desc), /*#__PURE__*/react_default.a.createElement("br", null), action && /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small",
    onClick: action
  }, buttonLabel || 'Okay'));
};

/* harmony default export */ var ui_MessageDisplay = (MessageDisplay_MessageDisplay);
// CONCATENATED MODULE: ./src/components/product/ProductList.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || ProductList_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProductList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProductList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProductList_arrayLikeToArray(o, minLen); }

function ProductList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-nested-ternary */

/* eslint-disable react/jsx-sort-props */







var ProductList_ProductList = function ProductList(props) {
  var _useState = Object(react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var dispatch = Object(react_redux_es["c" /* useDispatch */])();

  var fetchProducts = function fetchProducts() {
    setFetching(true);
    dispatch(productActions_getProducts(props.lastRefKey));
  };

  Object(react["useEffect"])(function () {
    if (props.productsCount === 0 || !props.lastRefKey) {
      fetchProducts();
    }

    window.scrollTo(0, 0);
    return function () {
      return dispatch(miscActions_setLoading(false));
    };
  }, []);
  Object(react["useEffect"])(function () {
    setFetching(false);
  }, [props.lastRefKey]);

  var foundOnBasket = function foundOnBasket(id) {
    return !!props.basket.find(function (item) {
      return item.id === id;
    });
  };

  return props.filteredProducts.length === 0 && !props.isLoading && !props.lastRefKey ? /*#__PURE__*/react_default.a.createElement(ui_MessageDisplay, {
    message: props.requestStatus ? props.requestStatus : 'Failed to fetch items.'
  }) : props.requestStatus ? /*#__PURE__*/react_default.a.createElement(ui_MessageDisplay, {
    message: props.requestStatus,
    action: fetchProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, props.children({
    foundOnBasket: foundOnBasket
  }), props.productsCount < props.totalProductsCount && /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex-center padding-l"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small",
    disabled: isFetching,
    onClick: fetchProducts
  }, isFetching ? 'Fetching Items...' : 'Show More Items')));
};

ProductList_ProductList.propType = {
  filter: prop_types_default.a.object,
  basket: prop_types_default.a.arrayOf(prop_types["object"]),
  filteredProducts: prop_types_default.a.arrayOf(prop_types_default.a.object),
  products: prop_types_default.a.arrayOf(prop_types["object"]),
  isLoading: prop_types_default.a.bool.isRequired,
  requestStatus: prop_types_default.a.string.isRequired,
  productsCount: prop_types_default.a.number.isRequired,
  totalProductsCount: prop_types_default.a.number.isRequired,
  filteredProductsLength: prop_types_default.a.number.isRequired
};
/* harmony default export */ var product_ProductList = (ProductList_ProductList);
// CONCATENATED MODULE: ./src/components/ui/Boundary.jsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Boundary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Boundary_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Boundary_Boundary = /*#__PURE__*/function (_Component) {
  _inherits(Boundary, _Component);

  var _super = _createSuper(Boundary);

  function Boundary() {
    var _this;

    Boundary_classCallCheck(this, Boundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Boundary_defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false
    });

    return _this;
  }

  _createClass(Boundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.log(error);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "loader"
        }, /*#__PURE__*/react_default.a.createElement("h3", null, ":( Something went wrong."));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return Boundary;
}(react["Component"]);

/* harmony default export */ var ui_Boundary = (Boundary_Boundary);
// CONCATENATED MODULE: ./src/components/ui/SearchBar.jsx
function SearchBar_slicedToArray(arr, i) { return SearchBar_arrayWithHoles(arr) || SearchBar_iterableToArrayLimit(arr, i) || SearchBar_unsupportedIterableToArray(arr, i) || SearchBar_nonIterableRest(); }

function SearchBar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SearchBar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SearchBar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SearchBar_arrayLikeToArray(o, minLen); }

function SearchBar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SearchBar_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SearchBar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var SearchBar_SearchBar = function SearchBar(_ref) {
  var filter = _ref.filter,
      isLoading = _ref.isLoading;

  var _useState = Object(react["useState"])(''),
      _useState2 = SearchBar_slicedToArray(_useState, 2),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var searchbarRef = Object(react["useRef"])(null);
  var history = Object(react_router["g" /* useHistory */])();
  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var isMobile = window.screen.width <= 800;

  var onSearchChange = function onSearchChange(e) {
    var val = e.target.value.trimStart();
    setSearchInput(val);
  };

  var onKeyUp = function onKeyUp(e) {
    if (e.keyCode === 13) {
      // dispatch(setTextFilter(searchInput));
      e.target.blur();
      searchbarRef.current.classList.remove('is-open-recent-search');

      if (isMobile) {
        history.push('/');
      }

      history.push("/search/".concat(searchInput.trim().toLowerCase()));
    }
  };

  var recentSearchClickHandler = function recentSearchClickHandler(e) {
    var searchBar = e.target.closest('.searchbar');

    if (!searchBar) {
      searchbarRef.current.classList.remove('is-open-recent-search');
      document.removeEventListener('click', recentSearchClickHandler);
    }
  };

  var onFocusInput = function onFocusInput(e) {
    e.target.select();

    if (filter.recent.length !== 0) {
      searchbarRef.current.classList.add('is-open-recent-search');
      document.addEventListener('click', recentSearchClickHandler);
    }
  };

  var onClickRecentSearch = function onClickRecentSearch(keyword) {
    // dispatch(setTextFilter(keyword));
    searchbarRef.current.classList.remove('is-open-recent-search');
    history.push("/search/".concat(keyword.trim().toLowerCase()));
  };

  var onClearRecent = function onClearRecent() {
    dispatch(filterActions_clearRecentSearch());
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "searchbar",
    ref: searchbarRef
  }, /*#__PURE__*/react_default.a.createElement("input", {
    className: "search-input searchbar-input",
    onChange: onSearchChange,
    onKeyUp: onKeyUp,
    onFocus: onFocusInput,
    placeholder: "Search product...",
    readOnly: isLoading,
    type: "text",
    value: searchInput
  }), filter.recent.length !== 0 && /*#__PURE__*/react_default.a.createElement("div", {
    className: "searchbar-recent"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "searchbar-recent-header"
  }, /*#__PURE__*/react_default.a.createElement("h5", null, "Recent Search"), /*#__PURE__*/react_default.a.createElement("h5", {
    className: "searchbar-recent-clear text-subtle",
    onClick: onClearRecent
  }, "Clear")), filter.recent.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "searchbar-recent-wrapper",
      key: "search-".concat(item, "-").concat(index)
    }, /*#__PURE__*/react_default.a.createElement("h5", {
      className: "searchbar-recent-keyword margin-0",
      onClick: function onClick() {
        return onClickRecentSearch(item);
      }
    }, item), /*#__PURE__*/react_default.a.createElement("span", {
      className: "searchbar-recent-button text-subtle",
      onClick: function onClick() {
        return dispatch(filterActions_removeSelectedRecent(item));
      }
    }, "X"));
  })), /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-search searchbar-icon"
  })));
};

/* harmony default export */ var ui_SearchBar = (SearchBar_SearchBar);
// CONCATENATED MODULE: ./src/hooks/useModal.js
function useModal_slicedToArray(arr, i) { return useModal_arrayWithHoles(arr) || useModal_iterableToArrayLimit(arr, i) || useModal_unsupportedIterableToArray(arr, i) || useModal_nonIterableRest(); }

function useModal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useModal_arrayLikeToArray(o, minLen); }

function useModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useModal_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useModal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useModal_useModal = function useModal() {
  var _useState = Object(react["useState"])(false),
      _useState2 = useModal_slicedToArray(_useState, 2),
      isOpenModal = _useState2[0],
      setModalOpen = _useState2[1];

  var onOpenModal = function onOpenModal() {
    setModalOpen(true);
  };

  var onCloseModal = function onCloseModal() {
    setModalOpen(false);
  };

  return {
    isOpenModal: isOpenModal,
    onOpenModal: onOpenModal,
    onCloseModal: onCloseModal
  };
};

/* harmony default export */ var hooks_useModal = (useModal_useModal);
// EXTERNAL MODULE: ./node_modules/react-compound-slider/es/index.js + 47 modules
var react_compound_slider_es = __webpack_require__(86);

// CONCATENATED MODULE: ./src/components/ui/PriceRangeComponents.jsx
function PriceRangeComponents_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PriceRangeComponents_typeof = function _typeof(obj) { return typeof obj; }; } else { PriceRangeComponents_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PriceRangeComponents_typeof(obj); }

function PriceRangeComponents_slicedToArray(arr, i) { return PriceRangeComponents_arrayWithHoles(arr) || PriceRangeComponents_iterableToArrayLimit(arr, i) || PriceRangeComponents_unsupportedIterableToArray(arr, i) || PriceRangeComponents_nonIterableRest(); }

function PriceRangeComponents_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PriceRangeComponents_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PriceRangeComponents_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PriceRangeComponents_arrayLikeToArray(o, minLen); }

function PriceRangeComponents_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PriceRangeComponents_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PriceRangeComponents_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function PriceRangeComponents_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PriceRangeComponents_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PriceRangeComponents_createClass(Constructor, protoProps, staticProps) { if (protoProps) PriceRangeComponents_defineProperties(Constructor.prototype, protoProps); if (staticProps) PriceRangeComponents_defineProperties(Constructor, staticProps); return Constructor; }

function PriceRangeComponents_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PriceRangeComponents_setPrototypeOf(subClass, superClass); }

function PriceRangeComponents_setPrototypeOf(o, p) { PriceRangeComponents_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PriceRangeComponents_setPrototypeOf(o, p); }

function PriceRangeComponents_createSuper(Derived) { var hasNativeReflectConstruct = PriceRangeComponents_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PriceRangeComponents_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PriceRangeComponents_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PriceRangeComponents_possibleConstructorReturn(this, result); }; }

function PriceRangeComponents_possibleConstructorReturn(self, call) { if (call && (PriceRangeComponents_typeof(call) === "object" || typeof call === "function")) { return call; } return PriceRangeComponents_assertThisInitialized(self); }

function PriceRangeComponents_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PriceRangeComponents_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function PriceRangeComponents_getPrototypeOf(o) { PriceRangeComponents_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PriceRangeComponents_getPrototypeOf(o); }

function PriceRangeComponents_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // *******************************************************
// TOOLTIP RAIL
// *******************************************************

var railStyle = {
  position: 'absolute',
  width: '100%',
  transform: 'translate(0%, -50%)',
  height: 20,
  cursor: 'pointer',
  zIndex: 300 // border: '1px solid grey',

};
var railCenterStyle = {
  position: 'absolute',
  width: '100%',
  transform: 'translate(0%, -50%)',
  height: 14,
  borderRadius: 7,
  cursor: 'pointer',
  pointerEvents: 'none',
  backgroundColor: '#d0d0d0'
};
var PriceRangeComponents_TooltipRail = /*#__PURE__*/function (_Component) {
  PriceRangeComponents_inherits(TooltipRail, _Component);

  var _super = PriceRangeComponents_createSuper(TooltipRail);

  function TooltipRail() {
    var _this;

    PriceRangeComponents_classCallCheck(this, TooltipRail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    PriceRangeComponents_defineProperty(PriceRangeComponents_assertThisInitialized(_this), "state", {
      value: null,
      percent: null
    });

    PriceRangeComponents_defineProperty(PriceRangeComponents_assertThisInitialized(_this), "onMouseEnter", function () {
      document.addEventListener('mousemove', _this.onMouseMove);
    });

    PriceRangeComponents_defineProperty(PriceRangeComponents_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.setState({
        value: null,
        percent: null
      });

      document.removeEventListener('mousemove', _this.onMouseMove);
    });

    PriceRangeComponents_defineProperty(PriceRangeComponents_assertThisInitialized(_this), "onMouseMove", function (e) {
      var _this$props = _this.props,
          activeHandleID = _this$props.activeHandleID,
          getEventData = _this$props.getEventData;

      if (activeHandleID) {
        _this.setState({
          value: null,
          percent: null
        });
      } else {
        _this.setState(getEventData(e));
      }
    });

    return _this;
  }

  PriceRangeComponents_createClass(TooltipRail, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value = _this$state.value,
          percent = _this$state.percent;
      var _this$props2 = this.props,
          activeHandleID = _this$props2.activeHandleID,
          getRailProps = _this$props2.getRailProps;
      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, !activeHandleID && value ? /*#__PURE__*/react_default.a.createElement("div", {
        style: {
          left: "".concat(percent, "%"),
          position: 'absolute',
          marginLeft: '-11px',
          marginTop: '-35px'
        }
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "tooltip"
      }, /*#__PURE__*/react_default.a.createElement("span", {
        className: "tooltiptext"
      }, "Value: ", value))) : null, /*#__PURE__*/react_default.a.createElement("div", _extends({
        style: railStyle
      }, getRailProps({
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }))), /*#__PURE__*/react_default.a.createElement("div", {
        style: railCenterStyle
      }));
    }
  }]);

  return TooltipRail;
}(react["Component"]);
PriceRangeComponents_TooltipRail.propTypes = {
  getEventData: prop_types_default.a.func,
  activeHandleID: prop_types_default.a.string,
  getRailProps: prop_types_default.a.func.isRequired
};
PriceRangeComponents_TooltipRail.defaultProps = {
  disabled: false
}; // *******************************************************
// SLIDER RAIL (no tooltips)
// *******************************************************

var railOuterStyle = {
  position: 'absolute',
  transform: 'translate(0%, -50%)',
  width: '100%',
  height: 42,
  borderRadius: 7,
  cursor: 'pointer' // border: '1px solid grey',

};
var railInnerStyle = {
  position: 'absolute',
  width: '100%',
  height: 14,
  transform: 'translate(0%, -50%)',
  borderRadius: 7,
  pointerEvents: 'none',
  backgroundColor: '#d0d0d0'
};
function SliderRail(_ref) {
  var getRailProps = _ref.getRailProps;
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement("div", _extends({
    style: railOuterStyle
  }, getRailProps())), /*#__PURE__*/react_default.a.createElement("div", {
    style: railInnerStyle
  }));
}
SliderRail.propTypes = {
  getRailProps: prop_types_default.a.func.isRequired
}; // *******************************************************
// HANDLE COMPONENT
// *******************************************************

var PriceRangeComponents_Handle = /*#__PURE__*/function (_Component2) {
  PriceRangeComponents_inherits(Handle, _Component2);

  var _super2 = PriceRangeComponents_createSuper(Handle);

  function Handle() {
    var _this2;

    PriceRangeComponents_classCallCheck(this, Handle);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    PriceRangeComponents_defineProperty(PriceRangeComponents_assertThisInitialized(_this2), "state", {
      mouseOver: false
    });

    PriceRangeComponents_defineProperty(PriceRangeComponents_assertThisInitialized(_this2), "onMouseEnter", function () {
      _this2.setState({
        mouseOver: true
      });
    });

    PriceRangeComponents_defineProperty(PriceRangeComponents_assertThisInitialized(_this2), "onMouseLeave", function () {
      _this2.setState({
        mouseOver: false
      });
    });

    return _this2;
  }

  PriceRangeComponents_createClass(Handle, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          _this$props3$domain = PriceRangeComponents_slicedToArray(_this$props3.domain, 2),
          min = _this$props3$domain[0],
          max = _this$props3$domain[1],
          _this$props3$handle = _this$props3.handle,
          id = _this$props3$handle.id,
          value = _this$props3$handle.value,
          percent = _this$props3$handle.percent,
          isActive = _this$props3.isActive,
          disabled = _this$props3.disabled,
          getHandleProps = _this$props3.getHandleProps;

      var mouseOver = this.state.mouseOver;
      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, (mouseOver || isActive) && !disabled ? /*#__PURE__*/react_default.a.createElement("div", {
        style: {
          left: "".concat(percent, "%"),
          position: 'absolute',
          marginLeft: '-11px',
          marginTop: '-35px'
        }
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "tooltip"
      }, /*#__PURE__*/react_default.a.createElement("span", {
        className: "tooltiptext"
      }, "Value: ", value))) : null, /*#__PURE__*/react_default.a.createElement("div", _extends({
        style: {
          left: "".concat(percent, "%"),
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          zIndex: 400,
          width: 26,
          height: 42,
          cursor: 'pointer',
          // border: '1px solid grey',
          backgroundColor: 'none'
        }
      }, getHandleProps(id, {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }))), /*#__PURE__*/react_default.a.createElement("div", {
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        style: {
          left: "".concat(percent, "%"),
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          zIndex: 300,
          width: 24,
          height: 24,
          border: 0,
          borderRadius: '50%',
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
          backgroundColor: disabled ? '#666' : '#1a1a1a'
        }
      }));
    }
  }]);

  return Handle;
}(react["Component"]);
PriceRangeComponents_Handle.propTypes = {
  domain: prop_types_default.a.array.isRequired,
  handle: prop_types_default.a.shape({
    id: prop_types_default.a.string.isRequired,
    value: prop_types_default.a.number.isRequired,
    percent: prop_types_default.a.number.isRequired
  }).isRequired,
  getHandleProps: prop_types_default.a.func.isRequired,
  isActive: prop_types_default.a.bool.isRequired,
  disabled: prop_types_default.a.bool
};
PriceRangeComponents_Handle.defaultProps = {
  disabled: false
}; // *******************************************************
// TRACK COMPONENT
// *******************************************************

function Track(_ref2) {
  var source = _ref2.source,
      target = _ref2.target,
      getTrackProps = _ref2.getTrackProps,
      disabled = _ref2.disabled;
  return /*#__PURE__*/react_default.a.createElement("div", _extends({
    style: {
      position: 'absolute',
      transform: 'translate(0%, -50%)',
      height: 14,
      zIndex: 1,
      backgroundColor: disabled ? '#ffd993' : '#ffa500',
      borderRadius: 7,
      cursor: 'pointer',
      left: "".concat(source.percent, "%"),
      width: "".concat(target.percent - source.percent, "%")
    }
  }, getTrackProps()));
}
Track.propTypes = {
  source: prop_types_default.a.shape({
    id: prop_types_default.a.string.isRequired,
    value: prop_types_default.a.number.isRequired,
    percent: prop_types_default.a.number.isRequired
  }).isRequired,
  target: prop_types_default.a.shape({
    id: prop_types_default.a.string.isRequired,
    value: prop_types_default.a.number.isRequired,
    percent: prop_types_default.a.number.isRequired
  }).isRequired,
  getTrackProps: prop_types_default.a.func.isRequired,
  disabled: prop_types_default.a.bool
};
Track.defaultProps = {
  disabled: false
}; // *******************************************************
// TICK COMPONENT
// *******************************************************

function Tick(_ref3) {
  var tick = _ref3.tick,
      count = _ref3.count,
      format = _ref3.format;
  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 17,
      width: 1,
      height: 5,
      backgroundColor: 'rgb(200,200,200)',
      left: "".concat(tick.percent, "%")
    }
  }), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      position: 'absolute',
      marginTop: 25,
      fontSize: 10,
      textAlign: 'center',
      marginLeft: "".concat(-(100 / count) / 2, "%"),
      width: "".concat(100 / count, "%"),
      left: "".concat(tick.percent, "%")
    }
  }, format(tick.value)));
}
Tick.propTypes = {
  tick: prop_types_default.a.shape({
    id: prop_types_default.a.string.isRequired,
    value: prop_types_default.a.number.isRequired,
    percent: prop_types_default.a.number.isRequired
  }).isRequired,
  count: prop_types_default.a.number.isRequired,
  format: prop_types_default.a.func.isRequired
};
Tick.defaultProps = {
  format: function format(d) {
    return d;
  }
};
// CONCATENATED MODULE: ./src/components/ui/PriceRange.jsx
function PriceRange_toConsumableArray(arr) { return PriceRange_arrayWithoutHoles(arr) || PriceRange_iterableToArray(arr) || PriceRange_unsupportedIterableToArray(arr) || PriceRange_nonIterableSpread(); }

function PriceRange_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PriceRange_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function PriceRange_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return PriceRange_arrayLikeToArray(arr); }

function PriceRange_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PriceRange_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PriceRange_ownKeys(Object(source), true).forEach(function (key) { PriceRange_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PriceRange_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PriceRange_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PriceRange_slicedToArray(arr, i) { return PriceRange_arrayWithHoles(arr) || PriceRange_iterableToArrayLimit(arr, i) || PriceRange_unsupportedIterableToArray(arr, i) || PriceRange_nonIterableRest(); }

function PriceRange_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PriceRange_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PriceRange_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PriceRange_arrayLikeToArray(o, minLen); }

function PriceRange_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PriceRange_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PriceRange_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var sliderStyle = {
  position: 'relative',
  width: '100%'
};

var PriceRange_PriceRange = function PriceRange(props) {
  var _useState = Object(react["useState"])({
    domain: [props.min, props.max],
    values: [(props === null || props === void 0 ? void 0 : props.initMin) || props.min, (props === null || props === void 0 ? void 0 : props.initMax) || props.max],
    update: [props.min, props.max].slice(),
    inputMin: (props === null || props === void 0 ? void 0 : props.initMin) || props.min,
    inputMax: (props === null || props === void 0 ? void 0 : props.initMax) || props.max,
    inputError: false,
    reversed: false
  }),
      _useState2 = PriceRange_slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onUpdate = function onUpdate(update) {
    setState(function () {
      return PriceRange_objectSpread(PriceRange_objectSpread({}, state), {}, {
        update: update,
        inputMin: update[0],
        inputMax: update[1]
      });
    });
  };

  var onChange = function onChange(values) {
    setState(function () {
      return PriceRange_objectSpread(PriceRange_objectSpread({}, state), {}, {
        values: values,
        inputMin: values[0],
        inputMax: values[1]
      });
    });
    if (values[0] < values[1]) props.onPriceChange.apply(props, PriceRange_toConsumableArray(values));
  };

  var setDomain = function setDomain(domain) {
    setState(PriceRange_objectSpread(PriceRange_objectSpread({}, state), {}, {
      domain: domain
    }));
  };

  var inputClassName = function inputClassName() {
    return state.inputError ? 'price-range-input price-input-error' : 'price-range-input';
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      height: 120,
      width: '100%'
    }
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "price-range-control"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    className: inputClassName(),
    disabled: props.productsLength === 0,
    max: props.max,
    min: props.min,
    type: "number",
    readOnly: true,
    value: state.inputMin
  }), "\u2014", /*#__PURE__*/react_default.a.createElement("input", {
    className: inputClassName(),
    disabled: props.productsLength === 0,
    max: props.max,
    min: props.min,
    type: "number",
    readOnly: true,
    value: state.inputMax
  })), /*#__PURE__*/react_default.a.createElement(react_compound_slider_es["c" /* Slider */], {
    mode: 1,
    step: 1,
    domain: state.domain,
    rootStyle: sliderStyle,
    onUpdate: onUpdate,
    onChange: onChange,
    values: state.values
  }, /*#__PURE__*/react_default.a.createElement(react_compound_slider_es["b" /* Rail */], null, function (_ref) {
    var getRailProps = _ref.getRailProps;
    return /*#__PURE__*/react_default.a.createElement(SliderRail, {
      getRailProps: getRailProps
    });
  }), /*#__PURE__*/react_default.a.createElement(react_compound_slider_es["a" /* Handles */], null, function (_ref2) {
    var handles = _ref2.handles,
        activeHandleID = _ref2.activeHandleID,
        getHandleProps = _ref2.getHandleProps;
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "slider-handles"
    }, handles.map(function (handle) {
      return /*#__PURE__*/react_default.a.createElement(PriceRangeComponents_Handle, {
        key: handle.id,
        handle: handle,
        domain: state.domain,
        isActive: handle.id === activeHandleID,
        getHandleProps: getHandleProps
      });
    }));
  }), /*#__PURE__*/react_default.a.createElement(react_compound_slider_es["e" /* Tracks */], {
    left: false,
    right: false
  }, function (_ref3) {
    var tracks = _ref3.tracks,
        getTrackProps = _ref3.getTrackProps;
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "slider-tracks"
    }, tracks.map(function (_ref4) {
      var id = _ref4.id,
          source = _ref4.source,
          target = _ref4.target;
      return /*#__PURE__*/react_default.a.createElement(Track, {
        key: id,
        source: source,
        target: target,
        getTrackProps: getTrackProps
      });
    }));
  }), /*#__PURE__*/react_default.a.createElement(react_compound_slider_es["d" /* Ticks */], {
    count: 5
  }, function (_ref5) {
    var ticks = _ref5.ticks;
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "slider-ticks"
    }, ticks.map(function (tick) {
      return /*#__PURE__*/react_default.a.createElement(Tick, {
        key: tick.id,
        tick: tick,
        count: ticks.length
      });
    }));
  })));
};

/* harmony default export */ var ui_PriceRange = (PriceRange_PriceRange);
// CONCATENATED MODULE: ./src/components/ui/Filters.jsx
function Filters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Filters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Filters_ownKeys(Object(source), true).forEach(function (key) { Filters_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Filters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Filters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Filters_slicedToArray(arr, i) { return Filters_arrayWithHoles(arr) || Filters_iterableToArrayLimit(arr, i) || Filters_unsupportedIterableToArray(arr, i) || Filters_nonIterableRest(); }

function Filters_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Filters_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Filters_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Filters_arrayLikeToArray(o, minLen); }

function Filters_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Filters_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Filters_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Filters_Filters = function Filters(props) {
  var _useState = Object(react["useState"])(false),
      _useState2 = Filters_slicedToArray(_useState, 2),
      isMounted = _useState2[0],
      setMounted = _useState2[1];

  var _useState3 = Object(react["useState"])({
    brand: props.filter.brand,
    minPrice: props.filter.minPrice,
    maxPrice: props.filter.maxPrice,
    sortBy: props.filter.sortBy
  }),
      _useState4 = Filters_slicedToArray(_useState3, 2),
      field = _useState4[0],
      setFilter = _useState4[1];

  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var max = selectMax(props.products);
  var min = selectMin(props.products);
  Object(react["useEffect"])(function () {
    if (isMounted && window.screen.width <= 480) {
      props.history.push('/');
    }

    if (isMounted && props.closeModal) props.closeModal();
    setFilter(props.filter);
    setMounted(true);
    window.scrollTo(0, 0);
  }, [props.filter]);

  var onPriceChange = function onPriceChange(min, max) {
    setFilter(Filters_objectSpread(Filters_objectSpread({}, field), {}, {
      minPrice: min,
      maxPrice: max
    }));
  };

  var onBrandFilterChange = function onBrandFilterChange(e) {
    var val = e.target.value;
    setFilter(Filters_objectSpread(Filters_objectSpread({}, field), {}, {
      brand: val
    }));
  };

  var onSortFilterChange = function onSortFilterChange(e) {
    setFilter(Filters_objectSpread(Filters_objectSpread({}, field), {}, {
      sortBy: e.target.value
    }));
  };

  var onApplyFilter = function onApplyFilter() {
    var isChanged = Object.keys(field).some(function (key) {
      return field[key] !== props.filter[key];
    });

    if (field.minPrice > field.maxPrice) {
      return false;
    }

    if (isChanged) {
      dispatch(filterActions_applyFilter(field));
    } else {
      props.closeModal();
    }
  };

  var onResetFilter = function onResetFilter() {
    var filterFields = ['brand', 'minPrice', 'maxPrice', 'sortBy'];

    if (filterFields.some(function (key) {
      return !!props.filter[key];
    })) {
      dispatch(filterActions_resetFilter());
    } else {
      props.closeModal();
    }
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Brand"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), props.productsCount === 0 && props.isLoading ? /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-subtle"
  }, "Loading Filter") : /*#__PURE__*/react_default.a.createElement("select", {
    className: "filters-brand",
    value: field.brand,
    disabled: props.isLoading || props.productsCount === 0,
    onChange: onBrandFilterChange
  }, /*#__PURE__*/react_default.a.createElement("option", {
    value: ""
  }, "All Brands"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "salt"
  }, "Salt Maalat"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "betsin"
  }, "Betsin Maalat"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "black"
  }, "Black Kibal"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "sexbomb"
  }, "Sexbomb"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Sort By"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("select", {
    className: "filters-sort-by d-block",
    value: field.sortBy,
    disabled: props.isLoading || props.productsCount === 0,
    onChange: onSortFilterChange
  }, /*#__PURE__*/react_default.a.createElement("option", {
    value: ""
  }, "None"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "name-asc"
  }, "Name Ascending A - Z"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "name-desc"
  }, "Name Descending Z - A"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "price-desc"
  }, "Price High - Low"), /*#__PURE__*/react_default.a.createElement("option", {
    value: "price-asc"
  }, "Price Low - High"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-field"
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Price Range"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), props.productsCount === 0 && props.isLoading || max === 0 ? /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-subtle"
  }, "Loading Filter") : props.productsCount === 1 ? /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-subtle"
  }, "No Price Range") : /*#__PURE__*/react_default.a.createElement(ui_PriceRange, {
    min: min,
    max: max,
    initMin: field.minPrice,
    initMax: field.maxPrice,
    isLoading: props.isLoading,
    onPriceChange: onPriceChange,
    productsLength: props.productsCount
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "filters-button button button-small",
    disabled: props.isLoading || props.productsCount === 0,
    onClick: onApplyFilter
  }, "Apply filters"), /*#__PURE__*/react_default.a.createElement("button", {
    className: "filters-button button button-border button-small",
    disabled: props.isLoading || props.productsCount === 0,
    onClick: onResetFilter
  }, "Reset filters")));
};

/* harmony default export */ var ui_Filters = (Object(react_router["j" /* withRouter */])(Filters_Filters));
// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(149);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/components/ui/Modal.jsx
function Modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Modal_ownKeys(Object(source), true).forEach(function (key) { Modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Modal_Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      onRequestClose = _ref.onRequestClose,
      afterOpenModal = _ref.afterOpenModal,
      overrideStyle = _ref.overrideStyle,
      children = _ref.children;
  var defaultStyle = {
    content: Modal_objectSpread({
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      position: 'fixed',
      padding: '50px 20px',
      transition: 'all .5s ease',
      zIndex: 9999,
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 5px 10px rgba(0, 0, 0, .1)',
      animation: 'scale .3s ease'
    }, overrideStyle)
  };
  lib_default.a.setAppElement('#app');
  return /*#__PURE__*/react_default.a.createElement(lib_default.a, {
    closeTimeoutMS: 300,
    contentLabel: "Product Modal",
    isOpen: isOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: onRequestClose,
    shouldCloseOnOverlayClick: true,
    style: defaultStyle
  }, children);
};

Modal_Modal.defaultProps = {
  overrideStyle: {}
};
/* harmony default export */ var ui_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./src/components/ui/FiltersToggle.jsx






var FiltersToggle_FiltersToggle = function FiltersToggle(_ref) {
  var filter = _ref.filter,
      isLoading = _ref.isLoading,
      products = _ref.products,
      productsCount = _ref.productsCount,
      children = _ref.children;

  var _useModal = hooks_useModal(),
      isOpenModal = _useModal.isOpenModal,
      onOpenModal = _useModal.onOpenModal,
      onCloseModal = _useModal.onCloseModal;

  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-toggle",
    onClick: onOpenModal
  }, children), /*#__PURE__*/react_default.a.createElement(ui_Modal, {
    isOpen: isOpenModal,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "filters-toggle-sub"
  }, /*#__PURE__*/react_default.a.createElement(ui_Filters, {
    closeModal: onCloseModal,
    dispatch: dispatch,
    filter: filter,
    isLoading: isLoading,
    products: products,
    productsCount: productsCount
  })), /*#__PURE__*/react_default.a.createElement("button", {
    className: "modal-close-button",
    onClick: onCloseModal
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-times-circle"
  }))));
};

/* harmony default export */ var ui_FiltersToggle = (FiltersToggle_FiltersToggle);
// EXTERNAL MODULE: ./node_modules/react-loading-skeleton/lib/index.js
var react_loading_skeleton_lib = __webpack_require__(33);
var react_loading_skeleton_lib_default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_lib);

// EXTERNAL MODULE: ./src/components/ui/ImageLoader.jsx
var ImageLoader = __webpack_require__(32);

// EXTERNAL MODULE: ./src/helpers/utils.js
var utils = __webpack_require__(14);

// CONCATENATED MODULE: ./src/views/admin/components/ProductItem.jsx










var ProductItem_ProductItem = function ProductItem(_ref) {
  var product = _ref.product,
      history = _ref.history;
  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var productRef = Object(react["useRef"])(null);

  var onClickEdit = function onClickEdit() {
    history.push("".concat(routes["i" /* EDIT_PRODUCT */], "/").concat(product.id));
  };

  var onDeleteProduct = function onDeleteProduct() {
    productRef.current.classList.toggle('item-active');
  };

  var onConfirmDelete = function onConfirmDelete() {
    dispatch(productActions_removeProduct(product.id));
    Object(utils["a" /* displayActionMessage */])('Item successfully deleted');
    productRef.current.classList.remove('item-active');
  };

  var onCancelDelete = function onCancelDelete() {
    productRef.current.classList.remove('item-active');
  };

  return /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib["SkeletonTheme"], {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "item item-products ".concat(!product.id && 'item-loading'),
    ref: productRef
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid grid-count-6"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col item-img-wrapper"
  }, product.image ? /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    alt: product.name,
    className: "item-img",
    src: product.image
  }) : /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 50,
    height: 30
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-overflow-ellipsis"
  }, product.name || /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 50
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", null, product.brand || /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 50
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", null, product.price ? Object(utils["c" /* displayMoney */])(product.price) : /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 30
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", null, product.dateAdded ? Object(utils["b" /* displayDate */])(product.dateAdded) : /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 30
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "grid-col"
  }, /*#__PURE__*/react_default.a.createElement("span", null, product.maxQuantity || /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 20
  })))), product.id && /*#__PURE__*/react_default.a.createElement("div", {
    className: "item-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-small",
    onClick: onClickEdit
  }, "Edit"), "\xA0", /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-small button-danger",
    onClick: onDeleteProduct
  }, "Delete"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "item-action-confirm"
  }, /*#__PURE__*/react_default.a.createElement("h5", null, "Are you sure you want to delete this?"), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small button-border",
    onClick: onCancelDelete
  }, "No"), "\xA0", /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small button-danger",
    onClick: onConfirmDelete
  }, "Yes")))));
};

ProductItem_ProductItem.propTypes = {
  product: prop_types_default.a.shape({
    id: prop_types_default.a.string,
    name: prop_types_default.a.string,
    brand: prop_types_default.a.string,
    price: prop_types_default.a.number,
    maxQuantity: prop_types_default.a.number,
    description: prop_types_default.a.string,
    keywords: prop_types_default.a.arrayOf(prop_types_default.a.string),
    image: prop_types_default.a.string,
    dateAdded: prop_types_default.a.number
  })
};
/* harmony default export */ var components_ProductItem = (Object(react_router["j" /* withRouter */])(ProductItem_ProductItem));
// CONCATENATED MODULE: ./src/views/admin/products/index.js














var products_Products = function Products(_ref) {
  var history = _ref.history;
  hooks_useDocumentTitle('Product List | Salinaka Admin');
  hooks_useScrollTop();
  var store = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      filter: state.filter,
      basket: state.basket,
      filteredProducts: selectFilter(state.products.items, state.filter),
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
      products: state.products.items,
      productsCount: state.products.items.length,
      totalProductsCount: state.products.total
    };
  });

  var onClickAddProduct = function onClickAddProduct() {
    history.push(routes["c" /* ADD_PRODUCT */]);
  }; // TODO insufficient permission
  // TODO fix filters modal


  return /*#__PURE__*/react_default.a.createElement(ui_Boundary, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-admin-header"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "product-admin-header-title"
  }, "Products \xA0 (", "".concat(store.productsCount, " / ").concat(store.totalProductsCount), ")"), /*#__PURE__*/react_default.a.createElement(ui_SearchBar, {
    filter: store.filter,
    isLoading: store.isLoading,
    productsCount: store.productsCount
  }), "\xA0", /*#__PURE__*/react_default.a.createElement(ui_FiltersToggle, {
    filter: store.filter,
    isLoading: store.isLoading,
    products: store.products,
    productsCount: store.productsCount
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button-muted button-small"
  }, "More Filters \xA0", /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-chevron-right"
  }))), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small",
    onClick: onClickAddProduct
  }, "Add New Product")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-admin-items"
  }, /*#__PURE__*/react_default.a.createElement(product_ProductList, store, function () {
    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(product_ProductAppliedFilters, {
      filter: store.filter
    }), store.filteredProducts.length > 0 && /*#__PURE__*/react_default.a.createElement("div", {
      className: "grid grid-product grid-count-6"
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "grid-col"
    }), /*#__PURE__*/react_default.a.createElement("div", {
      className: "grid-col"
    }, /*#__PURE__*/react_default.a.createElement("h5", null, "Name")), /*#__PURE__*/react_default.a.createElement("div", {
      className: "grid-col"
    }, /*#__PURE__*/react_default.a.createElement("h5", null, "Brand")), /*#__PURE__*/react_default.a.createElement("div", {
      className: "grid-col"
    }, /*#__PURE__*/react_default.a.createElement("h5", null, "Price")), /*#__PURE__*/react_default.a.createElement("div", {
      className: "grid-col"
    }, /*#__PURE__*/react_default.a.createElement("h5", null, "Date Added")), /*#__PURE__*/react_default.a.createElement("div", {
      className: "grid-col"
    }, /*#__PURE__*/react_default.a.createElement("h5", null, "Qty"))), store.filteredProducts.length === 0 ? new Array(10).fill({}).map(function (product, index) {
      return /*#__PURE__*/react_default.a.createElement(components_ProductItem, {
        key: "product-skeleton ".concat(index),
        product: product
      });
    }) : store.filteredProducts.map(function (product) {
      return /*#__PURE__*/react_default.a.createElement(components_ProductItem, {
        key: product.id,
        product: product
      });
    }));
  })));
};

/* harmony default export */ var admin_products = (Object(react_router["j" /* withRouter */])(products_Products));
// EXTERNAL MODULE: ./node_modules/react-select/creatable/dist/react-select.browser.esm.js
var react_select_browser_esm = __webpack_require__(150);

// EXTERNAL MODULE: ./src/components/ui/CircularProgress.jsx
var CircularProgress = __webpack_require__(24);

// CONCATENATED MODULE: ./src/components/ui/Input.jsx
function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

function Input_slicedToArray(arr, i) { return Input_arrayWithHoles(arr) || Input_iterableToArrayLimit(arr, i) || Input_unsupportedIterableToArray(arr, i) || Input_nonIterableRest(); }

function Input_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Input_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Input_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Input_arrayLikeToArray(o, minLen); }

function Input_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Input_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Input_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var InputField = /*#__PURE__*/react_default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      type = _ref.type,
      field = _ref.field,
      label = _ref.label,
      showError = _ref.showError,
      showLabel = _ref.showLabel,
      isRequired = _ref.isRequired,
      onInputChange = _ref.onInputChange,
      validate = _ref.validate,
      rest = _objectWithoutProperties(_ref, ["className", "type", "field", "label", "showError", "showLabel", "isRequired", "onInputChange", "validate"]);

  var _useState = Object(react["useState"])(''),
      _useState2 = Input_slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react["useState"])(''),
      _useState4 = Input_slicedToArray(_useState3, 2),
      errorField = _useState4[0],
      setErrorField = _useState4[1];

  var onFieldChange = function onFieldChange(e) {
    var val = e.target.value;
    var error = '';
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var nameRegex = /[^a-zA-Z\s]/g;
    var passwordRegex = /[A-Z\W]/g;
    var key = field.substr(0, 1).toUpperCase().concat(field.substr(1));

    if (validate) {
      var testResult = validate(val, e);

      if (testResult) {
        setErrorField(testResult);
        error = testResult;
      } else {
        setErrorField('');
        error = testResult;
      }
    } else if ((type === 'email' || field === 'email') && !regex.test(val)) {
      setErrorField("".concat(key, " is invalid"));
      error = "".concat(key, " is invalid");
    } else if ((type === 'password' || field === 'password') && showError) {
      if (val.length < 8) {
        setErrorField("".concat(key, " should be 8 characters long."));
        error = "".concat(key, " should be 8 characters long.");
      } else if (!passwordRegex.test(val)) {
        setErrorField("".concat(key, " should contain uppercase or special character."));
        error = "".concat(key, " should contain uppercase or special character.");
      } else {
        setErrorField('');
        error = '';
      }
    } else if (field === 'fullname') {
      val = val.replace(/[^a-zA-Z\s]/g, '').trimStart();

      if (val.length < 5) {
        setErrorField("".concat(key, " must be at least 5 letters"));
        error = "".concat(key, " must be at least 5 letters");
      } else if (nameRegex.test(val)) {
        setErrorField("".concat(key, " must not include special characters"));
        error = "".concat(key, " must not include special characters");
      } else {
        setErrorField('');
        error = '';
      }
    } else {
      setErrorField('');
      error = '';
    }

    if (val.length === 0 && isRequired) {
      setErrorField("".concat(key, " is required"));
      error = "".concat(key, " is required");
    }

    onInputChange(val, error, e);
    setValue(val);
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, errorField && showLabel ? /*#__PURE__*/react_default.a.createElement("span", {
    className: "input-message"
  }, errorField) : /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, label), type === 'textarea' ? /*#__PURE__*/react_default.a.createElement("textarea", Input_extends({}, rest, {
    className: "".concat(className, " ").concat(errorField ? 'input-error' : ''),
    required: isRequired,
    onChange: onFieldChange,
    ref: ref
  })) : /*#__PURE__*/react_default.a.createElement("input", Input_extends({}, rest, {
    className: "".concat(className, " ").concat(errorField ? 'input-error' : ''),
    required: isRequired,
    onChange: onFieldChange,
    type: type,
    ref: ref
  })));
});
InputField.defaultProps = {
  className: 'input-form d-block',
  type: 'text',
  showLabel: true,
  showError: true,
  isRequired: false,
  onInputChange: function onInputChange() {}
};
/* harmony default export */ var Input = (InputField);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(435);

// CONCATENATED MODULE: ./src/hooks/useFileHandler.js
function useFileHandler_toConsumableArray(arr) { return useFileHandler_arrayWithoutHoles(arr) || useFileHandler_iterableToArray(arr) || useFileHandler_unsupportedIterableToArray(arr) || useFileHandler_nonIterableSpread(); }

function useFileHandler_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useFileHandler_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function useFileHandler_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return useFileHandler_arrayLikeToArray(arr); }

function useFileHandler_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useFileHandler_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useFileHandler_ownKeys(Object(source), true).forEach(function (key) { useFileHandler_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useFileHandler_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useFileHandler_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useFileHandler_slicedToArray(arr, i) { return useFileHandler_arrayWithHoles(arr) || useFileHandler_iterableToArrayLimit(arr, i) || useFileHandler_unsupportedIterableToArray(arr, i) || useFileHandler_nonIterableRest(); }

function useFileHandler_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useFileHandler_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useFileHandler_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useFileHandler_arrayLikeToArray(o, minLen); }

function useFileHandler_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useFileHandler_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useFileHandler_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useFileHandler_useFileHandler = function useFileHandler(initState) {
  var _useState = Object(react["useState"])(initState),
      _useState2 = useFileHandler_slicedToArray(_useState, 2),
      imageFile = _useState2[0],
      setImageFile = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = useFileHandler_slicedToArray(_useState3, 2),
      isFileLoading = _useState4[0],
      setFileLoading = _useState4[1];

  var removeImage = function removeImage(_ref) {
    var id = _ref.id,
        name = _ref.name;
    var items = imageFile[name].filter(function (item) {
      return item.id !== id;
    });
    setImageFile(useFileHandler_objectSpread(useFileHandler_objectSpread({}, imageFile), {}, useFileHandler_defineProperty({}, name, items)));
  };

  var onFileChange = function onFileChange(event, _ref2) {
    var name = _ref2.name,
        type = _ref2.type;
    var val = event.target.value;
    var img = event.target.files[0];
    var size = img.size / 1024 / 1024;
    var regex = /(\.jpg|\.jpeg|\.png)$/i;
    setFileLoading(true);

    if (!regex.exec(val)) {
      alert('File type must be JPEG or PNG', 'error');
      setFileLoading(false);
    } else if (size > 0.5) {
      alert('File size exceeded 500kb, consider optimizing your image', 'error');
      setFileLoading(false);
    } else if (type === 'multiple') {
      Array.from(event.target.files).forEach(function (file) {
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
          setImageFile(function (oldFiles) {
            return useFileHandler_objectSpread(useFileHandler_objectSpread({}, oldFiles), {}, useFileHandler_defineProperty({}, name, [].concat(useFileHandler_toConsumableArray(oldFiles[name]), [{
              file: file,
              url: e.target.result,
              id: Object(v4["a" /* default */])()
            }])));
          });
        });
        reader.readAsDataURL(file);
      });
      setFileLoading(false);
    } else {
      // type is single
      var reader = new FileReader();
      reader.addEventListener('load', function (e) {
        setImageFile(useFileHandler_objectSpread(useFileHandler_objectSpread({}, imageFile), {}, useFileHandler_defineProperty({}, name, {
          file: img,
          url: e.target.result
        })));
        setFileLoading(false);
      });
      reader.readAsDataURL(img);
    }
  };

  return {
    imageFile: imageFile,
    setImageFile: setImageFile,
    isFileLoading: isFileLoading,
    onFileChange: onFileChange,
    removeImage: removeImage
  };
};

/* harmony default export */ var hooks_useFileHandler = (useFileHandler_useFileHandler);
// CONCATENATED MODULE: ./src/views/admin/components/InputColor.jsx
function InputColor_slicedToArray(arr, i) { return InputColor_arrayWithHoles(arr) || InputColor_iterableToArrayLimit(arr, i) || InputColor_unsupportedIterableToArray(arr, i) || InputColor_nonIterableRest(); }

function InputColor_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function InputColor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return InputColor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return InputColor_arrayLikeToArray(o, minLen); }

function InputColor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function InputColor_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function InputColor_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var InputColor_InputColor = function InputColor(_ref) {
  var availableColors = _ref.availableColors,
      onColorSelectChange = _ref.onColorSelectChange,
      onDeleteSelectedColor = _ref.onDeleteSelectedColor,
      onAddSelectedColor = _ref.onAddSelectedColor;

  var _React$useState = react_default.a.useState(''),
      _React$useState2 = InputColor_slicedToArray(_React$useState, 2),
      selectedColor = _React$useState2[0],
      setSelectedColor = _React$useState2[1];

  var handleColorChange = function handleColorChange(e) {
    var color = e.target.value;
    console.log(color);
    setSelectedColor(color);
  };

  var handleAddSelectedColor = function handleAddSelectedColor() {
    onAddSelectedColor(selectedColor);
    setSelectedColor('');
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Available Color(s)"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("label", {
    htmlFor: "color-chooser"
  }, "Select Color"), selectedColor && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "color-item",
    style: {
      background: selectedColor
    }
  }), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "text-link",
    onClick: handleAddSelectedColor,
    style: {
      textDecoration: 'underline'
    }
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-check"
  }), " Add Selected Color"))), /*#__PURE__*/react_default.a.createElement("input", {
    type: "color",
    value: selectedColor,
    hidden: true,
    onChange: handleColorChange,
    id: "color-chooser"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Selected Color(s)"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "color-chooser"
  }, availableColors.map(function (color) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      key: color,
      onClick: function onClick() {
        return onDeleteSelectedColor(color);
      },
      className: "color-item color-item-deletable",
      title: "Remove ".concat(color),
      style: {
        backgroundColor: color
      }
    });
  }))));
};

/* harmony default export */ var components_InputColor = (InputColor_InputColor);
// CONCATENATED MODULE: ./src/views/admin/components/ProductForm.jsx
function ProductForm_toConsumableArray(arr) { return ProductForm_arrayWithoutHoles(arr) || ProductForm_iterableToArray(arr) || ProductForm_unsupportedIterableToArray(arr) || ProductForm_nonIterableSpread(); }

function ProductForm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProductForm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function ProductForm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ProductForm_arrayLikeToArray(arr); }

function ProductForm_slicedToArray(arr, i) { return ProductForm_arrayWithHoles(arr) || ProductForm_iterableToArrayLimit(arr, i) || ProductForm_unsupportedIterableToArray(arr, i) || ProductForm_nonIterableRest(); }

function ProductForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProductForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProductForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProductForm_arrayLikeToArray(o, minLen); }

function ProductForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ProductForm_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ProductForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ProductForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProductForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProductForm_ownKeys(Object(source), true).forEach(function (key) { ProductForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProductForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProductForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import uuid from 'uuid';
// Default brand names that I used. You can use what you want

var brandOptions = [{
  value: 'Salt Maalat',
  label: 'Salt Maalat'
}, {
  value: 'Betsin Maalat',
  label: 'Betsin Maalat'
}, {
  value: 'Sexbomb',
  label: 'Sexbomb'
}, {
  value: 'Black Kibal',
  label: 'Black Kibal'
}];

var ProductForm_ProductForm = function ProductForm(_ref) {
  var product = _ref.product,
      onSubmit = _ref.onSubmit,
      isLoading = _ref.isLoading;

  var defaultProduct = ProductForm_objectSpread({
    imageCollection: []
  }, product);

  var _useState = Object(react["useState"])({
    name: {
      value: product ? defaultProduct.name : ''
    },
    brand: {
      value: product ? defaultProduct.brand : ''
    },
    price: {
      value: product ? defaultProduct.price : 0
    },
    maxQuantity: {
      value: product ? defaultProduct.maxQuantity : 0
    },
    description: {
      value: product ? defaultProduct.description : ''
    },
    keywords: {
      value: product ? defaultProduct.keywords : ['gago']
    },
    imageUrl: {
      value: product ? defaultProduct.image : ''
    },
    isFeatured: {
      value: product ? defaultProduct.isFeatured : false
    },
    isRecommended: {
      value: product ? defaultProduct.isRecommended : false
    },
    availableColors: {
      value: product ? defaultProduct.availableColors : []
    },
    imageCollection: {
      value: product ? defaultProduct.imageCollection : []
    }
  }),
      _useState2 = ProductForm_slicedToArray(_useState, 2),
      field = _useState2[0],
      setField = _useState2[1];

  var _useFileHandler = hooks_useFileHandler({
    image: {},
    imageCollection: field.imageCollection.value
  }),
      imageFile = _useFileHandler.imageFile,
      isFileLoading = _useFileHandler.isFileLoading,
      onFileChange = _useFileHandler.onFileChange,
      removeImage = _useFileHandler.removeImage;

  var sanitizeNumber = function sanitizeNumber(num) {
    return Number(num.toString().replace(/^0*/, ''));
  };

  var onProductNameInput = function onProductNameInput(value, error) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      name: {
        value: value,
        error: error
      }
    }));
  };

  var onBrandChange = function onBrandChange(newValue) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      brand: {
        value: newValue.value
      }
    }));
  };

  var onProductPriceInput = function onProductPriceInput(value, error) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      price: {
        value: sanitizeNumber(value),
        error: error
      }
    }));
  };

  var onProductDescriptionInput = function onProductDescriptionInput(value, error) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      description: {
        value: value,
        error: error
      }
    }));
  };

  var onProductMaxQuantityInput = function onProductMaxQuantityInput(value, error) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      maxQuantity: {
        value: sanitizeNumber(value),
        error: error
      }
    }));
  };

  var onAddSelectedColor = function onAddSelectedColor(color) {
    if (!field.availableColors.value.includes(color)) {
      setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
        availableColors: {
          value: [].concat(ProductForm_toConsumableArray(field.availableColors.value), [color])
        }
      }));
    }
  };

  var onDeleteSelectedColor = function onDeleteSelectedColor(color) {
    var filteredColors = field.availableColors.value.filter(function (c) {
      return c !== color;
    });
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      availableColors: {
        value: filteredColors
      }
    }));
  };

  var onKeywordChange = function onKeywordChange(newValue) {
    var keywords = newValue.map(function (word) {
      return word.value;
    });
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      keywords: {
        value: keywords
      }
    }));
  };

  var onFeaturedCheckChange = function onFeaturedCheckChange(e) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      isFeatured: {
        value: e.target.checked
      }
    }));
  };

  var onRecommendedCheckChange = function onRecommendedCheckChange(e) {
    setField(ProductForm_objectSpread(ProductForm_objectSpread({}, field), {}, {
      isRecommended: {
        value: e.target.checked
      }
    }));
  };

  var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault(); // eslint-disable-next-line no-extra-boolean-cast

    var noError = Object.keys(field).every(function (key) {
      return !!!field[key].error;
    });

    if (field.name.value && field.price.value && field.maxQuantity.value && (imageFile.image.file || field.imageUrl.value) && noError) {
      var newProduct = {};
      Object.keys(field).forEach(function (i) {
        newProduct[i] = field[i].value;
      });
      onSubmit(ProductForm_objectSpread(ProductForm_objectSpread({}, newProduct), {}, {
        quantity: 1,
        name_lower: newProduct.name.toLowerCase(),
        // due to firebase function billing policy, let's add lowercase version of name here instead in firebase functions
        dateAdded: new Date().getTime(),
        image: imageFile.image.file ? imageFile.image.file : field.imageUrl.value,
        imageCollection: imageFile.imageCollection
      }));
    }
  };

  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("form", {
    className: "product-form",
    onSubmit: onSubmitForm
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-inputs"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "name",
    isRequired: true,
    label: "* Product Name",
    maxLength: 60,
    onInputChange: onProductNameInput,
    placeholder: "Takla",
    readOnly: isLoading,
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.name.value
  })), "\xA0", /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "* Create/Select Brand"), /*#__PURE__*/react_default.a.createElement(react_select_browser_esm["a" /* default */], {
    placeholder: "Select/Create Brand",
    defaultValue: {
      label: field.brand.value,
      value: field.brand.value
    },
    onChange: onBrandChange,
    options: brandOptions,
    styles: {
      menu: function menu(provided) {
        return ProductForm_objectSpread(ProductForm_objectSpread({}, provided), {}, {
          zIndex: 10
        });
      },
      container: function container(provided) {
        return ProductForm_objectSpread(ProductForm_objectSpread({}, provided), {}, {
          marginBottom: '1.2rem'
        });
      }
    }
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field product-textarea"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    cols: 37,
    field: "description",
    isRequired: false,
    label: "Product Description",
    maxLength: 200,
    onInputChange: onProductDescriptionInput,
    placeholder: "Nice Description",
    readOnly: isLoading,
    rows: 5,
    type: "textarea",
    value: field.description.value
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "price",
    isRequired: true,
    label: "* Price",
    onInputChange: onProductPriceInput,
    placeholder: "Product Price",
    readOnly: isLoading,
    type: "number",
    value: field.price.value
  })), "\xA0", /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "maxQuantity",
    isRequired: true,
    label: "* Stock Total",
    onInputChange: onProductMaxQuantityInput,
    placeholder: "Stock Total",
    readOnly: isLoading,
    type: "number",
    value: field.maxQuantity.value
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Keyword(s)"), /*#__PURE__*/react_default.a.createElement(react_select_browser_esm["a" /* default */], {
    isMulti: true,
    placeholder: "Select/Create Keyword",
    onChange: onKeywordChange,
    defaultValue: field.keywords.value.map(function (word) {
      return {
        value: word,
        label: word
      };
    }) // options={field.keywords.value.map(word => ({ value: word, label: word }))}
    ,
    styles: {
      menu: function menu(provided) {
        return ProductForm_objectSpread(ProductForm_objectSpread({}, provided), {}, {
          zIndex: 10
        });
      }
    }
  })), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(components_InputColor, {
    availableColors: field.availableColors.value,
    onDeleteSelectedColor: onDeleteSelectedColor,
    onAddSelectedColor: onAddSelectedColor
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Image Collection"), /*#__PURE__*/react_default.a.createElement("input", {
    disabled: isLoading,
    hidden: true,
    id: "product-input-file-collection",
    multiple: true,
    onChange: function onChange(e) {
      return onFileChange(e, {
        name: 'imageCollection',
        type: 'multiple'
      });
    },
    readOnly: isLoading,
    type: "file"
  }), !isFileLoading && /*#__PURE__*/react_default.a.createElement("label", {
    htmlFor: "product-input-file-collection"
  }, "Choose Images")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-collection"
  }, /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, imageFile.imageCollection.length >= 1 && imageFile.imageCollection.map(function (image) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "product-form-collection-image",
      key: image.id
    }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
      alt: "",
      src: image.url
    }), /*#__PURE__*/react_default.a.createElement("button", {
      className: "product-form-delete-image",
      onClick: function onClick() {
        return removeImage({
          id: image.id,
          name: 'imageCollection'
        });
      },
      title: "Delete Image",
      type: "button"
    }, /*#__PURE__*/react_default.a.createElement("i", {
      className: "fa fa-times-circle"
    })));
  }))), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    checked: field.isFeatured.value,
    className: "",
    id: "featured",
    onChange: onFeaturedCheckChange,
    type: "checkbox"
  }), /*#__PURE__*/react_default.a.createElement("label", {
    htmlFor: "featured"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "d-flex-grow-1 margin-0"
  }, "\xA0 Add to Featured \xA0"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    checked: field.isRecommended.value,
    className: "",
    id: "recommended",
    onChange: onRecommendedCheckChange,
    type: "checkbox"
  }), /*#__PURE__*/react_default.a.createElement("label", {
    htmlFor: "recommended"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "d-flex-grow-1 margin-0"
  }, "\xA0 Add to Recommended \xA0")))), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field product-form-submit"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button",
    disabled: isLoading,
    type: "submit"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    theme: "light",
    visible: isLoading
  }), isLoading ? 'Saving Product' : 'Save Product'))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-file"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-field"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "* Thumbnail"), /*#__PURE__*/react_default.a.createElement("input", {
    disabled: isLoading,
    hidden: true,
    id: "product-input-file",
    onChange: function onChange(e) {
      return onFileChange(e, {
        name: 'image',
        type: 'single'
      });
    },
    readOnly: isLoading,
    type: "file"
  }), !isFileLoading && /*#__PURE__*/react_default.a.createElement("label", {
    htmlFor: "product-input-file"
  }, "Choose Image")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-image-wrapper"
  }, (imageFile.image.url || field.imageUrl.value) && /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    alt: "",
    className: "product-form-image-preview",
    src: imageFile.image.url || field.imageUrl.value
  })))));
};

ProductForm_ProductForm.propTypes = {
  isLoading: prop_types_default.a.bool,
  onSubmit: prop_types_default.a.func,
  product: prop_types_default.a.shape({
    name: prop_types_default.a.string,
    brand: prop_types_default.a.string,
    price: prop_types_default.a.number,
    maxQuantity: prop_types_default.a.number,
    description: prop_types_default.a.string,
    keywords: prop_types_default.a.arrayOf(prop_types_default.a.string),
    image: prop_types_default.a.string,
    availableColors: prop_types_default.a.arrayOf(prop_types_default.a.string),
    imageCollection: prop_types_default.a.arrayOf(prop_types_default.a.object)
  })
};
/* harmony default export */ var components_ProductForm = (ProductForm_ProductForm);
// CONCATENATED MODULE: ./src/views/admin/edit_product/index.js








var edit_product_EditProduct = function EditProduct(props) {
  hooks_useDocumentTitle('Edit Product | Salinaka');
  hooks_useScrollTop();

  var _useSelector = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      product: state.products.items.find(function (item) {
        return item.id === props.match.params.id;
      }),
      isLoading: state.app.loading
    };
  }),
      product = _useSelector.product,
      isLoading = _useSelector.isLoading;

  var dispatch = Object(react_redux_es["c" /* useDispatch */])();

  var onSubmitForm = function onSubmitForm(updates) {
    dispatch(productActions_editProduct(product.id, updates));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-container"
  }, !product && /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
    to: "/dashboard/products"
  }), /*#__PURE__*/react_default.a.createElement("h2", null, "Edit Product"), /*#__PURE__*/react_default.a.createElement(components_ProductForm, {
    isLoading: isLoading,
    onSubmit: onSubmitForm,
    product: product
  }));
};

/* harmony default export */ var edit_product = (Object(react_router["j" /* withRouter */])(edit_product_EditProduct));
// CONCATENATED MODULE: ./src/views/admin/add_product/index.js








var add_product_AddProduct = function AddProduct() {
  hooks_useScrollTop();
  hooks_useDocumentTitle('Add New Product | Salinaka');
  var isLoading = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return state.app.loading;
  });
  var dispatch = Object(react_redux_es["c" /* useDispatch */])();

  var onSubmit = function onSubmit(product) {
    dispatch(productActions_addProduct(product));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-form-container"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Add New Product"), /*#__PURE__*/react_default.a.createElement(components_ProductForm, {
    isLoading: isLoading,
    onSubmit: onSubmit
  }));
};

/* harmony default export */ var add_product = (Object(react_router["j" /* withRouter */])(add_product_AddProduct));
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.browser.esm.js
var dist_react_select_browser_esm = __webpack_require__(201);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/product/ProductFeatured.jsx





var ProductFeatured_ProductFeatured = function ProductFeatured(_ref) {
  var isLoading = _ref.isLoading,
      product = _ref.product;
  var history = Object(react_router["g" /* useHistory */])();

  var onClickItem = function onClickItem() {
    if (isLoading) return;

    if (product.id) {
      history.push("/product/".concat(product.id));
    }
  };

  return /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib["SkeletonTheme"], {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-display",
    onClick: onClickItem
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-display-img"
  }, product.image ? /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    className: "product-card-img",
    src: product.image
  }) : /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: '100%',
    height: '100%'
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-display-details"
  }, /*#__PURE__*/react_default.a.createElement("h2", null, product.name || /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 80
  })), /*#__PURE__*/react_default.a.createElement("p", {
    className: "text-subtle text-italic"
  }, product.brand || /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 40
  })))));
};

/* harmony default export */ var product_ProductFeatured = (ProductFeatured_ProductFeatured);
// CONCATENATED MODULE: ./src/redux/actions/basketActions.js

var basketActions_setBasketItems = function setBasketItems(items) {
  return {
    type: SET_BASKET_ITEMS,
    payload: items
  };
};
var basketActions_addToBasket = function addToBasket(product) {
  return {
    type: ADD_TO_BASKET,
    payload: product
  };
};
var basketActions_removeFromBasket = function removeFromBasket(id) {
  return {
    type: REMOVE_FROM_BASKET,
    payload: id
  };
};
var basketActions_clearBasket = function clearBasket() {
  return {
    type: CLEAR_BASKET
  };
};
var basketActions_addQtyItem = function addQtyItem(id) {
  return {
    type: ADD_QTY_ITEM,
    payload: id
  };
};
var basketActions_minusQtyItem = function minusQtyItem(id) {
  return {
    type: MINUS_QTY_ITEM,
    payload: id
  };
};
// CONCATENATED MODULE: ./src/components/ui/ColorChooser.jsx
function ColorChooser_slicedToArray(arr, i) { return ColorChooser_arrayWithHoles(arr) || ColorChooser_iterableToArrayLimit(arr, i) || ColorChooser_unsupportedIterableToArray(arr, i) || ColorChooser_nonIterableRest(); }

function ColorChooser_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ColorChooser_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ColorChooser_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ColorChooser_arrayLikeToArray(o, minLen); }

function ColorChooser_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ColorChooser_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ColorChooser_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ColorChooser_ColorChooser = function ColorChooser(_ref) {
  var availableColors = _ref.availableColors,
      onSelectedColorChange = _ref.onSelectedColorChange;

  var _useState = Object(react["useState"])(''),
      _useState2 = ColorChooser_slicedToArray(_useState, 2),
      selectedColor = _useState2[0],
      setSelectedColor = _useState2[1];

  var setColor = function setColor(color) {
    setSelectedColor(color);
    onSelectedColorChange(color);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "color-chooser"
  }, availableColors.map(function (color) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: selectedColor === color ? 'color-item color-item-selected' : 'color-item',
      key: color,
      onClick: function onClick() {
        return setColor(color);
      },
      style: {
        backgroundColor: color
      }
    });
  }));
};

/* harmony default export */ var ui_ColorChooser = (ColorChooser_ColorChooser);
// CONCATENATED MODULE: ./src/hooks/useRecommendedProducts.js
function useRecommendedProducts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useRecommendedProducts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useRecommendedProducts_ownKeys(Object(source), true).forEach(function (key) { useRecommendedProducts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useRecommendedProducts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useRecommendedProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useRecommendedProducts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function useRecommendedProducts_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { useRecommendedProducts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { useRecommendedProducts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useRecommendedProducts_slicedToArray(arr, i) { return useRecommendedProducts_arrayWithHoles(arr) || useRecommendedProducts_iterableToArrayLimit(arr, i) || useRecommendedProducts_unsupportedIterableToArray(arr, i) || useRecommendedProducts_nonIterableRest(); }

function useRecommendedProducts_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useRecommendedProducts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useRecommendedProducts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useRecommendedProducts_arrayLikeToArray(o, minLen); }

function useRecommendedProducts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useRecommendedProducts_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useRecommendedProducts_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useRecommendedProducts_useRecommendedProducts = function useRecommendedProducts(itemsCount) {
  var _useState = Object(react["useState"])([]),
      _useState2 = useRecommendedProducts_slicedToArray(_useState, 2),
      recommendedProducts = _useState2[0],
      setRecommendedProducts = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = useRecommendedProducts_slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react["useState"])(''),
      _useState6 = useRecommendedProducts_slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  Object(react["useEffect"])(function () {
    if (recommendedProducts.length === 0) {
      fetchRecommendedProducts();
    }
  }, []);

  var fetchRecommendedProducts = /*#__PURE__*/function () {
    var _ref = useRecommendedProducts_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var docs, items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              setError('');
              _context.next = 5;
              return firebase_firebase.getRecommendedProducts(itemsCount);

            case 5:
              docs = _context.sent;

              if (docs.empty) {
                setError('No recommended products found.');
              } else {
                items = [];
                docs.forEach(function (snap) {
                  var data = snap.data();
                  items.push(useRecommendedProducts_objectSpread({
                    id: snap.ref.id
                  }, data));
                });
                setRecommendedProducts(items);
                setLoading(false);
              }

              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setError('Failed to fetch recommended products');
              setLoading(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function fetchRecommendedProducts() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    recommendedProducts: recommendedProducts,
    fetchRecommendedProducts: fetchRecommendedProducts,
    isLoading: isLoading,
    error: error
  };
};

/* harmony default export */ var hooks_useRecommendedProducts = (useRecommendedProducts_useRecommendedProducts);
// CONCATENATED MODULE: ./src/views/view_product/index.js
function view_product_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function view_product_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { view_product_ownKeys(Object(source), true).forEach(function (key) { view_product_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { view_product_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function view_product_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function view_product_slicedToArray(arr, i) { return view_product_arrayWithHoles(arr) || view_product_iterableToArrayLimit(arr, i) || view_product_unsupportedIterableToArray(arr, i) || view_product_nonIterableRest(); }

function view_product_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function view_product_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return view_product_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return view_product_arrayLikeToArray(o, minLen); }

function view_product_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function view_product_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function view_product_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var view_product_ViewProduct = function ViewProduct() {
  hooks_useScrollTop();

  var _useParams = Object(react_router["i" /* useParams */])(),
      id = _useParams.id;

  var history = Object(react_router["g" /* useHistory */])();
  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var store = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      product: state.products.items.find(function (item) {
        return item.id === id;
      }),
      basket: state.basket
    };
  });
  hooks_useDocumentTitle("View ".concat(store.product ? store.product.name : 'Item'));

  var _useState = Object(react["useState"])(store.product ? store.product.image : ''),
      _useState2 = view_product_slicedToArray(_useState, 2),
      selectedImage = _useState2[0],
      setSelectedImage = _useState2[1];

  var _useState3 = Object(react["useState"])(store.product || null),
      _useState4 = view_product_slicedToArray(_useState3, 2),
      product = _useState4[0],
      setProduct = _useState4[1];

  var _useState5 = Object(react["useState"])(''),
      _useState6 = view_product_slicedToArray(_useState5, 2),
      selectedSize = _useState6[0],
      setSelectedSize = _useState6[1];

  var _useState7 = Object(react["useState"])(''),
      _useState8 = view_product_slicedToArray(_useState7, 2),
      selectedColor = _useState8[0],
      setSelectedColor = _useState8[1];

  var _useRecommendedProduc = hooks_useRecommendedProducts(6),
      recommendedProducts = _useRecommendedProduc.recommendedProducts,
      fetchRecommendedProducts = _useRecommendedProduc.fetchRecommendedProducts,
      isLoading = _useRecommendedProduc.isLoading,
      error = _useRecommendedProduc.error;

  var colorOverlay = Object(react["useRef"])(null);

  var foundOnBasket = function foundOnBasket() {
    return store.basket.find(function (item) {
      return item.id === product.id;
    });
  };

  var onAddToBasket = function onAddToBasket() {
    if (foundOnBasket()) {
      dispatch(basketActions_removeFromBasket(product.id));
      Object(utils["a" /* displayActionMessage */])('Item removed from basket', 'info');
    } else {
      dispatch(basketActions_addToBasket(view_product_objectSpread(view_product_objectSpread({}, product), {}, {
        selectedColor: selectedColor,
        selectedSize: selectedSize
      })));
      Object(utils["a" /* displayActionMessage */])('Item added to basket', 'success');
    }
  }; // SIZES DROPDOWN ITEM


  var sizes = [];

  for (var i = 45; i <= 60; i++) {
    sizes.push({
      value: i,
      label: "".concat(i <= 48 ? 'Small' : i <= 55 ? 'Medium' : 'Large', " - ").concat(i, " mm")
    });
  }

  var onSelectedSizeChange = function onSelectedSizeChange(newValue) {
    setSelectedSize(newValue.value);
  };

  Object(react["useEffect"])(function () {
    if (!product) {
      firebase_firebase.getProduct(id).then(function (doc) {
        if (doc.exists) {
          var data = doc.data();
          setProduct(data);
          setSelectedImage(data.image);
        } else {
          history.push(routes["o" /* SHOP */]);
        }
      })["catch"](function (e) {
        history.push(routes["o" /* SHOP */]);
      });
    }
  }, []);

  var onSelectedColorChange = function onSelectedColorChange(color) {
    setSelectedColor(color);
    colorOverlay.current.value = color;
  };

  return product ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-view"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["o" /* SHOP */]
  }, /*#__PURE__*/react_default.a.createElement("h3", null, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-chevron-left"
  }), " Back to shop"), " "), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-modal"
  }, product.imageCollection.length !== 0 && /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-modal-image-collection"
  }, product.imageCollection.map(function (image) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "product-modal-image-collection-wrapper",
      key: image.id,
      onClick: function onClick() {
        return setSelectedImage(image.url);
      }
    }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
      className: "product-modal-image-collection-img",
      src: image.url
    }));
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-modal-image-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    type: "color",
    disabled: true,
    ref: colorOverlay,
    id: "color-overlay"
  }), /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    className: "product-modal-image",
    src: selectedImage
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-modal-details"
  }, /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-subtle"
  }, product.price), /*#__PURE__*/react_default.a.createElement("h1", {
    className: "margin-top-0"
  }, product.name), /*#__PURE__*/react_default.a.createElement("span", null, product.description), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-subtle"
  }, "Lens Width and Frame Size"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(dist_react_select_browser_esm["a" /* default */], {
    placeholder: "--Select Size--",
    onChange: onSelectedSizeChange,
    options: sizes,
    styles: {
      menu: function menu(provided) {
        return view_product_objectSpread(view_product_objectSpread({}, provided), {}, {
          zIndex: 10
        });
      }
    }
  })), /*#__PURE__*/react_default.a.createElement("br", null), product.availableColors.length >= 1 && /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-subtle"
  }, "Choose Color"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(ui_ColorChooser, {
    availableColors: product.availableColors,
    onSelectedColorChange: onSelectedColorChange
  })), /*#__PURE__*/react_default.a.createElement("h1", null, Object(utils["c" /* displayMoney */])(product.price)), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-modal-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small ".concat(foundOnBasket() ? 'button-border button-border-gray' : ''),
    onClick: onAddToBasket
  }, foundOnBasket() ? 'Remove From Basket' : 'Add To Basket')))), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      marginTop: '10rem'
    }
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "display-header"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, "Recommended"), /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["m" /* RECOMMENDED_PRODUCTS */]
  }, "See All")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-display-grid"
  }, error ? /*#__PURE__*/react_default.a.createElement(MessageDisplay, {
    message: error,
    action: fetchRecommendedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, recommendedProducts.length === 0 ? new Array(4).fill({}).map(function (product, index) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : recommendedProducts.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: product.id,
      isLoading: isLoading,
      product: product
    });
  }))))) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], null));
};

/* harmony default export */ var view_product = (view_product_ViewProduct);
// CONCATENATED MODULE: ./src/components/product/ProductItem.jsx









var product_ProductItem_ProductItem = function ProductItem(_ref) {
  var product = _ref.product,
      isItemOnBasket = _ref.isItemOnBasket,
      isLoading = _ref.isLoading;
  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var history = Object(react_router["g" /* useHistory */])();

  var onClickItem = function onClickItem() {
    if (isLoading) return;

    if (product.id) {
      history.push("/product/".concat(product.id));
    }
  };

  var onAddToBasket = function onAddToBasket() {
    if (isItemOnBasket) {
      dispatch(basketActions_removeFromBasket(product.id));
      Object(utils["a" /* displayActionMessage */])('Item removed from basket', 'info');
    } else {
      dispatch(basketActions_addToBasket(product));
      Object(utils["a" /* displayActionMessage */])('Item added to basket', 'success');
    }
  };

  return /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib["SkeletonTheme"], {
    color: "#e1e1e1",
    highlightColor: "#f2f2f2"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-card ".concat(!product.id ? 'product-loading' : ''),
    style: {
      border: isItemOnBasket ? '1px solid #cacaca' : '',
      boxShadow: isItemOnBasket ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
    }
  }, isItemOnBasket && /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-check product-card-check"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-card-content",
    onClick: onClickItem
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-card-img-wrapper"
  }, product.image ? /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    className: "product-card-img",
    src: product.image
  }) : /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: '100%',
    height: '90%'
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-details"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "product-card-name text-overflow-ellipsis margin-auto"
  }, product.name || /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 80
  })), /*#__PURE__*/react_default.a.createElement("p", {
    className: "product-card-brand"
  }, product.brand || /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 60
  })), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "product-card-price"
  }, product.price ? Object(utils["c" /* displayMoney */])(product.price) : /*#__PURE__*/react_default.a.createElement(react_loading_skeleton_lib_default.a, {
    width: 40
  })))), product.id && /*#__PURE__*/react_default.a.createElement("button", {
    className: "product-card-button button-small button button-block ".concat(isItemOnBasket ? 'button-border button-border-gray' : ''),
    onClick: onAddToBasket
  }, isItemOnBasket ? 'Remove from basket' : 'Add to basket')));
};

product_ProductItem_ProductItem.propType = {
  product: prop_types_default.a.object.isRequired,
  isItemOnBasket: prop_types_default.a.bool
};
/* harmony default export */ var product_ProductItem = (product_ProductItem_ProductItem);
// CONCATENATED MODULE: ./src/hooks/useDidMount.js
function useDidMount_slicedToArray(arr, i) { return useDidMount_arrayWithHoles(arr) || useDidMount_iterableToArrayLimit(arr, i) || useDidMount_unsupportedIterableToArray(arr, i) || useDidMount_nonIterableRest(); }

function useDidMount_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useDidMount_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useDidMount_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDidMount_arrayLikeToArray(o, minLen); }

function useDidMount_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useDidMount_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useDidMount_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useDidMount_useDidMount = function useDidMount() {
  var _useState = Object(react["useState"])(false),
      _useState2 = useDidMount_slicedToArray(_useState, 2),
      didMount = _useState2[0],
      setDidMount = _useState2[1];

  Object(react["useEffect"])(function () {
    setDidMount(true);
  }, []);
  return didMount;
};

/* harmony default export */ var hooks_useDidMount = (useDidMount_useDidMount);
// CONCATENATED MODULE: ./src/views/search/index.js
function search_slicedToArray(arr, i) { return search_arrayWithHoles(arr) || search_iterableToArrayLimit(arr, i) || search_unsupportedIterableToArray(arr, i) || search_nonIterableRest(); }

function search_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function search_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return search_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return search_arrayLikeToArray(o, minLen); }

function search_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function search_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function search_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var search_Search = function Search(props) {
  var searchKey = props.match.params.searchKey;

  var _useState = Object(react["useState"])(6),
      _useState2 = search_slicedToArray(_useState, 2),
      columnCount = _useState2[0],
      setColumnCount = _useState2[1];

  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var didMount = hooks_useDidMount();

  var _useSelector = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      isLoading: state.app.loading,
      products: state.products.searchedProducts.items,
      basket: state.basket,
      lastRefKey: state.products.searchedProducts.lastRefKey,
      requestStatus: state.app.requestStatus
    };
  }),
      isLoading = _useSelector.isLoading,
      products = _useSelector.products,
      requestStatus = _useSelector.requestStatus,
      lastRefKey = _useSelector.lastRefKey,
      basket = _useSelector.basket;

  Object(react["useEffect"])(function () {
    if (!didMount && !isLoading) {
      dispatch(productActions_searchProduct(undefined, searchKey));
    }

    return function () {
      dispatch(miscActions_setRequestStatus(''));
    };
  }, []);
  Object(react["useEffect"])(function () {
    if (didMount && !isLoading) {
      dispatch(productActions_searchProduct(lastRefKey, searchKey));
    }
  }, [lastRefKey, searchKey]);

  var onProductsLengthChanged = function onProductsLengthChanged() {
    var width = window.screen.width - 250; // minus 250px padding

    var pLen = products.length;
    setColumnCount(Math.floor(width / 160));

    if (columnCount >= pLen && pLen !== 0) {
      setColumnCount(pLen);
    }
  };

  Object(react["useEffect"])(function () {
    onProductsLengthChanged();
  }, [products]);
  var productListWrapper = Object(react["useRef"])(null);

  var foundOnBasket = function foundOnBasket(id) {
    return !!basket.find(function (item) {
      return item.id === id;
    });
  };

  return requestStatus && !isLoading ? /*#__PURE__*/react_default.a.createElement(ui_MessageDisplay, {
    message: requestStatus,
    desc: "Try using correct filters or keyword."
  }) : !requestStatus && !isLoading ? /*#__PURE__*/react_default.a.createElement(ui_Boundary, null, /*#__PURE__*/react_default.a.createElement("section", {
    className: "product-list-wrapper product-list-search"
  }, !requestStatus && /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-list-header"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-list-header-title"
  }, /*#__PURE__*/react_default.a.createElement("h5", null, "Found ".concat(products.length, " ").concat(products.length > 1 ? 'products' : 'product', " with keyword ").concat(searchKey)))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-list",
    ref: productListWrapper,
    style: {
      gridTemplateColumns: "repeat(".concat(columnCount, ", 160px)")
    }
  }, products.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductItem, {
      isItemOnBasket: foundOnBasket(product.id),
      key: product.id,
      isLoading: isLoading,
      product: product
    });
  })))) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null));
};

/* harmony default export */ var search = (search_Search);
// CONCATENATED MODULE: ./src/components/product/ProductSearch.jsx





var ProductSearch_ProductSearch = function ProductSearch(props) {
  var _useSelector = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      filter: state.filter,
      products: state.products.items,
      isLoading: state.app.loading,
      productsLength: state.products.length
    };
  }),
      productsLength = _useSelector.productsLength,
      filter = _useSelector.filter,
      products = _useSelector.products,
      isLoading = _useSelector.isLoading;

  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var searchInput = Object(react["useRef"])(null);
  var input = '';
  Object(react["useEffect"])(function () {
    searchInput.current.focus();
  }, []);

  var onSearchChange = function onSearchChange(e) {
    var val = e.target.value.trim();
    input = val;

    if (val === '' && productsLength !== 0) {
      dispatch(filterActions_setTextFilter(val));
      props.history.push('/');
    }
  };

  var onKeyUp = function onKeyUp(e) {
    if (e.keyCode === 13 && productsLength !== 0) {
      dispatch(filterActions_setTextFilter(input));
      props.history.push('/');
    }
  };

  var onClearRecentSearch = function onClearRecentSearch() {
    dispatch(filterActions_clearRecentSearch());
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-header"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    onClick: props.history.goBack
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-chevron-left"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    className: "product-search-input",
    onChange: onSearchChange,
    onKeyUp: onKeyUp,
    placeholder: "Search for product...",
    ref: searchInput,
    type: "text"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "searchbar-icon"
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-body"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-recent"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-recent-header"
  }, /*#__PURE__*/react_default.a.createElement("h5", null, "Recent Searches"), /*#__PURE__*/react_default.a.createElement("h5", {
    onClick: onClearRecentSearch,
    style: {
      color: 'red'
    }
  }, "Clear")), filter.recent.map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "pill-wrapper",
      key: "".concat(item).concat(index)
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "pill padding-right-l"
    }, /*#__PURE__*/react_default.a.createElement("h5", {
      className: "pill-content margin-0",
      onClick: function onClick() {
        dispatch(filterActions_setTextFilter(item));
        props.history.push('/');
      }
    }, item), /*#__PURE__*/react_default.a.createElement("div", {
      className: "pill-remove",
      onClick: function onClick() {
        return dispatch(filterActions_removeSelectedRecent(item));
      }
    }, /*#__PURE__*/react_default.a.createElement("h5", {
      className: "text-subtle margin-0"
    }, /*#__PURE__*/react_default.a.createElement("i", {
      className: "fa fa-times-circle"
    })))));
  }), filter.recent.length === 0 && /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-subtle"
  }, "No recent searches")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-filter"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "margin-0"
  }, "Choose Filters")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-search-filter-sub"
  }, /*#__PURE__*/react_default.a.createElement(ui_Filters, {
    dispatch: dispatch,
    filter: filter,
    isLoading: isLoading,
    products: products,
    productsLength: productsLength
  }))));
};

/* harmony default export */ var product_ProductSearch = (ProductSearch_ProductSearch);
// CONCATENATED MODULE: ./src/views/auth/signup/index.js
function signup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function signup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { signup_ownKeys(Object(source), true).forEach(function (key) { signup_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { signup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function signup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function signup_slicedToArray(arr, i) { return signup_arrayWithHoles(arr) || signup_iterableToArrayLimit(arr, i) || signup_unsupportedIterableToArray(arr, i) || signup_nonIterableRest(); }

function signup_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function signup_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return signup_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return signup_arrayLikeToArray(o, minLen); }

function signup_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function signup_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function signup_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var signup_SignUp = function SignUp(props) {
  var _useState = Object(react["useState"])(true),
      _useState2 = signup_slicedToArray(_useState, 2),
      passwordHidden = _useState2[0],
      setPasswordHidden = _useState2[1];
  /* separate states so that when user navigates to signin or forgot password,
  the authStatus message won't display to other routes.
   */


  var _useState3 = Object(react["useState"])({}),
      _useState4 = signup_slicedToArray(_useState3, 2),
      signUpStatus = _useState4[0],
      setSignUpStatus = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = signup_slicedToArray(_useState5, 2),
      isSigningUp = _useState6[0],
      setIsSigningUp = _useState6[1]; // ---


  var _useSelector = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      isAuthenticating: state.app.isAuthenticating,
      authStatus: state.app.authStatus
    };
  }),
      isAuthenticating = _useSelector.isAuthenticating,
      authStatus = _useSelector.authStatus;

  var _useState7 = Object(react["useState"])({}),
      _useState8 = signup_slicedToArray(_useState7, 2),
      field = _useState8[0],
      setField = _useState8[1];

  var didMount = hooks_useDidMount();
  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var passwordField = Object(react["useRef"])(null);
  hooks_useScrollTop();
  hooks_useDocumentTitle('Sign Up | Noodles.pk');
  Object(react["useEffect"])(function () {
    if (didMount) {
      setSignUpStatus(authStatus);
      setIsSigningUp(isAuthenticating);
    }
  }, [authStatus, isAuthenticating]);

  var onEmailInput = function onEmailInput(value, error) {
    setField(signup_objectSpread(signup_objectSpread({}, field), {}, {
      email: {
        value: value,
        error: error
      }
    }));
  };

  var onFullnameInput = function onFullnameInput(value, error) {
    setField(signup_objectSpread(signup_objectSpread({}, field), {}, {
      fullname: {
        value: value,
        error: error
      }
    }));
  };

  var onPasswordInput = function onPasswordInput(value, error) {
    setField(signup_objectSpread(signup_objectSpread({}, field), {}, {
      password: {
        value: value,
        error: error
      }
    }));
  };

  var onTogglePasswordVisibility = function onTogglePasswordVisibility() {
    return setPasswordHidden(!passwordHidden);
  };

  var onClickSignIn = function onClickSignIn() {
    return props.history.push('/signin');
  };

  var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var noError = Object.keys(field).every(function (key) {
      return !!field[key].value && !field[key].error;
    });

    if (noError) {
      dispatch(authActions_signUp({
        fullname: field.fullname.value.trim(),
        email: field.email.value.trim().toLowerCase(),
        password: field.password.value.trim()
      }));
    }
  };

  var isSuccess = !!authStatus.success && authStatus.type === 'auth';
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup"
  }, isSuccess && /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "toast-success signin-success"
  }, authStatus.message, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null))), signUpStatus.message && /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-center toast-error"
  }, authStatus.message), !isSuccess && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup-wrapper ".concat(signUpStatus.message && !authStatus.success && 'input-error')
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "Sign up to Salinaka"), /*#__PURE__*/react_default.a.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "fullname",
    isRequired: true,
    label: "* Full Name",
    maxLength: 40,
    onInputChange: onFullnameInput,
    placeholder: "John Doe",
    readOnly: isSigningUp,
    style: {
      textTransform: 'capitalize'
    },
    type: "text"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "email",
    isRequired: true,
    label: "* Email",
    maxLength: 40,
    onInputChange: onEmailInput,
    placeholder: "test@example.com",
    readOnly: isSigningUp,
    type: "email"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup-field"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "password",
    isRequired: true,
    label: "* Password",
    maxLength: 40,
    onInputChange: onPasswordInput,
    placeholder: "Password",
    readOnly: isSigningUp,
    ref: passwordField,
    style: {
      marginBottom: 0
    },
    type: passwordHidden ? 'password' : 'text'
  })), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small button-muted",
    disabled: isSigningUp,
    onClick: onTogglePasswordVisibility,
    type: "button"
  }, passwordHidden ? /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-eye"
  }) : /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-eye-slash"
  })))), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signup-field signup-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button signup-button",
    disabled: isSigningUp,
    type: "submit"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    visible: isSigningUp,
    theme: "light"
  }), isSigningUp ? 'Signing Up' : 'Sign Up')))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-message"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "signin-info"
  }, /*#__PURE__*/react_default.a.createElement("strong", null, "Already have an account?")), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small button-border button-border-gray",
    disabled: isSigningUp,
    onClick: onClickSignIn
  }, "Sign In"))));
};

/* harmony default export */ var signup = (signup_SignUp);
// CONCATENATED MODULE: ./src/views/auth/signin/index.js
function signin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function signin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { signin_ownKeys(Object(source), true).forEach(function (key) { signin_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { signin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function signin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function signin_slicedToArray(arr, i) { return signin_arrayWithHoles(arr) || signin_iterableToArrayLimit(arr, i) || signin_unsupportedIterableToArray(arr, i) || signin_nonIterableRest(); }

function signin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function signin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return signin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return signin_arrayLikeToArray(o, minLen); }

function signin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function signin_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function signin_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var signin_SignIn = function SignIn(props) {
  var _useSelector = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      authStatus: state.app.authStatus,
      isAuthenticating: state.app.isAuthenticating
    };
  }),
      authStatus = _useSelector.authStatus,
      isAuthenticating = _useSelector.isAuthenticating;

  var _useState = Object(react["useState"])(undefined),
      _useState2 = signin_slicedToArray(_useState, 2),
      providerSelected = _useState2[0],
      setProviderSelected = _useState2[1];
  /* separate states so that when user navigates to signup or forgot password,
  the authStatus message won't display to other routes.
   */


  var _useState3 = Object(react["useState"])({}),
      _useState4 = signin_slicedToArray(_useState3, 2),
      signInStatus = _useState4[0],
      setSignInStatus = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = signin_slicedToArray(_useState5, 2),
      isSigningIn = _useState6[0],
      setIsSigningIn = _useState6[1];

  var _useState7 = Object(react["useState"])({}),
      _useState8 = signin_slicedToArray(_useState7, 2),
      field = _useState8[0],
      setField = _useState8[1]; // --- 


  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var didMount = hooks_useDidMount();
  hooks_useScrollTop();
  hooks_useDocumentTitle('Sign In | Noodles.pk');
  Object(react["useEffect"])(function () {
    if (didMount) {
      setSignInStatus(authStatus);
      setIsSigningIn(isAuthenticating);
    }
  }, [authStatus, isAuthenticating]);

  var onEmailInput = function onEmailInput(value, error) {
    setField(signin_objectSpread(signin_objectSpread({}, field), {}, {
      email: {
        value: value,
        error: error
      }
    }));
  };

  var onPasswordInput = function onPasswordInput(value, error) {
    setField(signin_objectSpread(signin_objectSpread({}, field), {}, {
      password: {
        value: value,
        error: error
      }
    }));
  };

  var onSignUp = function onSignUp() {
    return props.history.push('/signup');
  };

  var onSignInWithGoogle = function onSignInWithGoogle() {
    dispatch(authActions_signInWithGoogle());
    setProviderSelected('google');
  };

  var onSignInWithFacebook = function onSignInWithFacebook() {
    dispatch(authActions_signInWithFacebook());
    setProviderSelected('facebook');
  };

  var onSignInWithGithub = function onSignInWithGithub() {
    dispatch(authActions_signInWithGithub());
    setProviderSelected('github');
  };

  var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();
    var noError = Object.keys(field).every(function (key) {
      return !!field[key].value && !field[key].error;
    });

    if (noError) {
      dispatch(authActions_signIn(field.email.value, field.password.value));
      setProviderSelected('signin');
    }
  };

  var onClickLink = function onClickLink(e) {
    if (isSigningIn) e.preventDefault();
  };

  var isSuccess = !!authStatus.success && authStatus.type === 'auth';
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-content"
  }, isSuccess && /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "toast-success signin-success"
  }, authStatus.message, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null))), signInStatus.message && /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-center toast-error"
  }, authStatus.message), !isSuccess && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin ".concat(signInStatus.message && !authStatus.success && 'input-error')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-main"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "Sign in to Salinaka"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("form", {
    onSubmit: onSubmitForm
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "Email",
    readOnly: isSigningIn,
    placeholder: "text@example.com",
    onInputChange: onEmailInput,
    isRequired: true,
    field: "email",
    type: "email"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "Password",
    readOnly: isSigningIn,
    placeholder: "Your Password",
    onInputChange: onPasswordInput,
    isRequired: true,
    showError: false,
    field: "password",
    type: "password"
  })), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-field signin-action"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    onClick: onClickLink,
    style: {
      textDecoration: 'underline'
    },
    to: routes["k" /* FORGOT_PASSWORD */]
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Forgot password?")), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button signin-button",
    disabled: isSigningIn,
    type: "submit"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    theme: "light",
    visible: isSigningIn && providerSelected === 'signin'
  }), isSigningIn && providerSelected === 'signin' ? 'Signing In' : 'Sign In'))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-divider"
  }, /*#__PURE__*/react_default.a.createElement("h6", null, "OR")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-provider"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button signin-provider-button provider-facebook",
    disabled: isSigningIn,
    onClick: onSignInWithFacebook
  }, isSigningIn && providerSelected === 'facebook' ? /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    theme: "light"
  }) : /*#__PURE__*/react_default.a.createElement("i", {
    className: "fab fa-facebook"
  }), /*#__PURE__*/react_default.a.createElement("span", null, "Sign in with Facebook")), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button signin-provider-button provider-google",
    disabled: isSigningIn,
    onClick: onSignInWithGoogle
  }, isSigningIn && providerSelected === 'google' ? /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    theme: "dark"
  }) : /*#__PURE__*/react_default.a.createElement("i", {
    className: "fab fa-google"
  }), /*#__PURE__*/react_default.a.createElement("span", null, "Sign in with Google")), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button signin-provider-button provider-github",
    disabled: isSigningIn,
    onClick: onSignInWithGithub
  }, isSigningIn && providerSelected === 'github' ? /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    theme: "light"
  }) : /*#__PURE__*/react_default.a.createElement("i", {
    className: "fab fa-github"
  }), /*#__PURE__*/react_default.a.createElement("span", null, "Sign in with GitHub")))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "signin-message"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "signin-info"
  }, /*#__PURE__*/react_default.a.createElement("strong", null, "Don't have an account?")), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small button-border button-border-gray",
    disabled: isSigningIn,
    onClick: onSignUp
  }, "Sign Up"))));
};

/* harmony default export */ var signin = (signin_SignIn);
// CONCATENATED MODULE: ./src/views/auth/forgot_password/index.js
function forgot_password_slicedToArray(arr, i) { return forgot_password_arrayWithHoles(arr) || forgot_password_iterableToArrayLimit(arr, i) || forgot_password_unsupportedIterableToArray(arr, i) || forgot_password_nonIterableRest(); }

function forgot_password_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function forgot_password_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return forgot_password_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return forgot_password_arrayLikeToArray(o, minLen); }

function forgot_password_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function forgot_password_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function forgot_password_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var forgot_password_ForgotPassword = function ForgotPassword() {
  var _useSelector = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      isAuthenticating: state.app.isAuthenticating,
      authStatus: state.app.authStatus
    };
  }),
      authStatus = _useSelector.authStatus,
      isAuthenticating = _useSelector.isAuthenticating;

  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var didMount = hooks_useDidMount();

  var _useState = Object(react["useState"])({}),
      _useState2 = forgot_password_slicedToArray(_useState, 2),
      forgotPWStatus = _useState2[0],
      setForgotPWStatus = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = forgot_password_slicedToArray(_useState3, 2),
      isSendingForgotPWRequest = _useState4[0],
      setIsSending = _useState4[1];

  var _useState5 = Object(react["useState"])({}),
      _useState6 = forgot_password_slicedToArray(_useState5, 2),
      field = _useState6[0],
      setField = _useState6[1];

  hooks_useScrollTop();
  hooks_useDocumentTitle('Forgot Password | Salinaka');
  Object(react["useEffect"])(function () {
    if (didMount) {
      setForgotPWStatus(authStatus);
      setIsSending(isAuthenticating);
    }
  }, [authStatus, isAuthenticating]);

  var onEmailChange = function onEmailChange(value, error) {
    setField({
      email: value,
      error: error
    });
  };

  var onSubmitEmail = function onSubmitEmail() {
    if (!!field.email && !field.error) {
      dispatch(authActions_resetPassword(field.email));
    }
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "forgot_password"
  }, forgotPWStatus.message && /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-center ".concat(authStatus.success ? 'toast-success' : 'toast-error')
  }, authStatus.message), /*#__PURE__*/react_default.a.createElement("h3", null, "Forgot Your Password?"), /*#__PURE__*/react_default.a.createElement("p", null, "Enter your email address and we will send you a password reset email."), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(Input, {
    field: "email",
    isRequired: true,
    label: "* Email",
    maxLength: 40,
    onInputChange: onEmailChange,
    placeholder: "Enter your email",
    readOnly: isSendingForgotPWRequest || authStatus.success,
    type: "email"
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button w-100-mobile",
    disabled: isSendingForgotPWRequest || authStatus.success,
    onClick: onSubmitEmail,
    type: "button"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    theme: "light",
    visible: isSendingForgotPWRequest
  }), isSendingForgotPWRequest ? 'Sending Password Reset Email' : 'Send Password Reset Email'));
};

/* harmony default export */ var forgot_password = (forgot_password_ForgotPassword);
// CONCATENATED MODULE: ./src/views/account/tab/UserTab.jsx
function UserTab_slicedToArray(arr, i) { return UserTab_arrayWithHoles(arr) || UserTab_iterableToArrayLimit(arr, i) || UserTab_unsupportedIterableToArray(arr, i) || UserTab_nonIterableRest(); }

function UserTab_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function UserTab_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UserTab_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UserTab_arrayLikeToArray(o, minLen); }

function UserTab_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function UserTab_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function UserTab_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var UserTab_UserTab = function UserTab(props) {
  var _useState = Object(react["useState"])(props.children[0].props.index || 0),
      _useState2 = UserTab_slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var onClickTabItem = function onClickTabItem(index) {
    return setActiveTab(index);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-tab"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-tab-nav"
  }, /*#__PURE__*/react_default.a.createElement("ul", {
    className: "user-tab-menu"
  }, props.children.map(function (child) {
    return /*#__PURE__*/react_default.a.createElement("li", {
      className: "user-tab-item ".concat(child.props.index === activeTab ? 'user-tab-active' : ''),
      key: child.props.label,
      onClick: function onClick() {
        return onClickTabItem(child.props.index);
      }
    }, child.props.label);
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-tab-content"
  }, props.children.map(function (child) {
    if (child.props.index !== activeTab) return undefined;
    return child.props.children;
  })));
};

/* harmony default export */ var tab_UserTab = (UserTab_UserTab);
// CONCATENATED MODULE: ./src/views/account/user_account/index.js
/* eslint-disable react/no-multi-comp */





var UserAccountTab = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 436));
});
var UserWishListTab = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 437));
});
var UserOrdersTab = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 438));
});

var user_account_Loader = function Loader() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "loader",
    style: {
      minHeight: '80vh'
    }
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null), /*#__PURE__*/react_default.a.createElement("h6", null, "Loading ... "));
};

var user_account_UserAccount = function UserAccount() {
  hooks_useScrollTop();
  hooks_useDocumentTitle('My Account | Salinaka');
  return /*#__PURE__*/react_default.a.createElement(tab_UserTab, null, /*#__PURE__*/react_default.a.createElement("div", {
    index: 0,
    label: "Account"
  }, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement(user_account_Loader, null)
  }, /*#__PURE__*/react_default.a.createElement(UserAccountTab, null))), /*#__PURE__*/react_default.a.createElement("div", {
    index: 1,
    label: "My Wish List"
  }, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement(user_account_Loader, null)
  }, /*#__PURE__*/react_default.a.createElement(UserWishListTab, null))), /*#__PURE__*/react_default.a.createElement("div", {
    index: 2,
    label: "My Orders"
  }, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement(user_account_Loader, null)
  }, /*#__PURE__*/react_default.a.createElement(UserOrdersTab, null))));
};

/* harmony default export */ var user_account = (user_account_UserAccount);
// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/lib.js
var lib_lib = __webpack_require__(114);
var lib_lib_default = /*#__PURE__*/__webpack_require__.n(lib_lib);

// CONCATENATED MODULE: ./src/redux/actions/profileActions.js

var profileActions_clearProfile = function clearProfile() {
  return {
    type: CLEAR_PROFILE
  };
};
var profileActions_setProfile = function setProfile(user) {
  return {
    type: SET_PROFILE,
    payload: user
  };
};
var profileActions_updateEmail = function updateEmail(password, newEmail) {
  return {
    type: UPDATE_EMAIL,
    payload: {
      password: password,
      newEmail: newEmail
    }
  };
};
var profileActions_updateProfile = function updateProfile(newProfile) {
  return {
    type: UPDATE_PROFILE,
    payload: {
      updates: newProfile.updates,
      files: newProfile.files,
      credentials: newProfile.credentials
    }
  };
};
var profileActions_updateProfileSuccess = function updateProfileSuccess(updates) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: updates
  };
};
// CONCATENATED MODULE: ./src/views/account/edit_account/index.js
function edit_account_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function edit_account_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { edit_account_ownKeys(Object(source), true).forEach(function (key) { edit_account_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { edit_account_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function edit_account_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function edit_account_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { edit_account_typeof = function _typeof(obj) { return typeof obj; }; } else { edit_account_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return edit_account_typeof(obj); }

function edit_account_slicedToArray(arr, i) { return edit_account_arrayWithHoles(arr) || edit_account_iterableToArrayLimit(arr, i) || edit_account_unsupportedIterableToArray(arr, i) || edit_account_nonIterableRest(); }

function edit_account_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function edit_account_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return edit_account_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return edit_account_arrayLikeToArray(o, minLen); }

function edit_account_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function edit_account_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function edit_account_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable indent */

/* eslint-disable no-extra-boolean-cast */

/* eslint-disable no-else-return */















var edit_account_EditProfile = function EditProfile(props) {
  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  hooks_useDocumentTitle('Edit Account | Salinaka');
  hooks_useScrollTop();
  Object(react["useEffect"])(function () {
    return function () {
      dispatch(miscActions_setLoading(false));
    };
  }, []);

  var _useSelector = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      profile: state.profile,
      auth: state.auth,
      isLoading: state.app.loading
    };
  }),
      profile = _useSelector.profile,
      auth = _useSelector.auth,
      isLoading = _useSelector.isLoading;

  var _useState = Object(react["useState"])({
    fullname: {
      value: profile.fullname ? profile.fullname : ''
    },
    email: {
      value: profile.email ? profile.email : ''
    },
    address: {
      value: profile.address ? profile.address : ''
    },
    mobile: profile.mobile.value ? profile.mobile : {
      value: '',
      data: {}
    },
    avatar: profile.avatar ? profile.avatar : '',
    banner: profile.banner ? profile.banner : ''
  }),
      _useState2 = edit_account_slicedToArray(_useState, 2),
      field = _useState2[0],
      setField = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = edit_account_slicedToArray(_useState3, 2),
      isOpenModal = _useState4[0],
      setModalOpen = _useState4[1];

  var _useState5 = Object(react["useState"])(null),
      _useState6 = edit_account_slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useFileHandler = hooks_useFileHandler({
    avatar: {},
    banner: {}
  }),
      imageFile = _useFileHandler.imageFile,
      isFileLoading = _useFileHandler.isFileLoading,
      onFileChange = _useFileHandler.onFileChange;

  var areFieldsChanged = function areFieldsChanged() {
    var fieldsChanged = Object.keys(field).some(function (key) {
      if (edit_account_typeof(profile[key]) === 'object' && edit_account_typeof(field[key]) === 'object') {
        return profile[key].value !== field[key].value;
      } else if (edit_account_typeof(field[key]) === 'object') {
        return field[key].value !== profile[key];
      } else {
        return field[key] !== profile[key];
      }
    });
    var filesUpdated = imageFile.banner.file || imageFile.avatar.file;
    return fieldsChanged || filesUpdated;
  };

  var onEmailChange = function onEmailChange(value, error) {
    setField(edit_account_objectSpread(edit_account_objectSpread({}, field), {}, {
      email: {
        value: value,
        error: error
      }
    }));
  };

  var onFullNameChange = function onFullNameChange(value, error) {
    setField(edit_account_objectSpread(edit_account_objectSpread({}, field), {}, {
      fullname: {
        value: value,
        error: error
      }
    }));
  };

  var onAddressChange = function onAddressChange(value, error) {
    setField(edit_account_objectSpread(edit_account_objectSpread({}, field), {}, {
      address: {
        value: value,
        error: error
      }
    }));
  };

  var onMobileChange = function onMobileChange(value, data) {
    var obj = {
      dialCode: data.dialCode,
      countryCode: data.countryCode,
      num: value
    };
    setField(edit_account_objectSpread(edit_account_objectSpread({}, field), {}, {
      mobile: {
        value: value.replace(/[^0-9]+/g, '').slice(data.dialCode.length),
        data: obj
      }
    }));
  };

  var onCloseModal = function onCloseModal() {
    return setModalOpen(false);
  };

  var onPasswordInput = function onPasswordInput(e) {
    setPassword(e.target.value.trim());
  };

  var update = function update() {
    var credentials = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch(profileActions_updateProfile({
      updates: {
        fullname: field.fullname.value,
        email: field.email.value,
        address: field.address.value,
        mobile: field.mobile,
        avatar: field.avatar,
        banner: field.banner
      },
      files: {
        bannerFile: imageFile.banner.file,
        avatarFile: imageFile.avatar.file
      },
      credentials: credentials
    }));
  };

  var onConfirmUpdate = function onConfirmUpdate() {
    if (password) {
      update({
        email: field.email.value,
        password: password
      });
      setModalOpen(false);
    }
  };

  var onSubmitUpdate = function onSubmitUpdate() {
    var noError = Object.keys(field).every(function (key) {
      return !!!field[key].error;
    });

    if (noError) {
      if (field.email.value !== profile.email) {
        setModalOpen(true);
      } else if (areFieldsChanged()) {
        update();
      }
    }
  };

  return /*#__PURE__*/react_default.a.createElement(ui_Boundary, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "edit-user"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "text-center"
  }, "Edit Account Details"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-profile-banner"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-profile-banner-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    alt: "Banner",
    className: "user-profile-banner-img",
    src: imageFile.banner.url || field.banner
  }), /*#__PURE__*/react_default.a.createElement("input", {
    accept: "image/x-png,image/jpeg",
    disabled: isLoading,
    hidden: true,
    id: "edit-banner",
    onChange: function onChange(e) {
      return onFileChange(e, {
        name: 'banner',
        type: 'single'
      });
    },
    type: "file"
  }), isFileLoading ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "loading-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    visible: true,
    theme: "light"
  })) : /*#__PURE__*/react_default.a.createElement("label", {
    className: "edit-button edit-banner-button",
    htmlFor: "edit-banner"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-pen"
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-profile-avatar-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    alt: "Avatar",
    className: "user-profile-img",
    src: imageFile.avatar.url || field.avatar
  }), /*#__PURE__*/react_default.a.createElement("input", {
    accept: "image/x-png,image/jpeg",
    disabled: isLoading,
    hidden: true,
    id: "edit-avatar",
    onChange: function onChange(e) {
      return onFileChange(e, {
        name: 'avatar',
        type: 'single'
      });
    },
    type: "file"
  }), isFileLoading ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "loading-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    visible: true,
    theme: "light"
  })) : /*#__PURE__*/react_default.a.createElement("label", {
    className: "edit-button edit-avatar-button",
    htmlFor: "edit-avatar"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-pen"
  })))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-profile-details"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Full Name",
    maxLength: 40,
    readOnly: isLoading,
    placeholder: "Your Full Name",
    onInputChange: onFullNameChange,
    isRequired: true,
    field: "fullname",
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.fullname.value
  }), /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Email",
    maxLength: 40,
    readOnly: auth.provider !== 'password' || isLoading,
    placeholder: "test@example.com",
    onInputChange: onEmailChange,
    isRequired: true,
    field: "email",
    type: "email",
    value: field.email.value
  }), /*#__PURE__*/react_default.a.createElement(Input, {
    label: "Address",
    maxLength: 120,
    readOnly: isLoading,
    placeholder: "eg: #245 Brgy. Maligalig, Arayat Pampanga, Philippines",
    onInputChange: onAddressChange,
    isRequired: false,
    field: "address",
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.address.value
  }), field.mobile.error ? /*#__PURE__*/react_default.a.createElement("span", {
    className: "input-message"
  }, field.mobile.error) : /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Mobile"), /*#__PURE__*/react_default.a.createElement(lib_lib_default.a, {
    country: 'ph',
    disabled: isLoading,
    inputClass: "input-form d-block ".concat(field.mobile.error ? 'input-error' : ''),
    inputExtraProps: {
      required: true
    } // eslint-disable-next-line quote-props
    ,
    masks: {
      'ph': '+.. .... ... ....'
    },
    onChange: onMobileChange,
    placeholder: "Enter your mobile number",
    readOnly: isLoading,
    value: field.mobile.data.num
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "edit-user-action"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-muted w-100-mobile",
    disabled: isLoading,
    onClick: function onClick() {
      return props.history.push(routes["a" /* ACCOUNT */]);
    }
  }, "Back to Profile"), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button w-100-mobile",
    disabled: isLoading || !areFieldsChanged(),
    onClick: onSubmitUpdate
  }, /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
    visible: isLoading,
    theme: "light"
  }), isLoading ? 'Updating Profile' : 'Update Profile')))), /*#__PURE__*/react_default.a.createElement(ui_Modal, {
    isOpen: isOpenModal,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "text-center padding-l"
  }, /*#__PURE__*/react_default.a.createElement("h4", null, "Confirm Update"), /*#__PURE__*/react_default.a.createElement("p", null, "To continue updating profile including your \xA0", /*#__PURE__*/react_default.a.createElement("strong", null, "email"), ",", /*#__PURE__*/react_default.a.createElement("br", null), "please confirm by entering your password"), /*#__PURE__*/react_default.a.createElement("input", {
    className: "input-form d-block",
    onChange: onPasswordInput,
    placeholder: "Enter your password",
    type: "password"
  })), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex-center"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button",
    onClick: onConfirmUpdate
  }, "Confirm")), /*#__PURE__*/react_default.a.createElement("button", {
    className: "modal-close-button button button-border button-border-gray button-small",
    onClick: onCloseModal
  }, "X")));
};

/* harmony default export */ var edit_account = (edit_account_EditProfile);
// CONCATENATED MODULE: ./src/images/ac.png
/* harmony default export */ var ac = (__webpack_require__.p + "images/ac.aa1bf11acdf8b8b45755549288b03cb5.png");
// CONCATENATED MODULE: ./src/hooks/useFeaturedProducts.js
function useFeaturedProducts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useFeaturedProducts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useFeaturedProducts_ownKeys(Object(source), true).forEach(function (key) { useFeaturedProducts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useFeaturedProducts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useFeaturedProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useFeaturedProducts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function useFeaturedProducts_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { useFeaturedProducts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { useFeaturedProducts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useFeaturedProducts_slicedToArray(arr, i) { return useFeaturedProducts_arrayWithHoles(arr) || useFeaturedProducts_iterableToArrayLimit(arr, i) || useFeaturedProducts_unsupportedIterableToArray(arr, i) || useFeaturedProducts_nonIterableRest(); }

function useFeaturedProducts_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useFeaturedProducts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useFeaturedProducts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useFeaturedProducts_arrayLikeToArray(o, minLen); }

function useFeaturedProducts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useFeaturedProducts_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useFeaturedProducts_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useFeaturedProducts_useFeaturedProducts = function useFeaturedProducts(itemsCount) {
  var _useState = Object(react["useState"])([]),
      _useState2 = useFeaturedProducts_slicedToArray(_useState, 2),
      featuredProducts = _useState2[0],
      setFeaturedProducts = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = useFeaturedProducts_slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react["useState"])(''),
      _useState6 = useFeaturedProducts_slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  Object(react["useEffect"])(function () {
    if (featuredProducts.length === 0) {
      fetchFeaturedProducts();
    }
  }, []);

  var fetchFeaturedProducts = /*#__PURE__*/function () {
    var _ref = useFeaturedProducts_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var docs, items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              setError('');
              _context.next = 5;
              return firebase_firebase.getFeaturedProducts(itemsCount);

            case 5:
              docs = _context.sent;

              if (docs.empty) {
                setError('No featured products found.');
              } else {
                items = [];
                docs.forEach(function (snap) {
                  var data = snap.data();
                  items.push(useFeaturedProducts_objectSpread({
                    id: snap.ref.id
                  }, data));
                });
                setFeaturedProducts(items);
                setLoading(false);
              }

              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setError('Failed to fetch featured products');
              setLoading(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function fetchFeaturedProducts() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    featuredProducts: featuredProducts,
    fetchFeaturedProducts: fetchFeaturedProducts,
    isLoading: isLoading,
    error: error
  };
};

/* harmony default export */ var hooks_useFeaturedProducts = (useFeaturedProducts_useFeaturedProducts);
// CONCATENATED MODULE: ./src/views/home/index.js











var home_Home = function Home() {
  hooks_useDocumentTitle('Noodles.pk | Home');
  hooks_useScrollTop();

  var _useFeaturedProducts = hooks_useFeaturedProducts(6),
      featuredProducts = _useFeaturedProducts.featuredProducts,
      fetchFeaturedProducts = _useFeaturedProducts.fetchFeaturedProducts,
      isLoadingFeatured = _useFeaturedProducts.isLoading,
      errorFeatured = _useFeaturedProducts.error;

  var _useRecommendedProduc = hooks_useRecommendedProducts(6),
      recommendedProducts = _useRecommendedProduc.recommendedProducts,
      fetchRecommendedProducts = _useRecommendedProduc.fetchRecommendedProducts,
      isLoadingRecommended = _useRecommendedProduc.isLoading,
      errorRecommended = _useRecommendedProduc.error;

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "home"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: "text-thin"
  }, /*#__PURE__*/react_default.a.createElement("strong", null, "Buy"), " foreign products in ", /*#__PURE__*/react_default.a.createElement("strong", null, "Pakistan")), /*#__PURE__*/react_default.a.createElement("p", null, "New Food provides news and business information for the world's food & beverage industries: magazines, newsletter, directory, and on-line services."), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["o" /* SHOP */],
    className: "button"
  }, "Shop Now")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "banner-img"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: ac,
    alt: ""
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "display"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "display-header"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, "Featured Products"), /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["j" /* FEATURED_PRODUCTS */]
  }, "See All")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-display-grid"
  }, errorFeatured && !isLoadingFeatured ? /*#__PURE__*/react_default.a.createElement(ui_MessageDisplay, {
    message: errorFeatured,
    action: fetchFeaturedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, featuredProducts.length === 0 ? new Array(4).fill({}).map(function (product, index) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : featuredProducts.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: product.id,
      isLoading: isLoadingFeatured,
      product: product
    });
  })))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "display"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "display-header"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, "Recommended Products"), /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["m" /* RECOMMENDED_PRODUCTS */]
  }, "See All")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-display-grid"
  }, errorRecommended && !isLoadingRecommended ? /*#__PURE__*/react_default.a.createElement(ui_MessageDisplay, {
    message: errorRecommended,
    action: fetchRecommendedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, recommendedProducts.length === 0 ? new Array(4).fill({}).map(function (product, index) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : recommendedProducts.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: product.id,
      isLoading: isLoadingRecommended,
      product: product
    });
  })))));
};

/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./src/components/basket/BasketItemControl.jsx




var BasketItemControl_BasketItemControl = function BasketItemControl(_ref) {
  var product = _ref.product,
      dispatch = _ref.dispatch;

  var onAddQty = function onAddQty() {
    if (product.quantity < product.maxQuantity) {
      dispatch(basketActions_addQtyItem(product.id));
    }
  };

  var onMinusQty = function onMinusQty() {
    if (product.maxQuantity >= product.quantity && product.quantity !== 0) {
      dispatch(basketActions_minusQtyItem(product.id));
    }
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item-control"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-border-gray button-small basket-control basket-control-add",
    disabled: product.maxQuantity === product.quantity,
    onClick: onAddQty
  }, "+"), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-border-gray button-small basket-control basket-control-minus",
    disabled: product.quantity === 1,
    onClick: onMinusQty
  }, "-"));
};

BasketItemControl_BasketItemControl.propType = {
  action: prop_types_default.a.objectOf(prop_types_default.a.func).isRequired,
  product: prop_types_default.a.object.isRequired
};
/* harmony default export */ var basket_BasketItemControl = (BasketItemControl_BasketItemControl);
// CONCATENATED MODULE: ./src/components/ui/Badge.jsx



var Badge_Badge = function Badge(_ref) {
  var count = _ref.count,
      children = _ref.children;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "badge"
  }, children, count >= 1 && /*#__PURE__*/react_default.a.createElement("span", {
    className: "badge-count"
  }, count));
};

Badge_Badge.propType = {
  count: prop_types_default.a.number.isRequired
};
/* harmony default export */ var ui_Badge = (Badge_Badge);
// CONCATENATED MODULE: ./src/components/basket/BasketItem.jsx








var BasketItem_BasketItem = function BasketItem(_ref) {
  var dispatch = _ref.dispatch,
      product = _ref.product;

  var onRemoveFromBasket = function onRemoveFromBasket() {
    return dispatch(basketActions_removeFromBasket(product.id));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item"
  }, /*#__PURE__*/react_default.a.createElement(basket_BasketItemControl, {
    dispatch: dispatch,
    product: product
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "position-relative margin-right-m margin-left-s"
  }, /*#__PURE__*/react_default.a.createElement(ui_Badge, {
    count: product.quantity
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item-img-wrapper"
  }, /*#__PURE__*/react_default.a.createElement(ImageLoader["a" /* default */], {
    className: "basket-item-img",
    src: product.image
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-item-details"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "basket-item-name"
  }, product.selectedColor && /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-square",
    style: {
      color: product.selectedColor
    }
  }), "\xA0", product.name), /*#__PURE__*/react_default.a.createElement("h5", {
    className: "basket-item-price"
  }, Object(utils["c" /* displayMoney */])(product.price * product.quantity), /*#__PURE__*/react_default.a.createElement("span", null, " (x ".concat(product.quantity, ")")), "\xA0", product.selectedSize && /*#__PURE__*/react_default.a.createElement("span", null, "| ", product.selectedSize, " mm"))), /*#__PURE__*/react_default.a.createElement("button", {
    className: "basket-item-remove button button-border button-border-gray button-small",
    onClick: onRemoveFromBasket
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-trash"
  }))));
};

BasketItem_BasketItem.propType = {
  product: prop_types_default.a.object.isRequired,
  basket: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired
};
/* harmony default export */ var basket_BasketItem = (BasketItem_BasketItem);
// CONCATENATED MODULE: ./src/views/checkout/components/StepTracker.jsx


var StepTracker_StepTracker = function StepTracker(_ref) {
  var current = _ref.current;

  var className = function className(step) {
    // eslint-disable-next-line no-nested-ternary
    return current === step ? 'is-active-step' : step < current ? 'is-done-step' : '';
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header"
  }, /*#__PURE__*/react_default.a.createElement("ul", {
    className: "checkout-header-menu"
  }, /*#__PURE__*/react_default.a.createElement("li", {
    className: "checkout-header-list ".concat(className(1))
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "checkout-header-step"
  }, "1")), /*#__PURE__*/react_default.a.createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Order Summary"))), /*#__PURE__*/react_default.a.createElement("li", {
    className: "checkout-header-list ".concat(className(2))
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "checkout-header-step"
  }, "2")), /*#__PURE__*/react_default.a.createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Shipping Details"))), /*#__PURE__*/react_default.a.createElement("li", {
    className: "checkout-header-list ".concat(className(3))
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-header-icon"
  }, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "checkout-header-step"
  }, "3")), /*#__PURE__*/react_default.a.createElement("h6", {
    className: "checkout-header-subtitle"
  }, "Payment")))));
};

/* harmony default export */ var components_StepTracker = (StepTracker_StepTracker);
// CONCATENATED MODULE: ./src/views/checkout/components/Pagination.jsx


var Pagination_Pagination = function Pagination(_ref) {
  var nextStepLabel = _ref.nextStepLabel,
      previousLabel = _ref.previousLabel,
      disabledNext = _ref.disabledNext,
      onClickNext = _ref.onClickNext,
      onClickPrevious = _ref.onClickPrevious,
      previousVisible = _ref.previousVisible;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-shipping-action"
  }, previousVisible && /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-muted",
    onClick: onClickPrevious,
    type: "button"
  }, previousLabel), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button",
    disabled: disabledNext,
    onClick: onClickNext
  }, nextStepLabel));
};

Pagination_Pagination.defaultProps = {
  nextStepLabel: 'Next Step',
  previousLabel: 'Go Back',
  previousVisible: true
};
/* harmony default export */ var components_Pagination = (Pagination_Pagination);
// CONCATENATED MODULE: ./src/views/checkout/hoc/withAuth.js
function withAuth_extends() { withAuth_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return withAuth_extends.apply(this, arguments); }

/* eslint-disable no-nested-ternary */




var withAuth_withAuth = function withAuth(Component) {
  return Object(react_router["j" /* withRouter */])(function (props) {
    var _useSelector = Object(react_redux_es["d" /* useSelector */])(function (state) {
      return {
        isAuth: !!state.auth.id && !!state.auth.role,
        basket: state.basket,
        shipping: state.checkout.shipping,
        payment: state.checkout.payment,
        profile: state.profile
      };
    }),
        isAuth = _useSelector.isAuth,
        basket = _useSelector.basket,
        profile = _useSelector.profile,
        shipping = _useSelector.shipping,
        payment = _useSelector.payment;

    var dispatch = Object(react_redux_es["c" /* useDispatch */])();

    var calculateSubTotal = function calculateSubTotal() {
      var total = 0;

      if (basket.length !== 0) {
        var result = basket.map(function (product) {
          return product.price * product.quantity;
        }).reduce(function (a, b) {
          return a + b;
        });
        total = result;
      }

      return total;
    };

    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, !isAuth ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
      to: "/signin"
    }) : basket.length === 0 ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
      to: "/"
    }) : null, /*#__PURE__*/react_default.a.createElement(Component, withAuth_extends({}, props, {
      basket: basket,
      dispatch: dispatch,
      payment: payment,
      profile: profile,
      shipping: shipping,
      subtotal: calculateSubTotal()
    })));
  });
};

/* harmony default export */ var hoc_withAuth = (withAuth_withAuth);
// CONCATENATED MODULE: ./src/views/checkout/step1/index.js










var step1_OrderSummary = function OrderSummary(_ref) {
  var basket = _ref.basket,
      subtotal = _ref.subtotal,
      dispatch = _ref.dispatch,
      history = _ref.history;
  hooks_useDocumentTitle('Check Out Step 1 | Salinaka');
  hooks_useScrollTop();

  var onClickPrevious = function onClickPrevious() {
    return history.push('/');
  };

  var onClickNext = function onClickNext() {
    return history.push(routes["g" /* CHECKOUT_STEP_2 */]);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/react_default.a.createElement(components_StepTracker, {
    current: 1
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-step-1"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "text-center"
  }, "Order Summary"), /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block text-center"
  }, "Review items in your basket."), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-items"
  }, basket.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(basket_BasketItem, {
      basket: basket,
      dispatch: dispatch,
      key: product.id,
      product: product
    });
  })), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-total text-right"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "basket-total-title"
  }, "Subtotal:"), /*#__PURE__*/react_default.a.createElement("h2", {
    className: "basket-total-amount"
  }, Object(utils["c" /* displayMoney */])(subtotal))), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(components_Pagination, {
    disabledNext: false,
    history: history,
    onClickNext: onClickNext,
    onClickPrevious: onClickPrevious,
    previousLabel: "Continue Shopping"
  })));
};

/* harmony default export */ var step1 = (hoc_withAuth(step1_OrderSummary));
// CONCATENATED MODULE: ./src/redux/actions/checkoutActions.js

var checkoutActions_setShippingDetails = function setShippingDetails(details) {
  return {
    type: SET_CHECKOUT_SHIPPING_DETAILS,
    payload: details
  };
};
var checkoutActions_setPaymentDetails = function setPaymentDetails(details) {
  return {
    type: SET_CHECKOUT_PAYMENT_DETAILS,
    payload: details
  };
};
var checkoutActions_resetCheckout = function resetCheckout() {
  return {
    type: RESET_CHECKOUT
  };
};
// CONCATENATED MODULE: ./src/views/checkout/step2/ShippingForm.jsx
function ShippingForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ShippingForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ShippingForm_ownKeys(Object(source), true).forEach(function (key) { ShippingForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ShippingForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ShippingForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ShippingForm_slicedToArray(arr, i) { return ShippingForm_arrayWithHoles(arr) || ShippingForm_iterableToArrayLimit(arr, i) || ShippingForm_unsupportedIterableToArray(arr, i) || ShippingForm_nonIterableRest(); }

function ShippingForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ShippingForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ShippingForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ShippingForm_arrayLikeToArray(o, minLen); }

function ShippingForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ShippingForm_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ShippingForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ShippingForm_ShippingForm = function ShippingForm(_ref) {
  var setField = _ref.setField,
      field = _ref.field;

  var _useState = Object(react["useState"])(''),
      _useState2 = ShippingForm_slicedToArray(_useState, 2),
      errorMobile = _useState2[0],
      setErrorMobile = _useState2[1];

  var onFullNameInput = function onFullNameInput(value, error) {
    setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      fullname: {
        value: value,
        error: error
      }
    }));
  };

  var onEmailInput = function onEmailInput(value, error) {
    setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      email: {
        value: value,
        error: error
      }
    }));
  };

  var onAddressInput = function onAddressInput(value, error) {
    setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      address: {
        value: value,
        error: error
      }
    }));
  };

  var onMobileInput = function onMobileInput(value, data) {
    var obj = {
      dialCode: data.dialCode,
      countryCode: data.countryCode,
      num: value
    };

    if (value.length === 0) {
      setErrorMobile('Mobile number is required.');
    } else {
      setErrorMobile('');
    }

    setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      mobile: {
        value: value.replace(/[^0-9]+/g, '').slice(data.dialCode.length),
        error: errorMobile,
        data: obj
      }
    }));
  };

  var errorClassName = function errorClassName() {
    return errorMobile ? 'input-error' : '';
  };

  var onShippingOptionChange = function onShippingOptionChange() {
    return setField(ShippingForm_objectSpread(ShippingForm_objectSpread({}, field), {}, {
      isInternational: !field.isInternational
    }));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-shipping-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-shipping-form"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "fullname",
    isRequired: true,
    label: "* Full Name",
    maxLength: 40,
    onInputChange: onFullNameInput,
    placeholder: "Your Full Name",
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.fullname.value
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "email",
    isRequired: true,
    label: "* Email",
    maxLength: 40,
    onInputChange: onEmailInput,
    placeholder: "Your Email",
    type: "email",
    value: field.email.value
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-block checkout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "address",
    isRequired: true,
    label: "* Shipping Address",
    maxLength: 120,
    onInputChange: onAddressInput,
    placeholder: "Full Shipping Address",
    type: "text",
    value: field.address.value
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-block checkout-field"
  }, errorMobile ? /*#__PURE__*/react_default.a.createElement("span", {
    className: "input-message"
  }, errorMobile) : /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "* Mobile Number"), /*#__PURE__*/react_default.a.createElement(lib_lib_default.a, {
    country: 'ph',
    inputClass: "input-form d-block ".concat(errorClassName('mobile')),
    inputExtraProps: {
      required: true
    } // eslint-disable-next-line quote-props
    ,
    masks: {
      'ph': '+.. .... ... ....'
    },
    onChange: onMobileInput,
    placeholder: "09264538861",
    value: field.mobile.data.num
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Shipping Option"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-checkbox-field"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    checked: field.isInternational,
    className: "",
    id: "shipping-option-checkbox",
    onChange: onShippingOptionChange,
    type: "checkbox"
  }), /*#__PURE__*/react_default.a.createElement("label", {
    className: "d-flex w-100",
    htmlFor: "shipping-option-checkbox"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "d-flex-grow-1 margin-0"
  }, "\xA0 International Shipping \xA0", /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-subtle"
  }, "7-14 days")), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "margin-0"
  }, "$50.00")))))));
};

/* harmony default export */ var step2_ShippingForm = (ShippingForm_ShippingForm);
// CONCATENATED MODULE: ./src/views/checkout/step2/ShippingTotal.jsx



var ShippingTotal_ShippingTotal = function ShippingTotal(_ref) {
  var field = _ref.field,
      subtotal = _ref.subtotal;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-total d-flex-end padding-right-m"
  }, /*#__PURE__*/react_default.a.createElement("table", null, /*#__PURE__*/react_default.a.createElement("tbody", null, /*#__PURE__*/react_default.a.createElement("tr", null, /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, "International Shipping: \xA0")), /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "basket-total-amount text-subtle text-right margin-0 "
  }, field.isInternational ? '$50.00' : '$0.00'))), /*#__PURE__*/react_default.a.createElement("tr", null, /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, "Subtotal: \xA0")), /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "basket-total-amount text-subtle text-right margin-0"
  }, Object(utils["c" /* displayMoney */])(subtotal)))), /*#__PURE__*/react_default.a.createElement("tr", null, /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block margin-0 padding-right-s text-right"
  }, "Total: \xA0")), /*#__PURE__*/react_default.a.createElement("td", null, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "basket-total-amount text-right"
  }, Object(utils["c" /* displayMoney */])(subtotal + (field.isInternational ? 50 : 0))))))));
};

/* harmony default export */ var step2_ShippingTotal = (ShippingTotal_ShippingTotal);
// CONCATENATED MODULE: ./src/views/checkout/step2/index.js
function step2_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { step2_typeof = function _typeof(obj) { return typeof obj; }; } else { step2_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return step2_typeof(obj); }

function step2_slicedToArray(arr, i) { return step2_arrayWithHoles(arr) || step2_iterableToArrayLimit(arr, i) || step2_unsupportedIterableToArray(arr, i) || step2_nonIterableRest(); }

function step2_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function step2_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return step2_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return step2_arrayLikeToArray(o, minLen); }

function step2_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function step2_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function step2_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-nested-ternary */












var step2_ShippingDetails = function ShippingDetails(_ref) {
  var profile = _ref.profile,
      shipping = _ref.shipping,
      subtotal = _ref.subtotal,
      history = _ref.history;
  hooks_useDocumentTitle('Check Out Step 2 | Salinaka');
  hooks_useScrollTop();

  var _useState = Object(react["useState"])({
    fullname: {
      value: profile.fullname ? profile.fullname : ''
    },
    email: {
      value: profile.email ? profile.email : ''
    },
    address: {
      value: shipping.address ? shipping.address : profile.address ? profile.address : ''
    },
    mobile: profile.mobile.value ? profile.mobile : shipping.mobile ? shipping.mobile : {
      value: '',
      data: {}
    },
    isInternational: !!shipping.isInternational ? shipping.isInternational : false,
    isDone: false
  }),
      _useState2 = step2_slicedToArray(_useState, 2),
      field = _useState2[0],
      setField = _useState2[1];

  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var noError = Object.keys(field).every(function (key) {
    if (step2_typeof(field[key]) === 'object') {
      // eslint-disable-next-line no-extra-boolean-cast
      return !!field[key].value && !!!field[key].error; // eslint-disable-next-line no-else-return
    } else {
      return true;
    }
  });

  var saveShippingDetails = function saveShippingDetails() {
    var isChanged = true; // TODO save only if changed

    if (isChanged) {
      dispatch(checkoutActions_setShippingDetails({
        fullname: field.fullname.value,
        email: field.email.value,
        address: field.address.value,
        mobile: field.mobile,
        isInternational: field.isInternational,
        isDone: true
      }));
    }
  };

  var onClickNext = function onClickNext() {
    if (noError) {
      saveShippingDetails();
      history.push(routes["h" /* CHECKOUT_STEP_3 */]);
    }
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/react_default.a.createElement(components_StepTracker, {
    current: 2
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-step-2"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "text-center"
  }, "Shipping Details"), /*#__PURE__*/react_default.a.createElement(step2_ShippingForm, {
    field: field,
    history: history,
    profile: profile,
    setField: setField,
    shipping: shipping,
    subtotal: subtotal
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(step2_ShippingTotal, {
    subtotal: subtotal,
    field: field
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(components_Pagination, {
    disabledNext: !noError,
    history: history,
    onClickNext: onClickNext,
    onClickPrevious: function onClickPrevious() {
      return history.push(routes["f" /* CHECKOUT_STEP_1 */]);
    }
  })));
};

/* harmony default export */ var step2 = (hoc_withAuth(step2_ShippingDetails));
// CONCATENATED MODULE: ./src/views/checkout/step3/CreditPayment.jsx
function CreditPayment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CreditPayment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CreditPayment_ownKeys(Object(source), true).forEach(function (key) { CreditPayment_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CreditPayment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CreditPayment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-else-return */


var CreditPayment = /*#__PURE__*/react_default.a.forwardRef(function (_ref, ref) {
  var onCreditModeChange = _ref.onCreditModeChange,
      paymentMode = _ref.paymentMode,
      setField = _ref.setField,
      field = _ref.field;
  var cardInputRef = ref.cardInputRef,
      collapseCreditHeight = ref.collapseCreditHeight;

  var onCardNameInput = function onCardNameInput(value, error) {
    setField(CreditPayment_objectSpread(CreditPayment_objectSpread({}, field), {}, {
      name: {
        value: value,
        error: error
      }
    }));
  };

  var onCardNumberInput = function onCardNumberInput(value, error) {
    setField(CreditPayment_objectSpread(CreditPayment_objectSpread({}, field), {}, {
      cardnumber: {
        value: value,
        error: error
      }
    }));
  };

  var validateCardNumber = function validateCardNumber(value) {
    if (!(value.length >= 13 && value.length <= 19)) {
      return 'Card number is invalid';
    } else {
      return false;
    }
  };

  var onExpiryInput = function onExpiryInput(value, error) {
    setField(CreditPayment_objectSpread(CreditPayment_objectSpread({}, field), {}, {
      expiry: {
        value: value,
        error: error
      }
    }));
  };

  var onCcvInput = function onCcvInput(value, error) {
    setField(CreditPayment_objectSpread(CreditPayment_objectSpread({}, field), {}, {
      ccv: {
        value: value,
        error: error
      }
    }));
  };

  var validateCCV = function validateCCV(value) {
    // do some stuffs
    if (value.trim().length < 3) {
      return 'CCV is invalid';
    } else {
      return false;
    }
  };

  return /*#__PURE__*/react_default.a.createElement("form", null, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "text-center"
  }, "Payment"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s"
  }, "Payment Option"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset-collapse ".concat(paymentMode === 'credit' ? 'is-selected-payment' : '')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-field margin-0"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-checkbox-field"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    checked: paymentMode === 'credit',
    className: "",
    id: "payment-credit-checkbox",
    name: "checkout_payment",
    onChange: onCreditModeChange,
    type: "radio"
  }), /*#__PURE__*/react_default.a.createElement("label", {
    className: "d-flex w-100",
    htmlFor: "payment-credit-checkbox"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex-grow-1 margin-left-s"
  }, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "margin-0"
  }, "Credit Card"), /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-subtle d-block margin-top-s"
  }, "Pay with Visa, Master Card and other debit or credit card")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "payment-img payment-img-visa"
  }), "\xA0", /*#__PURE__*/react_default.a.createElement("div", {
    className: "payment-img payment-img-mastercard"
  }))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-collapse-sub",
    ref: collapseCreditHeight
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "d-block padding-s text-center"
  }, "Accepted Cards"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-cards-accepted d-flex-center"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "payment-img payment-img-visa",
    title: "Visa"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "payment-img payment-img-express",
    title: "American Express"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "payment-img payment-img-mastercard",
    title: "Master Card"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "payment-img payment-img-maestro",
    title: "Maestro"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "payment-img payment-img-discover",
    title: "Discover"
  })), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-field margin-0"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "name",
    isRequired: true,
    label: "* Name on Card",
    maxLength: 40,
    onInputChange: onCardNameInput,
    placeholder: "Jane Doe",
    ref: cardInputRef,
    style: {
      textTransform: 'capitalize'
    },
    type: "text",
    value: field.name.value
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "cardnumber",
    isRequired: true,
    label: "* Card Number",
    onInputChange: onCardNumberInput,
    placeholder: "Card Number",
    type: "number",
    validate: validateCardNumber,
    value: field.cardnumber.value
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    label: "* Expiry Date",
    placeholder: "Expiry Date",
    onInputChange: onExpiryInput,
    isRequired: true,
    field: "expiry",
    type: "date",
    value: field.expiry.value
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-field"
  }, /*#__PURE__*/react_default.a.createElement(Input, {
    field: "ccv",
    isRequired: true,
    label: "* CCV Number",
    maxLength: 4,
    onInputChange: onCcvInput,
    placeholder: "CCV Number",
    type: "number",
    validate: validateCCV,
    value: field.ccv.value
  })))))));
});
/* harmony default export */ var step3_CreditPayment = (CreditPayment);
// CONCATENATED MODULE: ./src/views/checkout/step3/PayPalPayment.jsx


var PayPalPayment_PayPalPayment = function PayPalPayment(_ref) {
  var paymentMode = _ref.paymentMode,
      onPayPalModeChange = _ref.onPayPalModeChange;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-fieldset-collapse ".concat(paymentMode === 'paypal' ? 'is-selected-payment' : '')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-field margin-0"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-checkbox-field"
  }, /*#__PURE__*/react_default.a.createElement("input", {
    checked: paymentMode === 'paypal',
    className: "",
    id: "payment-paypal-checkbox",
    name: "checkout_payment",
    onChange: onPayPalModeChange,
    type: "radio"
  }), /*#__PURE__*/react_default.a.createElement("label", {
    className: "d-flex w-100",
    htmlFor: "payment-paypal-checkbox"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex-grow-1 margin-left-s"
  }, /*#__PURE__*/react_default.a.createElement("h4", {
    className: "margin-0"
  }, "PayPal"), /*#__PURE__*/react_default.a.createElement("span", {
    className: "text-subtle d-block margin-top-s"
  }, "Pay easily, fast and secure with PayPal.")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "payment-img payment-img-paypal"
  })))));
};

/* harmony default export */ var step3_PayPalPayment = (PayPalPayment_PayPalPayment);
// CONCATENATED MODULE: ./src/views/checkout/step3/index.js
function step3_slicedToArray(arr, i) { return step3_arrayWithHoles(arr) || step3_iterableToArrayLimit(arr, i) || step3_unsupportedIterableToArray(arr, i) || step3_nonIterableRest(); }

function step3_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function step3_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return step3_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return step3_arrayLikeToArray(o, minLen); }

function step3_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function step3_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function step3_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var step3_Payment = function Payment(_ref) {
  var shipping = _ref.shipping,
      payment = _ref.payment,
      subtotal = _ref.subtotal,
      dispatch = _ref.dispatch,
      history = _ref.history;
  hooks_useDocumentTitle('Check Out Final Step | Salinaka');
  hooks_useScrollTop();

  var _useState = Object(react["useState"])(payment.type || 'paypal'),
      _useState2 = step3_slicedToArray(_useState, 2),
      paymentMode = _useState2[0],
      setPaymentMode = _useState2[1];

  var collapseCreditHeight = Object(react["useRef"])(null);
  var cardInputRef = Object(react["useRef"])(null);

  var _useState3 = Object(react["useState"])({
    name: {
      value: payment.data.name ? payment.data.name : ''
    },
    cardnumber: {
      value: payment.data.cardnumber ? payment.data.cardnumber : ''
    },
    expiry: {
      value: payment.data.expiry ? payment.data.expiry : ''
    },
    ccv: {
      value: payment.data.ccv ? payment.data.ccv : ''
    }
  }),
      _useState4 = step3_slicedToArray(_useState3, 2),
      field = _useState4[0],
      setField = _useState4[1];

  var onCreditModeChange = function onCreditModeChange(e) {
    setPaymentMode('credit');
    var parent = e.target.closest('.checkout-fieldset-collapse');
    var checkBoxContainer = e.target.closest('.checkout-checkbox-field');
    cardInputRef.current.focus();
    parent.style.height = "".concat(checkBoxContainer.offsetHeight + collapseCreditHeight.current.offsetHeight, "px");
  };

  var onPayPalModeChange = function onPayPalModeChange() {
    setPaymentMode('paypal');
    collapseCreditHeight.current.parentElement.style.height = '97px';
  };

  var savePaymentDetails = function savePaymentDetails() {
    var isChanged = Object.keys(field).some(function (key) {
      return field[key].value !== payment.data[key];
    }) || paymentMode !== payment.type;

    if (isChanged) {
      dispatch(checkoutActions_setPaymentDetails({
        type: paymentMode,
        data: {
          type: paymentMode,
          name: field.name.value,
          cardnumber: field.cardnumber.value,
          expiry: field.expiry.value,
          ccv: field.ccv.value
        }
      }));
    }
  };

  var onConfirm = function onConfirm(e) {
    e.preventDefault(); // eslint-disable-next-line no-extra-boolean-cast

    var noError = Object.keys(field).every(function (key) {
      return !!field[key].value && !!!field[key].error;
    });
    if (!paymentMode) return;

    if (paymentMode === 'credit') {
      if (noError) {
        Object(utils["a" /* displayActionMessage */])('Feature not ready yet :)', 'info'); // TODO: fire only if changed

        savePaymentDetails(); // Do some action here. :)
      } else {
        Object(utils["a" /* displayActionMessage */])('All credentials for credit payment required!', 'error');
      }
    } else {
      Object(utils["a" /* displayActionMessage */])('Feature not ready yet :)', 'info');
    }
  };

  var onClickBack = function onClickBack() {
    savePaymentDetails();
    history.push(routes["g" /* CHECKOUT_STEP_2 */]);
  };

  return !shipping.isDone ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
    to: "/checkout/step1"
  }) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/react_default.a.createElement(components_StepTracker, {
    current: 3
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "checkout-step-3"
  }, /*#__PURE__*/react_default.a.createElement(step3_CreditPayment, {
    field: field,
    onCreditModeChange: onCreditModeChange,
    paymentMode: paymentMode,
    ref: {
      cardInputRef: cardInputRef,
      collapseCreditHeight: collapseCreditHeight
    },
    setField: setField
  }), /*#__PURE__*/react_default.a.createElement(step3_PayPalPayment, {
    onPayPalModeChange: onPayPalModeChange,
    paymentMode: paymentMode
  }), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-total text-right"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "basket-total-title"
  }, "Total:"), /*#__PURE__*/react_default.a.createElement("h2", {
    className: "basket-total-amount"
  }, Object(utils["c" /* displayMoney */])(subtotal + (shipping.isInternational ? 50 : 0)))), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement(components_Pagination // eslint-disable-next-line no-extra-boolean-cast
  , {
    disabledNext: !!!paymentMode,
    history: history,
    nextStepLabel: "Confirm",
    onClickNext: onConfirm,
    onClickPrevious: onClickBack
  })));
};

/* harmony default export */ var step3 = (hoc_withAuth(step3_Payment));
// CONCATENATED MODULE: ./src/views/error/PageNotFound.jsx



var PageNotFound_PageNotFound = function PageNotFound(_ref) {
  var history = _ref.history;
  hooks_useScrollTop();
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "page-not-found"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, ":( Page you are looking for doesn't exists."), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("button", {
    className: "button",
    onClick: history.goBack
  }, "Go back"));
};

/* harmony default export */ var error_PageNotFound = (PageNotFound_PageNotFound);
// CONCATENATED MODULE: ./src/components/basket/BasketToggle.jsx


var BasketToggle = function BasketToggle(props) {
  var onClickToggle = function onClickToggle(e) {
    if (document.body.classList.contains('is-basket-open')) {
      document.body.classList.remove('is-basket-open');
    } else {
      document.body.classList.add('is-basket-open');
    }
  };

  document.addEventListener('click', function (e) {
    var closest = e.target.closest('.basket');
    var toggle = e.target.closest('.basket-toggle');
    var closeToggle = e.target.closest('.basket-item-remove');

    if (!closest && document.body.classList.contains('is-basket-open') && !toggle && !closeToggle) {
      document.body.classList.remove('is-basket-open');
    }
  });
  return props.children({
    onClickToggle: onClickToggle
  });
};

/* harmony default export */ var basket_BasketToggle = (BasketToggle);
// CONCATENATED MODULE: ./src/components/basket/Basket.jsx
function Basket_slicedToArray(arr, i) { return Basket_arrayWithHoles(arr) || Basket_iterableToArrayLimit(arr, i) || Basket_unsupportedIterableToArray(arr, i) || Basket_nonIterableRest(); }

function Basket_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Basket_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Basket_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Basket_arrayLikeToArray(o, minLen); }

function Basket_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Basket_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Basket_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Basket_Basket = function Basket(props) {
  var _useState = Object(react["useState"])(false),
      _useState2 = Basket_slicedToArray(_useState, 2),
      isModalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  var basket = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return state.basket;
  });
  var history = Object(react_router["g" /* useHistory */])();

  var _useLocation = Object(react_router["h" /* useLocation */])(),
      pathname = _useLocation.pathname;

  var dispatch = Object(react_redux_es["c" /* useDispatch */])();
  var didMount = hooks_useDidMount();
  Object(react["useEffect"])(function () {
    if (didMount && firebase_firebase.auth.currentUser && basket.length !== 0) {
      firebase_firebase.saveBasketItems(basket, firebase_firebase.auth.currentUser.uid).then(function () {
        console.log('Item saved to basket');
      })["catch"](function (e) {
        console.log(e);
      });
    }
  }, [basket]);

  var calculateTotal = function calculateTotal() {
    var total = 0;

    if (basket.length !== 0) {
      var result = basket.map(function (product) {
        return product.price * product.quantity;
      }).reduce(function (a, b) {
        return a + b;
      });
      total = result.toFixed(2);
    }

    return Object(utils["c" /* displayMoney */])(total);
  };

  var onOpenModal = function onOpenModal() {
    return setModalOpen(true);
  };

  var onCloseModal = function onCloseModal() {
    return setModalOpen(false);
  };

  var onCheckOut = function onCheckOut() {
    if (basket.length !== 0 && props.isAuth) {
      document.body.classList.remove('is-basket-open');
      history.push(routes["f" /* CHECKOUT_STEP_1 */]);
    } else {
      onOpenModal();
    }
  };

  var onSignInClick = function onSignInClick() {
    onCloseModal();
    document.body.classList.remove('basket-open');
    history.push(routes["f" /* CHECKOUT_STEP_1 */]);
  };

  var onClearBasket = function onClearBasket() {
    if (basket.length !== 0) {
      dispatch(basketActions_clearBasket());
    }
  };

  return /*#__PURE__*/react_default.a.createElement(ui_Boundary, null, /*#__PURE__*/react_default.a.createElement(ui_Modal, {
    isOpen: isModalOpen,
    onRequestClose: onCloseModal
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "text-center"
  }, "You must sign in to continue checking out"), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("div", {
    className: "d-flex-center"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-border button-border-gray button-small",
    onClick: onCloseModal
  }, "Continue shopping"), "\xA0", /*#__PURE__*/react_default.a.createElement("button", {
    className: "button button-small",
    onClick: onSignInClick
  }, "Sign in to checkout"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-list"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-header"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "basket-header-title"
  }, "My Basket \xA0", /*#__PURE__*/react_default.a.createElement("span", null, "(", " ".concat(basket.length, " ").concat(basket.length > 1 ? 'items' : 'item'), ")")), /*#__PURE__*/react_default.a.createElement(basket_BasketToggle, null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/react_default.a.createElement("span", {
      className: "basket-toggle button button-border button-border-gray button-small",
      onClick: onClickToggle
    }, "Close");
  }), /*#__PURE__*/react_default.a.createElement("button", {
    className: "basket-clear button button-border button-border-gray button-small",
    disabled: basket.length === 0,
    onClick: onClearBasket
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Clear Basket"))), basket.length <= 0 && /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-empty"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "basket-empty-msg"
  }, "Your basket is empty")), basket.map(function (product, i) {
    return /*#__PURE__*/react_default.a.createElement(basket_BasketItem, {
      key: "".concat(product.id, "_").concat(i),
      product: product,
      basket: basket,
      dispatch: dispatch
    });
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-checkout"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "basket-total"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "basket-total-title"
  }, "Subtotal Amout:"), /*#__PURE__*/react_default.a.createElement("h2", {
    className: "basket-total-amount"
  }, calculateTotal())), /*#__PURE__*/react_default.a.createElement("button", {
    className: "basket-checkout-button button",
    disabled: basket.length === 0 || pathname === '/checkout',
    onClick: onCheckOut
  }, "Check Out"))));
};

/* harmony default export */ var basket_Basket = (Basket_Basket);
// CONCATENATED MODULE: ./src/components/auth/SignOut.jsx



var SignOut_SignOut = function SignOut(props) {
  var dispatch = Object(react_redux_es["c" /* useDispatch */])();

  var onSignOut = function onSignOut() {
    dispatch(authActions_signOut());
  };

  return props.children({
    onSignOut: onSignOut
  });
};

/* harmony default export */ var auth_SignOut = (SignOut_SignOut);
// CONCATENATED MODULE: ./src/views/account/components/UserAvatar.jsx
/* eslint-disable indent */







var UserAvatar_UserNav = function UserNav(_ref) {
  var profile = _ref.profile,
      isAuthenticating = _ref.isAuthenticating;
  var userNav = Object(react["useRef"])(null);

  var toggleDropdown = function toggleDropdown(e) {
    var closest = e.target.closest('div.user-nav');

    try {
      if (!closest && userNav.current.classList.contains('user-sub-open')) {
        userNav.current.classList.remove('user-sub-open');
      }
    } catch (err) {}
  };

  Object(react["useEffect"])(function () {
    document.addEventListener('click', toggleDropdown);
    return function () {
      return document.removeEventListener('click', toggleDropdown);
    };
  }, []);

  var onClickNav = function onClickNav() {
    userNav.current.classList.toggle('user-sub-open');
  };

  return isAuthenticating ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-nav"
  }, /*#__PURE__*/react_default.a.createElement("span", null, "Signing Out"), /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], null)) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-nav",
    onClick: onClickNav,
    ref: userNav
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    className: "text-overflow-ellipsis"
  }, profile.fullname && profile.fullname.split(' ')[0]), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-nav-img-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    alt: "",
    className: "user-nav-img",
    src: profile.avatar
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "icon-caret user-caret"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "user-nav-sub"
  }, profile.role !== 'ADMIN' && /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["a" /* ACCOUNT */],
    className: "user-nav-sub-link"
  }, "View Account", /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-user"
  })), /*#__PURE__*/react_default.a.createElement(auth_SignOut, null, function (_ref2) {
    var onSignOut = _ref2.onSignOut;
    return /*#__PURE__*/react_default.a.createElement("h6", {
      className: "user-nav-sub-link margin-0 d-flex",
      onClick: onSignOut
    }, "Sign Out", /*#__PURE__*/react_default.a.createElement("i", {
      className: "fa fa-sign-out-alt"
    }));
  })));
};

UserAvatar_UserNav.propType = {
  profile: prop_types_default.a.object.isRequired
};
/* harmony default export */ var UserAvatar = (Object(react_router["j" /* withRouter */])(UserAvatar_UserNav));
// CONCATENATED MODULE: ./src/components/ui/MobileNavigation.jsx











var MobileNavigation_Navigation = function Navigation(props) {
  var history = Object(react_router["g" /* useHistory */])();

  var _useLocation = Object(react_router["h" /* useLocation */])(),
      pathname = _useLocation.pathname;

  var onClickLink = function onClickLink(e) {
    if (props.isAuthenticating) e.preventDefault();
  };

  return /*#__PURE__*/react_default.a.createElement("nav", {
    className: "mobile-navigation"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "mobile-navigation-main"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "mobile-navigation-logo"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    onClick: onClickLink,
    to: routes["l" /* HOME */]
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: logo_full,
    style: {
      width: '150px',
      height: 'auto',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/react_default.a.createElement("h2", null))), /*#__PURE__*/react_default.a.createElement(basket_BasketToggle, null, function (_ref) {
    var onClickToggle = _ref.onClickToggle;
    return /*#__PURE__*/react_default.a.createElement("button", {
      className: "button-link navigation-menu-link basket-toggle",
      onClick: onClickToggle,
      disabled: props.disabledPaths.includes(pathname)
    }, /*#__PURE__*/react_default.a.createElement(ui_Badge, {
      count: props.basketLength
    }, /*#__PURE__*/react_default.a.createElement("i", {
      className: "fa fa-shopping-bag",
      style: {
        fontSize: '2rem'
      }
    })));
  }), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "mobile-navigation-menu"
  }, props.isAuth ? /*#__PURE__*/react_default.a.createElement("li", {
    className: "mobile-navigation-item"
  }, /*#__PURE__*/react_default.a.createElement(UserAvatar, {
    isAuthenticating: props.isAuthenticating,
    profile: props.profile
  })) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, pathname !== routes["p" /* SIGNIN */] && /*#__PURE__*/react_default.a.createElement("li", {
    className: "mobile-navigation-item"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    className: "navigation-menu-link",
    onClick: onClickLink,
    to: routes["p" /* SIGNIN */]
  }, "Sign In"))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "mobile-navigation-sec"
  }, /*#__PURE__*/react_default.a.createElement(ui_SearchBar, {
    isLoading: props.isLoading,
    filter: props.filter
  }), /*#__PURE__*/react_default.a.createElement(ui_FiltersToggle, {
    filter: props.filter,
    isLoading: props.isLoading,
    products: props.products,
    productsCount: props.productsLength,
    history: history
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button-link button-small"
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-filter"
  })))));
};

MobileNavigation_Navigation.propType = {
  path: prop_types_default.a.string.isRequired,
  disabledPaths: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired
};
/* harmony default export */ var MobileNavigation = (MobileNavigation_Navigation);
// CONCATENATED MODULE: ./src/components/ui/Navigation.jsx
/* eslint-disable indent */












var Navigation_Navigation = function Navigation(_ref) {
  var isAuth = _ref.isAuth;
  var navbar = Object(react["useRef"])(null);
  var history = Object(react_router["g" /* useHistory */])();

  var _useLocation = Object(react_router["h" /* useLocation */])(),
      pathname = _useLocation.pathname;

  var scrollHandler = function scrollHandler() {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };

  Object(react["useEffect"])(function () {
    window.addEventListener('scroll', scrollHandler);
    return function () {
      return window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  var store = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      filter: state.filter,
      products: state.products.items,
      basketLength: state.basket.length,
      profile: state.profile,
      isLoading: state.app.loading,
      isAuthenticating: state.app.isAuthenticating,
      productsLength: state.products.items.length
    };
  });

  var onClickLink = function onClickLink(e) {
    if (store.isAuthenticating) e.preventDefault();
  }; // disable the basket toggle to these pathnames


  var basketDisabledpathnames = [routes["f" /* CHECKOUT_STEP_1 */], routes["g" /* CHECKOUT_STEP_2 */], routes["h" /* CHECKOUT_STEP_3 */], routes["p" /* SIGNIN */], routes["q" /* SIGNUP */], routes["k" /* FORGOT_PASSWORD */]];
  return window.screen.width <= 800 ? /*#__PURE__*/react_default.a.createElement(MobileNavigation, {
    basketLength: store.basketLength,
    disabledPaths: basketDisabledpathnames,
    isAuth: isAuth,
    products: store.products,
    isLoading: store.isLoading,
    productsCount: store.productsCount,
    filter: store.filter,
    isAuthenticating: store.isAuthenticating,
    pathname: pathname,
    profile: store.profile
  }) : /*#__PURE__*/react_default.a.createElement("nav", {
    className: "navigation",
    ref: navbar
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    onClick: onClickLink,
    to: "/"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: logo_full
  }))), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "navigation-menu-main"
  }, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["l" /* HOME */]
  }, "HOME")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["o" /* SHOP */]
  }, "SHOP"))), (pathname === routes["o" /* SHOP */] || pathname === routes["n" /* SEARCH */]) && /*#__PURE__*/react_default.a.createElement(ui_FiltersToggle, {
    filter: store.filter,
    isLoading: store.isLoading,
    products: store.products,
    productsCount: store.productsLength
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "button-muted button-small"
  }, "Filters \xA0", /*#__PURE__*/react_default.a.createElement("i", {
    className: "fa fa-filter"
  }))), /*#__PURE__*/react_default.a.createElement(ui_SearchBar, {
    isLoading: store.isLoading,
    filter: store.filter
  }), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "navigation-menu"
  }, /*#__PURE__*/react_default.a.createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/react_default.a.createElement(basket_BasketToggle, null, function (_ref2) {
    var onClickToggle = _ref2.onClickToggle;
    return /*#__PURE__*/react_default.a.createElement("button", {
      className: "button-link navigation-menu-link basket-toggle",
      disabled: basketDisabledpathnames.includes(pathname),
      onClick: onClickToggle
    }, /*#__PURE__*/react_default.a.createElement(ui_Badge, {
      count: store.basketLength
    }, /*#__PURE__*/react_default.a.createElement("i", {
      className: "fa fa-shopping-bag",
      style: {
        fontSize: '2rem'
      }
    })));
  })), isAuth ? /*#__PURE__*/react_default.a.createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/react_default.a.createElement(UserAvatar, {
    isAuthenticating: store.isAuthenticating,
    profile: store.profile
  })) : /*#__PURE__*/react_default.a.createElement("li", {
    className: "navigation-action"
  }, pathname !== routes["q" /* SIGNUP */] && /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
    activeClassName: "navigation-menu-active",
    className: "button button-small",
    exact: true,
    onClick: onClickLink,
    to: routes["q" /* SIGNUP */]
  }, "Sign Up"), pathname !== routes["p" /* SIGNIN */] && /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
    activeClassName: "navigation-menu-active",
    className: "button button-small button-muted margin-left-s",
    exact: true,
    onClick: onClickLink,
    to: routes["p" /* SIGNIN */]
  }, "Sign In"))));
};

/* harmony default export */ var ui_Navigation = (Navigation_Navigation);
// CONCATENATED MODULE: ./static/nlogo-full.png
/* harmony default export */ var nlogo_full = (__webpack_require__.p + "images/nlogo-full.880a0169f0ef8b746550afd21c43e0de.png");
// CONCATENATED MODULE: ./src/components/ui/Footer.jsx





var Footer_Footer = function Footer() {
  var _useLocation = Object(react_router["h" /* useLocation */])(),
      pathname = _useLocation.pathname;

  var hiddenFooterPaths = [routes["p" /* SIGNIN */], routes["q" /* SIGNUP */], routes["k" /* FORGOT_PASSWORD */], routes["a" /* ACCOUNT */]];
  return hiddenFooterPaths.includes(pathname) ? null : /*#__PURE__*/react_default.a.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "footer-col-1"
  }, /*#__PURE__*/react_default.a.createElement("strong", null, /*#__PURE__*/react_default.a.createElement("span", null, "Developed by ", /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://www.google.com"
  }, "waleed king")))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "footer-col-2"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "footer-logo",
    src: nlogo_full
  }), /*#__PURE__*/react_default.a.createElement("h5", null, "\xA9\xA0", new Date().getFullYear(), "\xA0Copyright all rights reserverd"), /*#__PURE__*/react_default.a.createElement("h5", null)), /*#__PURE__*/react_default.a.createElement("div", {
    className: "footer-col-3"
  }, /*#__PURE__*/react_default.a.createElement("strong", null, /*#__PURE__*/react_default.a.createElement("span", null, "Under construction \xA0", /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://www.king.com"
  }, "HERE")))));
};

/* harmony default export */ var ui_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/routers/ClientRoute.js
function ClientRoute_extends() { ClientRoute_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ClientRoute_extends.apply(this, arguments); }

function ClientRoute_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ClientRoute_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ClientRoute_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-nested-ternary */








var ClientRoute_PrivateRoute = function PrivateRoute(_ref) {
  var isAuth = _ref.isAuth,
      userType = _ref.userType,
      Component = _ref.component,
      path = _ref.path,
      rest = ClientRoute_objectWithoutProperties(_ref, ["isAuth", "userType", "component", "path"]);

  return /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], ClientRoute_extends({}, rest, {
    component: function component(props) {
      return isAuth && userType === 'USER' ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ui_Navigation, {
        isAuth: isAuth
      }), /*#__PURE__*/react_default.a.createElement(basket_Basket, {
        isAuth: isAuth
      }), /*#__PURE__*/react_default.a.createElement("main", {
        className: "content"
      }, /*#__PURE__*/react_default.a.createElement(Component, props)), /*#__PURE__*/react_default.a.createElement(ui_Footer, null)) : isAuth && userType === 'ADMIN' ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: routes["d" /* ADMIN_DASHBOARD */]
      }) : /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: {
          pathname: routes["p" /* SIGNIN */],
          state: {
            from: props.location
          }
        }
      });
    }
  }));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    isAuth: !!auth.id && !!auth.role,
    userType: auth.role
  };
};

/* harmony default export */ var ClientRoute = (Object(react_redux_es["b" /* connect */])(mapStateToProps)(ClientRoute_PrivateRoute));
// CONCATENATED MODULE: ./src/routers/PublicRoute.js
function PublicRoute_extends() { PublicRoute_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PublicRoute_extends.apply(this, arguments); }

function PublicRoute_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PublicRoute_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PublicRoute_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable indent */

/* eslint-disable no-nested-ternary */








var PublicRoute_PublicRoute = function PublicRoute(_ref) {
  var userType = _ref.userType,
      isAuth = _ref.isAuth,
      Component = _ref.component,
      path = _ref.path,
      rest = PublicRoute_objectWithoutProperties(_ref, ["userType", "isAuth", "component", "path"]);

  return /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], PublicRoute_extends({}, rest, {
    component: function component(props) {
      var _ref2 = props.location.state || {
        from: {
          pathname: '/'
        }
      },
          from = _ref2.from;

      return isAuth && userType === 'ADMIN' ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: routes["d" /* ADMIN_DASHBOARD */]
      }) : isAuth && userType === 'USER' && (path === routes["p" /* SIGNIN */] || path === routes["q" /* SIGNUP */]) ? /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: from
      }) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ui_Navigation, {
        isAuth: isAuth
      }), /*#__PURE__*/react_default.a.createElement(basket_Basket, {
        isAuth: isAuth
      }), /*#__PURE__*/react_default.a.createElement("main", {
        className: "content"
      }, /*#__PURE__*/react_default.a.createElement(Component, props)), /*#__PURE__*/react_default.a.createElement(ui_Footer, null));
    }
  }));
};

var PublicRoute_mapStateToProps = function mapStateToProps(_ref3) {
  var auth = _ref3.auth;
  return {
    isAuth: !!auth.id && !!auth.role,
    userType: auth.role
  };
};

/* harmony default export */ var routers_PublicRoute = (Object(react_redux_es["b" /* connect */])(PublicRoute_mapStateToProps)(PublicRoute_PublicRoute));
// CONCATENATED MODULE: ./src/components/ui/AdminNavigation.jsx







var AdminNavigation_AdminNavigation = function AdminNavigation() {
  var _useSelector = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      isAuthenticating: state.app.isAuthenticating,
      profile: state.profile
    };
  }),
      isAuthenticating = _useSelector.isAuthenticating,
      profile = _useSelector.profile;

  return /*#__PURE__*/react_default.a.createElement("nav", {
    className: "navigation navigation-admin"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: routes["d" /* ADMIN_DASHBOARD */],
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: logo_full
  }), /*#__PURE__*/react_default.a.createElement("h3", null, "ADMIN PANEL"))), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "navigation-menu"
  }, /*#__PURE__*/react_default.a.createElement("li", {
    className: "navigation-menu-item"
  }, /*#__PURE__*/react_default.a.createElement(UserAvatar, {
    isAuthenticating: isAuthenticating,
    profile: profile
  }))));
};

/* harmony default export */ var ui_AdminNavigation = (AdminNavigation_AdminNavigation);
// CONCATENATED MODULE: ./src/components/ui/AdminSidePanel.jsx




var AdminSidePanel_SideNavigation = function SideNavigation() {
  return /*#__PURE__*/react_default.a.createElement("aside", {
    className: "sidenavigation"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "sidenavigation-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "sidenavigation-item"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
    activeClassName: "sidenavigation-menu-active",
    className: "sidenavigation-menu",
    to: routes["e" /* ADMIN_PRODUCTS */]
  }, "Products")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "sidenavigation-item"
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: "sidenavigation-menu"
  }, "Users"))));
};

/* harmony default export */ var AdminSidePanel = (AdminSidePanel_SideNavigation);
// CONCATENATED MODULE: ./src/routers/AdminRoute.js
function AdminRoute_extends() { AdminRoute_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AdminRoute_extends.apply(this, arguments); }

function AdminRoute_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AdminRoute_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AdminRoute_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var AdminRoute_AdminRoute = function AdminRoute(_ref) {
  var Component = _ref.component,
      rest = AdminRoute_objectWithoutProperties(_ref, ["component"]);

  var isAuth = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return !!state.auth.id && state.auth.role === 'ADMIN';
  });
  return /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], AdminRoute_extends({}, rest, {
    component: function component(props) {
      return isAuth ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ui_AdminNavigation, null), /*#__PURE__*/react_default.a.createElement("main", {
        className: "content-admin"
      }, /*#__PURE__*/react_default.a.createElement(AdminSidePanel, null), /*#__PURE__*/react_default.a.createElement("div", {
        className: "content-admin-wrapper"
      }, /*#__PURE__*/react_default.a.createElement(Component, props)))) : /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
        to: "/"
      });
    }
  }));
};

/* harmony default export */ var routers_AdminRoute = (AdminRoute_AdminRoute);
// CONCATENATED MODULE: ./src/views/shop/index.js
function shop_slicedToArray(arr, i) { return shop_arrayWithHoles(arr) || shop_iterableToArrayLimit(arr, i) || shop_unsupportedIterableToArray(arr, i) || shop_nonIterableRest(); }

function shop_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function shop_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return shop_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return shop_arrayLikeToArray(o, minLen); }

function shop_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function shop_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function shop_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var shop_Shop = function Shop() {
  hooks_useDocumentTitle('Shop | Noodles.pk');
  hooks_useScrollTop();

  var _useState = Object(react["useState"])(6),
      _useState2 = shop_slicedToArray(_useState, 2),
      columnCount = _useState2[0],
      setColumnCount = _useState2[1];

  var productListWrapper = Object(react["useRef"])(null);
  var store = Object(react_redux_es["d" /* useSelector */])(function (state) {
    return {
      filter: state.filter,
      basket: state.basket,
      filteredProducts: selectFilter(state.products.items, state.filter),
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
      products: state.products.items,
      lastRefKey: state.products.lastRefKey,
      productsCount: state.products.items.length,
      totalProductsCount: state.products.total
    };
  });

  var onProductsLengthChanged = function onProductsLengthChanged() {
    var width = window.screen.width - 250; // minus 250px padding

    var pLen = store.filteredProducts.length;
    setColumnCount(Math.floor(width / 160));

    if (columnCount >= pLen && pLen !== 0) {
      setColumnCount(pLen);
    }
  };

  Object(react["useEffect"])(function () {
    if (productListWrapper) {
      onProductsLengthChanged();
    }
  }, [store.filteredProducts]);
  var isFiltered = ['keyword', 'brand', 'minPrice', 'maxPrice', 'sortBy'].some(function (key) {
    return !!store.filter[key];
  });
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("section", {
    className: "product-list-wrapper"
  }, !store.requestStatus && /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-list-header"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-list-header-title"
  }, isFiltered && /*#__PURE__*/react_default.a.createElement("h5", null, store.filteredProducts.length > 0 && "Found ".concat(store.filteredProducts.length, " ").concat(store.filteredProducts.length > 1 ? 'products' : 'product')))), /*#__PURE__*/react_default.a.createElement(product_ProductAppliedFilters, {
    filter: store.filter
  }), /*#__PURE__*/react_default.a.createElement(ui_Boundary, null, /*#__PURE__*/react_default.a.createElement(product_ProductList, store, function (_ref) {
    var foundOnBasket = _ref.foundOnBasket;
    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
      className: "product-list",
      ref: productListWrapper,
      style: {
        gridTemplateColumns: "repeat(".concat(columnCount, ", 160px)")
      }
    }, store.filteredProducts.length === 0 ? new Array(12).fill({}).map(function (product, index) {
      return /*#__PURE__*/react_default.a.createElement(product_ProductItem, {
        isItemOnBasket: false,
        key: "product-skeleton ".concat(index),
        product: product
      });
    }) : store.filteredProducts.map(function (product) {
      return /*#__PURE__*/react_default.a.createElement(product_ProductItem, {
        isItemOnBasket: foundOnBasket(product.id),
        key: product.id,
        isLoading: store.isLoading,
        product: product
      });
    })));
  }))));
};

/* harmony default export */ var shop = (shop_Shop);
// CONCATENATED MODULE: ./src/images/ad.png
/* harmony default export */ var ad = (__webpack_require__.p + "images/ad.c6fa58740ee17c8a3304b9049370575f.png");
// CONCATENATED MODULE: ./src/views/featured/index.js








var featured_FeaturedProducts = function FeaturedProducts() {
  hooks_useDocumentTitle('Featured Products | Noodles.pk');
  hooks_useScrollTop();

  var _useFeaturedProducts = hooks_useFeaturedProducts(),
      featuredProducts = _useFeaturedProducts.featuredProducts,
      fetchFeaturedProducts = _useFeaturedProducts.fetchFeaturedProducts,
      isLoading = _useFeaturedProducts.isLoading,
      error = _useFeaturedProducts.error;

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "featured"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, "Featured Products")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "banner-img"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: ad,
    alt: ""
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "display"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-display-grid"
  }, error && !isLoading ? /*#__PURE__*/react_default.a.createElement(ui_MessageDisplay, {
    message: error,
    action: fetchFeaturedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, featuredProducts.length === 0 ? new Array(4).fill({}).map(function (product, index) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : featuredProducts.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: product.id,
      isLoading: isLoading,
      product: product
    });
  })))));
};

/* harmony default export */ var featured = (featured_FeaturedProducts);
// CONCATENATED MODULE: ./src/images/2.png
/* harmony default export */ var _2 = (__webpack_require__.p + "images/2.5a092e2a9f5ff0e68ab0b9e343b9c060.png");
// CONCATENATED MODULE: ./src/views/recommended/index.js








var recommended_RecommendedProducts = function RecommendedProducts() {
  hooks_useDocumentTitle('Recommended Products | Noodles.pk');
  hooks_useScrollTop();

  var _useRecommendedProduc = hooks_useRecommendedProducts(),
      recommendedProducts = _useRecommendedProduc.recommendedProducts,
      fetchRecommendedProducts = _useRecommendedProduc.fetchRecommendedProducts,
      isLoading = _useRecommendedProduc.isLoading,
      error = _useRecommendedProduc.error;

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "featured"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/react_default.a.createElement("h1", null, "Recommended Products")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "banner-img"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: _2,
    alt: ""
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "display"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "product-display-grid"
  }, error && !isLoading ? /*#__PURE__*/react_default.a.createElement(ui_MessageDisplay, {
    message: error,
    action: fetchRecommendedProducts,
    buttonLabel: "Try Again"
  }) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, recommendedProducts.length === 0 ? new Array(4).fill({}).map(function (product, index) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: "product-skeleton ".concat(index),
      product: product
    });
  }) : recommendedProducts.map(function (product) {
    return /*#__PURE__*/react_default.a.createElement(product_ProductFeatured, {
      key: product.id,
      isLoading: isLoading,
      product: product
    });
  })))));
};

/* harmony default export */ var recommended = (recommended_RecommendedProducts);
// CONCATENATED MODULE: ./src/routers/AppRouter.js



























var AppRouter_history = Object(esm_history["a" /* createBrowserHistory */])();

var AppRouter_AppRouter = function AppRouter() {
  return /*#__PURE__*/react_default.a.createElement(react_router["c" /* Router */], {
    history: AppRouter_history
  }, /*#__PURE__*/react_default.a.createElement(react_router["d" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: search,
    exact: true,
    path: routes["n" /* SEARCH */]
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: home,
    exact: true,
    path: routes["l" /* HOME */]
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: shop,
    exact: true,
    path: routes["o" /* SHOP */]
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: featured,
    exact: true,
    path: routes["j" /* FEATURED_PRODUCTS */]
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: recommended,
    exact: true,
    path: routes["m" /* RECOMMENDED_PRODUCTS */]
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: signup,
    path: routes["q" /* SIGNUP */]
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: signin,
    exact: true,
    path: routes["p" /* SIGNIN */]
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: forgot_password,
    path: routes["k" /* FORGOT_PASSWORD */]
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: view_product,
    path: routes["r" /* VIEW_PRODUCT */]
  }), /*#__PURE__*/react_default.a.createElement(ClientRoute, {
    component: user_account,
    exact: true,
    path: routes["a" /* ACCOUNT */]
  }), /*#__PURE__*/react_default.a.createElement(ClientRoute, {
    component: edit_account,
    exact: true,
    path: routes["b" /* ACCOUNT_EDIT */]
  }), /*#__PURE__*/react_default.a.createElement(ClientRoute, {
    component: step1,
    path: routes["f" /* CHECKOUT_STEP_1 */]
  }), /*#__PURE__*/react_default.a.createElement(ClientRoute, {
    component: step2,
    path: routes["g" /* CHECKOUT_STEP_2 */]
  }), /*#__PURE__*/react_default.a.createElement(ClientRoute, {
    component: step3,
    path: routes["h" /* CHECKOUT_STEP_3 */]
  }), /*#__PURE__*/react_default.a.createElement(routers_AdminRoute, {
    component: dashboard,
    exact: true,
    path: routes["d" /* ADMIN_DASHBOARD */]
  }), /*#__PURE__*/react_default.a.createElement(routers_AdminRoute, {
    component: admin_products,
    path: routes["e" /* ADMIN_PRODUCTS */]
  }), /*#__PURE__*/react_default.a.createElement(routers_AdminRoute, {
    component: add_product,
    path: routes["c" /* ADD_PRODUCT */]
  }), /*#__PURE__*/react_default.a.createElement(routers_AdminRoute, {
    component: edit_product,
    path: "".concat(routes["i" /* EDIT_PRODUCT */], "/:id")
  }), /*#__PURE__*/react_default.a.createElement(routers_PublicRoute, {
    component: error_PageNotFound
  })));
};

/* harmony default export */ var routers_AppRouter = (AppRouter_AppRouter);
// CONCATENATED MODULE: ./src/images/defaultAvatar.jpg
/* harmony default export */ var defaultAvatar = (__webpack_require__.p + "images/defaultAvatar.4e9edb2a624547982816014bf128fcd5.jpg");
// CONCATENATED MODULE: ./src/images/defaultBanner.jpg
/* harmony default export */ var defaultBanner = (__webpack_require__.p + "images/defaultBanner.accdc757f2c48d61f24c4fbcef2742fd.jpg");
// CONCATENATED MODULE: ./src/redux/sagas/authSaga.js
var _marked = /*#__PURE__*/regeneratorRuntime.mark(handleError),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(initRequest),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(authSaga);

function authSaga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function authSaga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { authSaga_ownKeys(Object(source), true).forEach(function (key) { authSaga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { authSaga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function authSaga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function handleError(e) {
  var obj;
  return regeneratorRuntime.wrap(function handleError$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          obj = {
            success: false,
            type: 'auth'
          };
          _context.next = 3;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthenticating(false));

        case 3:
          _context.t0 = e.code;
          _context.next = _context.t0 === 'auth/network-request-failed' ? 6 : _context.t0 === 'auth/email-already-in-use' ? 9 : _context.t0 === 'auth/wrong-password' ? 12 : _context.t0 === 'auth/user-not-found' ? 15 : _context.t0 === 'auth/reset-password-error' ? 18 : 21;
          break;

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Network error has occured. Please try again.'
          })));

        case 8:
          return _context.abrupt("break", 24);

        case 9:
          _context.next = 11;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Email is already in use. Please use another email'
          })));

        case 11:
          return _context.abrupt("break", 24);

        case 12:
          _context.next = 14;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Incorrect email or password'
          })));

        case 14:
          return _context.abrupt("break", 24);

        case 15:
          _context.next = 17;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Incorrect email or password'
          })));

        case 17:
          return _context.abrupt("break", 24);

        case 18:
          _context.next = 20;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: 'Failed to send password reset email. Did you type your email correctly?'
          })));

        case 20:
          return _context.abrupt("break", 24);

        case 21:
          _context.next = 23;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthStatus(authSaga_objectSpread(authSaga_objectSpread({}, obj), {}, {
            message: e.message
          })));

        case 23:
          return _context.abrupt("break", 24);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function initRequest() {
  return regeneratorRuntime.wrap(function initRequest$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthenticating());

        case 2:
          _context2.next = 4;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthStatus({}));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function authSaga(_ref) {
  var type, payload, ref, fullname, user, snapshot, _user, _user2;

  return regeneratorRuntime.wrap(function authSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          type = _ref.type, payload = _ref.payload;
          _context3.t0 = type;
          _context3.next = _context3.t0 === SIGNIN ? 4 : _context3.t0 === SIGNIN_WITH_GOOGLE ? 16 : _context3.t0 === SIGNIN_WITH_FACEBOOK ? 28 : _context3.t0 === SIGNIN_WITH_GITHUB ? 40 : _context3.t0 === SIGNUP ? 52 : _context3.t0 === SIGNOUT ? 73 : _context3.t0 === RESET_PASSWORD ? 98 : _context3.t0 === ON_AUTHSTATE_SUCCESS ? 113 : _context3.t0 === ON_AUTHSTATE_FAIL ? 141 : _context3.t0 === SET_AUTH_PERSISTENCE ? 146 : 155;
          break;

        case 4:
          _context3.prev = 4;
          _context3.next = 7;
          return initRequest();

        case 7:
          _context3.next = 9;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.signIn, payload.email, payload.password);

        case 9:
          _context3.next = 15;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t1 = _context3["catch"](4);
          _context3.next = 15;
          return handleError(_context3.t1);

        case 15:
          return _context3.abrupt("break", 156);

        case 16:
          _context3.prev = 16;
          _context3.next = 19;
          return initRequest();

        case 19:
          _context3.next = 21;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.signInWithGoogle);

        case 21:
          _context3.next = 27;
          break;

        case 23:
          _context3.prev = 23;
          _context3.t2 = _context3["catch"](16);
          _context3.next = 27;
          return handleError(_context3.t2);

        case 27:
          return _context3.abrupt("break", 156);

        case 28:
          _context3.prev = 28;
          _context3.next = 31;
          return initRequest();

        case 31:
          _context3.next = 33;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.signInWithFacebook);

        case 33:
          _context3.next = 39;
          break;

        case 35:
          _context3.prev = 35;
          _context3.t3 = _context3["catch"](28);
          _context3.next = 39;
          return handleError(_context3.t3);

        case 39:
          return _context3.abrupt("break", 156);

        case 40:
          _context3.prev = 40;
          _context3.next = 43;
          return initRequest();

        case 43:
          _context3.next = 45;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.signInWithGithub);

        case 45:
          _context3.next = 51;
          break;

        case 47:
          _context3.prev = 47;
          _context3.t4 = _context3["catch"](40);
          _context3.next = 51;
          return handleError(_context3.t4);

        case 51:
          return _context3.abrupt("break", 156);

        case 52:
          _context3.prev = 52;
          _context3.next = 55;
          return initRequest();

        case 55:
          _context3.next = 57;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.createAccount, payload.email, payload.password);

        case 57:
          ref = _context3.sent;
          fullname = payload.fullname.split(' ').map(function (name) {
            return name[0].toUpperCase().concat(name.substring(1));
          }).join(' ');
          user = {
            fullname: fullname,
            avatar: defaultAvatar,
            banner: defaultBanner,
            email: payload.email,
            address: '',
            basket: [],
            mobile: {
              data: {}
            },
            role: 'USER',
            dateJoined: ref.user.metadata.creationTime || new Date().getTime()
          };
          _context3.next = 62;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.addUser, ref.user.uid, user);

        case 62:
          _context3.next = 64;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(profileActions_setProfile(user));

        case 64:
          _context3.next = 66;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthenticating(false));

        case 66:
          _context3.next = 72;
          break;

        case 68:
          _context3.prev = 68;
          _context3.t5 = _context3["catch"](52);
          _context3.next = 72;
          return handleError(_context3.t5);

        case 72:
          return _context3.abrupt("break", 156);

        case 73:
          _context3.prev = 73;
          _context3.next = 76;
          return initRequest();

        case 76:
          _context3.next = 78;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.signOut);

        case 78:
          _context3.next = 80;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(basketActions_clearBasket());

        case 80:
          _context3.next = 82;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(profileActions_clearProfile());

        case 82:
          _context3.next = 84;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(filterActions_resetFilter());

        case 84:
          _context3.next = 86;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(checkoutActions_resetCheckout());

        case 86:
          _context3.next = 88;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(authActions_signOutSuccess());

        case 88:
          _context3.next = 90;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthenticating(false));

        case 90:
          _context3.next = 92;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(AppRouter_history.push, '/signin');

        case 92:
          _context3.next = 97;
          break;

        case 94:
          _context3.prev = 94;
          _context3.t6 = _context3["catch"](73);
          console.log(_context3.t6);

        case 97:
          return _context3.abrupt("break", 156);

        case 98:
          _context3.prev = 98;
          _context3.next = 101;
          return initRequest();

        case 101:
          _context3.next = 103;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.passwordReset, payload);

        case 103:
          _context3.next = 105;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthStatus({
            success: true,
            type: 'reset',
            message: 'Password reset email has been sent to your provided email.'
          }));

        case 105:
          _context3.next = 107;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthenticating(false));

        case 107:
          _context3.next = 112;
          break;

        case 109:
          _context3.prev = 109;
          _context3.t7 = _context3["catch"](98);
          handleError({
            code: 'auth/reset-password-error'
          });

        case 112:
          return _context3.abrupt("break", 156);

        case 113:
          _context3.next = 115;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthStatus({
            success: true,
            type: 'auth',
            message: 'Successfully signed in. Redirecting...'
          }));

        case 115:
          _context3.next = 117;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.getUser, payload.uid);

        case 117:
          snapshot = _context3.sent;

          if (!snapshot.data()) {
            _context3.next = 130;
            break;
          }

          // if user exists in database
          _user = snapshot.data();
          _context3.next = 122;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(profileActions_setProfile(_user));

        case 122:
          _context3.next = 124;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(basketActions_setBasketItems(_user.basket));

        case 124:
          _context3.next = 126;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(basketActions_setBasketItems(_user.basket));

        case 126:
          _context3.next = 128;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(authActions_signInSuccess({
            id: payload.uid,
            role: _user.role,
            provider: payload.providerData[0].providerId
          }));

        case 128:
          _context3.next = 138;
          break;

        case 130:
          if (!(payload.providerData[0].providerId !== 'password' && !snapshot.data())) {
            _context3.next = 138;
            break;
          }

          // add the user if auth provider is not password
          _user2 = {
            fullname: payload.displayName ? payload.displayName : 'User',
            avatar: payload.photoURL ? payload.photoURL : defaultAvatar,
            banner: defaultBanner,
            email: payload.email,
            address: '',
            basket: [],
            mobile: {
              data: {}
            },
            role: 'USER',
            dateJoined: payload.metadata.creationTime
          };
          _context3.next = 134;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.addUser, payload.uid, _user2);

        case 134:
          _context3.next = 136;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(profileActions_setProfile(_user2));

        case 136:
          _context3.next = 138;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(authActions_signInSuccess({
            id: payload.uid,
            role: _user2.role,
            provider: payload.providerData[0].providerId
          }));

        case 138:
          _context3.next = 140;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setAuthenticating(false));

        case 140:
          return _context3.abrupt("break", 156);

        case 141:
          _context3.next = 143;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(profileActions_clearProfile());

        case 143:
          _context3.next = 145;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(authActions_signOutSuccess());

        case 145:
          return _context3.abrupt("break", 156);

        case 146:
          _context3.prev = 146;
          _context3.next = 149;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.setAuthPersistence);

        case 149:
          _context3.next = 154;
          break;

        case 151:
          _context3.prev = 151;
          _context3.t8 = _context3["catch"](146);
          console.log(_context3.t8);

        case 154:
          return _context3.abrupt("break", 156);

        case 155:
          return _context3.abrupt("return");

        case 156:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[4, 11], [16, 23], [28, 35], [40, 47], [52, 68], [73, 94], [98, 109], [146, 151]]);
}

/* harmony default export */ var sagas_authSaga = (authSaga);
// CONCATENATED MODULE: ./src/redux/sagas/productSaga.js
function productSaga_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { productSaga_typeof = function _typeof(obj) { return typeof obj; }; } else { productSaga_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return productSaga_typeof(obj); }

function productSaga_toConsumableArray(arr) { return productSaga_arrayWithoutHoles(arr) || productSaga_iterableToArray(arr) || productSaga_unsupportedIterableToArray(arr) || productSaga_nonIterableSpread(); }

function productSaga_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function productSaga_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return productSaga_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return productSaga_arrayLikeToArray(o, minLen); }

function productSaga_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function productSaga_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return productSaga_arrayLikeToArray(arr); }

function productSaga_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function productSaga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function productSaga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { productSaga_ownKeys(Object(source), true).forEach(function (key) { productSaga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { productSaga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function productSaga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(productSaga_initRequest),
    productSaga_marked2 = /*#__PURE__*/regeneratorRuntime.mark(productSaga_handleError),
    productSaga_marked3 = /*#__PURE__*/regeneratorRuntime.mark(handleAction),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(productSaga);

/* eslint-disable indent */









function productSaga_initRequest() {
  return regeneratorRuntime.wrap(function initRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(true));

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setRequestStatus(null));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, productSaga_marked);
}

function productSaga_handleError(e) {
  return regeneratorRuntime.wrap(function handleError$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 2:
          _context2.next = 4;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setRequestStatus(e));

        case 4:
          console.log('ERROR: ', e);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, productSaga_marked2);
}

function handleAction(location, message, status) {
  return regeneratorRuntime.wrap(function handleAction$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!location) {
            _context3.next = 3;
            break;
          }

          _context3.next = 3;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(AppRouter_history.push, location);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(utils["a" /* displayActionMessage */], message, status);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, productSaga_marked3);
}

function productSaga(_ref) {
  var type, payload, state, result, imageCollection, key, downloadURL, image, images, imageKeys, imageUrls, product, _payload$updates, _image, _imageCollection, newUpdates, url, existingUploads, newUploads, _imageKeys, _imageUrls, _images, _state, _result;

  return regeneratorRuntime.wrap(function productSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          type = _ref.type, payload = _ref.payload;
          _context4.t0 = type;
          _context4.next = _context4.t0 === GET_PRODUCTS ? 4 : _context4.t0 === ADD_PRODUCT ? 31 : _context4.t0 === EDIT_PRODUCT ? 69 : _context4.t0 === REMOVE_PRODUCT ? 119 : _context4.t0 === SEARCH_PRODUCT ? 139 : 170;
          break;

        case 4:
          _context4.prev = 4;
          _context4.next = 7;
          return productSaga_initRequest();

        case 7:
          _context4.next = 9;
          return Object(redux_saga_effects_npm_proxy_esm["d" /* select */])();

        case 9:
          state = _context4.sent;
          _context4.next = 12;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.getProducts, payload);

        case 12:
          result = _context4.sent;

          if (!(result.products.length === 0)) {
            _context4.next = 17;
            break;
          }

          productSaga_handleError('No items found.');
          _context4.next = 21;
          break;

        case 17:
          _context4.next = 19;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(productActions_getProductsSuccess({
            products: result.products,
            lastKey: result.lastKey ? result.lastKey : state.products.lastRefKey,
            total: result.total ? result.total : state.products.total
          }));

        case 19:
          _context4.next = 21;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setRequestStatus(''));

        case 21:
          _context4.next = 23;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 23:
          _context4.next = 30;
          break;

        case 25:
          _context4.prev = 25;
          _context4.t1 = _context4["catch"](4);
          console.log(_context4.t1);
          _context4.next = 30;
          return productSaga_handleError(_context4.t1);

        case 30:
          return _context4.abrupt("break", 171);

        case 31:
          _context4.prev = 31;
          _context4.next = 34;
          return productSaga_initRequest();

        case 34:
          imageCollection = payload.imageCollection;
          _context4.next = 37;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.generateKey);

        case 37:
          key = _context4.sent;
          _context4.next = 40;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.storeImage, key, 'products', payload.image);

        case 40:
          downloadURL = _context4.sent;
          image = {
            id: key,
            url: downloadURL
          };
          images = [];

          if (!(imageCollection.length !== 0)) {
            _context4.next = 51;
            break;
          }

          _context4.next = 46;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* all */])(imageCollection.map(function () {
            return firebase_firebase.generateKey;
          }));

        case 46:
          imageKeys = _context4.sent;
          _context4.next = 49;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* all */])(imageCollection.map(function (img, i) {
            return firebase_firebase.storeImage(imageKeys[i](), 'products', img.file);
          }));

        case 49:
          imageUrls = _context4.sent;
          images = imageUrls.map(function (url, i) {
            return {
              id: imageKeys[i](),
              url: url
            };
          });

        case 51:
          product = productSaga_objectSpread(productSaga_objectSpread({}, payload), {}, {
            image: downloadURL,
            imageCollection: [image].concat(productSaga_toConsumableArray(images))
          });
          _context4.next = 54;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.addProduct, key, product);

        case 54:
          _context4.next = 56;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(productActions_addProductSuccess(productSaga_objectSpread({
            id: key
          }, product)));

        case 56:
          _context4.next = 58;
          return handleAction(routes["e" /* ADMIN_PRODUCTS */], 'Item succesfully added', 'success');

        case 58:
          _context4.next = 60;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 60:
          _context4.next = 68;
          break;

        case 62:
          _context4.prev = 62;
          _context4.t2 = _context4["catch"](31);
          _context4.next = 66;
          return productSaga_handleError(_context4.t2);

        case 66:
          _context4.next = 68;
          return handleAction(undefined, "Item failed to add: ".concat(_context4.t2.message_), 'error');

        case 68:
          return _context4.abrupt("break", 171);

        case 69:
          _context4.prev = 69;
          _context4.next = 72;
          return productSaga_initRequest();

        case 72:
          _payload$updates = payload.updates, _image = _payload$updates.image, _imageCollection = _payload$updates.imageCollection;
          newUpdates = productSaga_objectSpread({}, payload.updates);

          if (!(_image.constructor === File && productSaga_typeof(_image) === 'object')) {
            _context4.next = 87;
            break;
          }

          _context4.prev = 75;
          _context4.next = 78;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.deleteImage, payload.id);

        case 78:
          _context4.next = 83;
          break;

        case 80:
          _context4.prev = 80;
          _context4.t3 = _context4["catch"](75);
          console.error('Failed to delete image ', _context4.t3);

        case 83:
          _context4.next = 85;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.storeImage, payload.id, 'products', _image);

        case 85:
          url = _context4.sent;
          newUpdates = productSaga_objectSpread(productSaga_objectSpread({}, newUpdates), {}, {
            image: url
          });

        case 87:
          if (!(_imageCollection.length > 1)) {
            _context4.next = 101;
            break;
          }

          existingUploads = [];
          newUploads = [];

          _imageCollection.forEach(function (img) {
            if (img.file) {
              newUploads.push(img);
            } else {
              existingUploads.push(img);
            }
          });

          _context4.next = 93;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* all */])(newUploads.map(function () {
            return firebase_firebase.generateKey;
          }));

        case 93:
          _imageKeys = _context4.sent;
          _context4.next = 96;
          return Object(redux_saga_effects_npm_proxy_esm["a" /* all */])(newUploads.map(function (img, i) {
            return firebase_firebase.storeImage(_imageKeys[i](), 'products', img.file);
          }));

        case 96:
          _imageUrls = _context4.sent;
          _images = _imageUrls.map(function (url, i) {
            return {
              id: _imageKeys[i](),
              url: url
            };
          });
          newUpdates = productSaga_objectSpread(productSaga_objectSpread({}, newUpdates), {}, {
            imageCollection: [].concat(existingUploads, productSaga_toConsumableArray(_images))
          });
          _context4.next = 102;
          break;

        case 101:
          newUpdates = productSaga_objectSpread(productSaga_objectSpread({}, newUpdates), {}, {
            imageCollection: [{
              id: new Date().getTime(),
              url: newUpdates.image
            }]
          }); // add image thumbnail to image collection from newUpdates to make sure you're adding the url not the file object.

        case 102:
          _context4.next = 104;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.editProduct, payload.id, newUpdates);

        case 104:
          _context4.next = 106;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(productActions_editProductSuccess({
            id: payload.id,
            updates: newUpdates
          }));

        case 106:
          _context4.next = 108;
          return handleAction(routes["e" /* ADMIN_PRODUCTS */], 'Item succesfully edited', 'success');

        case 108:
          _context4.next = 110;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 110:
          _context4.next = 118;
          break;

        case 112:
          _context4.prev = 112;
          _context4.t4 = _context4["catch"](69);
          _context4.next = 116;
          return productSaga_handleError(_context4.t4);

        case 116:
          _context4.next = 118;
          return handleAction(undefined, "Item failed to edit: ".concat(_context4.t4.message), 'error');

        case 118:
          return _context4.abrupt("break", 171);

        case 119:
          _context4.prev = 119;
          _context4.next = 122;
          return productSaga_initRequest();

        case 122:
          _context4.next = 124;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.removeProduct, payload);

        case 124:
          _context4.next = 126;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(productActions_removeProductSuccess(payload));

        case 126:
          _context4.next = 128;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 128:
          _context4.next = 130;
          return handleAction(routes["e" /* ADMIN_PRODUCTS */], 'Item succesfully removed', 'success');

        case 130:
          _context4.next = 138;
          break;

        case 132:
          _context4.prev = 132;
          _context4.t5 = _context4["catch"](119);
          _context4.next = 136;
          return productSaga_handleError(_context4.t5);

        case 136:
          _context4.next = 138;
          return handleAction(undefined, "Item failed to remove: ".concat(_context4.t5.message), 'error');

        case 138:
          return _context4.abrupt("break", 171);

        case 139:
          _context4.prev = 139;
          _context4.next = 142;
          return productSaga_initRequest();

        case 142:
          _context4.next = 144;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(productActions_clearSearchState());

        case 144:
          _context4.next = 146;
          return Object(redux_saga_effects_npm_proxy_esm["d" /* select */])();

        case 146:
          _state = _context4.sent;
          _context4.next = 149;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.getProducts, payload.lastRefKey, payload.searchKey);

        case 149:
          _result = _context4.sent;

          if (!(_result.products.length === 0)) {
            _context4.next = 157;
            break;
          }

          _context4.next = 153;
          return productSaga_handleError('No product found.');

        case 153:
          _context4.next = 155;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(productActions_clearSearchState());

        case 155:
          _context4.next = 161;
          break;

        case 157:
          _context4.next = 159;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(productActions_searchProductSuccess({
            products: _result.products,
            lastKey: _result.lastKey ? _result.lastKey : _state.products.searchedProducts.lastRefKey,
            total: _result.total ? _result.total : _state.products.searchedProducts.total
          }));

        case 159:
          _context4.next = 161;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setRequestStatus(''));

        case 161:
          _context4.next = 163;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 163:
          _context4.next = 169;
          break;

        case 165:
          _context4.prev = 165;
          _context4.t6 = _context4["catch"](139);
          _context4.next = 169;
          return productSaga_handleError(_context4.t6);

        case 169:
          return _context4.abrupt("break", 171);

        case 170:
          throw new Error("Unexpected action type ".concat(type));

        case 171:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[4, 25], [31, 62], [69, 112], [75, 80], [119, 132], [139, 165]]);
}

/* harmony default export */ var sagas_productSaga = (productSaga);
// CONCATENATED MODULE: ./src/redux/sagas/profileSaga.js
var profileSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(profileSaga);

function profileSaga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function profileSaga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profileSaga_ownKeys(Object(source), true).forEach(function (key) { profileSaga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profileSaga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profileSaga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function profileSaga(_ref) {
  var type, payload, state, _payload$credentials, email, password, _payload$files, avatarFile, bannerFile, bannerURL, avatarURL, updates;

  return regeneratorRuntime.wrap(function profileSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _ref.type, payload = _ref.payload;
          _context.t0 = type;
          _context.next = _context.t0 === UPDATE_EMAIL ? 4 : _context.t0 === UPDATE_PROFILE ? 21 : 80;
          break;

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 7:
          _context.next = 9;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.updateEmail, payload.password, payload.newEmail);

        case 9:
          _context.next = 11;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 11:
          _context.next = 13;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(AppRouter_history.push, '/profile');

        case 13:
          _context.next = 15;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(utils["a" /* displayActionMessage */], 'Email Updated Successfully!', 'success');

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t1 = _context["catch"](4);
          console.log(_context.t1.message);

        case 20:
          return _context.abrupt("break", 81);

        case 21:
          _context.prev = 21;
          _context.next = 24;
          return Object(redux_saga_effects_npm_proxy_esm["d" /* select */])();

        case 24:
          state = _context.sent;
          _payload$credentials = payload.credentials, email = _payload$credentials.email, password = _payload$credentials.password;
          _payload$files = payload.files, avatarFile = _payload$files.avatarFile, bannerFile = _payload$files.bannerFile;
          _context.next = 29;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(true));

        case 29:
          if (!(email && password && email !== state.profile.email)) {
            _context.next = 32;
            break;
          }

          _context.next = 32;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.updateEmail, password, email);

        case 32:
          if (!(avatarFile || bannerFile)) {
            _context.next = 56;
            break;
          }

          if (!bannerFile) {
            _context.next = 39;
            break;
          }

          _context.next = 36;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.storeImage, state.auth.id, 'banner', bannerFile);

        case 36:
          _context.t2 = _context.sent;
          _context.next = 40;
          break;

        case 39:
          _context.t2 = payload.updates.banner;

        case 40:
          bannerURL = _context.t2;

          if (!avatarFile) {
            _context.next = 47;
            break;
          }

          _context.next = 44;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.storeImage, state.auth.id, 'avatar', avatarFile);

        case 44:
          _context.t3 = _context.sent;
          _context.next = 48;
          break;

        case 47:
          _context.t3 = payload.updates.avatar;

        case 48:
          avatarURL = _context.t3;
          updates = profileSaga_objectSpread(profileSaga_objectSpread({}, payload.updates), {}, {
            avatar: avatarURL,
            banner: bannerURL
          });
          _context.next = 52;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.updateProfile, state.auth.id, updates);

        case 52:
          _context.next = 54;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(profileActions_updateProfileSuccess(updates));

        case 54:
          _context.next = 60;
          break;

        case 56:
          _context.next = 58;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(firebase_firebase.updateProfile, state.auth.id, payload.updates);

        case 58:
          _context.next = 60;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(profileActions_updateProfileSuccess(payload.updates));

        case 60:
          _context.next = 62;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 62:
          _context.next = 64;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(AppRouter_history.push, routes["a" /* ACCOUNT */]);

        case 64:
          _context.next = 66;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(utils["a" /* displayActionMessage */], 'Profile Updated Successfully!', 'success');

        case 66:
          _context.next = 80;
          break;

        case 68:
          _context.prev = 68;
          _context.t4 = _context["catch"](21);
          console.log(_context.t4);
          _context.next = 73;
          return Object(redux_saga_effects_npm_proxy_esm["c" /* put */])(miscActions_setLoading(false));

        case 73:
          if (!(_context.t4.code === 'auth/wrong-password')) {
            _context.next = 78;
            break;
          }

          _context.next = 76;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(utils["a" /* displayActionMessage */], 'Wrong password, profile update failed :(', 'error');

        case 76:
          _context.next = 80;
          break;

        case 78:
          _context.next = 80;
          return Object(redux_saga_effects_npm_proxy_esm["b" /* call */])(utils["a" /* displayActionMessage */], ":( Failed to update profile. ".concat(_context.t4.message ? _context.t4.message : ''), 'error');

        case 80:
          return _context.abrupt("return");

        case 81:
        case "end":
          return _context.stop();
      }
    }
  }, profileSaga_marked, null, [[4, 17], [21, 68]]);
}

/* harmony default export */ var sagas_profileSaga = (profileSaga);
// CONCATENATED MODULE: ./src/redux/sagas/rootSaga.js
var rootSaga_marked = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);







function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects_npm_proxy_esm["e" /* takeLatest */])([SIGNIN, SIGNUP, SIGNOUT, SIGNIN_WITH_GOOGLE, SIGNIN_WITH_FACEBOOK, SIGNIN_WITH_GITHUB, ON_AUTHSTATE_CHANGED, ON_AUTHSTATE_SUCCESS, ON_AUTHSTATE_FAIL, SET_AUTH_PERSISTENCE, RESET_PASSWORD], sagas_authSaga);

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects_npm_proxy_esm["e" /* takeLatest */])([ADD_PRODUCT, SEARCH_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS], sagas_productSaga);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects_npm_proxy_esm["e" /* takeLatest */])([UPDATE_EMAIL, UPDATE_PROFILE], sagas_profileSaga);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, rootSaga_marked);
}

/* harmony default export */ var sagas_rootSaga = (rootSaga);
// CONCATENATED MODULE: ./src/redux/store/store.js






var sagaMiddleware = Object(redux_saga_core_npm_proxy_esm["a" /* default */])();
var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux["d" /* compose */];
var authPersistConfig = {
  key: 'root',
  storage: storage_default.a,
  whitelist: ['auth', 'profile', 'basket', 'checkout']
};
/* harmony default export */ var store_store = (function () {
  var store = Object(redux["e" /* createStore */])(Object(es["a" /* persistCombineReducers */])(authPersistConfig, reducers), composeEnhancer(Object(redux["a" /* applyMiddleware */])(sagaMiddleware)));
  var persistor = Object(es["b" /* persistStore */])(store);
  sagaMiddleware.run(sagas_rootSaga);
  return {
    store: store,
    persistor: persistor
  };
});
// EXTERNAL MODULE: ./node_modules/redux-persist/es/integration/react.js
var integration_react = __webpack_require__(202);

// CONCATENATED MODULE: ./src/App.js






var App_App = function App(_ref) {
  var store = _ref.store,
      persistor = _ref.persistor;
  return /*#__PURE__*/react_default.a.createElement(react["StrictMode"], null, /*#__PURE__*/react_default.a.createElement(react_redux_es["a" /* Provider */], {
    store: store
  }, /*#__PURE__*/react_default.a.createElement(integration_react["a" /* PersistGate */], {
    loading: /*#__PURE__*/react_default.a.createElement(ui_Preloader, null),
    persistor: persistor
  }, /*#__PURE__*/react_default.a.createElement(routers_AppRouter, null))));
};

/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: ./src/index.js











webfontloader_default.a.load({
  google: {
    families: ['Tajawal']
  }
});

var _configureStore = store_store(),
    src_store = _configureStore.store,
    src_persistor = _configureStore.persistor;

var root = document.getElementById('app'); // Render the preloader on initial load

Object(react_dom["render"])( /*#__PURE__*/react_default.a.createElement(ui_Preloader, null), root);
firebase_firebase.auth.onAuthStateChanged(function (user) {
  if (user) {
    src_store.dispatch(authActions_onAuthStateSuccess(user));
  } else {
    src_store.dispatch(authActions_onAuthStateFail('Failed to authenticate'));
  } // then render the app after checking the auth state


  Object(react_dom["render"])( /*#__PURE__*/react_default.a.createElement(src_App, {
    store: src_store,
    persistor: src_persistor
  }), root);
});

if ( true && 'serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('SW registered: ', registration);
    })["catch"](function (registrationError) {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FEATURED_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RECOMMENDED_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACCOUNT_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADMIN_DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADMIN_PRODUCTS; });
/* unused harmony export ADMIN_USERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return EDIT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SIGNIN; });
/* unused harmony export SIGNOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FORGOT_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHECKOUT_STEP_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHECKOUT_STEP_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHECKOUT_STEP_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return VIEW_PRODUCT; });
var HOME = '/';
var SHOP = '/shop';
var FEATURED_PRODUCTS = '/featured';
var RECOMMENDED_PRODUCTS = '/recommended';
var ACCOUNT = '/account';
var ACCOUNT_EDIT = '/account/edit';
var ADMIN_DASHBOARD = '/admin/dashboard';
var ADMIN_PRODUCTS = '/admin/products';
var ADMIN_USERS = '/admin/users';
var ADD_PRODUCT = '/admin/add';
var EDIT_PRODUCT = '/admin/edit';
var SEARCH = '/search/:searchKey';
var SIGNIN = '/signin';
var SIGNOUT = '/signout';
var SIGNUP = '/signup';
var FORGOT_PASSWORD = '/forgot_password';
var CHECKOUT_STEP_1 = '/checkout/step1';
var CHECKOUT_STEP_2 = '/checkout/step2';
var CHECKOUT_STEP_3 = '/checkout/step3';
var VIEW_PRODUCT = '/product/:id';

/***/ })

/******/ });
//# sourceMappingURL=main.e1810f45265e497e31c0.js.map