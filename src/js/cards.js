import templateEl from '../templates/template.hbs';
import menu from '../menu.json';

const ulEl = document.querySelector('.js-menu');

function createMenu(elements) {
    const liEl = elements.map(element => templateEl(element)).join('');
    ulEl.insertAdjacentHTML('beforeend', liEl);
}
createMenu(menu);