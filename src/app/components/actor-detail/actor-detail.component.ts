import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../models/actor';
import {MovieMock} from '../../models/movie-mock';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {

  @Input() selectedActor: Actor = null;

  constructor() {
  }

  ngOnInit(): void {
  }


  calculateAvg(): number {
    let sum = 0;
    if (this.selectedActor && this.selectedActor.movies.length > 0) {
      this.selectedActor.movies.forEach(v => {
        sum = sum + v.value;
      });
      return sum / this.selectedActor.movies.length;
    } else {
      return 0;
    }

  }

  removeMovie(movie: MovieMock) {
    this.selectedActor.movies = this.selectedActor.movies.filter(g => {
      return g.title !== movie.title;
    });
  }

  addMovie(movie: MovieMock) {
    this.selectedActor.movies.push(movie);
  }
}
