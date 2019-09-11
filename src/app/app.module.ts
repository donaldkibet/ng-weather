import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MoodsComponent } from './moods/moods.component';
import { AppRoutingModule } from './app-routing.module';
import { OpenWeatherService } from './open-weather.service';
import { CustomDatePipe, DateFormat, DayFormat } from './custom/customDatePipe';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesComponent,
    MoodsComponent,
    DateFormat,
    CustomDatePipe,
    DayFormat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [OpenWeatherService,CustomDatePipe,BackendService,DateFormat],
  bootstrap: [AppComponent]
})
export class AppModule { }
