import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../service/rest-api.service';
import { Observable } from 'rxjs';
import { Sort } from '@angular/material';

export interface Recognition {
  name: string;
  place: string;
  year: number;
}

@Component({
  selector: 'app-recognition-table',
  templateUrl: './recognition-table.component.html',
  styleUrls: ['./recognition-table.component.css']
})
export class RecognitionTableComponent implements OnInit {

  recognitionItems: Observable<any[]>;

  sortedData: any;

  constructor(private restApiService: RestApiService) { }

  ngOnInit() {
    this.restApiService.getRecognition().subscribe(data => {
      this.sortedData = data.slice();
    });
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'place': return compare(a.place, b.place, isAsc);
        case 'year': return compare(a.year, b.year, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
