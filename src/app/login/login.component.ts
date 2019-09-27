import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormGroup, FormControl, FormControlName, FormControlDirective,ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee;
  


  constructor(private userService:UserService,
    private cookieService:CookieService, private router: Router) { }

  ngOnInit() {
<<<<<<< HEAD
    this.input= {
      username: '',
      password: '',


    };
  }

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
=======
    this.employee={
      username:'',
      password:''


    }


   
     

    



    }
    
    
     
      
        
    

  
>>>>>>> darius

  

    onLogin(){
      this.userService.loginUser(this.employee).subscribe(response => {
        console.log(response);
        this.cookieService.set('e-token', response.token);
        this.router.navigate(['/master']);
        alert('User ' + this.employee.username + ' loggedin.' );
        
      },
        error => {
          console.log('error',error);
        }
      
       );
    }
}



