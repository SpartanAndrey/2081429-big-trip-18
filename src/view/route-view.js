import {createElement} from '../render.js';

const createRouteTemplate = () => (
  '<section class="trip-events"></section>'
);

export default class RouteView {
  getTemplate() {
    return createRouteTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
