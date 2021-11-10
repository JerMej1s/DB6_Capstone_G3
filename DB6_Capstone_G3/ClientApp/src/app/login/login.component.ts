import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
/** Login component*/
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor() { }

  ngOnInit() {

  }
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      resp => console.log(resp),
      err => console.log(err)
    );
  }

}
