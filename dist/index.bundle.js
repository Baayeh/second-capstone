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
/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments.js */ "./src/modules/comments.js");
/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likes.js */ "./src/modules/likes.js");
/* harmony import */ var _modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/commentsCounter.js */ "./src/modules/commentsCounter.js");
/* harmony import */ var _modules_ItemsCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ItemsCounter.js */ "./src/modules/ItemsCounter.js");
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */







let countries = [];

const modal = document.querySelector('#item-modal');

document.getElementsByClassName('close')[0].onclick = () => {
  modal.style.display = 'none';
};

// Get the specific country
const filterCountries = (countryName, countryArr) =>
  countryArr.find((item) => item.name.common === countryName.trim());

// Getting the number of comments
const getNumOfComments = () => {
  const CommentsCounter = document.querySelector('.comment-list');
  const counter = document.querySelector('.commentsCounter');
  counter.textContent = (0,_modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(CommentsCounter.children);
};

const getCommentList = async (id) => {
  const ulComments = document.querySelector('.comment-list');
  if (id) {
    await (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__.showComments)(id)
      .then((data) => {
        if (data.length > 0) {
          const list = data.map((comment) => {
            return `<li>
            <span>${comment.creation_date}</span>
            <span>${comment.username}</span>
            <span>${comment.comment}</span>
            </li>`;
          });
          ulComments.innerHTML = list.join('');
          modal.style.display = 'block';
          getNumOfComments();
        } else {
          throw Error('No comments');
        }
      })
      .catch((err) => {
        ulComments.innerHTML = err.message;
      });
  }
};

// Display the list of countries
const displayCountries = async (newList) => {
  _modules_DOMElements_js__WEBPACK_IMPORTED_MODULE_1__.countryList.innerHTML = newList
    .map((country) => {
      const countryId = country.name.common.split(' ')[0];
      return `<li class="country-item" data-id=${country.name.common}>
        <div class="card">
          <div class="country-img">
            <img src="${country.flags.svg}" alt='${country.name.common} flag'>
          </div>
          <div class="card-body">
            <p class="country-name mb-0">${country.name.common}</p>
            <div class="likes">
              <a href="javascript:;" type="button" class='add-like' id=${countryId}>
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
      </li>`;
    })
    .join('');

  // Country Counter
  const countryCounter = document.querySelector('#country-counter');
  countryCounter.textContent = (0,_modules_ItemsCounter_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_modules_DOMElements_js__WEBPACK_IMPORTED_MODULE_1__.countryList.children);

  const countryElement = document.querySelectorAll('.country-item');
  countryElement.forEach((element) => {
    element.addEventListener('click', (e) => {
      // Open Modal dialog
      if (e.target.classList.contains('comment-btn')) {
        const countryName = e.target.getAttribute('id');
        const modal = document.querySelector('#item-modal');
        modal.setAttribute('data-id', countryName);
        const result = filterCountries(countryName, newList);
        const img = document.querySelector('#country-img');
        const title = document.querySelector('#country-title');
        const population = document.querySelector('#population');
        const subRegion = document.querySelector('#sub-region');
        img.setAttribute('src', result.flags.svg);
        title.innerHTML = result.name.common;
        population.innerHTML = `Population: ${result.population}`;
        subRegion.innerHTML = result.subregion;

        // displaying comments
        getCommentList(result.name.common);
      }

      // Add Like Counter
      if (e.target.parentElement.classList.contains('add-like')) {
        const countryName = e.target.parentElement.getAttribute('id');
        (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__.addLike)(countryName).then(() => {
          const currentCount = Number(
            e.target.parentElement.nextElementSibling.textContent
          );
          e.target.parentElement.nextElementSibling.textContent = String(
            currentCount + 1
          );
        });
      }
    });
  });
};

// create obj for each country to include likesCount
const createNewCountryObj = (countries, likes = []) => {
  if (countries.length) {
    const newList = countries.map((country) => {
      const likesNo = likes.find((like) => {
        if (like.item_id === country.name.common.split(' ')[0]) {
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

// add comment
const createComment = () => {
  const submitBtn = document.querySelector('#add-comment');
  submitBtn.addEventListener('click', () => {
    const id = document.getElementById('item-modal').getAttribute('data-id');
    const commentID = id.trim();
    const username = document.getElementById('name').value;
    const comment = document.getElementById('insights').value;
    const commentObj = {
      item_id: commentID,
      username,
      comment
    };
    if (username !== '' && comment !== '') {
      (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__.addComment)(commentObj).then(() => {
        getCommentList(commentID);
        document.getElementById('name').value = '';
        document.getElementById('insights').value = '';
      });
    }
  });
};

createComment();

const fetchAllCountries = async () => {
  await (0,_modules_countries_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    .then((data) => {
      countries = data.slice(0, 6);
      return (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();
    })
    .then((response1) => {
      response1
        .json()
        .then((data) => {
          createNewCountryObj(countries, data);
        })
        .catch(() => {
          createNewCountryObj(countries, []);
        });
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

/***/ "./src/modules/ItemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/ItemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const numOfCountries = (items) => {
  const count = items.length;
  return count;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (numOfCountries);


/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "showComments": () => (/* binding */ showComments)
/* harmony export */ });
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const showComments = async (id) => {
  const url = `${BASE_URL}apps/IgY08bvfNLdtRYcSagqI/comments?item_id=${id}`;
  const requestOptions = { method: 'GET' };
  const response = await fetch(url, requestOptions);
  return response.json();
};

const addComment = async (data) => {
  const response = await fetch(`${BASE_URL}apps/IgY08bvfNLdtRYcSagqI/comments`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.text();
};




/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const NumberOfComments = (item) => {
  const counter = item.length;
  return counter;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberOfComments);


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
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
// eslint-disable-next-line operator-linebreak
const INVVOLVED_URL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const APP_ID = 'IgY08bvfNLdtRYcSagqI';

// Get all Likes ----->  /apps/:app_id/likes/
const getLikes = async () => {
  const response = await fetch(`${INVVOLVED_URL}/apps/${APP_ID}/likes`);
  return response;
};

// add like  -------> /apps/:app_id/likes/
const addLike = async (id) => {
  const response = await fetch(`${INVVOLVED_URL}/apps/${APP_ID}/likes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return response.text();
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWMsUUFBUSxPQUFPO0FBQy9EO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0RPTUVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9JdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jb21tZW50c0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NvdW50cmllcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctYm9keS1zdHlsZSAqL1xuaW1wb3J0IGdldENvdW50cmllcyBmcm9tICcuL21vZHVsZXMvY291bnRyaWVzLmpzJztcbmltcG9ydCB7IGNvdW50cnlMaXN0IH0gZnJvbSAnLi9tb2R1bGVzL0RPTUVsZW1lbnRzLmpzJztcbmltcG9ydCB7IHNob3dDb21tZW50cywgYWRkQ29tbWVudCB9IGZyb20gJy4vbW9kdWxlcy9jb21tZW50cy5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlcywgYWRkTGlrZSB9IGZyb20gJy4vbW9kdWxlcy9saWtlcy5qcyc7XG5pbXBvcnQgTnVtYmVyT2ZDb21tZW50cyBmcm9tICcuL21vZHVsZXMvY29tbWVudHNDb3VudGVyLmpzJztcbmltcG9ydCBjb3VudHJ5Q291bnQgZnJvbSAnLi9tb2R1bGVzL0l0ZW1zQ291bnRlci5qcyc7XG5cbmxldCBjb3VudHJpZXMgPSBbXTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1tb2RhbCcpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdLm9uY2xpY2sgPSAoKSA9PiB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG4vLyBHZXQgdGhlIHNwZWNpZmljIGNvdW50cnlcbmNvbnN0IGZpbHRlckNvdW50cmllcyA9IChjb3VudHJ5TmFtZSwgY291bnRyeUFycikgPT5cbiAgY291bnRyeUFyci5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUuY29tbW9uID09PSBjb3VudHJ5TmFtZS50cmltKCkpO1xuXG4vLyBHZXR0aW5nIHRoZSBudW1iZXIgb2YgY29tbWVudHNcbmNvbnN0IGdldE51bU9mQ29tbWVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IENvbW1lbnRzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50c0NvdW50ZXInKTtcbiAgY291bnRlci50ZXh0Q29udGVudCA9IE51bWJlck9mQ29tbWVudHMoQ29tbWVudHNDb3VudGVyLmNoaWxkcmVuKTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRMaXN0ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVsQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG4gIGlmIChpZCkge1xuICAgIGF3YWl0IHNob3dDb21tZW50cyhpZClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBsaXN0ID0gZGF0YS5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPGxpPlxuICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LnVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+YDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB1bENvbW1lbnRzLmlubmVySFRNTCA9IGxpc3Quam9pbignJyk7XG4gICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZ2V0TnVtT2ZDb21tZW50cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IEVycm9yKCdObyBjb21tZW50cycpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdWxDb21tZW50cy5pbm5lckhUTUwgPSBlcnIubWVzc2FnZTtcbiAgICAgIH0pO1xuICB9XG59O1xuXG4vLyBEaXNwbGF5IHRoZSBsaXN0IG9mIGNvdW50cmllc1xuY29uc3QgZGlzcGxheUNvdW50cmllcyA9IGFzeW5jIChuZXdMaXN0KSA9PiB7XG4gIGNvdW50cnlMaXN0LmlubmVySFRNTCA9IG5ld0xpc3RcbiAgICAubWFwKChjb3VudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjb3VudHJ5SWQgPSBjb3VudHJ5Lm5hbWUuY29tbW9uLnNwbGl0KCcgJylbMF07XG4gICAgICByZXR1cm4gYDxsaSBjbGFzcz1cImNvdW50cnktaXRlbVwiIGRhdGEtaWQ9JHtjb3VudHJ5Lm5hbWUuY29tbW9ufT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeS1pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjb3VudHJ5LmZsYWdzLnN2Z31cIiBhbHQ9JyR7Y291bnRyeS5uYW1lLmNvbW1vbn0gZmxhZyc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb3VudHJ5LW5hbWUgbWItMFwiPiR7Y291bnRyeS5uYW1lLmNvbW1vbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXNcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz0nYWRkLWxpa2UnIGlkPSR7Y291bnRyeUlkfT5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpa2VzLWNvdW50ZXJcIj4ke2NvdW50cnkubGlrZXNDb3VudH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb21tZW50LWJ0blwiIGlkPVwiJHtjb3VudHJ5Lm5hbWUuY29tbW9ufVxuICAgIFwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5gO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xuXG4gIC8vIENvdW50cnkgQ291bnRlclxuICBjb25zdCBjb3VudHJ5Q291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5LWNvdW50ZXInKTtcbiAgY291bnRyeUNvdW50ZXIudGV4dENvbnRlbnQgPSBjb3VudHJ5Q291bnQoY291bnRyeUxpc3QuY2hpbGRyZW4pO1xuXG4gIGNvbnN0IGNvdW50cnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvdW50cnktaXRlbScpO1xuICBjb3VudHJ5RWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAvLyBPcGVuIE1vZGFsIGRpYWxvZ1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tbWVudC1idG4nKSkge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1tb2RhbCcpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBjb3VudHJ5TmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlckNvdW50cmllcyhjb3VudHJ5TmFtZSwgbmV3TGlzdCk7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5LWltZycpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5LXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHBvcHVsYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdWxhdGlvbicpO1xuICAgICAgICBjb25zdCBzdWJSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ViLXJlZ2lvbicpO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCByZXN1bHQuZmxhZ3Muc3ZnKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcmVzdWx0Lm5hbWUuY29tbW9uO1xuICAgICAgICBwb3B1bGF0aW9uLmlubmVySFRNTCA9IGBQb3B1bGF0aW9uOiAke3Jlc3VsdC5wb3B1bGF0aW9ufWA7XG4gICAgICAgIHN1YlJlZ2lvbi5pbm5lckhUTUwgPSByZXN1bHQuc3VicmVnaW9uO1xuXG4gICAgICAgIC8vIGRpc3BsYXlpbmcgY29tbWVudHNcbiAgICAgICAgZ2V0Q29tbWVudExpc3QocmVzdWx0Lm5hbWUuY29tbW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIExpa2UgQ291bnRlclxuICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtbGlrZScpKSB7XG4gICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGFkZExpa2UoY291bnRyeU5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50XG4gICAgICAgICAgKTtcbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IFN0cmluZyhcbiAgICAgICAgICAgIGN1cnJlbnRDb3VudCArIDFcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBjcmVhdGUgb2JqIGZvciBlYWNoIGNvdW50cnkgdG8gaW5jbHVkZSBsaWtlc0NvdW50XG5jb25zdCBjcmVhdGVOZXdDb3VudHJ5T2JqID0gKGNvdW50cmllcywgbGlrZXMgPSBbXSkgPT4ge1xuICBpZiAoY291bnRyaWVzLmxlbmd0aCkge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBjb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiB7XG4gICAgICBjb25zdCBsaWtlc05vID0gbGlrZXMuZmluZCgobGlrZSkgPT4ge1xuICAgICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBjb3VudHJ5Lm5hbWUuY29tbW9uLnNwbGl0KCcgJylbMF0pIHtcbiAgICAgICAgICByZXR1cm4gbGlrZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3VudHJ5LFxuICAgICAgICBsaWtlc0NvdW50OiBsaWtlc05vID8gbGlrZXNOby5saWtlcyA6IDAsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbmV3TGlzdC5sZW5ndGggJiYgZGlzcGxheUNvdW50cmllcyhuZXdMaXN0KTtcbiAgfVxufTtcblxuLy8gYWRkIGNvbW1lbnRcbmNvbnN0IGNyZWF0ZUNvbW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY29tbWVudCcpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1tb2RhbCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGNvbnN0IGNvbW1lbnRJRCA9IGlkLnRyaW0oKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnNpZ2h0cycpLnZhbHVlO1xuICAgIGNvbnN0IGNvbW1lbnRPYmogPSB7XG4gICAgICBpdGVtX2lkOiBjb21tZW50SUQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnRcbiAgICB9O1xuICAgIGlmICh1c2VybmFtZSAhPT0gJycgJiYgY29tbWVudCAhPT0gJycpIHtcbiAgICAgIGFkZENvbW1lbnQoY29tbWVudE9iaikudGhlbigoKSA9PiB7XG4gICAgICAgIGdldENvbW1lbnRMaXN0KGNvbW1lbnRJRCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc2lnaHRzJykudmFsdWUgPSAnJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jcmVhdGVDb21tZW50KCk7XG5cbmNvbnN0IGZldGNoQWxsQ291bnRyaWVzID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBnZXRDb3VudHJpZXMoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb3VudHJpZXMgPSBkYXRhLnNsaWNlKDAsIDYpO1xuICAgICAgcmV0dXJuIGdldExpa2VzKCk7XG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UxKSA9PiB7XG4gICAgICByZXNwb25zZTFcbiAgICAgICAgLmpzb24oKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNyZWF0ZU5ld0NvdW50cnlPYmooY291bnRyaWVzLCBkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBjcmVhdGVOZXdDb3VudHJ5T2JqKGNvdW50cmllcywgW10pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmZXRjaEFsbENvdW50cmllcyk7XG4iLCJjb25zdCBjb3VudHJ5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5LWxpc3QnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IGNvdW50cnlMaXN0IH07XG4iLCJjb25zdCBudW1PZkNvdW50cmllcyA9IChpdGVtcykgPT4ge1xuICBjb25zdCBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgcmV0dXJuIGNvdW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtT2ZDb3VudHJpZXM7XG4iLCJjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJztcblxuY29uc3Qgc2hvd0NvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke0JBU0VfVVJMfWFwcHMvSWdZMDhidmZOTGR0UlljU2FncUkvY29tbWVudHM/aXRlbV9pZD0ke2lkfWA7XG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnIH07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH1hcHBzL0lnWTA4YnZmTkxkdFJZY1NhZ3FJL2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5cbmV4cG9ydCB7IHNob3dDb21tZW50cywgYWRkQ29tbWVudCB9O1xuIiwiY29uc3QgTnVtYmVyT2ZDb21tZW50cyA9IChpdGVtKSA9PiB7XHJcbiAgY29uc3QgY291bnRlciA9IGl0ZW0ubGVuZ3RoO1xyXG4gIHJldHVybiBjb3VudGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyT2ZDb21tZW50cztcclxuIiwiLy8gQ291bnRyaWVzIEFQSVxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xJztcblxuLy8gR2V0IGxpc3Qgb2YgY291bnRyaWVzXG5jb25zdCBnZXRDb3VudHJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FsbGApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q291bnRyaWVzO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9wZXJhdG9yLWxpbmVicmVha1xuY29uc3QgSU5WVk9MVkVEX1VSTCA9XG4gICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xuXG5jb25zdCBBUFBfSUQgPSAnSWdZMDhidmZOTGR0UlljU2FncUknO1xuXG4vLyBHZXQgYWxsIExpa2VzIC0tLS0tPiAgL2FwcHMvOmFwcF9pZC9saWtlcy9cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0lOVlZPTFZFRF9VUkx9L2FwcHMvJHtBUFBfSUR9L2xpa2VzYCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbi8vIGFkZCBsaWtlICAtLS0tLS0tPiAvYXBwcy86YXBwX2lkL2xpa2VzL1xuY29uc3QgYWRkTGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0lOVlZPTFZFRF9VUkx9L2FwcHMvJHtBUFBfSUR9L2xpa2VzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH0pLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5cbmV4cG9ydCB7XG4gIElOVlZPTFZFRF9VUkwsIEFQUF9JRCwgZ2V0TGlrZXMsIGFkZExpa2UsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9