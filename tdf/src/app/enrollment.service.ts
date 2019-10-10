import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
// we will be catching error from the server and throwing it to the subscribed component.
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = "http://localhost:3000/enroll";
  
  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    // The post request will return the response as an observable, 
    // so we need to subscribe the observable in app.compomnent.ts .
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
