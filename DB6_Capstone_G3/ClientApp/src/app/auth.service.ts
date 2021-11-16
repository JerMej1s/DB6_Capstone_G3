import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { UserLogin } from './userlogin';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private currentIdUser: BehaviorSubject<number> = new BehaviorSubject(-1);
  //private _register = "/register";
  //private _login = "/login";
  constructor(private http: HttpClient, private http2: HttpClient) {
  }

  public getCurrentUserId(): Observable<number> {
    return this.currentIdUser;
  }


  public registerUser(theuser, cb) {
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
      (result) => {
        this.currentIdUser = result;
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
