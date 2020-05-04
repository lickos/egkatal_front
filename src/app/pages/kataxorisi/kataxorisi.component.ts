import { Component, OnInit } from '@angular/core';
import { OXIMA } from './../../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-kataxorisi',
  templateUrl: './kataxorisi.component.html',
  styleUrls: ['./kataxorisi.component.scss'],
})
export class KataxorisiComponent implements OnInit {
  kodikos: string;
  imerominia: string;
  eidos: string;
  marka: string;
  color: string;
  address: string;
  paratiriseis: string;
  baseUrl: string = 'http://localhost/egkatal/egkatal_back';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitIt() {
    let oxima: OXIMA = {
      kodikos: this.kodikos,
      hmerominia: this.imerominia,
      eidos: this.eidos,
      marka: this.marka,
      xroma: this.color,
      diefthinsi: this.address,
      paratiriseis: this.paratiriseis,
    };
    this.http
      .post<OXIMA>(`${this.baseUrl}/sendoxima`, JSON.stringify(oxima))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
