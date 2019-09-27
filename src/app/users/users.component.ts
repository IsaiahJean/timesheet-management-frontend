import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../user-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Iuser, Idescription, Iuser_description } from './../iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  addUser = this._fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    description: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required],
    email:['']
  });

  public users = [];
  public showAddForm: boolean = false;

  constructor(private _userService: UserServiceService, private _fb: FormBuilder) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (data) => this.users = data
    );
  }

  openForm() {
    this.showAddForm = !this.showAddForm;
  }

  matchPassword(group: FormGroup) {
    let pass = group.get('password').value;
    let rePass = group.get('rePassword').value;
    return pass !== rePass
  }

  onSubmit() {
    this.addUser.setValue({
      email: this.addUser.get('username')
    });
    this._userService.postUser(
      this.addUser.value
    ).subscribe(
      () => this.openForm()
    );
  }

}
