import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Prantar Bhowmik - HomePage';

  constructor(private titleService: Title ) {}

  ngOnInit() { }

  /*
  * Send a string as parameter
  *
  * The parameter will set the title of the browser toolbar
  */
  setTitle(newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
