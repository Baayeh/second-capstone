import API from './modules/API.js';
import countryList from './modules/DOMElements.js';

// Display the list of countries
const displayCountries = async () => {
  const countries = await API.getCountries();
  const sixCountries = countries.slice(0, 9);
  countryList.innerHTML = sixCountries
    .map(
      (country) => `<li class="country-item">
    <div class="card">
      <div class="country-img">
        <img src="${country.flags.svg}" alt="Ugandan Flag">
      </div>
      <div class="card-body">
        <h3 class="country-name">${country.name.common}</h3>
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
