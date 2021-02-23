import refs from './refs';
import photoCardTpl from '../js/templates/card.hbs';

function renderingResult(filteredArray) {
  refs.finder.insertAdjacentHTML('beforeend', photoCardTpl(filteredArray));
}

export default renderingResult;
