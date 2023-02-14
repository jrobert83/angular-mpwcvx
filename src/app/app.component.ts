import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cols: any[];
  dataMarts: any[];
  sub: Subscription;
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

    this.sub = Observable.interval(3000).subscribe((val) => {
      this.getDataFromApi();
    });
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
