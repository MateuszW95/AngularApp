import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActorService} from '../../services/actors-service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit, OnDestroy {

  actors = [];
  selectedActor;
  actorSubscription: Subscription;


  constructor(private actorService: ActorService) {
  }

  ngOnInit(): void {
    this.actorSubscription = this.actorService.getActors().subscribe(item => {
      this.actors = item;
    });
  }

  ngOnDestroy(): void {
    this.actorSubscription.unsubscribe();
  }

  onActorSelected(actor) {
    this.selectedActor = actor;
  }

}
