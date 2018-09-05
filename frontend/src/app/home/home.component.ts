import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocaleService } from '../services/locale.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 })
 

export class HomeComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public _locale: LocaleService

    ){ }

  posts: object;

  ngOnInit() {
    // running the getPosts function in Service
    // (which is making the api call)
    return this.http.get("http://localhost:3000/posts/posts")
    .subscribe(data => {
      console.log(data)
    this.posts = data;
    })
   }  

   deleteEvents() {
     this.http.delete("http://localhost:3000/posts/posts")
     .subscribe(data => {
       console.log("Delete button")
       console.log(data)
     })
   }
  
<<<<<<< Updated upstream
}
=======
 constructor(
    public http: HttpClient,
    public _locale: LocaleService
    ) 
    
    {
      this._locale = _locale
     }

    }
>>>>>>> Stashed changes
