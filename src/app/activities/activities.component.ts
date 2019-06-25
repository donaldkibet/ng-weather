import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Activity } from '../models/models';
import { DateFormat } from '../custom/customDatePipe';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities: any[] = [];
  activity: Activity = new Activity(null, "", new Date(), "");
  constructor(private backendService: BackendService, private dateFormat: DateFormat) { }

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
          this.activity = new Activity(Object.values(response)[0]['id'], Object.values(response)[0]['time'], this.dateFormat.transform(Object.values(response)[0]['date']), Object.values(response)[0]['activity']);
        }
      )
  }

  newActivity() {
    this.backendService.newActivity(this.activity)
      .subscribe(
        (response) => {
          this.getAllActivities();
        }
      )
  }

  upDateActivity() {
    this.backendService.updateActivity(this.activity)
      .subscribe(
        (response) => {
          this.getAllActivities();
        }
      )
  }

  deleteActivity(id:string) {
    this.backendService.deleteActivity(id)
      .subscribe(
        (response) => {
          this.getAllActivities();
        }
      )
  }


  resetFields() {
    this.activity = new Activity(0, "", new Date(), "");
  }

  ngOnInit() {
    this.getAllActivities();
  }

}
