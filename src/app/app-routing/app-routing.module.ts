import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloWorldComponent} from '../pages/hello-world/hello-world.component';
import {MoviesComponent} from '../pages/movies/movies.component';

const routes: Routes = [
  {path: 'home', component: HelloWorldComponent},
  {path: 'movies', component: MoviesComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
