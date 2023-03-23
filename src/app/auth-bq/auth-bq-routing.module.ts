import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthBqModule } from './auth-bq.module';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthBqRoutingModule { }
