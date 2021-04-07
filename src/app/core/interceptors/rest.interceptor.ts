import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Injectable()
export class RestInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json'
      }
    });
    return next.handle(request);
      // .pipe(
      //   catchError((error: HttpErrorResponse) => {
      //     console.log('interceptor zachytil errorik',err)
      //     return throwError(error);
      //   })
      // );
  }
}
