import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AboutComponent } from './about/about.component';

import { ExperienceComponent } from './experience/experience.component';
import { ExperienceTableComponent } from './experience/experience-table/experience-table.component';
import { RecognitionTableComponent } from './experience/recognition-table/recognition-table.component';

import { ProjectsComponent } from './projects/projects.component';

import { TaComponent } from './ta/ta.component';
import { Csca08f16Component } from './ta/csca08f16/csca08f16.component';
import { Csca08f17Component } from './ta/csca08f17/csca08f17.component';
import { Csca48s17Component } from './ta/csca48s17/csca48s17.component';
import { Csca48w17Component } from './ta/csca48w17/csca48w17.component';
import { Csca48w18Component } from './ta/csca48w18/csca48w18.component';
import { Cscb07f18Component } from './ta/cscb07f18/cscb07f18.component';
import { Cscc69w19Component } from './ta/cscc69w19/cscc69w19.component';
import { Cscc69s19Component } from './ta/cscc69s19/cscc69s19.component';

import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './app-routing.module';

// firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// angular materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatPaginatorModule,
  MatSortModule, MatTableModule, MatTooltipModule } from '@angular/material';

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
    Csca48w18Component,
    Cscb07f18Component,
    Cscc69w19Component,
    Cscc69s19Component,
    ExperienceTableComponent,
    RecognitionTableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFirestoreModule.enablePersistence(),   // database works offline
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,     // input boxes. Search for table
    MatTableModule,     // core data for table
    MatPaginatorModule, // pagination module
    MatSortModule,       // sort table
    MatTooltipModule    // tooltip
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
