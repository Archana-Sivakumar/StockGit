import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login/:status', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'admin', component: AdminComponent},
  {path:'summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
