import { TestBed } from '@angular/core/testing';

import { TheMovieDbInterceptor } from './the-movie-db.interceptor';

describe('TheMovieDbInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TheMovieDbInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TheMovieDbInterceptor = TestBed.inject(TheMovieDbInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
