import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Page } from '../model/Page';
import { MovieSummary } from '../model/MovieSummary';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  fetchPopularMovies() {
    return this.httpClient
      .get<unknown>('https://api.themoviedb.org/3/movie/popular?page=1')
      .pipe(map(toMovieSummaryPage));
  }
}

const toMovieSummaryPage = (response: any): Page<MovieSummary> => {
  return {
    page: response.page,
    results: response.results.map(toMovieSummary),
    totalResults: response.total_results,
    totalPages: response.total_pages,
  };
};

const toMovieSummary = (data: any): MovieSummary => {
  return {
    id: data.id,
    title: data.title,
    posterPath: data.poster_path,
  };
};
