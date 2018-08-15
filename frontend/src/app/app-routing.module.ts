import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BusinessProComponent } from './business-pro/business-pro.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CalenderComponent } from './calender/calender.component';
import { RegisterComponent }  from './register/register.component';
import {AuthGuard} from './guards/auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: "home", 
    component: HomeComponent
  },
{
  path: "register",
  component: LoginComponent
},
{
  path: "login",
  component: RegisterComponent
},
{
  path: "BusinessPro", 
  component: BusinessProComponent,
  canActivate:[AuthGuard]
},
{
  path: "AboutPage", 
  component: AboutPageComponent
},
{
  path: "Calender",
  component: CalenderComponent
},
{
  path:"", redirectTo: "/home", pathMatch: "full"
},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers:[AuthService]
})
export class AppRoutingModule { }
