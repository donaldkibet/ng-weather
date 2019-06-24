import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../open-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentWeather: any;
  fiveDayForecast: any;

  constructor(private openWeatherService: OpenWeatherService) { }

  getCurrentCityWeather(cityName: string = "Eldoret") {
    this.openWeatherService.getCityCurrentWeatherConditions(cityName)
      .subscribe(
        (data) => {
          this.currentWeather = data;
          console.log(this.currentWeather);
        }
      )
  }

  getCityFiveDayForecast(cityName: string = "Eldoret") {
    this.openWeatherService.getCityFiveDayForecast(cityName)
      .subscribe(
        (data) => {
          this.fiveDayForecast = data;
          console.log(this.fiveDayForecast);
        }
      )
  }

  ngOnInit() {
    this.getCurrentCityWeather();
    this.getCityFiveDayForecast();
  }

}
