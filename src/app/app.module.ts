import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MatChipsModule} from '@angular/material/chips';
import { MoviesComponent } from './pages/movies/movies.component';
import {MatTableModule} from '@angular/material/table';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { DeleteConfirmDialogComponent } from './components/delete-confirm-dialog/delete-confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ActorsComponent } from './pages/hello-world/actors/actors.component';
import { ActorListComponent } from './pages/actor-list/actor-list.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { ActorMovieComponent } from './components/actor-movie/actor-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MoviesComponent,
    MovieDetailComponent,
    DeleteConfirmDialogComponent,
    ActorsComponent,
    ActorListComponent,
    ActorDetailComponent,
    ActorMovieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatChipsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
