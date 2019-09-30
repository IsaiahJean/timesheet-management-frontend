import { Component, OnInit, Input } from '@angular/core';
import { ILocation } from '../location';
import { UserService } from './../user.service'
import { IDoctor } from '../doctor'
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {
  public locations=[];
  public errorMsg;
  
  public doctors=[];
  location1=true;

  

  Doctor:IDoctor;

  Location:ILocation;

  

  constructor(private userservice: UserService) { }

  ngOnInit():void {

     this.getLocations();
     this.getDoctors();
    }

    getLocations(): void{
      this.userservice.getLocations()
      .subscribe(locations => this.locations= locations);
    }

    getDoctors():void{
      this.userservice.getDoctors()
      .subscribe(doctors => this.doctors= doctors);
    }

    

    switch1():void{
      this.location1=false;
      //this.doctor=true;

    }

    switch2():void{
      this.location1=true;
      //this.doctor=false;

    }

    





   selectedLocation: Location;
     onSelect(location:Location){
       this.selectedLocation = location;
     }
    
    //selectedDoctor:Doctor;
    
    


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
