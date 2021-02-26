import { invalidRequestAlert, noPicturesAlert } from './notification';
import refs from './refs';
import apiService from './apiService';
import photoCardTpl from '../js/templates/card.hbs';

function renderingResult(filteredArray) {
  if (filteredArray.length > 0) {
    refs.finder.insertAdjacentHTML('beforeend', photoCardTpl(filteredArray));
    refs.moreButton.classList.add('isOn');
    return;
  }

  if (apiService.page <= 2) {
    invalidRequestAlert();
  } else {
    noPicturesAlert();
  }
}

export default renderingResult;
