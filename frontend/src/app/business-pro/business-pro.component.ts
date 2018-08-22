import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-business-pro',
  templateUrl: './business-pro.component.html',
  styleUrls: ['./business-pro.component.css']
})
export class BusinessProComponent implements OnInit {
  user: Object;

  title: String;
  description: String;
  date: String;

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
  });
  }

  onPostSubmit(){
    const post = {
      title: this.title,
      description: this.description,
      date: this.date
    }
    this.authService.authenticateUser(post).subscribe(data => {
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
