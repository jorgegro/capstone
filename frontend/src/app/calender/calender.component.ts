import { Component, OnInit, Input,
  Output,
  EventEmitter,
  TemplateRef } from '@angular/core';

import { MonthViewDay, CalendarEvent } from 'calendar-utils';

import {Subject} from 'rxjs';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
  
})

export class CalenderComponent implements OnInit {

  viewDate: Date;
  refresh: Subject<any> = new Subject();
  activeDateIsOpen: boolean = true;
  
  constructor() {
    this.viewDate = new Date();

  }

  ngOnInit() {
   }

}
