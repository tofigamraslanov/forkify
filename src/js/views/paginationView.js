import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numberOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (currentPage === 1 && numberOfPages > 1)
      return this._generateMarkupButtonNext(currentPage + 1);

    if (currentPage === numberOfPages && numberOfPages > 1)
      return this._generateMarkupButtonPrev(currentPage - 1);

    if (currentPage < numberOfPages)
      return `${this._generateMarkupButtonPrev(
        currentPage - 1
      )} ${this._generateMarkupButtonNext(currentPage + 1)}`;

    return '';
  }

  _generateMarkupButtonNext(page) {
    return `
        <button data-goto='${page}' class='btn--inline pagination__btn--next'>
          <span>Page ${page}</span>
          <svg class='search__icon'>
            <use href='${icons}#icon-arrow-right'></use>
          </svg>
        </button>
      `;
  }

  _generateMarkupButtonPrev(page) {
    return `
        <button data-goto='${page}' class='btn--inline pagination__btn--prev'>
          <svg class='search__icon'>
            <use href='${icons}#icon-arrow-left'></use>
          </svg>
          <span>Page ${page}</span>
        </button>
      `;
  }
}

export default new PaginationView();
