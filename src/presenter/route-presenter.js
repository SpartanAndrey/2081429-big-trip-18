import PointEditView from '../view/edit-point-view.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import {render} from '../render.js';

export default class RoutePresenter {
  pointListComponent = new PointListView();

  init = (routeContainer) => {
    this.routeContainer = routeContainer;

    render(this.pointListComponent, this.routeContainer);
    render(new PointEditView(), this.pointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }
  };
}
