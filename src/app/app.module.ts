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
import { customDatePipe, DateFormat } from './custom/customDatePipe';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesComponent,
    MoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    customDatePipe
  ],
  providers: [OpenWeatherService,customDatePipe,BackendService,DateFormat],
  bootstrap: [AppComponent]
})
export class AppModule { }
