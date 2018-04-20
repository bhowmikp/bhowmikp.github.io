import { Component, OnInit } from '@angular/core';

declare var GitHubCalendar: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  /*
  * Initializes github calendar on id - 'calendar' for user - 'bhowmikp'
  */
  ngOnInit() {
    GitHubCalendar('.calendar', 'bhowmikp', {
      responsive: true,
      global_stats: true,
    });
  }

}
