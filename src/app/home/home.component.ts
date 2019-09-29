import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'timesheet-management';

  date_val = new Date();

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
