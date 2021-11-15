import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventsaveService {
  constructor(private http: HttpClient) {

  }
  public saveEvent(theeventt, cb) {
    console.log("inside event");
    console.log(theeventt);
    this.http.post<Event>('event/save', theeventt).subscribe(
      (result) => {
        //this.getAllEvents();
        cb();
      }
    );
  }
}
