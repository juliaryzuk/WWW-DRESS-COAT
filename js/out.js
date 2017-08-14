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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0; }\n\nheader .mainMenu {\n  box-shadow: 0 5px 3px 3px grey;\n  background-color: #f9e0db; }\n  header .mainMenu .menu {\n    height: 55px;\n    background-color: #f9e0db;\n    color: backgroundHeader;\n    font-weight: bold;\n    font-size: 20px; }\n    header .mainMenu .menu ul {\n      list-style: none;\n      margin: 0;\n      padding-left: 0;\n      margin-top: -5px;\n      background: #f9e0db;\n      height: 10%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between; }\n      header .mainMenu .menu ul li {\n        position: relative;\n        height: 45px; }\n        header .mainMenu .menu ul li > ul {\n          position: absolute;\n          top: 45px;\n          display: none; }\n          header .mainMenu .menu ul li > ul li {\n            margin-top: 8px; }\n        header .mainMenu .menu ul li:hover > ul {\n          display: flex;\n          flex-direction: column;\n          margin-top: 5px; }\n        header .mainMenu .menu ul li a {\n          text-decoration: none;\n          background: #f9e0db;\n          color: #2f3237;\n          padding: 5px 70px;\n          line-height: 48px;\n          display: block;\n          border-right: 1px solid #eab6b1;\n          -moz-transition: all 0.4s 0.02s ease;\n          -o-transition: all 0.4s 0.02s ease;\n          -webkit-transition: all 0.4s 0.02s ease; }\n          header .mainMenu .menu ul li a:hover {\n            background: #eab6b1; }\n\nfooter {\n  background-color: #2f3237;\n  height: 30%; }\n\n.icon-search-container {\n  display: inline-block;\n  border: 2px solid #eab6b1;\n  border-radius: 50px;\n  height: 40px;\n  width: 40px;\n  position: relative;\n  transition: width 0.2s ease-out;\n  backface-visibility: hidden; }\n  .icon-search-container.active {\n    width: 285px; }\n    .icon-search-container.active .fa-times-circle {\n      opacity: 1; }\n    .icon-search-container.active .search-input {\n      width: 200px; }\n  .icon-search-container .fa-search {\n    color: #2980b9;\n    font-size: 30px;\n    position: relative;\n    cursor: pointer; }\n    .icon-search-container .fa-search img {\n      position: absolute;\n      width: 40px; }\n  .icon-search-container .fa-times-circle {\n    opacity: 0;\n    color: #d9d9d9;\n    font-size: 20px;\n    position: absolute;\n    top: 12px;\n    right: 8px;\n    transition: opacity 0.2s ease-out;\n    cursor: pointer; }\n  .icon-search-container .search-input {\n    position: absolute;\n    cursor: default;\n    left: 45px;\n    top: 6px;\n    width: 0;\n    padding: 5px;\n    border: none;\n    outline: none;\n    font-size: 18px;\n    line-height: 20px;\n    background-color: rgba(255, 255, 255, 0);\n    transition: width 0.2s ease-out; }\n\n.row {\n  margin-left: -15px;\n  position: relative; }\n  .row:before, .row:after {\n    content: '';\n    display: block;\n    clear: both; }\n  .row [class*='col-'] {\n    min-height: 1px;\n    float: left;\n    padding: 5px;\n    word-wrap: break-word; }\n  .row .col-1 {\n    width: 8.33333%; }\n  .row .col-2 {\n    width: 16.66667%; }\n  .row .col-3 {\n    width: 25%; }\n  .row .col-4 {\n    width: 33.33333%; }\n  .row .col-5 {\n    width: 41.66667%; }\n  .row .col-6 {\n    width: 50%; }\n  .row .col-7 {\n    width: 58.33333%; }\n  .row .col-8 {\n    width: 66.66667%; }\n  .row .col-9 {\n    width: 75%; }\n  .row .col-10 {\n    width: 83.33333%; }\n  .row .col-11 {\n    width: 91.66667%; }\n  .row .col-12 {\n    width: 100%; }\n\n.slide-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 1100px;\n  height: 400px;\n  background-color: #EEE;\n  display: block;\n  position: relative;\n  margin-top: 20px; }\n\n.slide {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n.textSider {\n  color: white;\n  font-weight: bold;\n  font-size: 80px;\n  text-shadow: 2px 2px grey; }\n\n.one {\n  display: block;\n  background-color: #1ABC9C;\n  padding-top: 130px;\n  padding-left: 320px; }\n\n.two {\n  background-color: yellowgreen;\n  padding-top: 130px;\n  padding-left: 460px; }\n\n.three {\n  background-color: tomato;\n  padding-top: 130px;\n  padding-left: 460px; }\n\n.four {\n  background-color: blueviolet;\n  padding-top: 130px;\n  padding-left: 450px; }\n\n.five {\n  background-color: #D6D639;\n  padding-top: 130px;\n  padding-left: 50px;\n  /*BALLOON 1 4*/\n  /* BAllOON 2 5*/\n  /* BAllOON 0*/\n  /* BAllOON 3*/ }\n  .five .container {\n    padding: 10px;\n    margin: 0 auto;\n    position: relative; }\n  .five .balloon {\n    width: 738px;\n    margin: 0 auto;\n    padding-top: 30px;\n    position: relative; }\n  .five .balloon > div {\n    width: 104px;\n    height: 140px;\n    background: rgba(182, 15, 97, 0.9);\n    border-radius: 0;\n    border-radius: 80% 80% 80% 80%;\n    margin: 0 auto;\n    position: absolute;\n    padding: 10px;\n    box-shadow: inset 17px 7px 10px rgba(182, 15, 97, 0.9);\n    -webkit-transform-origin: bottom center; }\n  .five .balloon > div:nth-child(1) {\n    background: rgba(182, 15, 97, 0.9);\n    left: 0;\n    box-shadow: inset 10px 10px 10px rgba(135, 11, 72, 0.9);\n    -webkit-animation: balloon1 6s ease-in-out infinite;\n    -moz-animation: balloon1 6s ease-in-out infinite;\n    -o-animation: balloon1 6s ease-in-out infinite;\n    animation: balloon1 6s ease-in-out infinite; }\n  .five .balloon > div:nth-child(1):before {\n    color: rgba(182, 15, 97, 0.9); }\n  .five .balloon > div:nth-child(2) {\n    background: rgba(242, 112, 45, 0.9);\n    left: 120px;\n    box-shadow: inset 10px 10px 10px rgba(222, 85, 14, 0.9);\n    -webkit-animation: balloon2 6s ease-in-out infinite;\n    -moz-animation: balloon2 6s ease-in-out infinite;\n    -o-animation: balloon2 6s ease-in-out infinite;\n    animation: balloon2 6s ease-in-out infinite; }\n  .five .balloon > div:nth-child(2):before {\n    color: rgba(242, 112, 45, 0.9); }\n  .five .balloon > div:nth-child(3) {\n    background: rgba(45, 181, 167, 0.9);\n    left: 240px;\n    box-shadow: inset 10px 10px 10px rgba(35, 140, 129, 0.9);\n    -webkit-animation: balloon4 6s ease-in-out infinite;\n    -moz-animation: balloon4 6s ease-in-out infinite;\n    -o-animation: balloon4 6s ease-in-out infinite;\n    animation: balloon4 6s ease-in-out infinite; }\n  .five .balloon > div:nth-child(3):before {\n    color: rgba(45, 181, 167, 0.9); }\n  .five .balloon > div:nth-child(4) {\n    background: rgba(190, 61, 244, 0.9);\n    left: 360px;\n    box-shadow: inset 10px 10px 10px rgba(173, 14, 240, 0.9);\n    -webkit-animation: balloon1 5s ease-in-out infinite;\n    -moz-animation: balloon1 5s ease-in-out infinite;\n    -o-animation: balloon1 5s ease-in-out infinite;\n    animation: balloon1 5s ease-in-out infinite; }\n  .five .balloon > div:nth-child(4):before {\n    color: rgba(190, 61, 244, 0.9); }\n  .five .balloon > div:nth-child(5) {\n    background: rgba(180, 224, 67, 0.9);\n    left: 480px;\n    box-shadow: inset 10px 10px 10px rgba(158, 206, 34, 0.9);\n    -webkit-animation: balloon3 5s ease-in-out infinite;\n    -moz-animation: balloon3 5s ease-in-out infinite;\n    -o-animation: balloon3 5s ease-in-out infinite;\n    animation: balloon3 5s ease-in-out infinite; }\n  .five .balloon > div:nth-child(5):before {\n    color: rgba(180, 224, 67, 0.9); }\n  .five .balloon > div:nth-child(6) {\n    background: rgba(242, 194, 58, 0.9);\n    left: 600px;\n    box-shadow: inset 10px 10px 10px rgba(234, 177, 15, 0.9);\n    -webkit-animation: balloon2 3s ease-in-out infinite;\n    -moz-animation: balloon2 3s ease-in-out infinite;\n    -o-animation: balloon2 3s ease-in-out infinite;\n    animation: balloon2 3s ease-in-out infinite; }\n  .five .balloon > div:nth-child(6):before {\n    color: rgba(242, 194, 58, 0.9); }\n  .five .balloon > div:before {\n    color: rgba(182, 15, 97, 0.9);\n    position: absolute;\n    bottom: -11px;\n    left: 52px;\n    content: \"\\25B2\";\n    font-size: 1em; }\n  .five span {\n    font-size: 4.8em;\n    color: white;\n    position: relative;\n    top: 30px;\n    left: 50%;\n    margin-left: -27px; }\n\n@-webkit-keyframes balloon1 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(-6deg); }\n  50% {\n    -webkit-transform: translateY(-20px) rotate(8deg); } }\n\n@-moz-keyframes balloon1 {\n  0%, 100% {\n    -moz-transform: translateY(0) rotate(-6deg); }\n  50% {\n    -moz-transform: translateY(-20px) rotate(8deg); } }\n\n@-o-keyframes balloon1 {\n  0%, 100% {\n    -o-transform: translateY(0) rotate(-6deg); }\n  50% {\n    -o-transform: translateY(-20px) rotate(8deg); } }\n\n@keyframes balloon1 {\n  0%, 100% {\n    transform: translateY(0) rotate(-6deg); }\n  50% {\n    transform: translateY(-20px) rotate(8deg); } }\n\n@-webkit-keyframes balloon2 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(6eg); }\n  50% {\n    -webkit-transform: translateY(-30px) rotate(-8deg); } }\n\n@-moz-keyframes balloon2 {\n  0%, 100% {\n    -moz-transform: translateY(0) rotate(6deg); }\n  50% {\n    -moz-transform: translateY(-30px) rotate(-8deg); } }\n\n@-o-keyframes balloon2 {\n  0%, 100% {\n    -o-transform: translateY(0) rotate(6deg); }\n  50% {\n    -o-transform: translateY(-30px) rotate(-8deg); } }\n\n@keyframes balloon2 {\n  0%, 100% {\n    transform: translateY(0) rotate(6deg); }\n  50% {\n    transform: translateY(-30px) rotate(-8deg); } }\n\n@-webkit-keyframes balloon3 {\n  0%, 100% {\n    -webkit-transform: translate(0, -10px) rotate(6eg); }\n  50% {\n    -webkit-transform: translate(-20px, 30px) rotate(-8deg); } }\n\n@-moz-keyframes balloon3 {\n  0%, 100% {\n    -moz-transform: translate(0, -10px) rotate(6eg); }\n  50% {\n    -moz-transform: translate(-20px, 30px) rotate(-8deg); } }\n\n@-o-keyframes balloon3 {\n  0%, 100% {\n    -o-transform: translate(0, -10px) rotate(6eg); }\n  50% {\n    -o-transform: translate(-20px, 30px) rotate(-8deg); } }\n\n@keyframes balloon3 {\n  0%, 100% {\n    transform: translate(0, -10px) rotate(6eg); }\n  50% {\n    transform: translate(-20px, 30px) rotate(-8deg); } }\n\n@-webkit-keyframes balloon4 {\n  0%, 100% {\n    -webkit-transform: translate(10px, -10px) rotate(-8eg); }\n  50% {\n    -webkit-transform: translate(-15px, 20px) rotate(10deg); } }\n\n@-moz-keyframes balloon4 {\n  0%, 100% {\n    -moz-transform: translate(10px, -10px) rotate(-8eg); }\n  50% {\n    -moz-transform: translate(-15px, 10px) rotate(10deg); } }\n\n@-o-keyframes balloon4 {\n  0%, 100% {\n    -o-transform: translate(10px, -10px) rotate(-8eg); }\n  50% {\n    -o-transform: translate(-15px, 10px) rotate(10deg); } }\n\n@keyframes balloon4 {\n  0%, 100% {\n    transform: translate(10px, -10px) rotate(-8eg); }\n  50% {\n    transform: translate(-15px, 10px) rotate(10deg); } }\n\n.nav {\n  display: -ms-grid;\n  display: grid;\n  width: 250px;\n  height: 50px;\n  -ms-grid-columns: 50px 50px 50px 50px 50px;\n  grid-template-columns: 50px 50px 50px 50px 50px;\n  -ms-grid-rows: 1fr;\n  grid-template-rows: 1fr;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: absolute;\n  bottom: 7%;\n  left: 50%;\n  z-index: 5;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0); }\n\nul, li {\n  list-style: none;\n  z-index: 5; }\n\n.nav li {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n  display: relative;\n  border-radius: 50%;\n  background-color: #FFFFFF;\n  justify-self: center;\n  -webkit-transform: scale(0.67);\n  transform: scale(0.67);\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.27);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n\nli:hover {\n  -webkit-transform: scale(0.85);\n  transform: scale(0.85);\n  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.34);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n\n.arrow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n  width: 100px;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: absolute;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  cursor: pointer;\n  z-index: 5; }\n\n.prev {\n  top: 50%;\n  left: 0; }\n\n.next {\n  top: 50%;\n  right: 0; }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 70px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga';\n  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.27);\n  -webkit-transition: all 0.12s;\n  transition: all 0.12s; }\n\n.arrow:hover > .material-icons {\n  font-size: 90px;\n  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.34);\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s; }\n\nli.selected {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.34);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n\n::-moz-selection {\n  background-color: transparent; }\n\n::selection {\n  background-color: transparent; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  background-color: #dbdbdb; }\n\nhtml, body {\n  width: 100%; }\n\n.container {\n  width: 1100px;\n  margin: 0 auto; }\n\nheader {\n  height: 30%; }\n  header .caption {\n    height: 6%;\n    background-color: #2f3237;\n    color: white;\n    display: flex;\n    justify-content: flex-end; }\n    header .caption .welcome {\n      list-style: none; }\n    header .caption .navigation {\n      list-style: none;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between; }\n      header .caption .navigation li .language {\n        display: none;\n        list-style: none; }\n  header .logo {\n    background-color: white;\n    height: 90px;\n    text-align: center;\n    font-size: 28px;\n    color: #2f3237; }\n\n.imageBlock {\n  background: #2f3237;\n  height: 500px; }\n  .imageBlock .image-new {\n    background: white;\n    height: 480px; }\n  .imageBlock .image-2box {\n    display: flex;\n    flex-flow: wrap; }\n    .imageBlock .image-2box .image-dress {\n      background: white;\n      height: 200px; }\n    .imageBlock .image-2box .image-accessories {\n      background: white;\n      height: 200px; }\n\n.blog {\n  background: #f9e0db;\n  height: 500px; }\n\n.clearfix {\n  clear: both; }\n\nfooter {\n  color: white;\n  font-size: 18px;\n  padding-left: 15px;\n  padding: 10px; }\n  footer ul li {\n    padding-bottom: 10px; }\n  footer p {\n    padding-bottom: 20px;\n    padding-top: 10px; }\n  footer .icon img {\n    padding-left: 10px;\n    padding-top: 10px; }\n", ""]);

// exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(4);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(0);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);