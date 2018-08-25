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
  //   this.authService.getProfile().subscribe(profile => {
  //     this.user = profile.user;
  //     console.log(this.user);
  //   },
  //   err => {
  //     console.log(err);
  //     return false;
  // });
  }

  //profile user is being undefined becuase the calling will not wait for the 
  //information that is being sent therefore the error is occuring.

  // showPro(){
  //   this.user;
  // }

  onPostSubmit(){
    const post = {
      title: this.title,
      description: this.description,
      date: this.date
    }
    this.authService.newPost(post).subscribe(data => {
      if(data.success){
        swal({
          type: 'success',
          title: 'Yosu made a post!',
          timer: 3000,
        });
        this.router.navigate(['/BusinessPro']);
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          timer: 3000,
        });
        this.router.navigate(['/BusinessPro']);
      }
    });
  }


}
