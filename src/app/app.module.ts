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
import { customDatePipe } from './custom/customDatePipe';

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
    FormsModule
  ],
  providers: [OpenWeatherService,customDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
