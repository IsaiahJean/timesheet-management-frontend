import { Input, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UserServiceService } from './../../user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Iuser, Idescription, Iuser_description } from './../../iuser';
import { delay } from 'q';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addUser = this._fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    description: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required],
    email:['']
  });

  @Input() public showAddForm: boolean;

  constructor(private _userService: UserServiceService, private _fb: FormBuilder) { }

  openForm() {
    this.showAddForm = !this.showAddForm;
    this.addUser.reset();
  }

  async onAddSubmit() {
    this.addUser.get('email').setValue(this.addUser.get('username').value);
    
    console.log('setting user');
    this._userService.postUser(this.addUser.value).subscribe();
    console.log('user created');
    
    await delay(200);
    
    var tempUser: Iuser;
    console.log('getting user');
    this._userService.getUserByUsername(
      this.addUser.get('username').value
    ).subscribe((data) => tempUser = data);
    console.log('have got a user');
    
    await delay(200);
    
    console.log(tempUser);
    
    console.log('setting description');
    this._userService.addDescription(
      {
        user: tempUser.id,
        description: this.addUser.get('description').value
      }
    ).subscribe(
      () => {
        this.openForm();
        location.reload();
      }
    );
    console.log('desctiption is set');
  }

  matchPassword(group: FormGroup) {
    let pass = group.get('password').value;
    let rePass = group.get('rePassword').value;
    return pass !== rePass
  }

  ngOnInit() {
  }

}
