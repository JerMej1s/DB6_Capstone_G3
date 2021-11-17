import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';


@Injectable()
export class RegisterUserService {

  constructor(private http: HttpClient) {
  }

  public saveUser(theuser: User, cb: any) {
    console.log("inside event");
    console.log(`theuser: ${theuser.firstName}`);
    this.http.post<User>('user/save', theuser).subscribe(
      result => {
        console.log(`result: ${result.firstName}`);
        cb(result);
      }
    );
  }  
}
