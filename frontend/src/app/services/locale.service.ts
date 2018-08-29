import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  event: Object;
  
  
  getPosts(){
    return this.http.get("http://localhost:3000/posts/posts")
    .subscribe(data => {
    console.log("this is the service call" )
    console.log(data)
    this.event = data;
    })
  }

  constructor(
    public http: HttpClient
  ) 
  { }

}
