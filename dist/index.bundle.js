"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_countries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countries.js */ "./src/modules/countries.js");
/* harmony import */ var _modules_DOMElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOMElements.js */ "./src/modules/DOMElements.js");
/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes.js */ "./src/modules/likes.js");
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */




// Display the list of countries
const displayCountries = async () => {
  const countries = await (0,_modules_countries_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const sixCountries = countries.slice(0, 6);
  _modules_DOMElements_js__WEBPACK_IMPORTED_MODULE_1__.countryList.innerHTML = sixCountries
    .map(
      (country) => `<li class="country-item">
    <div class="card">
      <div class="country-img">
        <img src="${country.flags.svg}" alt="Ugandan Flag">
      </div>
      <div class="card-body">
        <p class="country-name mb-0">${country.name.common}</p>
        <div class="likes">
        <a href="javascript:;" type="button" class='add-like' id=${country.name.common}>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </a>
          <span class="likes-counter">${country.likesCount}</span>
        </div>
      </div>
      <div class="actions">
        <button type="button">Comments</button>
      </div>
    </div>
  </li>`
    )
    .join('');
};

let sixCountries = [];

const createNewCountryObj = (sixCountries, likes = []) => {
  if (sixCountries.length) {
    const newList = sixCountries.map((country) => {
      const likesNo = likes.find((like) => {
        if (like.item_id === country.name.common) {
          return like;
        }
      });
      return {
        ...country,
        likesCount: likesNo ? likesNo.likes : 0,
      };
    });

    newList.length && displayCountries(newList);
  }
};

const fetchAllCountries = () => {
  (0,_modules_countries_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    .then((countries) => {
      sixCountries = countries.slice(0, 6);
      return (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();
    })
    .then((response1) => {
      createNewCountryObj(sixCountries, response1);
    })
    .catch(() => {
      createNewCountryObj(sixCountries, []);
    });
};

document.addEventListener('DOMContentLoaded', fetchAllCountries);


/***/ }),

/***/ "./src/modules/DOMElements.js":
/*!************************************!*\
  !*** ./src/modules/DOMElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countryList": () => (/* binding */ countryList)
/* harmony export */ });
const countryList = document.querySelector('.country-list');

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/modules/countries.js":
/*!**********************************!*\
  !*** ./src/modules/countries.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// COuntries API
const BASE_URL = 'https://restcountries.com/v3.1';

// Get list of countries
const getCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  return response.json();
};

// class API {

//   // // create app to store likes ------>    /apps/
//   // static createApp = async () => {
//   //   const response = await fetch(`${INVVOLVED_URL}/apps`, {
//   //     method: 'POST',
//   //     body: null,
//   //   });
//   //   return response.text();
//   // };

//   // // Get all Likes ----->  /apps/:app_id/likes/
//   // static getLikes = async () => {
//   //   const response = await fetch(`${INVVOLVED_URL}/apps/${APP_ID}/likes`);
//   //   return response.json();
//   // };
// }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCountries);


/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_ID": () => (/* binding */ APP_ID),
/* harmony export */   "INVVOLVED_URL": () => (/* binding */ INVVOLVED_URL),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
// eslint-disable-next-line operator-linebreak
const INVVOLVED_URL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const APP_ID = 'SIZ2d4YlpQTQgaTw33yY';

// Get all Likes ----->  /apps/:app_id/likes/
const getLikes = async () => {
  const response = await fetch(`${INVVOLVED_URL}/apps/${APP_ID}/likes`);
  return response.json();
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNrRDtBQUNLO0FBQ1Q7O0FBRTlDO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQVk7QUFDdEM7QUFDQSxFQUFFLDBFQUFxQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBLHVDQUF1QyxvQkFBb0I7QUFDM0Q7QUFDQSw2QkFBNkIsc0NBQXNDLG9CQUFvQjtBQUN2RjtBQUNBO0FBQ0Esd0NBQXdDLG1CQUFtQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxpRUFBWTtBQUNkO0FBQ0E7QUFDQSxhQUFhLDJEQUFRO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTs7QUFFQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDSHZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLGNBQWMsUUFBUSxPQUFPO0FBQ3ZFO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I1QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxjQUFjLFFBQVEsT0FBTztBQUMvRDtBQUNBOztBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0RPTUVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jb3VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG5pbXBvcnQgZ2V0Q291bnRyaWVzIGZyb20gJy4vbW9kdWxlcy9jb3VudHJpZXMuanMnO1xuaW1wb3J0IHsgY291bnRyeUxpc3QgfSBmcm9tICcuL21vZHVsZXMvRE9NRWxlbWVudHMuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL21vZHVsZXMvbGlrZXMuanMnO1xuXG4vLyBEaXNwbGF5IHRoZSBsaXN0IG9mIGNvdW50cmllc1xuY29uc3QgZGlzcGxheUNvdW50cmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY291bnRyaWVzID0gYXdhaXQgZ2V0Q291bnRyaWVzKCk7XG4gIGNvbnN0IHNpeENvdW50cmllcyA9IGNvdW50cmllcy5zbGljZSgwLCA2KTtcbiAgY291bnRyeUxpc3QuaW5uZXJIVE1MID0gc2l4Q291bnRyaWVzXG4gICAgLm1hcChcbiAgICAgIChjb3VudHJ5KSA9PiBgPGxpIGNsYXNzPVwiY291bnRyeS1pdGVtXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5LWltZ1wiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Y291bnRyeS5mbGFncy5zdmd9XCIgYWx0PVwiVWdhbmRhbiBGbGFnXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJjb3VudHJ5LW5hbWUgbWItMFwiPiR7Y291bnRyeS5uYW1lLmNvbW1vbn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlc1wiPlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPSdhZGQtbGlrZScgaWQ9JHtjb3VudHJ5Lm5hbWUuY29tbW9ufT5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTYgaC02XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpa2VzLWNvdW50ZXJcIj4ke2NvdW50cnkubGlrZXNDb3VudH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbGk+YFxuICAgIClcbiAgICAuam9pbignJyk7XG59O1xuXG5sZXQgc2l4Q291bnRyaWVzID0gW107XG5cbmNvbnN0IGNyZWF0ZU5ld0NvdW50cnlPYmogPSAoc2l4Q291bnRyaWVzLCBsaWtlcyA9IFtdKSA9PiB7XG4gIGlmIChzaXhDb3VudHJpZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IHNpeENvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGxpa2VzTm8gPSBsaWtlcy5maW5kKChsaWtlKSA9PiB7XG4gICAgICAgIGlmIChsaWtlLml0ZW1faWQgPT09IGNvdW50cnkubmFtZS5jb21tb24pIHtcbiAgICAgICAgICByZXR1cm4gbGlrZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3VudHJ5LFxuICAgICAgICBsaWtlc0NvdW50OiBsaWtlc05vID8gbGlrZXNOby5saWtlcyA6IDAsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbmV3TGlzdC5sZW5ndGggJiYgZGlzcGxheUNvdW50cmllcyhuZXdMaXN0KTtcbiAgfVxufTtcblxuY29uc3QgZmV0Y2hBbGxDb3VudHJpZXMgPSAoKSA9PiB7XG4gIGdldENvdW50cmllcygpXG4gICAgLnRoZW4oKGNvdW50cmllcykgPT4ge1xuICAgICAgc2l4Q291bnRyaWVzID0gY291bnRyaWVzLnNsaWNlKDAsIDYpO1xuICAgICAgcmV0dXJuIGdldExpa2VzKCk7XG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UxKSA9PiB7XG4gICAgICBjcmVhdGVOZXdDb3VudHJ5T2JqKHNpeENvdW50cmllcywgcmVzcG9uc2UxKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjcmVhdGVOZXdDb3VudHJ5T2JqKHNpeENvdW50cmllcywgW10pO1xuICAgIH0pO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZldGNoQWxsQ291bnRyaWVzKTtcbiIsImNvbnN0IGNvdW50cnlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnktbGlzdCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgY291bnRyeUxpc3QgfTtcbiIsIi8vIENPdW50cmllcyBBUElcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMSc7XG5cbi8vIEdldCBsaXN0IG9mIGNvdW50cmllc1xuY29uc3QgZ2V0Q291bnRyaWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9hbGxgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbi8vIGNsYXNzIEFQSSB7XG5cbi8vICAgLy8gLy8gY3JlYXRlIGFwcCB0byBzdG9yZSBsaWtlcyAtLS0tLS0+ICAgIC9hcHBzL1xuLy8gICAvLyBzdGF0aWMgY3JlYXRlQXBwID0gYXN5bmMgKCkgPT4ge1xuLy8gICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7SU5WVk9MVkVEX1VSTH0vYXBwc2AsIHtcbi8vICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAvLyAgICAgYm9keTogbnVsbCxcbi8vICAgLy8gICB9KTtcbi8vICAgLy8gICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuLy8gICAvLyB9O1xuXG4vLyAgIC8vIC8vIEdldCBhbGwgTGlrZXMgLS0tLS0+ICAvYXBwcy86YXBwX2lkL2xpa2VzL1xuLy8gICAvLyBzdGF0aWMgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtJTlZWT0xWRURfVVJMfS9hcHBzLyR7QVBQX0lEfS9saWtlc2ApO1xuLy8gICAvLyAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4vLyAgIC8vIH07XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvdW50cmllcztcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvcGVyYXRvci1saW5lYnJlYWtcbmNvbnN0IElOVlZPTFZFRF9VUkwgPVxuICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcblxuY29uc3QgQVBQX0lEID0gJ1NJWjJkNFlscFFUUWdhVHczM3lZJztcblxuLy8gR2V0IGFsbCBMaWtlcyAtLS0tLT4gIC9hcHBzLzphcHBfaWQvbGlrZXMvXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtJTlZWT0xWRURfVVJMfS9hcHBzLyR7QVBQX0lEfS9saWtlc2ApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IHsgSU5WVk9MVkVEX1VSTCwgQVBQX0lELCBnZXRMaWtlcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
