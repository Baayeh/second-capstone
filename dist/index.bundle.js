"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[826],{63:()=>{const t="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi",n=class{static getCountries=async()=>(await fetch("https://restcountries.com/v3.1/all")).json();static createApp=async()=>(await fetch(`${t}/apps`,{method:"POST",body:null})).text();static getLikes=async()=>(await fetch(`${t}/apps/SIZ2d4YlpQTQgaTw33yY/likes`)).json()},e=document.querySelector(".country-list");let s=[];const a=(t,n=[])=>{if(t.length){const s=t.map((t=>{const e=n.find((n=>{if(n.item_id===t.name.common)return n}));return{...t,likesCount:e?e.likes:0}}));s.length&&(async t=>{e.innerHTML=t.map((t=>`<li class="country-item">\n    <div class="card">\n      <div class="country-img">\n        <img src="${t.flags.svg}" alt="Ugandan Flag">\n      </div>\n      <div class="card-body">\n        <p class="country-name mb-0">${t.name.common}</p>\n        <div class="likes">\n        <a href="javascript:;" type="button" class='add-like' id=${t.name.common}>\n            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>\n          </a>\n          <span class="likes-counter">${t.likesCount} likes</span>\n        </div>\n      </div>\n      <div class="actions">\n        <button type="button">Comments</button>\n      </div>\n    </div>\n  </li>`)).join("")})(s)}};document.addEventListener("DOMContentLoaded",(()=>{n.getCountries().then((t=>(s=t.slice(0,6),n.getLikes()))).then((t=>{a(s,t)})).catch((()=>{a(s,[])}))}))}},t=>{t(t.s=63)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI0R0FDQSxNQUdNQSxFQUNKLHFFQTJCRixFQXZCQSxNQUVFQyxvQkFBc0JDLGdCQUNHQyxNQUFNLHVDQUNiQyxPQUlsQkgsaUJBQW1CQyxnQkFDTUMsTUFBTSxHQUFHSCxTQUFzQixDQUNwREssT0FBUSxPQUNSQyxLQUFNLFFBRVFDLE9BSWxCTixnQkFBa0JDLGdCQUNPQyxNQUFNLEdBQUdILHNDQUNoQkksUUM1QmRJLEVBQWNDLFNBQVNDLGNBQWMsaUJDa0MzQyxJQUFJQyxFQUFlLEdBRW5CLE1BQU1DLEVBQXNCLENBQUNELEVBQWNFLEVBQVEsTUFDakQsR0FBSUYsRUFBYUcsT0FBUSxDQUN2QixNQUFNQyxFQUFVSixFQUFhSyxLQUFLQyxJQUNoQyxNQUFNQyxFQUFVTCxFQUFNTSxNQUFNQyxJQUMxQixHQUFJQSxFQUFLQyxVQUFZSixFQUFRSyxLQUFLQyxPQUNoQyxPQUFPSCxDQUNULElBRUYsTUFBTyxJQUNGSCxFQUNITyxXQUFZTixFQUFVQSxFQUFRTCxNQUFRLEVBQ3ZDLElBR0hFLEVBQVFELFFBMUNhWixPQUFPdUIsSUFDOUJqQixFQUFZa0IsVUFBWUQsRUFDckJULEtBQ0VDLEdBQVkseUdBR0NBLEVBQVFVLE1BQU1DLCtHQUdLWCxFQUFRSyxLQUFLQyw2R0FFZU4sRUFBUUssS0FBS0MsaVpBR3hDTixFQUFRTywyS0FTM0NLLEtBQUssR0FBRyxFQW1CU0MsQ0FBaUJmLEVBQ3JDLEdBaUJGTixTQUFTc0IsaUJBQWlCLG9CQWRBLEtBQ3hCLGlCQUNHQyxNQUFNUCxJQUNMZCxFQUFlYyxFQUFVUSxNQUFNLEVBQUcsR0FDM0IsZ0JBRVJELE1BQU1FLElBQ0x0QixFQUFvQkQsRUFBY3VCLEVBQVUsSUFFN0NDLE9BQU0sS0FDTHZCLEVBQW9CRCxFQUFjLEdBQUcsR0FDckMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0RPTUVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ091bnRyaWVzIEFQSVxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9wZXJhdG9yLWxpbmVicmVha1xuY29uc3QgSU5WVk9MVkVEX1VSTCA9XG4gICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xuXG5jb25zdCBBUFBfSUQgPSAnU0laMmQ0WWxwUVRRZ2FUdzMzeVknO1xuXG5jbGFzcyBBUEkge1xuICAvLyBHZXQgbGlzdCBvZiBjb3VudHJpZXNcbiAgc3RhdGljIGdldENvdW50cmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9hbGxgKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9O1xuXG4gIC8vIGNyZWF0ZSBhcHAgdG8gc3RvcmUgbGlrZXMgLS0tLS0tPiAgICAvYXBwcy9cbiAgc3RhdGljIGNyZWF0ZUFwcCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0lOVlZPTFZFRF9VUkx9L2FwcHNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IG51bGwsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgfTtcblxuICAvLyBHZXQgYWxsIExpa2VzIC0tLS0tPiAgL2FwcHMvOmFwcF9pZC9saWtlcy9cbiAgc3RhdGljIGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7SU5WVk9MVkVEX1VSTH0vYXBwcy8ke0FQUF9JRH0vbGlrZXNgKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG4iLCJjb25zdCBjb3VudHJ5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5LWxpc3QnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IGNvdW50cnlMaXN0IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuaW1wb3J0IEFQSSBmcm9tICcuL21vZHVsZXMvQVBJLmpzJztcbmltcG9ydCB7IGNvdW50cnlMaXN0IH0gZnJvbSAnLi9tb2R1bGVzL0RPTUVsZW1lbnRzLmpzJztcblxuLy8gRGlzcGxheSB0aGUgbGlzdCBvZiBjb3VudHJpZXNcbmNvbnN0IGRpc3BsYXlDb3VudHJpZXMgPSBhc3luYyAoY291bnRyaWVzKSA9PiB7XG4gIGNvdW50cnlMaXN0LmlubmVySFRNTCA9IGNvdW50cmllc1xuICAgIC5tYXAoXG4gICAgICAoY291bnRyeSkgPT4gYDxsaSBjbGFzcz1cImNvdW50cnktaXRlbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeS1pbWdcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2NvdW50cnkuZmxhZ3Muc3ZnfVwiIGFsdD1cIlVnYW5kYW4gRmxhZ1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiY291bnRyeS1uYW1lIG1iLTBcIj4ke2NvdW50cnkubmFtZS5jb21tb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXNcIj5cbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz0nYWRkLWxpa2UnIGlkPSR7Y291bnRyeS5uYW1lLmNvbW1vbn0+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaWtlcy1jb3VudGVyXCI+JHtjb3VudHJ5Lmxpa2VzQ291bnR9IGxpa2VzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2xpPmBcbiAgICApXG4gICAgLmpvaW4oJycpO1xufTtcblxubGV0IHNpeENvdW50cmllcyA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdDb3VudHJ5T2JqID0gKHNpeENvdW50cmllcywgbGlrZXMgPSBbXSkgPT4ge1xuICBpZiAoc2l4Q291bnRyaWVzLmxlbmd0aCkge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBzaXhDb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiB7XG4gICAgICBjb25zdCBsaWtlc05vID0gbGlrZXMuZmluZCgobGlrZSkgPT4ge1xuICAgICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBjb3VudHJ5Lm5hbWUuY29tbW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGxpa2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY291bnRyeSxcbiAgICAgICAgbGlrZXNDb3VudDogbGlrZXNObyA/IGxpa2VzTm8ubGlrZXMgOiAwLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIG5ld0xpc3QubGVuZ3RoICYmIGRpc3BsYXlDb3VudHJpZXMobmV3TGlzdCk7XG4gIH1cbn07XG5cbmNvbnN0IGZldGNoQWxsQ291bnRyaWVzID0gKCkgPT4ge1xuICBBUEkuZ2V0Q291bnRyaWVzKClcbiAgICAudGhlbigoY291bnRyaWVzKSA9PiB7XG4gICAgICBzaXhDb3VudHJpZXMgPSBjb3VudHJpZXMuc2xpY2UoMCwgNik7XG4gICAgICByZXR1cm4gQVBJLmdldExpa2VzKCk7XG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UxKSA9PiB7XG4gICAgICBjcmVhdGVOZXdDb3VudHJ5T2JqKHNpeENvdW50cmllcywgcmVzcG9uc2UxKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjcmVhdGVOZXdDb3VudHJ5T2JqKHNpeENvdW50cmllcywgW10pO1xuICAgIH0pO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZldGNoQWxsQ291bnRyaWVzKTtcbiJdLCJuYW1lcyI6WyJJTlZWT0xWRURfVVJMIiwic3RhdGljIiwiYXN5bmMiLCJmZXRjaCIsImpzb24iLCJtZXRob2QiLCJib2R5IiwidGV4dCIsImNvdW50cnlMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2l4Q291bnRyaWVzIiwiY3JlYXRlTmV3Q291bnRyeU9iaiIsImxpa2VzIiwibGVuZ3RoIiwibmV3TGlzdCIsIm1hcCIsImNvdW50cnkiLCJsaWtlc05vIiwiZmluZCIsImxpa2UiLCJpdGVtX2lkIiwibmFtZSIsImNvbW1vbiIsImxpa2VzQ291bnQiLCJjb3VudHJpZXMiLCJpbm5lckhUTUwiLCJmbGFncyIsInN2ZyIsImpvaW4iLCJkaXNwbGF5Q291bnRyaWVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoZW4iLCJzbGljZSIsInJlc3BvbnNlMSIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==