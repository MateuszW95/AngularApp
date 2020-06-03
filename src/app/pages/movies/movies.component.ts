import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie-service/movie.service';
import {Subscription} from 'rxjs';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  movieSub: Subscription;
  movies: Movie[];
  selectedMovie: Movie;


  constructor(private movieService: MovieService) {
  }


  ngOnInit(): void {

    this.movieSub = this.movieService.getMovies().subscribe(data => {
      this.movies = data;
      console.log(JSON.stringify(data));
    });
  }

  onMovieSelected(movie) {
    this.selectedMovie = movie;
  }

  onUpdate(movie: Movie) {
    this.movies[this.movies.indexOf(movie)] = movie;
  }

}
