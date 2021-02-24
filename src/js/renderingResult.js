import refs from './refs';
import photoCardTpl from '../js/templates/card.hbs';

function renderingResult(filteredArray) {
  refs.finder.insertAdjacentHTML('beforeend', photoCardTpl(filteredArray));
  refs.moreButton.classList.add('isOn');
}

export default renderingResult;
