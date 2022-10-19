import API from './modules/API.js';
import countryList from './modules/DOMElements.js';

import './style.css';
import {
  displayShows,
  showComments,
  showDetails,
} from './modules/shows.js';

displayShows();

const modal = document.querySelector('#item-modal');

window.addEventListener('load', () => {
  const btns = [...document.querySelectorAll('.add-comment')];
  const li = [...document.querySelectorAll('.country-item')];
  console.log(li)
  btns.forEach((modalBtn) => {
    modalBtn.addEventListener('click', async (event) => {
      if (event.target.id !== null) {
        // show modal
        modal.style.display = 'block';

        // country shows
        const displayCountries = await showDetails(event.target.id);
        const genres = document.getElementById('genres');
        genres.innerHTML = '';
        document.getElementById('country-title').textContent = displayCountries.name;
        document.getElementById('country-img').setAttribute('src', displayCountries.image.medium);
        document.getElementById('summary').innerHTML = `${displayCountries.summary}`;
        const res = await showComments(event.target.id);
        const commentList = document.querySelector('.comment-list');
        let pElement = '';
        displayCountries.genres.forEach((item) => {
          pElement += `<p>${item}</p>`;
        });
        genres.innerHTML = pElement;

        commentList.innerHTML = '';
        let liElement = '';
        res.forEach((result) => {
          if (result === null) {
            liElement += ' <li>No comments for now</li>';
          }
          liElement += ` <li>${result.creation_date} ${result.username} ${result.comment}</li>`;
        });
        commentList.innerHTML = liElement;
      }
    });
  });
});

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

document.getElementsByClassName('close')[0].onclick = () => {
  modal.style.display = 'none';
};

// Display the list of countries
const displayCountries = async () => {
  const countries = await API.getCountries();
  const sixCountries = countries.slice(0, 6);
  countryList.innerHTML = sixCountries
    .map(
      (country) => `<li class="country-item">
    <div class="card">
      <div class="country-img">
        <img src="${country.flags.svg}" alt="Ugandan Flag">
      </div>
      <div class="card-body">
        <p class="country-name mb-0">${country.name.common}</p>
        <div class="likes">
          <a href="" type="button">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </a>
          <span class="likes-counter">5 likes</span>
        </div>
      </div>
      <div class="actions">
        <button type="button">Comments</button>
      </div>
    </div>
  </li>`,
    )
    .join('');
};

document.addEventListener('DOMContentLoaded', displayCountries());
