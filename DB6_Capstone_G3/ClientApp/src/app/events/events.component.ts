import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { EventsaveService } from '../eventsave.service';
import { Event } from '../event';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetUserEveService } from '../get-user-eve.service';
import { Cocktail } from '../Cocktail';
import { Meal } from '../Meal';



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
  eventCocktails?: Cocktail[];
  eventMeals?: Meal[];
  eventID: number = null;
  eventName?: string;
  eventnaming: string = '';
  editCity: string = '';
  editDate: DatePipe = null;
  editState: string = '';

  ngOnInit(): void {
    this.currentIdUser = this.auth.getCurrentUserId();

    this.currentIdUser.subscribe((idUser: number) => {
      console.log(`Logging from Event Component in events: ${idUser}`);
      this.idUser = idUser;
      if (idUser > -1) {
        this.getUserEvents()
      }
    })
  }

  @Input() theevent: Event =
    {
      idEvent: 0,
      idUser: 0,
      eventName: null,
      date: null,
      city: null,
      state: null,
    }

  constructor(private eventsave: EventsaveService, private auth: AuthService, private route: Router, private userevents: GetUserEveService) {
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve,ms))
  }

  getUserEvents() {
    this.userevents.getUserEvents(this.idUser,
      result => {
        this.userEvents = result;
        console.log(this.userEvents);
      }
    );
  }

  getCocktailsMealsForEvent(idEvent, eventName) {
    this.userevents.getCocktailsForEvent(idEvent,
      result => {
        this.eventCocktails = result;
        console.log(`test ${this.eventCocktails[0]}`);
        this.delay(50);
      }
    );
      this.userevents.getMealsForEvent(idEvent,
        result => {
          this.eventMeals = result;
        }
    );
    this.eventName = eventName;
  }

  passUserEventToCocktail(idEvent) {
    this.idEvent = idEvent;
    this.userevents.setIdEvent(this.idEvent);
    this.route.navigate(['/cocktails']);
  }

  passUserEventToMeal(idEvent) {
    this.idEvent = idEvent;
    this.userevents.setIdEvent(this.idEvent);
    this.route.navigate(['/meals']);
  }

  saveButtonClicked() {
    this.theevent.idUser = this.idUser;
    this.theevent.eventName = this.eventnaming;
    this.theevent.city = this.editCity;
    this.theevent.state = this.editState;
    this.theevent.date = this.editDate;
    this.eventsave.saveEvent(this.theevent, () => { }
    );
    this.route.navigate(['/eventconfirmation']);
  }
}
