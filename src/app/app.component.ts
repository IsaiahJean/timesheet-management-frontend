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
<<<<<<< HEAD
    let sidenav = document.getElementsByClassName("sidenavigation");

    for (let i = 0; i < maintabs.length; i++) {
      maintabs[i].classList.remove("focus");
    }
    document.getElementById(tabid).classList.add("focus");
  }
  
=======
    for (let i = 0; i < maintabs.length; i++) {
      maintabs[i].style.background = "#F8F8F8";
    }
    document.getElementById(tabid).style.background = '#ffffff';
  }

  timecardClick() {}

  reportsClick() {}

>>>>>>> dmitriy
}
