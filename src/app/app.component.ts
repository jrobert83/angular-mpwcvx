import { Component, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/observable/timer';
//import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cols: any[];
  dataMarts: any[];
  //sub: Subscription;
  first = 0;

  constructor() {}

  ngOnInit() {
    this.cols = [
      { field: 'Id', header: 'Id' },
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
    ];

    this.getDataFromApi();
    setInterval(() => {
      this.getDataFromApi();
    }, 3000);
  }

  getDataFromApi() {
    console.log('get data from api');
    this.dataMarts = [];
    for (let i = 0; i < 150; i++) {
      this.dataMarts.push({
        Id: i,
        vin: 'Vin ' + Math.random(),
        year: 2000 + i,
        brand: 'Brand ' + i,
        color: 'Color ' + i,
      });
    }
  }

  paginate(event) {
    this.first = event.first;
    console.log('paginate event');
  }
}
