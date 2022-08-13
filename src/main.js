import PointFilterView from './view/filter-view.js';
import PointSortView from './view/sort-view.js';
import RoutePresenter from './presenter/route-presenter.js';
import TripInfoView from './view/trip-info-view.js';
import {RenderPosition, render} from './render.js';


const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-body__page-main');
const tripMainElement = document.querySelector('.trip-main');
const tripControlsElement = headerElement.querySelector('.trip-controls__filters');
const tripEventsElement = mainElement.querySelector('.trip-events');
const routePresenter = new RoutePresenter();

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new PointFilterView(), tripControlsElement);
render(new PointSortView(), tripEventsElement);
routePresenter.init(tripEventsElement);

