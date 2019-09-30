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

  login=false;



  constructor( private cookieService: CookieService, private router: Router ) { }


  onLogout():void{
    this.cookieService.delete('e-token');
    this.router.navigate(['/login']);
  }

  switch1():void{
    this.login=false;
    //this.doctor=true;

  }

  switch2():void{
    this.login=true;
    //this.doctor=false;

  }



  mainTabClick(tabid,sidenavid) {
    let maintabs = document.getElementsByClassName("maintabs");
    for (let i = 0; i < maintabs.length; i++) {
      //maintabs[i].style.background = "#F8F8F8";
    }
    document.getElementById(tabid).style.background = '#ffffff';
  

    this.sideNavChange(sidenavid);
  
 }

  sideNavChange(sidenavid) {
    console.log(sidenavid);
    let sidenav = document.getElementsByClassName("sidenavigation");

    for (let i = 0; i < sidenav.length; i++) {
      sidenav[i].classList.add("hidden");
    }
    document.getElementById(sidenavid).classList.remove("hidden");
  }
  

}