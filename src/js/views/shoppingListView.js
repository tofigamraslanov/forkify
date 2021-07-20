import View from './View.js';
import shoppingListItemPreview from './shoppingListItemPreview.js';

class ShoppingList extends View {
  _parentElement = document.querySelector('.shopping__list');
  _errorMessage = 'You do not have any shopping list item yet:)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerDeleteShoppingListItem(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.shopping__delete');
      if (!btn) return;

      const id = btn.parentElement.dataset.itemid;
      handler(id);
    });
  }

  addHandlerUpdateShoppingListItem(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.shopping__count');
      if (!btn) return;
      const id = btn.parentElement.dataset.itemid;

      let value = 0;
      if (e.target.matches('.shopping__count-value')) {
        value = parseFloat(e.target.value, 10);
        handler(id, value);
      }
    });
  }

  _generateMarkup() {
    return this._data
      .map(shoppingListItem =>
        shoppingListItemPreview.render(shoppingListItem, false)
      )
      .join('');
  }
}

export default new ShoppingList();
