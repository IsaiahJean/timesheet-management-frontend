import { Component, OnInit, Input } from '@angular/core';
import { ILocation } from 'src/app/location'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../user.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  @Input() location: ILocation ;

  constructor(private userService: UserService, private back: Location,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getLocation();

  }


  getLocation():void{
    const id = +this.route.snapshot.paramMap.get('id');
  this.userService.getLocation(id)
    .subscribe(location => this.location = location);
    console.log(id)
  this.userService.deleteLocation(id)
    .subscribe(location => this.location =location)
    console.log('deleted')
  
  



}
  

  // saveForm(){
  //   console.log(this.location);
  //   this.userService.deleteLocation(this.location.id).subscribe(
      
  //     result => console.log(result),
  //     error => console.log(error)
      
  //     );
  // }
   goBack(): void {
     this.back.back();
   }
}


