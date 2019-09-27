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

 





