import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class GetUserEveService {
  private currentIdEvent: BehaviorSubject<number> = new BehaviorSubject(-1);

  constructor(private http: HttpClient, private http2: HttpClient, private auth: AuthService) {
  }

  public getCurrentEventId(): Observable<number> {
    return this.currentIdEvent;
  }


  getUserEvents(idUser, cb) {
    console.log("inside iduser event");
    console.log(idUser);
    this.http.get<any>(`user/events/${idUser}`, idUser).subscribe(
      result => {
        cb(result);
      }
    );
  }

  getCocktailsForEvent(idEvent, cb) {
    this.http.get<any>(`/event/cocktails/${idEvent}`, idEvent).subscribe(
      result => {
        cb(result);
      }
    );
  }

  getMealsForEvent(idEvent, cb) {
    this.http2.get<any>(`/event/meals/${idEvent}`, idEvent).subscribe(
      result => {
        cb(result);
      }
    );
  }

  setIdEvent(newId: number) {
    console.log(`EventId before passing: ${this.currentIdEvent.value}`)
    this.currentIdEvent.next(newId);
    console.log(`EventId after passing: ${this.currentIdEvent.value}`)
  }

}
