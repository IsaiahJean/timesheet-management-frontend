import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'timesheet-management';

  date_val = new Date();

  cookieExists: boolean = this.cookieService.check('e-token');



  constructor( private cookieService: CookieService, private router: Router ) { }


  onLogout():void{
    this.cookieService.delete('e-token');
    this.router.navigate(['/login']);
  }

}