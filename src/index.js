/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */
import getCountries from './modules/countries.js';
import { countryList } from './modules/DOMElements.js';
import { getLikes } from './modules/likes.js';
import showComments from './modules/comments.js';

let countries = [];

const modal = document.querySelector('#item-modal');

document.getElementsByClassName('close')[0].onclick = () => {
  modal.style.display = 'none';
};

// Get the specific country
const filterCountries = (countryName, CountryArray) =>
  CountryArray.find((item) => item.name.common === countryName.trim());

// Display the list of countries
const displayCountries = async (newList) => {
  countryList.innerHTML = newList
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

        // displaying comments
        const ulComments = document.querySelector('.comment-list');
        const getCommentList = async (id) => {
          if (id === result.name.common) {
            await showComments(id)
              .then((data) => {
                const list = data ? data.map((comment) => {
                  return `<li>
                    <span>${comment.creation_date}</span>
                    <span>${comment.username}</span>
                    <span>${comment.comment}</span>
                    </li>`;
                }) : '';
                ulComments.innerHTML = list.length ? list.join('') : 'No comments';
              });
          }
        };
        getCommentList(result.name.common);
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
