import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventsaveService } from '../eventsave.service';
import { Event } from '../event';
import { Router } from '@angular/router';


@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']

})
/** events component*/
export class EventsComponent {
  @Input() theevent: Event =
    {
      idEvent: 0,
      idUser: 1,
      eventName: null,
      date: null,
      city: null,
      state: null,
    }
  eventID: number = null;
  eventnaming: string = '';
  editCity: string = '';
  editDate: DatePipe = null;
  editState: string = '';

  constructor(private eventsave: EventsaveService, private route: Router) {
  }

  saveButtonClicked() {
    console.log("Button clicked")
    this.theevent.eventName = this.eventnaming;
    this.theevent.city = this.editCity;
    this.theevent.state = this.editState;
    this.theevent.date = this.editDate;
    console.log('Here is the event:');
    console.log(this.theevent);
    console.log(this.eventsave);
    this.eventsave.saveEvent(this.theevent, () => { }
    );
    this.route.navigate(['/eventconfirmation']);
  }


}
