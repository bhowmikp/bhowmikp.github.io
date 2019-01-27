import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
import { Cscb07f18Component } from './ta/cscb07f18/cscb07f18.component';
import { Cscc69w19Component } from './ta/cscc69w19/cscc69w19.component';

const appRoutes: Routes = [
  { path : '', component: AboutComponent },
  { path : 'experience', component: ExperienceComponent },
  { path : 'ta', component: TaComponent },
    { path : 'ta/csca08f16', component: Csca08f16Component },
    { path : 'ta/csca48w17', component: Csca48w17Component },
    { path : 'ta/csca48s17', component: Csca48s17Component },
    { path : 'ta/csca08f17', component: Csca08f17Component },
    { path : 'ta/csca48w18', component: Csca48w18Component },
    { path : 'ta/cscb07f18', component: Cscb07f18Component },
    { path : 'ta/cscc69w19', component: Cscc69w19Component },
  { path : 'projects', component: ProjectsComponent },
  { path : 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
