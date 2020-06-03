import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieMock} from '../../models/movie-mock';

@Component({
  selector: 'app-actor-movie',
  templateUrl: './actor-movie.component.html',
  styleUrls: ['./actor-movie.component.scss']
})
export class ActorMovieComponent implements OnInit {

  @Input() movies: MovieMock[];
  @Output() delete = new EventEmitter<MovieMock>();
  @Output() add = new EventEmitter<MovieMock>();

  newMovieTitle: string;
  newMovieValue = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  onRemoveClick(grade) {
    this.delete.emit(grade);
  }

  onAddClick() {
    if (this.newMovieTitle && this.newMovieTitle.length > 0 && this.newMovieValue >= 0 && this.newMovieValue <= 10) {
      const newMovie = new MovieMock();
      newMovie.title = this.newMovieTitle;
      newMovie.value = this.newMovieValue;
      this.add.emit(newMovie);
      this.newMovieTitle = '';
      this.newMovieValue = 1;
    }
  }

}
