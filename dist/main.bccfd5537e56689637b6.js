/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.js":
/*!*********************!*\
  !*** ./src/code.js ***!
  \*********************/
/***/ (() => {

eval("const elementArrow = document.getElementById('arrow');\r\nconst elementText = document.getElementById('textContainer');\r\nconst elementReadMore = document.getElementById('spanReadMore');\r\nconst mainContainer = document.getElementById('mainContainer');\r\nconst elementBodyContainer = document.getElementById('bodyContainer');\r\nconst serviceboxReadMore = document.getElementById('serviceboxReadMore');\r\nconst serviceboxArrowRotate = document.getElementById('serviceboxArrow');\r\nconst serviceboxTextChange = document.getElementById('serviceboxText');\r\nconst priceboxReadMore = document.getElementById('priceboxReadMore');\r\nconst priceboxArrowRotate = document.getElementById('priceboxArrow');\r\nconst priceboxTextChange = document.getElementById('priceboxText');\r\nconst brandboxReadMore = document.getElementById('brandboxReadMore');\r\nconst brandboxArrowRotate = document.getElementById('brandboxArrow');\r\nconst brandboxTextChange = document.getElementById('brandboxText');\r\n\r\n\r\n\r\nconst elementMenu = document.getElementById('menuContainer');\r\nconst hamburgerButton = document.getElementsByClassName('hamburgerButton');\r\n\r\n\r\nfor (let counter = 0; counter < hamburgerButton.length; counter++){\r\n\r\n    hamburgerButton[counter].addEventListener('click', () => {\r\n\r\n        elementMenu.classList.toggle('container__selection');\r\n    })\r\n}\r\n\r\nconst swiper = new Swiper('.swiper', {\r\n    direction: 'horizontal',\r\n    loop: true,\r\n    slidesPerView: 'auto',\r\n\r\n    pagination: {\r\n        el: '.swiper-pagination',\r\n    },\r\n\r\n    navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev',\r\n      },\r\n});\r\n\r\nconst callBackWindow = document.getElementById('popup__callback'); \r\nconst popupCallback = document.getElementsByClassName('popupCallback');\r\n\r\nfor (let count = 0; count < popupCallback.length; count++) {\r\n\r\n    popupCallback[count].addEventListener('click', () => {\r\n\r\n        if (callBackWindow.style.display != 'block') {\r\n            callBackWindow.style.display = 'block';\r\n        } else {\r\n            callBackWindow.style.display = 'none';\r\n        }\r\n    })\r\n}\r\n\r\n\r\nconst callOrderWindow = document.getElementById('popup__callorder');\r\nconst popupCallOrder = document.getElementsByClassName('popupCallOrder');\r\n\r\nfor (let count = 0; count < popupCallOrder.length; count++) {\r\n\r\n    popupCallOrder[count].addEventListener('click', () => {\r\n\r\n        if (callOrderWindow.style.display != 'block') {\r\n            callOrderWindow.style.display = 'block';\r\n        } else {\r\n            callOrderWindow.style.display = 'none';\r\n        }\r\n    })\r\n}\r\n\r\nconst readMore = document.getElementById('readMore');\r\n\r\nreadMore.addEventListener('click', () => {\r\n\r\n    if (elementText.style.height != 'auto') {\r\n        elementText.style.height = 'auto';\r\n        elementArrow.style.transform = 'rotate(0deg)';\r\n        elementReadMore.textContent = 'Скрыть';\r\n    } else {\r\n        elementText.style.height = '6.5rem';\r\n        elementArrow.style.transform = 'rotate(180deg)';\r\n        elementReadMore.textContent = 'Читать далее';\r\n    }\r\n})\r\n\r\ndocument.getElementById('openbrandboxReadMore').addEventListener('click', () => {\r\n\r\n    if (brandboxReadMore.style.height == 'auto') {\r\n        brandboxReadMore.style.height = '190px';\r\n        brandboxArrowRotate.style.transform = 'rotate(180deg)';\r\n        brandboxTextChange.textContent = 'Показать все';\r\n    } else {\r\n        brandboxReadMore.style.height = 'auto';\r\n        brandboxArrowRotate.style.transform = 'rotate(0deg)';\r\n        brandboxTextChange.textContent = 'Скрыть';\r\n    }\r\n}) \r\n\r\ndocument.getElementById('openserviceboxReadMore').addEventListener('click', () => {\r\n    \r\n    if (serviceboxReadMore.style.height == 'auto') {\r\n        serviceboxReadMore.style.height = '170px';\r\n        serviceboxArrowRotate.style.transform = 'rotate(180deg)';\r\n        serviceboxTextChange.textContent = 'Показать все';\r\n    } else {\r\n        serviceboxReadMore.style.height = 'auto';\r\n        serviceboxArrowRotate.style.transform = 'rotate(0deg)';\r\n        serviceboxTextChange.textContent = 'Скрыть';\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://8.5/./src/code.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/code.js"]();
/******/ 	
/******/ })()
;