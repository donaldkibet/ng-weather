import { Component, OnInit, Input } from '@angular/core';
import * as  moment from 'moment';
import { Mood } from '../models/Mood';
import { DateFormat } from '../custom/customDatePipe';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {

  moods: Mood[];
  mood: Mood;

  constructor(private backendservice: BackendService, private dateFormat: DateFormat) {
    this.mood = {
      id: null,
      time: null,
      date: null,
      mood: null,
    };
  }

  resetFields() {
    this.mood = {
      id: null,
      time: null,
      date: null,
      mood: null,
    };
  }

  getAllMoods() {
    this.backendservice.getAllMoods()
      .subscribe(
        (response) => {
          this.moods = response;
          this.moods.map(val => {
            console.log('unformated data', val.date);
            console.log(moment(val.date).format('YYYY-MMM-DDD'));
          });
        }
      );
  }

  getMoodById(id) {
    this.backendservice.getMoodById(id)
      .subscribe(
        (response) => {
          response.date = this.dateFormat.transform(response.date);
          this.mood = new Mood(response);
        }
      );
  }

  newMood() {
    this.backendservice.newMood(this.mood)
      .subscribe(
        (response) => {
          console.log(response);
          this.moods.push(this.mood);
        }
      );
  }

  updateMood() {
    this.backendservice.updateMood(this.mood)
      .subscribe(
        (response) => {
          const key = this.moods.findIndex(updateMood => updateMood.id === this.mood.id);
          this.moods.splice(key, 1, this.mood);
        }
      );
  }

  deleteMood(id) {
    console.log(id);
    this.backendservice.deleteMood(id)
      .subscribe(
        (response) => {
          console.log(response);
          const key = this.moods.findIndex(deleteMood => deleteMood.id === id);
          this.moods.splice(key, 1);
        }
      );
  }

  ngOnInit() {
    this.getAllMoods();
  }

}
