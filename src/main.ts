import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { theMovieDbInterceptor } from './app/http-interceptors/the-movie-db.interceptor';
import { APP_ROUTES } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(withInterceptors([theMovieDbInterceptor])),
    provideAnimations(),
  ],
}).catch(console.error);
