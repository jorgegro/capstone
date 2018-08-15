import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router } from '../../../node_modules/@angular/router';
import swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: String;
  username: String; 
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email,
    }

    //require fields
    if(!this.validateService.validateRegister(user)){
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
        timer: 3000,
      });
       return false;
    }
    //validate email
    if(!this.validateService.validateEmail(user.email)){
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please use a valid email!',
        timer: 3000,
      });
      return false;
   }

   //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        swal({
          type: 'success',
          title: 'Registered!',
          text: 'You may log in',
          timer: 3000
        })
        this.router.navigate(['/login']);
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          timer: 3000,
        });
      }
    }); 
  }

  
}
