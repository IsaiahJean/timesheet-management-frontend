import { Component, OnInit, Input } from '@angular/core';
import { ILocation } from 'src/app/location'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../user.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { IDoctor } from 'src/app/doctor';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {
  @Input() doctor: IDoctor ;

  constructor(private userService: UserService, private back: Location,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getDoctor();
  }


  getDoctor():void{
    const id = +this.route.snapshot.paramMap.get('id');
  this.userService.getDoctor(id)
    .subscribe(doctor => this.doctor = doctor);
    console.log(id)
  this.userService.deleteDoctor(id)
    .subscribe(doctor => this.doctor = doctor)
    console.log('deleted')

}

goBack(): void {
  this.back.back();
}


}



