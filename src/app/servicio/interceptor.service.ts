import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const data = JSON.parse(localStorage.getItem('gTdhs%HJ324SDgd'));
    //console.log(data);
    if (data) {
      request = request.clone({
        setHeaders: {
          //Authorization: `${data.token_type} ${data.access_token}`
          'App': 'APP_BCK',
          'token': data.sessionTokenBck,
          'adminemail': data.email
        }
      });
    }
    return next.handle(request);
  }
}

