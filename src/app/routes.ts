import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
