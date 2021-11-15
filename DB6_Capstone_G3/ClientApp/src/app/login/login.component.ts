import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** Login component*/
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }


  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      resp => console.log(resp),
      err => console.log(err)
    );
  }

}
