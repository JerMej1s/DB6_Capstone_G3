import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { UserLogin } from './userlogin';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private currentIdUser: BehaviorSubject<number> = new BehaviorSubject(-1);

  newresult: number = null;
  constructor(private http: HttpClient) {
  }

  public getCurrentUserId(): Observable<number> {
    return this.currentIdUser;
  }


  public registerUser(theuser: User, cb) {
    console.log("inside event");
    console.log(theuser);
    return this.http.post<User>('user/save', theuser).subscribe(
      (result) => {
        cb();
      }
    )
  }

  public loginUser(loginuser, cb) {
    console.log("inside event");
    console.log(loginuser);
    return this.http.post<any>('user/home', loginuser).subscribe(
      (result: any) => {
        console.log(result);
        this.setIdUser(result);
        this.newresult = result;
        cb(result);
      }
    )
  }

  getIdUserFromDAL(cb: any) {
    this.http.get<number>(`/user/home`).subscribe(
      result => {
        cb(result);
      }
    )
  }

  setIdUser(newId: number) {
    console.log(`UserId before login: ${this.currentIdUser.value}`)
    this.currentIdUser.next(newId);
    console.log(`UserId after login: ${this.currentIdUser.value}`)
  }

}
