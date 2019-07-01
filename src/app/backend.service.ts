import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Mood } from './models/Mood';
import { Activity } from './models/Activity';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  // Moods CRUD
  url = 'http://localhost:8052';

  getAllMoods(): Observable<Mood[]> {
    return this.http.get(`${this.url}/mood`)
      .pipe(
        map((response) => {
          const moods: Mood[] = [];
          Object.values(response).forEach(mood => {
            console.log(mood);
            moods.push(mood);
          });
          return moods;
        })
      );
  }

  getMoodById(id: string): Observable<any> {
    return this.http.get(`${this.url}/mood/${id}`)
      .pipe(
        map((response) => {
          let mood: Mood = new Mood(response[0]);
          return mood;
        })
      )
  }

  newMood(newMood: Mood): Observable<any> {
    return this.http.post(`${this.url}/mood`, newMood);
  }

  updateMood(updatedMood: Mood): Observable<any> {
    return this.http.put(`${this.url}/mood`, updatedMood);
  }

  deleteMood(id: string): Observable<any> {
    return this.http.delete(`${this.url}/mood/${id}`);
  }

  // Activity CRUD

  getAllActivityies(): Observable<Activity[]> {
    return this.http.get(`${this.url}/activity`)
      .pipe(
        map((response) => {
          const activities: Activity[] = [];
          Object.values(response).forEach(activity => {
            activities.push(activity)
          });
          return activities;
        })
      )
  }

  getActivityById(id: string): Observable<Activity> {
    return this.http.get(`${this.url}/activity/${id}`)
      .pipe(
        map((response) => {
          let activity: Activity = new Activity(response[0]);
          console.log(activity);
          return activity;
        })
      )
  }

  newActivity(activity: Activity): Observable<any> {
    return this.http.post(`${this.url}/activity`, activity);
  }

  updateActivity(activity: Activity): Observable<any> {
    return this.http.put(`${this.url}/activity`, activity);
  }

  deleteActivity(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.url}/activity/${id}`);
  }

}
