import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { AuthorizeService } from './authorize.service';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';
import { LanguageService } from '../shared/services/language.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeInterceptor implements HttpInterceptor {
  constructor(private authorize: AuthorizeService, private jwtTokenService: JwtHelperService, private languageService: LanguageService) { }
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') } })
  }
  addAcceptLanguage(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({ setHeaders: { 'Accept-Language': localStorage.getItem('language')?localStorage.getItem('language'):'en' } })
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authorize.getJwtToken()) {
      request = this.addToken(request, this.authorize.getJwtToken());
    }
    request = this.addAcceptLanguage(request);
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }
  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);
      return this.authorize.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshingToken = false;
          this.tokenSubject.next(token.jwt);
          return next.handle(this.addToken(req, token.jwt));
        }));

    } else {
      return this.tokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(req, jwt));
        }));
    }
  }

  /*
    This method is only here so the example works.
    Do not include in your code, just use 'req' instead of 'this.getNewRequest(req)'.
  */


  logoutUser() {
    // Route to the login page (implementation up to you)
    this.authorize.logout();
    return throwError("");
  }


}
