import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
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
      catchError(this.handleError),
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      alert()
      );
  };
  
}
