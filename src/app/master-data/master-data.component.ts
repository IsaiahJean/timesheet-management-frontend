import { Component, OnInit, Input } from '@angular/core';
import { ILocation } from '../location';
import { UserService } from './../user.service'
import { IDoctor } from '../doctor'

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {
  public locations=[]
  public errorMsg;
  
  public doctors=[]
  location=true;
  doctor=false;

  constructor(private userservice: UserService) { }

  ngOnInit():void {

     this.getLocations();
     this.getDoctor();
    }

    getLocations(): void{
      this.userservice.getLocations()
      .subscribe(locations => this.locations= locations);
    }

    getDoctor():void{
      this.userservice.getDoctors()
      .subscribe(doctors => this.doctors= doctors);
    }

    switch1():void{
      this.location=false;
      //this.doctor=true;

    }

    switch2():void{
      this.location=true;
      //this.doctor=false;

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
