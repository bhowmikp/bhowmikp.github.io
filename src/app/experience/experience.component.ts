import { Component, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import {animate, state, style, transition, trigger} from '@angular/animations';

export interface Experience {
  employer: string;
  title: string;
  time: string;
  start?: Date;
  end: Date;
  responsibility: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExperienceComponent implements OnInit {

  recognitionItems: Observable<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSourceExperience: MatTableDataSource<{}> = new MatTableDataSource();
  displayedColumnsExperience:string[] = ['employer', 'title', 'time'];
  expandedElementExperience: Experience | null;

  constructor(private restApiService: RestApiService) { }

  ngOnInit() {
    this.restApiService.getExperience().subscribe(data => {
      this.dataSourceExperience.data = data;
      this.dataSourceExperience.paginator = this.paginator;
      this.dataSourceExperience.sort = this.sort;
    });
    this.recognitionItems = this.restApiService.getRecognition();
  }

  applyFilter(filterValue: string) {
    this.dataSourceExperience.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceExperience.paginator) {
      this.dataSourceExperience.paginator.firstPage();
    }
  }
}
