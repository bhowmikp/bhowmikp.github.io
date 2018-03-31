import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private smooth: SimpleSmoothScrollService,
              private titleService: Title ){}

  ngOnInit() {
    this.smooth.smoothScrollToAnchor();
  }

  goTop(){
    this.smooth.smoothScrollToTop(new SimpleSmoothScrollOption(1000, 'linear'));
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
