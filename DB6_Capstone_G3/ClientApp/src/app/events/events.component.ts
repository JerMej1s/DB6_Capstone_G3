import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { Event } from '../event';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']

})
/** events component*/
export class EventsComponent {
  @Input() theevent: Event =
    {
      idEvent: null,
      idUser: 1,
      eventName: null,
      date: null,
      city: null,
      state: null,
    }
  @Output() addevent: EventEmitter<Event> = new EventEmitter<Event>();
  eventID: number = null;
  eventnaming: string = '';
  eventCity: string = '';
  eventDate: DatePipe = null;
  eventState: string = '';


  constructor(private http: HttpClient) {
  }

  saveEvent() {
    this.theevent.eventName = this.eventnaming;
    this.theevent.city = this.eventCity;
    this.theevent.state = this.eventState;
    this.theevent.date = this.eventDate;
    this.addevent.emit(this.theevent);
  }


}
