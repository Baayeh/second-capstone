import API from './modules/API.js';
import countryList from './modulesDOMElements.js';
import './style.css';

const modal = document.querySelector('#item-modal');

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
        <button type="button" class="comment-btn" id="${country.name.common}
">Comments</button>
      </div>
    </div>
  </li>`,
    )
    .join('');

  // const btns = [...document.querySelectorAll('.comment-btn')];
  // btns.forEach((modalBtn) => {
  //   modalBtn.addEventListener('click', () => {
  //     modal.style.display = 'block';
  //   });
  // });
  const countryElement = document.querySelectorAll('.country-item');
  countryElement.forEach((element) => {
    element.addEventListener('click', (e) => {
      if (e.target.classList.contains('comment-btn')) {
        const countryName = e.target.getAttribute('id');
        const result = filterCountries(countryName, sixCountries);
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

// Get the specific country
const filterCountries = (countryName, sixCountries) => {
 return sixCountries.find((item) => item.name['.common'] == countryName.trim());
 };

document.addEventListener('DOMContentLoaded', displayCountries());
