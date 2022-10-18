"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[826],{63:()=>{const n=class{static getCountries=async()=>(await fetch("https://restcountries.com/v3.1/all")).json()},s=document.querySelector(".country-list");document.addEventListener("DOMContentLoaded",(async()=>{const t=(await n.getCountries()).slice(0,6);s.innerHTML=t.map((n=>`<li class="country-item">\n    <div class="card">\n      <div class="country-img">\n        <img src="${n.flags.svg}" alt="Ugandan Flag">\n      </div>\n      <div class="card-body">\n        <p class="country-name mb-0">${n.name.common}</p>\n        <div class="likes">\n          <a href="" type="button">\n            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>\n          </a>\n          <span class="likes-counter">5 likes</span>\n        </div>\n      </div>\n      <div class="actions">\n        <button type="button">Comments</button>\n      </div>\n    </div>\n  </li>`)).join("")})())}},n=>{n(n.s=63)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI0R0FTQSxRQVBBLE1BQ0VBLG9CQUFzQkMsZ0JBQ0dDLE1BQU0sdUNBQ2JDLFFDSHBCLEVBRm9CQyxTQUFTQyxjQUFjLGlCQ2dDM0NELFNBQVNFLGlCQUFpQixtQkE1QkRMLFdBQ3ZCLE1BQ01NLFNBRGtCLGtCQUNPQyxNQUFNLEVBQUcsR0FDeEMsWUFBd0JELEVBQ3JCRSxLQUNFQyxHQUFZLHlHQUdDQSxFQUFRQyxNQUFNQywrR0FHS0YsRUFBUUcsS0FBS0MscW5CQWMvQ0MsS0FBSyxHQUFHLEVBR2lDQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0FQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvRE9NRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEnO1xuXG5jbGFzcyBBUEkge1xuICBzdGF0aWMgZ2V0Q291bnRyaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FsbGApO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSTtcbiIsImNvbnN0IGNvdW50cnlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnktbGlzdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudHJ5TGlzdDtcbiIsImltcG9ydCBBUEkgZnJvbSAnLi9tb2R1bGVzL0FQSS5qcyc7XG5pbXBvcnQgY291bnRyeUxpc3QgZnJvbSAnLi9tb2R1bGVzL0RPTUVsZW1lbnRzLmpzJztcblxuLy8gRGlzcGxheSB0aGUgbGlzdCBvZiBjb3VudHJpZXNcbmNvbnN0IGRpc3BsYXlDb3VudHJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IEFQSS5nZXRDb3VudHJpZXMoKTtcbiAgY29uc3Qgc2l4Q291bnRyaWVzID0gY291bnRyaWVzLnNsaWNlKDAsIDYpO1xuICBjb3VudHJ5TGlzdC5pbm5lckhUTUwgPSBzaXhDb3VudHJpZXNcbiAgICAubWFwKFxuICAgICAgKGNvdW50cnkpID0+IGA8bGkgY2xhc3M9XCJjb3VudHJ5LWl0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnktaW1nXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtjb3VudHJ5LmZsYWdzLnN2Z31cIiBhbHQ9XCJVZ2FuZGFuIEZsYWdcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8cCBjbGFzcz1cImNvdW50cnktbmFtZSBtYi0wXCI+JHtjb3VudHJ5Lm5hbWUuY29tbW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIlwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTYgaC02XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpa2VzLWNvdW50ZXJcIj41IGxpa2VzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2xpPmAsXG4gICAgKVxuICAgIC5qb2luKCcnKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkaXNwbGF5Q291bnRyaWVzKCkpO1xuIl0sIm5hbWVzIjpbInN0YXRpYyIsImFzeW5jIiwiZmV0Y2giLCJqc29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpeENvdW50cmllcyIsInNsaWNlIiwibWFwIiwiY291bnRyeSIsImZsYWdzIiwic3ZnIiwibmFtZSIsImNvbW1vbiIsImpvaW4iLCJkaXNwbGF5Q291bnRyaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==