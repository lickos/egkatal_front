import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mock } from './mock/mockData';
import { OXIMA } from './interfaces/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  oxima: OXIMA = mock;
  baseUrl: string = 'http://localhost/egkatal/egkatal_back';

  constructor(private http: HttpClient) {}

  insertDummyData() {
    console.log(JSON.stringify(this.oxima));
    console.log(typeof JSON.stringify(this.oxima));
    this.http
      .post(`${this.baseUrl}/sendoxima`, JSON.stringify(this.oxima))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
