import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserLogin } from '../userlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** Login component*/
export class LoginComponent implements OnInit {
  public currentIdUser?: Observable<number>
  idUser: number = -1;
  @Input() loginuser: UserLogin =
    {
      email: null,
      password: null,
    }

 

  editUserEmail: string = '';
  editUserPW: string = '';


  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.currentIdUser = this.auth.getCurrentUserId();

    this.currentIdUser.subscribe((idUser: number) => {
      this.idUser = idUser;
    })
  }


  userLoginClick() {
    console.log("button clicked")
    this.loginuser.email = this.editUserEmail;
    this.loginuser.password = this.editUserPW;
    this.auth.loginUser(this.loginuser, () => { }
    );
    this.route.navigate(['/loginconfirmation']);
  }

}
