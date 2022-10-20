/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */
import getCountries from './modules/countries.js';
import { countryList } from './modules/DOMElements.js';
import { getLikes } from './modules/likes.js';

let countries = [];

// Display the list of countries
const displayCountries = async (newList) => {
  countryList.innerHTML = newList
    .map(
      (country) => `<li class="country-item" id=${country.name.common}>
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

const getListofLikes = async () => {
  const result = await getLikes();
  result.json().then((data) => {
    console.log(data);
  });
};

getListofLikes();

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
  await getCountries()
    .then((data) => {
      countries = data.slice(0, 6);
      return getLikes();
    })
    .then((response1) => {
      createNewCountryObj(countries, response1);
    })
    .catch(() => {
      createNewCountryObj(countries, []);
    });
};

document.addEventListener('DOMContentLoaded', fetchAllCountries);
