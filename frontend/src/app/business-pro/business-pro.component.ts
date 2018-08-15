import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-pro',
  templateUrl: './business-pro.component.html',
  styleUrls: ['./business-pro.component.css']
})
export class BusinessProComponent implements OnInit {
  user: Object;

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

  editName(){
    console.log("you hit the name button");
  }

}
