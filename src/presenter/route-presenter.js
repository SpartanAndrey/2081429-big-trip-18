import PointEditView from '../view/edit-point-view.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import {render} from '../render.js';

export default class RoutePresenter {
  pointListComponent = new PointListView();

  init = (routeContainer, pointsModel) => {
    this.routeContainer = routeContainer;
    this.pointsModel = pointsModel;
    this.routePoints = [...this.pointsModel.getPoints()];

    render(this.pointListComponent, this.routeContainer);
    render(new PointEditView(this.routePoints[0]), this.pointListComponent.getElement());

    for (let i = 1; i < this.routePoints.length; i++) {
      render(new PointView(this.routePoints[i]), this.pointListComponent.getElement());
    }
  };
}
