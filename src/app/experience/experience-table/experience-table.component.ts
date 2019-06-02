import { Component, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from '../../service/rest-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {animate, state, style, transition, trigger} from '@angular/animations';

export interface Experience {
  employer: string;
  title: string;
  time: string;
  start?: Date;
  end: Date;
  responsibility: string[];
  abbr?: string;
}

@Component({
  selector: 'app-experience-table',
  templateUrl: './experience-table.component.html',
  styleUrls: ['./experience-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExperienceTableComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSourceExperience: MatTableDataSource<{}> = new MatTableDataSource();
  displayedColumnsExperience: string[] = ['employer', 'title', 'time'];
  expandedElementExperience: Experience | null;

  constructor(private restApiService: RestApiService) { }

  ngOnInit() {
    this.restApiService.getExperience().subscribe(data => {
      this.dataSourceExperience.data = data;
      this.dataSourceExperience.paginator = this.paginator;
      this.dataSourceExperience.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSourceExperience.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceExperience.paginator) {
      this.dataSourceExperience.paginator.firstPage();
    }
  }

}
