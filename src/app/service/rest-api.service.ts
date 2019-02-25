import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private db: AngularFirestore) { }

  getProjects() {
    return this.db.collection('projects', data => data.orderBy('order', 'desc')).valueChanges();
  }

  getExperience() {
    return this.db.collection('experience', data => data.orderBy('end', 'desc')).valueChanges();
  }

  getRecognition() {
    return this.db.collection('recognition', data => data.orderBy('year', 'desc')).valueChanges();
  }
}
