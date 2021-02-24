var debounce = require('lodash.debounce');
import refs from './js/refs';
import apiService from './js/apiService';
import renderingResult from './js/renderingResult';
// import spinner from './js/spinner';
import './styles.css';

refs.searchForm.addEventListener(
  'input',
  debounce(event => {
    apiService.userQuery = event.target.value;

    refs.finder.innerHTML = '';
    apiService.resetPage();

    if (apiService.userQuery.length > 0) {
      //   spinner.spin();
      apiService.fetchCards().then(renderingResult);
    } else {
      refs.finder.innerHTML = '';
      refs.moreButton.classList.remove('isOn');
    }
  }, 500),
);

refs.moreButton.addEventListener('click', () => {
  apiService.fetchCards().then(renderingResult);

  setTimeout(function () {
    window.scrollTo(0, document.documentElement.offsetHeight);
  }, 1);

  // Не работает :((
  //  console.log(document.documentElement.offsetHeight);
  // window.scrollTo({
  //     top: document.documentElement.offsetHeight,
  //     behavior: 'smooth',
  // });
});
