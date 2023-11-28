import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login.component';
import { RegisterComponent } from 'src/register/register.component';
import { HomeComponent } from './home/home.component';
import { TypeselectComponent } from './typeselect/typeselect.component';
import { LocationEventConfirenceComponent } from './location-event-confirence/location-event-confirence.component';
import { LocationEventArtistiquesComponent } from './location-event-artistiques/location-event-artistiques.component';
import { LocationEventSportifComponent } from './location-event-sportif/location-event-sportif.component';
import { DateEventComponent } from './date-event/date-event.component';
import { EventFormInformationComponent } from './event-form-information/event-form-information.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige le chemin vide vers 'home'
  { path: 'home', component: HomeComponent},

  { path: 'RegisterComponent', component: RegisterComponent },
  { path: 'LoginComponent', component: LoginComponent },

  { path: 'TypeselectComponent', component: TypeselectComponent },
  { path: 'LocationEventConfirenceComponent', component: LocationEventConfirenceComponent },
  { path: 'LocationEventArtistiquesComponent', component: LocationEventArtistiquesComponent },

  { path: 'LocationEventSportifComponent', component: LocationEventSportifComponent },
  { path: 'DateEventComponent', component: DateEventComponent },
  { path: 'EventFormInformationComponent', component: EventFormInformationComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
