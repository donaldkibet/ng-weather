import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service';
import { Activity } from '../models/Activity';
import { DateFormat } from '../custom/customDatePipe';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[] = [];
  activity: Activity;

  constructor(private backendService: BackendService, private dateFormat: DateFormat) {
    this.activity = {
      id : null,
      time : null,
      date : null,
      activity : null,
    }
   }

  getAllActivities() {
    this.backendService.getAllActivityies()
      .subscribe(
        (response) => {
          this.activities = response;
        }
      )
  }

  getActivityById(id: string) {
    this.backendService.getActivityById(id)
      .subscribe(
        (response) => {
          response.date = this.dateFormat.transform(response.date);
          this.activity = response;
        }
      )
  }

  newActivity() {
    this.backendService.newActivity(this.activity)
      .subscribe(
        (response) => {
          this.activities.push(this.activity);
        }
      )
  }

  updateActivity() {
    this.backendService.updateActivity(this.activity)
      .subscribe(
        (response) => {
          let key = this.activities.findIndex(oldActivity=>oldActivity.id == this.activity.id);
          this.activities.splice(key,1,this.activity);
        }
      )
  }

  deleteActivity(id:string) {
    this.backendService.deleteActivity(id)
      .subscribe(
        (response) => {
          let key = this.activities.findIndex(deletActivity => deletActivity.id.toString() == id);
          this.activities.splice(key,1);
        }
      )
  }

  resetFields() {
    this.activity = {id:null,time:null,date:null,activity:null};
  }

  ngOnInit() {
    this.getAllActivities();
  }
}
