import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** Login component*/
export class LoginComponent implements OnInit {

  loginUserData = {
  }

  editUserEmail: string = '';
  editUserPW: string = '';


  constructor(private auth:AuthService) { }

  ngOnInit() {
  }


  userLoginClick() {
    console.log("button clicked")
    console.log(this.editUserEmail)
    console.log(this.editUserPW)
    this.auth.loginUser(this.editUserEmail, () => { }
    );
  }

}
