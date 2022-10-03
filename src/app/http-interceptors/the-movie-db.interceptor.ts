import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class TheMovieDbInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let theMovieDbUrl = request;
    if (request.url.startsWith('https://api.themoviedb.org/')) {
      theMovieDbUrl = request.clone({
        headers: request.headers
          .append('Authorization', `Bearer ${environment.theMovieDb.token}`)
          .append('Content-Type', 'application/json;charset=utf-8'),
      });
    }
    return next.handle(theMovieDbUrl);
  }
}
