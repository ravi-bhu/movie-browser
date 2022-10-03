import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TheMovieDbInterceptor } from './the-movie-db.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TheMovieDbInterceptor, multi: true },
];
