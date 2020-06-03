import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../../models/movie';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private BASE_URL = 'https://mw95app.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getBaseUrl() {
    return this.BASE_URL;
  }

  getMovies() {
    return this.http.get<Movie[]>('/api/movies');
  }

  updateMovie(movie: Movie) {
    return this.http.patch('/api/movie/' + movie._id, {
      title: movie.title,
      description: movie.description,
      genre: movie.genre,
      rating: movie.rating,
      released: formatDate(new Date(movie.released), 'yyyy-MM-dd', 'en-US')
    })
      ;
  }

  deleteMovie(id: string) {
    return this.http.delete('/api/movie/' + id);
  }
}
