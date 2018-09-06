import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocaleService } from '../services/locale.service';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe {
  transform(value) {
    return value.slice().reverse();
  }
}

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

  posts: {}

  ngOnInit() {
    // running the getPosts function in Service
    // (which is making the api call)
    return this.http.get("http://localhost:3000/posts/posts")
    .subscribe(data => {
    this.posts = data;
    console.log(this.posts);
    })
   }  

   deleteEvents() {
     this.http.delete("http://localhost:3000/posts/posts")
     .subscribe(data => {
       console.log("Delete button")
       console.log(data)
     })
   }
  
}
//  constructor(
//     public http: HttpClient,
//     public _locale: LocaleService
//     ) 
    
//     {
//       this._locale = _locale
//      }

//     }
