import { Component, OnInit, Input } from '@angular/core';
import { IDoctor } from 'src/app/doctor';

import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  @Input() set doctor(val: IDoctor){
    
  } 

  doctorForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    pay_roll: new FormControl(''),

  });

  constructor(private userService: UserService,  private router: Router, private back: Location,private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  saveForm(){
    console.log(this.doctorForm.value);
    this.userService.createDoctor(this.doctorForm.value.first_name,this.doctorForm.value.last_name,this.doctorForm.value.pay_roll).subscribe(
      
      result => console.log(result),
      error => console.log(error)
      
      );
  }
  goBack(): void {
    this.back.back();
  }
}


