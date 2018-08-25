import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';



@Injectable()
export class AuthinterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
   }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (this.authService.loggedIn()) {
      let token = this.authService.getToken();
      req = req.clone({ headers: req.headers.set('Authorization', token) });
    }
    return next.handle(req)
  }
}
