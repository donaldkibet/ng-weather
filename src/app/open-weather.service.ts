import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { customDatePipe } from './custom/customDatePipe';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  apiKey = "eb3153008d4fbc9414f3069b29b9cae1";
 
  getCityCurrentWeatherConditions(cityName:string):Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.apiKey}`);
  }

  getCityFiveDayForecast(cityName:string):Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${this.apiKey}`)
    .pipe(
      map((response: Response) => {
        const data: any[] = [];
        Object.values(response)[3].forEach((element) => {
          if (this.customeDatePipe.transform(element.dt_txt) == 12) {
            data.push(element);
          }
        });
        return data;
      })
    );
  }

  constructor(private http:HttpClient,private customeDatePipe:customDatePipe) { }
}
