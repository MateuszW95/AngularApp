import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie-service/movie.service';
import {Subscription} from 'rxjs';
import {Movie} from '../../models/movie';
import {DeleteConfirmDialogComponent} from '../../components/delete-confirm-dialog/delete-confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  movieSub: Subscription;
  movies: Movie[];
  selectedMovie: Movie;


  constructor(private movieService: MovieService, public dialog: MatDialog) {
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

  deleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie._id).subscribe(data => {
      this.ngOnInit();
    });
  }

  openDialog(movie: Movie): void {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: movie
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteMovie(movie);
      }
    });
  }

  getTheOldestMovie(): Movie {
    let minMovie: Movie = null;
    if (this.movies) {

      this.movies.forEach(m => {
        if (!minMovie) {
          minMovie = m;
        } else {
          if (new Date(m.released).getMilliseconds() < new Date(minMovie.released).getMilliseconds()) {
            minMovie = m;
          }
        }
      });
    }
    return minMovie;
  }

  getDate(movie: Movie) {
    return new Date(movie.released);
  }
}


