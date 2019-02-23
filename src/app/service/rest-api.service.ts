import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private db:AngularFirestore) { }

  getExperience() {
    return this.db.collection('experience', data => data.orderBy("end", "desc")).valueChanges();
  }

  getRecognition() {
    return this.db.collection("recognition", data => data.orderBy("year", 'desc')).valueChanges();
  }
}
