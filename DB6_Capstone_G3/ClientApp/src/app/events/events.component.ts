import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { EventsaveService } from '../eventsave.service';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetUserEveService } from '../get-user-eve.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']

})
/** events component*/
export class EventsComponent implements OnInit {
  public currentIdUser?: Observable<number>
  idUser: number = -1;
  idEvent: number = 0;
  userEvents?: Event[];
  usereve?: Event;

  ngOnInit(): void {
    this.currentIdUser = this.auth.getCurrentUserId();

    this.currentIdUser.subscribe((idUser: number) => {
      console.log(`Logging from Nav Bar Component in events: ${idUser}`);
      this.idUser = idUser;
      if (idUser > -1) {
        this.getUserEvents()
      }
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

  constructor(private eventsave: EventsaveService, private auth: AuthService, private route: Router, private userevents: GetUserEveService) {
  }

  getUserEvents() {
    console.log("getusereventsrun")
    this.userevents.getUserEvents(this.idUser,
      result => {
        this.userEvents = result;
        console.log(this.userEvents);
      }
    ) 
  }
  passUserEvent() {
    console.log("eventococktailclicked")
    this.userevents.setIdEvent(this.idEvent);
    this.route.navigate(['/cocktails'])
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
