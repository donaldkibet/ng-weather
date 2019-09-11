import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { CustomDatePipe } from './custom/customDatePipe';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  apiKey = 'eb3153008d4fbc9414f3069b29b9cae1';
  urlEndPoint = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient, private customeDatePipe: CustomDatePipe) { }

  getCityCurrentWeatherConditions(cityName: string): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/weather?q=${cityName}&units=metric&appid=${this.apiKey}`);
  }

  getCityFiveDayForecast(cityName: string): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/forecast?q=${cityName}&units=metric&appid=${this.apiKey}`)
      .pipe(
        catchError(this.handleError),
        map((response: Response) => {
          let data: any[] = [];
          if (Object.values(response).length > 0) {
            Object.values(response)[3].forEach((element) => {
              if (this.customeDatePipe.transform(element.dt_txt) == 12) {
                data.push(element);
              }
            });
          } else {
            data = [];
          }
          return data;
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      alert('City Name is Invalid or Internet connection could not be established')
    );
  }

}
