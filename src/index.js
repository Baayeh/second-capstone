/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */
import getCountries from './modules/countries.js';
import { showComments, addComment } from './modules/comments.js';
import { getLikes, addLike } from './modules/likes.js';
import NumberOfComments from './modules/commentsCounter.js';
import countryCount from './modules/ItemsCounter.js';
import countryList from './modules/DOMElements.js';

let countries = [];

// Get the specific country
const filterCountries = (countryName, countryArr) =>
  countryArr.find((item) => item.name.common === countryName.trim());

// Getting the number of comments
const getNumOfComments = () => {
  const CommentsCounter = document.querySelector('.list-group');
  const counter = document.querySelector('.commentsCounter');
  if (CommentsCounter.children.length > 0) {
    counter.innerHTML = NumberOfComments(CommentsCounter.children);
  } else {
    counter.innerHTML = '0';
  }
};

const getCommentList = async (id) => {
  const ulComments = document.querySelector('.list-group');
  if (id) {
    await showComments(id)
      .then((data) => {
        if (data.length > 0) {
          const list = data.map((comment) => {
            return `<li class="list-group-item d-flex justify-content-between align-items-center">
              <span>${comment.creation_date}</span>
              <span>${comment.username}</span>
              <span>${comment.comment}</span>
            </li>`;
          });
          ulComments.innerHTML = list.join('');
          getNumOfComments();
        } else {
          throw Error('No comments');
        }
      })
      .catch((err) => {
        const list = `<li class="list-group-item d-flex justify-content-center">${err.message}</li>`;
        ulComments.innerHTML = list;
      });
  }
};

// Display the list of countries
const displayCountries = async (newList) => {
  let allCountries = '';
  newList.forEach((country) => {
    const countryId = country.name.common.split(' ')[0];
    const html = `<div class="col-12 col-sm-6 col-lg-3" data-id=${
      country.name.common
    }>
    <div class="card mx-auto" data-id=${country.name.common}>
      <div class="card-img" style="background-image: url(${country.flags.svg})"></div>
      <div class="card-body">
        <div class="c-header d-flex justify-content-between align-items-center mb-2">
          <h4 class="card-title mb-0">${country.name.common}</h4>
          <div class="likes">
            <a href="javascript:;" type="button" class='add-like' id=${countryId}>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </a>
            <span class="likes-counter">${country.likesCount}</span>
          </div>
        </div>
        <p class="card-text small mb-2">
          <span class="p-lead">Population: </span>
          <span class="population">${country.population.toLocaleString('en-US')}</span>
        </p>
        <p class="card-text small mb-2">
          <span class="p-lead">Region: </span> 
          <span class="region">${country.region}</span>
        </p>
        <p class="card-text small mb-2">
          <span class="p-lead">Capital: </span> 
          <span class="capital">${country.capital}</span>
        </p>
        <button type="button" class="btn btn-outline-secondary comment-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" id="${country.name.common}">See Details</button>
      </div>
    </div>
  </div>`;
    allCountries += html;
  });

  countryList.innerHTML = allCountries;

  // Country Counter
  const countryCounter = document.querySelector('#country-counter');
  countryCounter.textContent = countryCount(countryList.children);

  const countryElement = document.querySelectorAll('.card');
  countryElement.forEach((element) => {
    element.addEventListener('click', (e) => {
      // Open Modal dialog
      if (e.target.classList.contains('comment-btn')) {
        getNumOfComments();
        const countryName = e.target.getAttribute('id');
        const modal = document.querySelector('.modal');
        modal.setAttribute('data-id', countryName);
        const result = filterCountries(countryName, newList);
        const img = document.querySelector('#country-img');
        const title = document.querySelector('#country-title');
        const population = document.querySelector('.modal-population');
        const official = document.querySelector('.official');
        img.setAttribute('src', result.flags.svg);
        title.innerHTML = result.name.common;
        population.innerHTML = result.population.toLocaleString('en-US');
        official.innerHTML = result.name.official;

        // displaying comments
        getCommentList(result.name.common);
      }

      // Add Like Counter
      if (e.target.parentNode.parentNode.classList.contains('add-like')) {
        const countryName = e.target.parentNode.parentNode.getAttribute('id');
        addLike(countryName).then(() => {
          const currentCount = Number(
            e.target.parentNode.parentNode.nextElementSibling.textContent
          );
          e.target.parentNode.parentNode.nextElementSibling.textContent = String(
            currentCount + 1
          );
        });
      }
    });
  });
};

// display modal dialog
const modalDialog = () => {
  const section = document.createElement('section');
  const dialog = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <section class="text-center">
          <img id="country-img" src="" alt="modal image">
          <section>
            <h3 id="country-title" class="mt-2"></h3>
            <p class="card-text mb-2">
              <span class="p-lead">Population: </span> 
              <span class="modal-population"></span>
            </p>
            <p class="card-text mb-2">
              <span class="p-lead">Official Name: </span> 
              <span class="official"></span>
            </p>
          </section>
        </section>
        <section class="comment-section">
          <h4 class="d-flex align-items-center gap-2 justify-content-center"><span class="commentsCounter badge bg-secondary rounded-pill"></span><span>Comments</span></h4>
          <ul class="list-group mt-4"></ul>
        </section>

        <section class="mt-5">
          <form>
            <input type="text" id="name" class="form-control" placeholder="Your name" aria-label="Full Name">
            <textarea id="insights" type="text" class="form-control" placeholder="Remarks" aria-label="Remarks"></textarea>
            <button type="button" id='add-comment' class="btn btn-success">Comment</button>
          </form>
        </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
  section.innerHTML = dialog;
  document.querySelector('body').appendChild(section);
};

modalDialog();

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
    const id = document.getElementById('exampleModal').getAttribute('data-id');
    const commentID = id.trim();
    const username = document.getElementById('name').value;
    const comment = document.getElementById('insights').value;
    const commentObj = {
      item_id: commentID,
      username,
      comment,
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
      countries = data.slice(0, 8);
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
