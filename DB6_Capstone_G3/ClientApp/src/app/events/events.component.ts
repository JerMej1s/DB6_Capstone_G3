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
      idEvent: 1,
      idUser: 1,
      eventName: null,
      date: null,
      city: null,
      state: null,
    }
  @Output() newparentevent: EventEmitter<Event> = new EventEmitter<Event>();
  eventID: number = null;
  eventnaming: string = '';
  editCity: string = '';
  editDate: DatePipe = null;
  editState: string = '';

  constructor(private http: HttpClient) {
  }

  saveEvent() {
    console.log("Button clicked")
    this.theevent.eventName = this.eventnaming;
    this.theevent.city = this.editCity;
    this.theevent.state = this.editState;
    this.theevent.date = this.editDate;
    console.log('Here is the event:');
    console.log(this.theevent);
    this.newparentevent.emit(this.theevent);
  }


}
