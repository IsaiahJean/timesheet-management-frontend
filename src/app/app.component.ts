import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timesheet-management';

  mainTabClick(tabid) {
    let maintabs = document.getElementsByClassName("maintabs");
    let sidenav = document.getElementsByClassName("sidenavigation");

    for (let i = 0; i < maintabs.length; i++) {
      maintabs[i].classList.remove("focus");
    }
    document.getElementById(tabid).classList.add("focus");
  }
  
}
