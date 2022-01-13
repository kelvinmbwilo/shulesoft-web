import { Injectable } from '@angular/core';
import {BehaviorSubject, observable, Observable, throwError} from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store';
let authenticationtoken: string;
// const loadedUsers = {};
const loadedItems:any = {};

export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const token = localStorage.getItem('radamile-web-token');
    if (token) {
      // Pass the cloned request instead of the original request to the next handle
      return next.handle(
        req.clone({
          headers: req.headers.set('Authorization', 'Basic ' + token),
        })
      );
    }
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Basic ' + authenticationtoken),
    });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}

@Injectable({ providedIn: 'root' })
export class UserService {
  userGroups: any;
  user$!: Observable<any>;

  constructor(
    private store: Store<ApplicationState>,
    private http: HttpClient,
  ) { }

  getCurrentUser() {
    return new Observable((observe: any) => {
      //userCredentials.userRoles.
      observe.next({name: 'Kelvin', userCredentials: { userRoles: []}})
    });
  }

  getUserToken(): string {
    const token = localStorage.getItem('radamile-web-token');
    if (token) {
      return token;
    }
    return '';
  }

}
