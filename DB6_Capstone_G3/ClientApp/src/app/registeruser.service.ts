import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable()
export class RegisterUserService {
  constructor(private http: HttpClient) {
  }

  public saveUser(theuser, cb) {
    console.log("inside event");
    console.log(theuser);
    this.http.post<any>('user/save', theuser).subscribe(
      (result) => {
        console.log(result);
        cb();
      }
    );
  }
}
