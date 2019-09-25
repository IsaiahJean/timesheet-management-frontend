import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.employee= {
      username: '',
      password: '',


    };
  }

  onLogin(){
    this.userService.loginUser(this.employee).subscribe(response=> {
      console.log(response)  
      alert('User ' + this.employee.username + ' loggedin.' );
    },
      error => {
        console.log('error',error);
      }
      
      );
  }



}
