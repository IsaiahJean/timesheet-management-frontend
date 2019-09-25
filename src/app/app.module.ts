import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { AdministrationComponent } from './administration/administration.component';
import { TimeCardManagementComponent } from './time-card-management/time-card-management.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { FormsModule} from '@angular/forms';

=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
>>>>>>> darius


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MasterDataComponent,
    AdministrationComponent,
    TimeCardManagementComponent,
    ReportsComponent,
<<<<<<< HEAD
    LoginComponent
=======
    LoginComponent,
    
>>>>>>> darius
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    HttpClientModule,
>>>>>>> darius
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
