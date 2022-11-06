/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/tabs */ \"./src/js/module/tabs.js\");\n/* harmony import */ var _module_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/accordion */ \"./src/js/module/accordion.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_module_accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_module_tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack://gulp-started/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/accordion.js":
/*!************************************!*\
  !*** ./src/js/module/accordion.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar accordion = function accordion() {\n  var accordionBtn = document.querySelectorAll('.accordion__btn');\n  accordionBtn.forEach(function (element) {\n    element.addEventListener('click', function () {\n      var content = element.nextElementSibling;\n      content.classList.toggle('active-conteiner');\n      element.classList.toggle('active');\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (accordion);\n\n//# sourceURL=webpack://gulp-started/./src/js/module/accordion.js?");

/***/ }),

/***/ "./src/js/module/tabs.js":
/*!*******************************!*\
  !*** ./src/js/module/tabs.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar tabs = function tabs() {\n  var tabsBtn = document.querySelectorAll('.tabs__btn');\n  var tabsItem = document.querySelectorAll('.tabs__container');\n  tabsBtn.forEach(onTabClick);\n\n  function onTabClick(item) {\n    item.addEventListener('click', function () {\n      var currentBtn = item;\n      var tabId = currentBtn.getAttribute('data-tab');\n      var currentTab = document.querySelector(tabId);\n\n      if (!currentTab.classList.contains('active')) {\n        tabsBtn.forEach(function (item) {\n          item.classList.remove('active');\n        });\n        tabsItem.forEach(function (item) {\n          item.classList.remove('active');\n        });\n        currentBtn.classList.add('active');\n        currentTab.classList.add('active');\n      }\n    });\n  }\n\n  document.querySelector('.tabs__btn').click();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack://gulp-started/./src/js/module/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;