import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BusinessProComponent } from './business-pro/business-pro.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CalenderComponent } from './calender/calender.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { FlashMessagesModule } from 'angular2-flash-messages';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { LocaleService } from './services/locale.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthinterceptorService } from './services/authinterceptor.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BusinessProComponent,
    AboutPageComponent,
    CalenderComponent,
    RegisterComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule.forRoot(),
    FlashMessagesModule.forRoot(),
    SweetAlert2Module.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:4200/login'],
        blacklistedRoutes: ['http://localhost:4200/register']
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true
    },
    LocaleService,
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
