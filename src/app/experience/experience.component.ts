import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceItems: Observable<any[]>;
  recognitionItems: Observable<any[]>;

  constructor(private restApiService: RestApiService) { }

  ngOnInit() {
    this.experienceItems = this.restApiService.getExperience();
    this.recognitionItems = this.restApiService.getRecognition();
  }

}
