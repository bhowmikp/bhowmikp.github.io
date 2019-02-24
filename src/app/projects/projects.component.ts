import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';
import { Observable } from 'rxjs';

declare var GitHubCalendar: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectItems: Observable<any[]>;

  constructor(private restApiService: RestApiService) { }

  /*
  * Initializes github calendar on id - 'calendar' for user - 'bhowmikp'
  */
  ngOnInit() {
    this.projectItems = this.restApiService.getProjects();

    GitHubCalendar('.calendar', 'bhowmikp', {
      responsive: true,
      global_stats: true,
    });
  }

}
