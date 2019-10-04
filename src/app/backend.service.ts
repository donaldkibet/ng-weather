import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Mood } from './models/Mood';
import { Activity } from './models/Activity';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  backEndUrl = 'http://localhost:8052';

  // Moods CRUD

  getAllMoods(): Observable<Mood[]> {
    return this.http.get(`${this.backEndUrl}/mood`)
      .pipe(
        catchError(this.handleError),
        map((response) => {
          const moods: Mood[] = [];
          Object.values(response).forEach(mood => {
            moods.push(mood);
          });
          return moods;
        })
      );
  }

  getMoodById(id: string): Observable<any> {
    return this.http.get(`${this.backEndUrl}/mood/${id}`)
      .pipe(
        catchError(this.handleError),
        map((response) => {
          const mood: Mood = new Mood(response[0]);
          return mood;
        })
      );
  }

  newMood(newMood: Mood): Observable<any> {
    return this.http.post(`${this.backEndUrl}/mood`, newMood)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateMood(updatedMood: Mood): Observable<any> {
    return this.http.put(`${this.backEndUrl}/mood`, updatedMood)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteMood(id: string): Observable<any> {
    return this.http.delete(`${this.backEndUrl}/mood/${id}`)
      .pipe(catchError(
        this.handleError)
      );
  }

  // Activity CRUD

  getAllActivities(): Observable<Activity[]> {
    return this.http.get(`${this.backEndUrl}/activity`)
      .pipe(
        catchError(this.handleError),
        map((response) => {
          const activities: Activity[] = [];
          Object.values(response).forEach(activity => {
            activities.push(activity);
          });
          return activities;
        })
      );
  }

  getActivityById(id: string): Observable<Activity> {
    return this.http.get(`${this.backEndUrl}/activity/${id}`)
      .pipe(
        catchError(this.handleError),
        map((response) => {
          const activity: Activity = new Activity(response[0]);
          return activity;
        })
      );
  }

  newActivity(activity: Activity): Observable<any> {
    return this.http.post(`${this.backEndUrl}/activity`, activity)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateActivity(activity: Activity): Observable<any> {
    return this.http.put(`${this.backEndUrl}/activity`, activity)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteActivity(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.backEndUrl}/activity/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof (ErrorEvent)) { console.log('An error has occurred ' + error.status + ' ' + error.error.message); }
    return throwError(
      alert('Connection to the resource could not be established please check your connection or the resource availability')
    );
  }

}
