import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

  private _register = "/api/register";
  private _login = "/api/login";
  constructor(private http: HttpClient) {
  }

  public registerUser(user) {
    return this.http.post<any>(this._register, user)
  }

  public loginUser(user) {
    return this.http.post<any>(this._login, user)
  }
}
