import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable()
export class EventsaveService {
  constructor(private http: HttpClient) {

  }
  public saveEvent(theeventt, cb) {
    console.log("inside event");
    console.log(theeventt);
    this.http.post<Event>('event/save', theeventt).subscribe(
      (result) => {
        console.log(result);
        //this.getAllEvents();
        cb();
      }
    );
  }
}
