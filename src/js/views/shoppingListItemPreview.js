import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ShoppingListItemPreview extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
        <li class="shopping__item" data-itemid=${this._data.id}>
            <div class="shopping__count">
                <input type="number" value="${this._data.count}" step="${this._data.count}" class="shopping__count-value" min="0">
                    <p>${this._data.unit}</p>
            </div>
            <p class="shopping__description">${this._data.ingredient}</p>
            <button class="shopping__delete btn--tiny">
                <svg>
                    <use href="${icons}#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>`;
  }
}

export default new ShoppingListItemPreview();
