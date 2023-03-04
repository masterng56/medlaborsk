/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {

// Кнопка меню футер
jQuery(function () {
  $('.btn_menu_footer').click(function (e) {
    if ($(e.target) == $('.btn_menu_footer')) e.preventDefault();
    $('.footer_menu_wrapper').addClass('footer_menu_activ');
  });
  $('.btn_clouse_footer').click(function (e) {
    if ($(e.target) == $('.btn_clouse_footer')) e.preventDefault();
    $('.footer_menu_wrapper').removeClass('footer_menu_activ');
  });
  $(document).on('mouseup', function (e) {
    var active = $('.footer_menu_wrapper');

    if (active.has(e.target).length === 0) {
      $('.footer_menu_wrapper').removeClass('footer_menu_activ');
      console.log(e.target);
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

// Кнопка меню
jQuery(function () {
  $('.btn_menu').click(function (e) {
    if ($(e.target) == $('.btn_menu')) e.preventDefault();
    $('.nav_list').addClass('nav_list_active');
  });
  $('.btn_clouse').click(function (e) {
    if ($(e.target) == $('.btn_clouse')) e.preventDefault();
    $('.nav_list').removeClass('nav_list_active');
  });
  $(document).on('mouseup', function (e) {
    var active = $('.nav_list_active');

    if (active.has(e.target).length === 0) {
      $('.nav_list').removeClass('nav_list_active');
      console.log(e.target);
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/reviews/reviews.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/reviews/reviews.js ***!
  \***********************************************/
/***/ (() => {

var swiper = new Swiper('.reviews_slider', {
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1.15
    },
    360: {
      slidesPerView: 1.15
    },
    480: {
      slidesPerView: 1.5
    },
    576: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 3
    },
    991: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/sale/sale.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/sale/sale.js ***!
  \*****************************************/
/***/ (() => {

var swiper = new Swiper('.sale_swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1.15
    },
    360: {
      slidesPerView: 1.15
    },
    480: {
      slidesPerView: 1.5
    },
    576: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row"
      }
    },
    991: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row"
      }
    },
    1024: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row"
      }
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/topanalizes/topanalizes.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/topanalizes/topanalizes.js ***!
  \*******************************************************/
/***/ (() => {

var swiper = new Swiper('.popular_analizes_swiper', {
  centerMode: false,
  simulateTouch: true,
  touchAngle: 35,
  grabCursor: true,
  spaceBetween: 10,
  breakpoints: {
    360: {
      slidesPerView: 1.15
    },
    480: {
      slidesPerView: 1.5
    },
    767: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_topanalizes_topanalizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/topanalizes/topanalizes */ "./src/blocks/modules/topanalizes/topanalizes.js");
/* harmony import */ var _modules_topanalizes_topanalizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_topanalizes_topanalizes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_sale_sale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/sale/sale */ "./src/blocks/modules/sale/sale.js");
/* harmony import */ var _modules_sale_sale__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_sale_sale__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map