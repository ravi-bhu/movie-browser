import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Page } from '../../model/Page';
import { MovieSummary } from '../../model/MovieSummary';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Page<MovieSummary>> = of({
    page: 1,
    results: [],
    totalResults: 0,
    totalPages: 0,
  });

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies$ = this.movieService.fetchPopularMovies();
  }
}
