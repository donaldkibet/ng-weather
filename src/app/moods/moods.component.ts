import { Component, OnInit } from '@angular/core';
import { Moods } from '../models/models';
import { DateFormat } from '../custom/customDatePipe';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {

  moods: any;
  mood: Moods = new Moods(0, "", new Date(), "");

  constructor(private backendservice: BackendService, private dateFormat: DateFormat) { }

  resetFields() {
    this.mood = new Moods(0, "", new Date(), "");
  }

  getAllMoods() {
    this.backendservice.getAllMoods()
      .subscribe(
        (response) => {
          console.log(response);
          this.moods = response;
        }
      )
  }

  getmoodById(id) {
    this.backendservice.getMoodById(id)
      .subscribe(
        (response) => {
          let resp = Object.values(response)[0];
          this.mood = new Moods(resp['id'], resp['time'], this.dateFormat.transform(resp['date']), resp['mood']);
        }
      )
  }

  newmood() {
    this.backendservice.newMood(this.mood)
      .subscribe(
        (response) => {
          this.getAllMoods();
          console.log(response);
        }
      );
  }

  upDatemood() {
    this.backendservice.upDateMood(this.mood)
      .subscribe(
        (response) => {
          this.getAllMoods();
          console.log(response);
        }
      );
  }

  deletemood(id) {
    this.backendservice.deleteMood(id)
      .subscribe(
        (response) => {
          console.log(response);
          this.getAllMoods();
        }
      );
  }



  ngOnInit() {
    this.getAllMoods();
  }

}
