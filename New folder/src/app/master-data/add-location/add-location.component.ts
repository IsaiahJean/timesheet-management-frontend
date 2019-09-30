import { Component, OnInit, Input } from '@angular/core';

import { ILocation } from 'src/app/location';

import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  

  @Input() set location(val: ILocation){
    
  } 


  locationForm = new FormGroup({
    
    location: new FormControl(''),
    sector: new FormControl(''),
    

  });

  constructor(private userService: UserService,  private router: Router, private back: Location,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getLocation();

  }


  getLocation():void{
    const id = +this.route.snapshot.paramMap.get('id');
  this.userService.getLocation(id)
    .subscribe(location => this.location = location);
}
  

  saveForm(){
    console.log(this.locationForm.value);
    this.userService.createLocation(this.locationForm.value.location,this.locationForm.value.sector).subscribe(
      
      result => console.log(result),
      error => console.log(error)
      
      );
  }
  goBack(): void {
    this.back.back();
  }
}


