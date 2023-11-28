import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/register/register.component';
import { LoginComponent } from 'src/login/login.component';
import { HomeComponent } from './home/home.component';
import { TypeselectComponent } from './typeselect/typeselect.component';
import { LocationEventConfirenceComponent } from './location-event-confirence/location-event-confirence.component';
import { LocationEventArtistiquesComponent } from './location-event-artistiques/location-event-artistiques.component';
import { LocationEventSportifComponent } from './location-event-sportif/location-event-sportif.component';
import { DateEventComponent } from './date-event/date-event.component';
import { EventFormInformationComponent } from './event-form-information/event-form-information.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent ,
    LoginComponent,
    HomeComponent,
    TypeselectComponent,
    LocationEventConfirenceComponent,
    LocationEventArtistiquesComponent,
    LocationEventSportifComponent,
    DateEventComponent,
    EventFormInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
