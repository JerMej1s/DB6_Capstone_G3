import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

  private _register = "/api/register";
  private _login = "/api/login";
  constructor(private http: HttpClient) {
  }

  public registerUser(useremail, userpassword, cb) {
    /*return this.http.post<any>(this._register, user)*/
    return this.http.post<any>('event/save', useremail, userpassword).subscribe(
      (result) => {
        cb();
      }
    )
  }

  public loginUser(user, cb) {
    return this.http.post<any>('User/home', user).subscribe(
      (result) => {
        cb();
      }
    )
  }
}
