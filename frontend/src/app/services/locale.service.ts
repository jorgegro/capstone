import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
providedIn: 'root'
})
export class LocaleService {

  event: Object;
<<<<<<< Updated upstream
  
=======


>>>>>>> Stashed changes
  constructor(
    public http: HttpClient,
    public router: Router
  ) 
  { 
    this.router = router
  }

getPosts(){
return this.http.get("http://localhost:3000/posts/posts")
.subscribe(data => {
console.log("this is the service call" )
console.log(data)
this.event = data;
})
}
}
