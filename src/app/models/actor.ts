import {MovieMock} from './movie-mock';

export interface Actor {
  id: number;
  name: string;
  movies: MovieMock[];
}
