import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'timesheet-management';


  mainTabClick(tabid, sidenavid) {
    let maintabs = document.getElementsByClassName("maintabs");

    for (let i = 0; i < maintabs.length; i++) {
      maintabs[i].classList.remove("focus");
    }
    document.getElementById(tabid).classList.add("focus");
    localStorage.setItem('tabid', tabid);

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
