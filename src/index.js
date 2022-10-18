/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */
import API from './modules/API.js';
import { countryList } from './modules/DOMElements.js';

// Display the list of countries
const displayCountries = async (countries) => {
  countryList.innerHTML = countries
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
          <span class="likes-counter">${country.likesCount} likes</span>
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
  API.getCountries()
    .then((countries) => {
      sixCountries = countries.slice(0, 6);
      return API.getLikes();
    })
    .then((response1) => {
      createNewCountryObj(sixCountries, response1);
    })
    .catch(() => {
      createNewCountryObj(sixCountries, []);
    });
};

document.addEventListener('DOMContentLoaded', fetchAllCountries);
