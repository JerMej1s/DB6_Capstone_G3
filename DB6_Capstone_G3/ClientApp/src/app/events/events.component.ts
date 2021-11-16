import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { EventsaveService } from '../eventsave.service';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']

})
/** events component*/
export class EventsComponent implements OnInit {
  public currentIdUser?: Observable<number>
  idUser: number = -1;

  ngOnInit(): void {
    this.currentIdUser = this.auth.getCurrentUserId();

    this.currentIdUser.subscribe((idUser: number) => {
      console.log(`Logging from Nav Bar Component: ${idUser}`);
      this.idUser = this.idUser;
    })
}

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

  constructor(private eventsave: EventsaveService, private auth: AuthService) {
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
  }
}
