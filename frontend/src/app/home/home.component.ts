import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpClient) { }

  
  ngOnInit() {
    this.http.get("http://localhost:3000/posts").subscribe( (data)=>{
      console.log(data)
      // this.events = data;
    } )
  }
  events = [];
  
}
