var debounce = require('lodash.debounce');
import refs from './js/refs';
import apiService from './js/apiService';
import renderingResult from './js/renderingResult';
import './styles.css';

refs.searchForm.addEventListener(
  'input',
  debounce(event => {
    const inputString = event.target.value;

    if (inputString.length > 0) {
      apiService(inputString).then(renderingResult);
    } else {
      refs.finder.innerHTML = '';
    }
  }, 500),
);
