import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TimeCardManagementComponent } from './time-card-management/time-card-management.component';
import { ReportsComponent } from './reports/reports.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsersComponent } from './users/users.component';
import { ViewTimecardComponent } from './view-timecard/view-timecard.component';
import { NewTimecardComponent } from './new-timecard/new-timecard.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'timecard', component: ViewTimecardComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'admin', component: MasterDataComponent},
  { path: 'users', component: UsersComponent},
  { path: 'view-timecard', component: ViewTimecardComponent},
  { path: 'new-timecard', component: NewTimecardComponent},
  { path: 'master-data', component: MasterDataComponent},
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
