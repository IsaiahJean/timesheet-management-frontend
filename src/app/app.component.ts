import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timesheet-management';

  constructor( private cookieService: CookieService, private router: Router ) { }


  onLogout():void{
    this.cookieService.delete('e-token');
    this.router.navigate(['/login']);
  }



  mainTabClick(tabid) {
    let maintabs = document.getElementsByClassName("maintabs");
    for (let i = 0; i < maintabs.length; i++) {
      //maintabs[i].style.background = "#F8F8F8";
    }
    document.getElementById(tabid).style.background = '#ffffff';
  }

  timecardClick() {}

  reportsClick() {}

}
