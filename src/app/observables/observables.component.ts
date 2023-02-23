import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  getData(): Observable<any[]> {
    return of([{id: 1, name: 'Joaquim' }, { id: 2, name: 'Luan' }]);
  }
  items: any[] | undefined;

  constructor() { }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.items = data;
    });
  }
}
