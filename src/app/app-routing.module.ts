import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoodsComponent } from './moods/moods.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes =[
  {path:'home',component:HomeComponent},
  {path:'moods',component:MoodsComponent},
  {path:'activity',component:ActivitiesComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
