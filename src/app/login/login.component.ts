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
    this.employee={
      username:'',
      password:''


    }


   
     

    



    }
    
    
     
      
        
    

  

  

    onLogin(){
      this.userService.loginUser(this.employee).subscribe(response => {
        console.log(response);
        this.cookieService.set('e-token', response.token);
        this.router.navigate(['welcome']);
        alert('User ' + this.employee.username + ' loggedin.' );
        
      },
        error => {
          console.log('error',error);
        }
      
       );
    }
}



