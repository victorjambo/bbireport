import _ from '../../utils/constants';
import one from './one';
import two from './two';
import three from './three';
import four from './four';
import five from './five';
import six from './six';
import seven from './seven';
import eight from './eight';
import nine from './nine';
import ten from './ten';
import eleven from './eleven';

const highlights = [
  {
    id: _.ONE,
    title: 'Masuala Muhimu',
  },
  {
    id: _.TWO,
    title: 'Maadili ya Kitaifa',
  },
  {
    id: _.THREE,
    title: 'Majukumu na Haki za Uraia',
  },
  {
    id: _.FOUR,
    title: 'Uhasama wa Kikabila na Ushindani',
  },
  {
    id: _.FIVE,
    title: 'Chaguzi zenye kuleta Migawanyiko',
  },
  {
    id: _.SIX,
    title: 'Ushirikishwaji',
  },
  {
    id: _.SEVEN,
    title: 'Ustawi kwa Wote',
  },
  {
    id: _.EIGHT,
    title: 'Ufisadi',
  },
  {
    id: _.NINE,
    title: 'Ugatuzi',
  },
  {
    id: _.TEN,
    title: 'Usalama na Ulinzi',
  },
  {
    id: _.ELEVEN,
    title: 'Tume na Masuala Yanayogusa kila kipengee',
  },
];

const error = `<div>😱 Oops!!! Something went wrong
               </div>`;

const mapper = id => {
  switch (id) {
    case _.ONE:
      return one;
    case _.TWO:
      return two;
    case _.THREE:
      return three;
    case _.FOUR:
      return four;
    case _.FIVE:
      return five;
    case _.SIX:
      return six;
    case _.SEVEN:
      return seven;
    case _.EIGHT:
      return eight;
    case _.NINE:
      return nine;
    case _.TEN:
      return ten;
    case _.ELEVEN:
      return eleven;
    default:
      return error;
  }
};

export {highlights, mapper};
