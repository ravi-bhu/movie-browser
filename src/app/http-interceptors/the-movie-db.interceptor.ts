import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const theMovieDbInterceptor: HttpInterceptorFn = (req, next) => {
  let theMovieDbUrl = req;
  if (req.url.startsWith('https://api.themoviedb.org/')) {
    theMovieDbUrl = req.clone({
      headers: req.headers
        .append('Authorization', `Bearer ${environment.theMovieDb.token}`)
        .append('Content-Type', 'application/json;charset=utf-8'),
    });
  }
  return next(theMovieDbUrl);
};
