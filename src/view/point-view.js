import AbstractView from '../framework/view/abstract-view.js';
import { convertPointDateIntoDay, convertPointDateIntoHour, subtractDates, checkFavoriteOption, capitalizeFirstLetter } from '../utils/task.js';
import { DESTINATIONS } from '../mock/point.js';
import { OFFERS } from '../mock/offers.js';

const createOffersListTemplate = (offers) => {
  const selectedOffers = offers.map((offer) => OFFERS.find((item) => item.id === offer));

  return (`<ul class="event__selected-offers">
  ${selectedOffers.map((offer) => `<li class="event__offer">
  <span class="event__offer-title">${offer.title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${offer.price}</span>
</li>`).join('\n')}
</ul>`);

};

const createPointTemplate = (point) => {
  const {basePrice, destination, startDate, endDate, isFavorite, offers, type} = point;
  const pointName = DESTINATIONS.find((item) => (item.id === destination)).name;

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${convertPointDateIntoDay(startDate)}">${convertPointDateIntoDay(startDate)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${capitalizeFirstLetter(type)} ${pointName}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${convertPointDateIntoHour(startDate)}">${convertPointDateIntoHour(startDate)}</time>
          &mdash;
          <time class="event__end-time" datetime="${convertPointDateIntoHour(endDate)}">${convertPointDateIntoHour(endDate)}</time>
        </p>
        <p class="event__duration">${subtractDates(startDate, endDate)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${(offers.length === 0) ? '' : createOffersListTemplate(offers)}
      <button class="event__favorite-btn ${checkFavoriteOption(isFavorite)}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};

export default class PointView extends AbstractView {

  #point = null;

  constructor(point) {
    super();
    this.#point = point;
  }

  get template() {
    return createPointTemplate(this.#point);
  }

  setEditRollUpHandler = (callback) => {
    this._callback.editRollUp = callback;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#rollUpHandler);
  };

  #rollUpHandler = (evt) => {
    evt.preventDefault();
    this._callback.editRollUp();
  };

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;

    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  };

}
