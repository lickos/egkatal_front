import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { OXIMA } from './../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  baseUrl = 'http://localhost/egkatal/egkatal_back';
  cars: OXIMA[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<OXIMA[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
