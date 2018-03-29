import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaComponent } from './ta/ta.component';
import { ContactComponent } from './contact/contact.component';
import { Csca08f16Component } from './ta/csca08f16/csca08f16.component';
import { Csca08f17Component } from './ta/csca08f17/csca08f17.component';
import { Csca48s17Component } from './ta/csca48s17/csca48s17.component';
import { Csca48w17Component } from './ta/csca48w17/csca48w17.component';
import { Csca48w18Component } from './ta/csca48w18/csca48w18.component';

import { VerticalTimelineModule } from 'angular-vertical-timeline';

const appRoutes: Routes = [
  { path : '', component: AboutComponent },
  { path : 'experience', component: ExperienceComponent },
  { path : 'ta', component: TaComponent },
    { path : 'ta/csca08f16', component: Csca08f16Component },
    { path : 'ta/csca48w17', component: Csca48w17Component },
    { path : 'ta/csca48s17', component: Csca48s17Component },
    { path : 'ta/csca08f17', component: Csca08f17Component },
    { path : 'ta/csca48w18', component: Csca48w18Component },
  { path : 'projects', component: ProjectsComponent },
  { path : 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    TaComponent,
    ContactComponent,
    Csca08f16Component,
    Csca08f17Component,
    Csca48s17Component,
    Csca48w17Component,
    Csca48w18Component
  ],
  imports: [
    BrowserModule,
    VerticalTimelineModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
