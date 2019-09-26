import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { UserService } from './user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { AdministrationComponent } from './administration/administration.component';
import { TimeCardManagementComponent } from './time-card-management/time-card-management.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { from } from 'rxjs';
import { ViewTimecardComponent } from './view-timecard/view-timecard.component';
import { NewTimecardComponent } from './new-timecard/new-timecard.component';
import { AddComponent } from './users/add/add.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MasterDataComponent,
    AdministrationComponent,
    TimeCardManagementComponent,
    ReportsComponent,
    LoginComponent,
    ViewTimecardComponent,
    NewTimecardComponent,
    
	AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserServiceService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
