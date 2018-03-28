import { Component, OnInit } from '@angular/core';

declare var GitHubCalendar: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    new GitHubCalendar(".calendar", "bhowmikp", {
      responsive:true,
      global_stats:true,
    });
  }

}
