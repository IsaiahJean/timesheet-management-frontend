import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TimeCardManagementComponent } from './time-card-management/time-card-management.component';
import { ReportsComponent } from './reports/reports.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'timecard', component: TimeCardManagementComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'admin', component: AdministrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
