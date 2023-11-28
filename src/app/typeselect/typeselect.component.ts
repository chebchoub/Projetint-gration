import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-typeselect',
  templateUrl: './typeselect.component.html',
  styleUrls: ['./typeselect.component.css']
})
export class TypeselectComponent {
  constructor(private userService: UserServiceService,private router:Router) { }
  
  gotolocation(numpage:number)
  {
    if(numpage==1)
    {
    this.router.navigate(['./LocationEventSportifComponent']);
    }
    else if (numpage==2)
    {
      this.router.navigate(['./LocationEventArtistiquesComponent']);

    }
    else
    {
      this.router.navigate(['./LocationEventSportifComponent']);

    }
    

  }
}
