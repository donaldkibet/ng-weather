import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Activity,Moods} from './models/models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }

  // Moods CRUD

  getAllMoods():Observable<any>{
    return this.http.get('http://localhost:8052/mood');
  }

  getMoodById(id:string):Observable<any>{
    return this.http.get(`http://localhost:8052/mood/${id}`);
  }

  newMood(newMood:Moods):Observable<any>{
    return this.http.post(`http://localhost:8052/mood`,newMood);
  }

  upDateMood(updatedMood:Moods):Observable<any>{
    return this.http.put('http://localhost:8052/mood',updatedMood);
  }

  deleteMood(id:string):Observable<any>{
    return this.http.delete(`http://localhost:8052/mood?id=${id}`);
  }

  // Activity CRUD

  getAllActivityies():Observable<any>{
    return this.http.get(`http://localhost:8052/activity`);
  }

  getActivityById(id:string):Observable<any>{
    return this.http.get(`http://localhost:8052/activity?id=${id}`);
  }

  newActivity(activity:Activity):Observable<any>{
    return this.http.post(`http://localhost:8052/activity`,activity);
  }

  updateActivity(activity:Activity):Observable<any>{
    return this.http.put(`http://localhost:8052/activity`,activity);
  }

  deleteActivity(id:string):Observable<any>{
    console.log(id);
    return this.http.delete(`http://localhost:8052/activity?id=${id}`);
  }

}
