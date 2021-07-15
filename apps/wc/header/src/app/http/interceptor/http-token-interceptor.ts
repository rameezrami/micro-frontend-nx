import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
//   constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer CHILD TOKEN`
    //   }
    // });
    return next.handle(request);
  }
}