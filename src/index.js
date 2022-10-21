/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */
import getCountries from './modules/countries.js';
import { countryList } from './modules/DOMElements.js';
import { showComments, addComment } from './modules/comments.js';
import { getLikes, addLike } from './modules/likes.js';
import NumberOfComments from './modules/commentsCounter.js';

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
  counter.textContent = NumberOfComments(CommentsCounter.children);
};

const getCommentList = async (id) => {
  const ulComments = document.querySelector('.comment-list');
  if (id) {
    await showComments(id)
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
  countryList.innerHTML = newList
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
        addLike(countryName).then(() => {
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
      addComment(commentObj).then(() => {
        getCommentList(commentID);
        document.getElementById('name').value = '';
        document.getElementById('insights').value = '';
      });
    }
  });
};

createComment();

const fetchAllCountries = async () => {
  await getCountries()
    .then((data) => {
      countries = data.slice(0, 6);
      return getLikes();
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
