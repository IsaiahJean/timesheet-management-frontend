import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showAdmin();
  }
  showAdmin(){
    let sidebarNav = document.getElementById('admin-sidebar');
    sidebarNav.classList.remove('hidden');
  }

}
