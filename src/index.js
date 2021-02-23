var debounce = require('lodash.debounce');
import refs from './js/refs';
import apiService from './js/apiService';
import renderingResult from './js/renderingResult';
import './styles.css';

let page = 1;

refs.searchForm.addEventListener(
  'input',
  debounce(event => {
    const inputString = event.target.value;
    console.log(inputString);

    refs.finder.innerHTML = '';
    page = 1;

    if (inputString.length > 0) {
      apiService(inputString, page).then(renderingResult);
    } else {
      refs.finder.innerHTML = '';
    }
  }, 800),
);
