import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { metaReducers , reducers } from './reducers/store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { CoursesComponent } from './components/courses/courses.component';
import { TableModule } from 'primeng/table';
import { RoutingComponent } from './app.routing.module';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule ( {
  imports :[
    BrowserModule ,
    TableModule ,
    AppRoutingModule,
    StoreModule.forRoot ( reducers , {metaReducers} ) ,
    environment.production ? StoreDevtoolsModule.instrument () : [] ,
  ] ,
  declarations :[
    AppComponent ,
    LoginComponent ,
    CoursesComponent,
    LogoutComponent,
    RoutingComponent
  ] ,
  providers :[] ,
  bootstrap :[LoginComponent]
} )
export class AppModule {
}
