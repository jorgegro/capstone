import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocaleService } from '../services/locale.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 })

export class HomeComponent implements OnInit {

  posts: object;

  ngOnInit() {
    // running the getPosts function in Service
    // (which is making the api call)
    this.posts = this._locale.getPosts();
    this.posts = this._locale.event;
   }

  showPosts(){
    console.log("its working!")
    // setting the api call event variable to posts
    return this.posts = this._locale.event;
    
   };

  
  
 constructor(
    public http: HttpClient,
    public _locale: LocaleService
    ) 
    
    {
      this._locale = _locale
     }

}
