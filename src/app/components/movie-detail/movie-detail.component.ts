import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie-service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Output() emitter = new EventEmitter<Movie>();
  @Input() movie: Movie;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
  }


  save() {
    if (this.movie.title.length > 0 && this.movie.description.length > 0) {
      this.movieService.updateMovie(this.movie).subscribe(data => {
        this.emitter.emit(this.movie);
      });
    }
  }

}
