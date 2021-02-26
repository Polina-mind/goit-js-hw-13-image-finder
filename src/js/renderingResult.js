// import { invalidRequestAlert, noPicturesAlert } from './notification';
import { alert } from '@pnotify/core/dist/PNotify.js';
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
    // invalidRequestAlert;
    alert({
      text: 'Invalid request, try again!',
      delay: 2000,
    });
  } else {
    // noPicturesAlert;
    alert({
      text: 'No more pictures...',
      delay: 2000,
    });
  }
}

export default renderingResult;
