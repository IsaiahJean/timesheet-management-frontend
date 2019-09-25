import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AdministrationComponent } from './administration/administration.component';
=======
import { LoginComponent } from './login/login.component';
>>>>>>> darius

const routes: Routes = [

<<<<<<< HEAD
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: AdministrationComponent},
=======
  { path: 'login', component: LoginComponent}
>>>>>>> darius
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
