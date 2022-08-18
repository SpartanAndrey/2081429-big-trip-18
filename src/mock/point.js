import { getRandomInteger } from '../utils';
import { TYPES } from './const';
import { OFFERS } from './offers';

const DESTINATIONS = [
  {
    id: 1,
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563006163017',
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: 2,
    description: 'Paris, is a overcrowded dirty city.',
    name: 'Paris',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163327',
        description: 'Somewhere in Paris'
      }
    ]
  },
  {
    id: 3,
    description: 'Amsterdam, is a delightful free city',
    name: 'Amsterdam',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Amsterdam or not'
      }
    ]
  }
];


const generateType = () => {

  const randomIndex = getRandomInteger(0, TYPES.length - 1);

  return TYPES[randomIndex];
};

export const generatePoint = () => (
  {
    basePrice: getRandomInteger(100, 500),
    startDate: '2019-07-11T09:54:56.845Z',
    endDate: '2019-07-11T11:22:13.375Z',
    destination: getRandomInteger(1, DESTINATIONS.length),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: [... new Set(Array.from({length: getRandomInteger(0, OFFERS.length)}, () => getRandomInteger(1, OFFERS.length - 1)))],
    type: generateType(),
  });

export {DESTINATIONS};
