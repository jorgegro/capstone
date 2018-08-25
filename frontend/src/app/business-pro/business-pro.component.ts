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
  public user={};

  public postData={};
  
  constructor(
    private authService:AuthService,
    private router:Router,
  ) { 
  }

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
    this.authService.newPost(this.postData).subscribe(data => {
      if(data.success){
        swal({
          type: 'success',
          title: 'You made a post!',
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
