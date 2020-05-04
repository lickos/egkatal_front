import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private getData: GetDataService) {}

  ngOnInit(): void {
    this.getData.getAll().subscribe((data) => {
      console.log(data);
    });
  }
}
