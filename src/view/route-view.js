import {createElement} from '../render.js';

const createRouteTemplate = () => (
  '<section class="trip-events"></section>'
);

export default class RouteView {
  #element = null;

  get template() {
    return createRouteTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
