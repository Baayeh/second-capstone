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
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */




let countries = [];

const modal = document.querySelector('#item-modal');

document.getElementsByClassName('close')[0].onclick = () => {
  modal.style.display = 'none';
};

// Get the specific country
const filterCountries = (countryName, sixCountries) =>
  sixCountries.find((item) => item.name.common === countryName.trim());

// Display the list of countries
const displayCountries = async (newList) => {
  _modules_DOMElements_js__WEBPACK_IMPORTED_MODULE_1__.countryList.innerHTML = newList
    .map(
      (country) => `<li class="country-item" id=${country.name.common}>
    <div class="card">
      <div class="country-img">
        <img src="${country.flags.svg}" alt='${country.name.common} flag'>
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
        <button type="button" class="comment-btn" id="${country.name.common}
">Comments</button>
      </div>
    </div>
  </li>`
    )
    .join('');

  const countryElement = document.querySelectorAll('.country-item');
  countryElement.forEach((element) => {
    element.addEventListener('click', (e) => {
      if (e.target.classList.contains('comment-btn')) {
        const countryName = e.target.getAttribute('id');
        const result = filterCountries(countryName, newList);
        modal.style.display = 'block';
        const img = document.querySelector('#country-img');
        const title = document.querySelector('#country-title');
        const population = document.querySelector('#population');
        const subRegion = document.querySelector('#sub-region');
        img.setAttribute('src', result.flags.svg);
        title.innerHTML = result.name.common;
        population.innerHTML = `Population: ${result.population}`;
        subRegion.innerHTML = result.subregion;
      }
    });
  });
};

// create obj for each country to include likesCount
const createNewCountryObj = (countries, likes = []) => {
  if (countries.length) {
    const newList = countries.map((country) => {
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

const fetchAllCountries = async () => {
  await (0,_modules_countries_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    .then((data) => {
      countries = data.slice(0, 6);
      return (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();
    })
    .then((response1) => {
      createNewCountryObj(countries, response1);
    })
    .catch(() => {
      createNewCountryObj(countries, []);
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
// Countries API
const BASE_URL = 'https://restcountries.com/v3.1';

// Get list of countries
const getCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  return response.json();
};

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

const APP_ID = 'Xwzhy7hICqJVdnAtJGEs';

// Get all Likes ----->  /apps/:app_id/likes/
const getLikes = async () => {
  const response = await fetch(`${INVVOLVED_URL}/apps/${APP_ID}/likes`);
  return response;
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tEO0FBQ0s7QUFDVDs7QUFFOUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwwRUFBcUI7QUFDdkI7QUFDQSxrREFBa0Qsb0JBQW9CO0FBQ3RFO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCLFNBQVMscUJBQXFCO0FBQ3BFO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNEO0FBQ0EsK0JBQStCLHNDQUFzQyxvQkFBb0I7QUFDekY7QUFDQTtBQUNBLHdDQUF3QyxtQkFBbUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxpRUFBWTtBQUNwQjtBQUNBO0FBQ0EsYUFBYSwyREFBUTtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7O0FBRUE7QUFDdUI7Ozs7Ozs7Ozs7Ozs7OztBQ0h2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUNUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsY0FBYyxRQUFRLE9BQU87QUFDL0Q7QUFDQTs7QUFFMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9ET01FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY291bnRyaWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG5pbXBvcnQgZ2V0Q291bnRyaWVzIGZyb20gJy4vbW9kdWxlcy9jb3VudHJpZXMuanMnO1xuaW1wb3J0IHsgY291bnRyeUxpc3QgfSBmcm9tICcuL21vZHVsZXMvRE9NRWxlbWVudHMuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL21vZHVsZXMvbGlrZXMuanMnO1xuXG5sZXQgY291bnRyaWVzID0gW107XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tbW9kYWwnKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UnKVswXS5vbmNsaWNrID0gKCkgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuLy8gR2V0IHRoZSBzcGVjaWZpYyBjb3VudHJ5XG5jb25zdCBmaWx0ZXJDb3VudHJpZXMgPSAoY291bnRyeU5hbWUsIHNpeENvdW50cmllcykgPT5cbiAgc2l4Q291bnRyaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZS5jb21tb24gPT09IGNvdW50cnlOYW1lLnRyaW0oKSk7XG5cbi8vIERpc3BsYXkgdGhlIGxpc3Qgb2YgY291bnRyaWVzXG5jb25zdCBkaXNwbGF5Q291bnRyaWVzID0gYXN5bmMgKG5ld0xpc3QpID0+IHtcbiAgY291bnRyeUxpc3QuaW5uZXJIVE1MID0gbmV3TGlzdFxuICAgIC5tYXAoXG4gICAgICAoY291bnRyeSkgPT4gYDxsaSBjbGFzcz1cImNvdW50cnktaXRlbVwiIGlkPSR7Y291bnRyeS5uYW1lLmNvbW1vbn0+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5LWltZ1wiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Y291bnRyeS5mbGFncy5zdmd9XCIgYWx0PScke2NvdW50cnkubmFtZS5jb21tb259IGZsYWcnPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiY291bnRyeS1uYW1lIG1iLTBcIj4ke2NvdW50cnkubmFtZS5jb21tb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXNcIj5cbiAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPSdhZGQtbGlrZScgaWQ9JHtjb3VudHJ5Lm5hbWUuY29tbW9ufT5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTYgaC02XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpa2VzLWNvdW50ZXJcIj4ke2NvdW50cnkubGlrZXNDb3VudH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvbW1lbnQtYnRuXCIgaWQ9XCIke2NvdW50cnkubmFtZS5jb21tb259XG5cIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbGk+YFxuICAgIClcbiAgICAuam9pbignJyk7XG5cbiAgY29uc3QgY291bnRyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY291bnRyeS1pdGVtJyk7XG4gIGNvdW50cnlFbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbW1lbnQtYnRuJykpIHtcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlckNvdW50cmllcyhjb3VudHJ5TmFtZSwgbmV3TGlzdCk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeS1pbWcnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeS10aXRsZScpO1xuICAgICAgICBjb25zdCBwb3B1bGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVsYXRpb24nKTtcbiAgICAgICAgY29uc3Qgc3ViUmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Yi1yZWdpb24nKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVzdWx0LmZsYWdzLnN2Zyk7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHJlc3VsdC5uYW1lLmNvbW1vbjtcbiAgICAgICAgcG9wdWxhdGlvbi5pbm5lckhUTUwgPSBgUG9wdWxhdGlvbjogJHtyZXN1bHQucG9wdWxhdGlvbn1gO1xuICAgICAgICBzdWJSZWdpb24uaW5uZXJIVE1MID0gcmVzdWx0LnN1YnJlZ2lvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBjcmVhdGUgb2JqIGZvciBlYWNoIGNvdW50cnkgdG8gaW5jbHVkZSBsaWtlc0NvdW50XG5jb25zdCBjcmVhdGVOZXdDb3VudHJ5T2JqID0gKGNvdW50cmllcywgbGlrZXMgPSBbXSkgPT4ge1xuICBpZiAoY291bnRyaWVzLmxlbmd0aCkge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBjb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiB7XG4gICAgICBjb25zdCBsaWtlc05vID0gbGlrZXMuZmluZCgobGlrZSkgPT4ge1xuICAgICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBjb3VudHJ5Lm5hbWUuY29tbW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGxpa2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY291bnRyeSxcbiAgICAgICAgbGlrZXNDb3VudDogbGlrZXNObyA/IGxpa2VzTm8ubGlrZXMgOiAwLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIG5ld0xpc3QubGVuZ3RoICYmIGRpc3BsYXlDb3VudHJpZXMobmV3TGlzdCk7XG4gIH1cbn07XG5cbmNvbnN0IGZldGNoQWxsQ291bnRyaWVzID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBnZXRDb3VudHJpZXMoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb3VudHJpZXMgPSBkYXRhLnNsaWNlKDAsIDYpO1xuICAgICAgcmV0dXJuIGdldExpa2VzKCk7XG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UxKSA9PiB7XG4gICAgICBjcmVhdGVOZXdDb3VudHJ5T2JqKGNvdW50cmllcywgcmVzcG9uc2UxKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjcmVhdGVOZXdDb3VudHJ5T2JqKGNvdW50cmllcywgW10pO1xuICAgIH0pO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZldGNoQWxsQ291bnRyaWVzKTtcbiIsImNvbnN0IGNvdW50cnlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnktbGlzdCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgY291bnRyeUxpc3QgfTtcbiIsIi8vIENvdW50cmllcyBBUElcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMSc7XG5cbi8vIEdldCBsaXN0IG9mIGNvdW50cmllc1xuY29uc3QgZ2V0Q291bnRyaWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9hbGxgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvdW50cmllcztcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvcGVyYXRvci1saW5lYnJlYWtcbmNvbnN0IElOVlZPTFZFRF9VUkwgPVxuICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcblxuY29uc3QgQVBQX0lEID0gJ1h3emh5N2hJQ3FKVmRuQXRKR0VzJztcblxuLy8gR2V0IGFsbCBMaWtlcyAtLS0tLT4gIC9hcHBzLzphcHBfaWQvbGlrZXMvXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtJTlZWT0xWRURfVVJMfS9hcHBzLyR7QVBQX0lEfS9saWtlc2ApO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgeyBJTlZWT0xWRURfVVJMLCBBUFBfSUQsIGdldExpa2VzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=