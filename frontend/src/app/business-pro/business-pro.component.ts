import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocaleService } from '../services/locale.service';
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
  userEvents=[];

  public postData={};
  
  constructor(
    private authService:AuthService,
    private router:Router,
    public http: HttpClient,
    public _locale: LocaleService
  ) { 
  }

  posts: object;

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.authService.getEvents(profile.user._id).subscribe(events => {
        this.userEvents = events;
      },
      // error in getting events
    err => {
      console.log("events "+ err);
      return false;
    });
      // error in getting profile
    },
    err => {
      console.log("profile " + err);
      return false;
  });

//   http.post(`http://localhost:3000/posts${usersid}`).subscribe(posts => {
//  this.userPosts = posts;
// });
// this.authService.getEvents(user)

  return this.http.get("http://localhost:3000/posts/posts")
  .subscribe(data => {
    console.log(data);
  this.posts = data;
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
