import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Actor} from '../../models/actor';
import {ACTORS} from '../../mock-actors';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() {
  }

  getActors(): Observable<Actor[]> {
    return of(ACTORS);
  }
}
