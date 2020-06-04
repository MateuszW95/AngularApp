import {Actor} from './models/actor';

export const ACTORS: Actor[] = [
  {
    id: 37014, name: 'Jan Kowalski',
    movies: [
      {title: 'Ogniem i mieczem', value: 6.0},
      {title: 'Pan Tadeusz', value: 7.5},
      {title: 'Krzyżacy', value: 4.0},
    ]
  },
  {
    id: 37015, name: 'Marek Nowak',
    movies: [
      {title: 'Ogniem i mieczem', value: 4.0},
      {title: 'Pan Tadeusz', value: 3.5},
      {title: 'Krzyżacy', value: 5.0},
    ]
  },
  {
    id: 37015, name: 'Michał Kowalczyk',
    movies: [
      {title: 'Ogniem i mieczem', value: 7.0},
      {title: 'Pan Tadeusz', value: 2.5},
      {title: 'Krzyżacy', value: 7.0},
      {title: 'Pan Wołodyjowski', value: 5.0}
    ]
  }

];
