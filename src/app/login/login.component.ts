import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.input= {
      username: '',
      password: '',


    };
  }

<<<<<<< HEAD
  onLogin(){
    this.userService.loginUser(this.input).subscribe(response=> {
      console.log(response)  
      alert('User ' + this.input.username + ' loggedin.' );
    },
      error => {
        console.log('error',error);
      }
      
      );
  }
=======
  // onLogin(){
  //   this.userService.loginUser(this.input).subscribe(response=> {
  //     console.log(response)  
  //     alert('User ' + this.input.username + ' loggedin.' );
  //   },
  //     error => {
  //       console.log('error',error);
  //     }
      
  //     );
  // }
>>>>>>> dmitriy



}
