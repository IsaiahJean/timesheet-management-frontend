import { Component, OnInit, Input } from '@angular/core';
import { ILocation } from '../location';
import { UserService } from './../user.service'

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {
  public locations=[]
  public errorMsg;
  location : ILocation;

  constructor(private locationservice: UserService) { }

  ngOnInit():void {

     this.getLocations();
    
    }

    getLocations(): void{
      this.locationservice.getLocations()
      .subscribe(locations => this.locations= locations);
    }




  }

<<<<<<< HEAD
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
=======
 





>>>>>>> darius
