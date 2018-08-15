import { Component, OnInit } from '@angular/core';
// import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;

  
  constructor(
    // private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        swal({
          type: 'success',
          title: 'You are logged in!',
          timer: 3000,
        });
        this.router.navigate(['/BusinessPro']);
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: data.msg,
          timer: 3000,
        });
        this.router.navigate(['/login']);
      }
    });
  }

}
