import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  masterdataTabClick(tabid, masterdataTableid) {
    let masterdatatabs = document.getElementsByClassName("masterdata-tab");

    for (let i = 0; i < masterdatatabs.length; i++) {
      masterdatatabs[i].classList.remove("focus");
    }
    document.getElementById(tabid).classList.add("focus");

    this.masterDataTabChange(masterdataTableid);
  }

  masterDataTabChange(masterdataTableid) {
    let masterdatatable = document.getElementsByClassName("masterdata-table");

    for (let i = 0; i < masterdatatable.length; i++) {
      masterdatatable[i].classList.add("hidden");
    }
    document.getElementById(masterdataTableid).classList.remove("hidden");
  }

}
