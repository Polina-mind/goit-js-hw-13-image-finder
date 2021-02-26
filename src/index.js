import { alert } from '@pnotify/core/dist/PNotify.js';
// import { emptyStringAlert } from './js/notification';
import refs from './js/refs';
import apiService from './js/apiService';
import renderingResult from './js/renderingResult';
import './styles.css';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  apiService.userQuery = event.currentTarget.elements.query.value;

  refs.finder.innerHTML = '';
  apiService.resetPage();

  if (apiService.userQuery.length > 0) {
    apiService.fetchCards().then(renderingResult);
  } else {
    refs.finder.innerHTML = '';
    refs.moreButton.classList.remove('isOn');

    // emptyStringAlert;
    alert({
      text: 'Find nothing! Please input your query!',
      delay: 2000,
    });
  }
});

refs.moreButton.addEventListener('click', () => {
  let height;
  apiService
    .fetchCards()
    .finally(() => (height = document.documentElement.offsetHeight))
    .then(renderingResult)
    .then(() =>
      window.scrollTo({
        top: height,
        behavior: 'smooth',
      }),
    );
});
