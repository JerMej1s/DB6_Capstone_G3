import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class GetUserEveService {
  private currentIdEvent: BehaviorSubject<number> = new BehaviorSubject(-1);

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  public getCurrentEventId(): Observable<number> {
    return this.currentIdEvent;
  }


  getUserEvents(idUser, cb) {
    console.log("inside iduser event");
    console.log(idUser);
    idUser = 1;
    this.http.get<any>(`user/events/${idUser}`, idUser).subscribe(
      result => {
        cb(result);
      }
    )
  }

  setIdEvent(newId: number) {
    console.log(`UserId before login: ${this.currentIdEvent.value}`)
    this.currentIdEvent.next(newId);
    console.log(`UserId after login: ${this.currentIdEvent.value}`)
  }

}
