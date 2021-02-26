import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { defaultModules, error, alert } from '@pnotify/core/dist/PNotify.js';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
// import { invalidRequestAlert, noPicturesAlert } from './js/notification';
import refs from './refs';
import apiService from './apiService';
import photoCardTpl from '../js/templates/card.hbs';

defaults.styling = 'material';
defaults.icons = 'material';
defaultModules.set(PNotifyMobile, {});

function renderingResult(filteredArray) {
  if (filteredArray.length > 0) {
    refs.finder.insertAdjacentHTML('beforeend', photoCardTpl(filteredArray));
    refs.moreButton.classList.add('isOn');
    return;
  }

  if (apiService.page <= 2) {
    // invalidRequestAlert;
    error({
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
