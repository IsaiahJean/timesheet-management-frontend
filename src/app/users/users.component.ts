import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserServiceService } from './../user-service.service';
import { Iuser_description, IeditUser } from '../iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  editUser = this._fb.group({
    first_name:['', Validators.required],
    last_name:['', Validators.required],
    description:['', Validators.required],
    username: ['', Validators.required],
    password: [''],
    rePassword: [''],
    email:['']
  })

  public users = [];
  showAddForm = false;
  showEditForm = false;
  id: number;

  constructor(private _userService: UserServiceService, private _fb: FormBuilder) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (data) => this.users = data
    );
  }

  openForm() {
    this.showAddForm = !this.showAddForm;
  }

  openEditForm(user: Iuser_description) {
    this.showEditForm = !this.showEditForm;
    if (this.showEditForm){
      this.id = user.id;
      this.editUser.get('first_name').setValue(user.user.first_name);
      this.editUser.get('last_name').setValue(user.user.last_name);
      this.editUser.get('description').setValue(user.description);
      this.editUser.get('username').setValue(user.user.username);
      this.editUser.get('password').setValue(" ");
      this.editUser.get('rePassword').setValue(" ");
    }
    else {
      this.editUser.reset();
    }
  }

  matchPassword(group: FormGroup) {
    let pass = (group.get('password') !== null) ? (group.get('password').value) : " ";
    let rePass = (group.get('rePassword') !== null) ? (group.get('rePassword').value) : " ";
    return pass !== rePass
  }

  onEditSubmit() {
    this.editUser.removeControl('password');
    this.editUser.removeControl('rePassword');
    this.editUser.get('email').setValue(this.editUser.get('username').value);
    var tempEditUser: IeditUser = this.editUser.value;

    console.log('patching user');
    this._userService.patchDescription(
      this.id, tempEditUser
    ).subscribe();
    console.log('done1');

    console.log('patching description');
    this._userService.patchUser(
      this.id, tempEditUser
    ).subscribe(
      () => {
        this.openEditForm(
        {
          id: null,
          user: null,
          description: null
        });
        location.reload();
      }
    );
    console.log('done2');
  }

  deleteUser(user: Iuser_description): void {
    if(confirm("Do you want to delete this User?")){
      this.users = this.users.filter(h => h !== user);
      this._userService.deleteUser(user.id).subscribe(() => console.log("Deleted"));
    }
  }

}
