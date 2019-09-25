import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { TimeCardManagementComponent } from './time-card-management/time-card-management.component';
import { ReportsComponent } from './reports/reports.component';
import { AdministrationComponent } from './administration/administration.component';
=======
import { UsersComponent } from './users/users.component';
>>>>>>> dmitriy

const routes: Routes = [

  { path: 'login', component: LoginComponent},
<<<<<<< HEAD
  { path: 'timecard', component: TimeCardManagementComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'admin', component: AdministrationComponent}
=======
  { path: 'users', component: UsersComponent}
>>>>>>> dmitriy
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
