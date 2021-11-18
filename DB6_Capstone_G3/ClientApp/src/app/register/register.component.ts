import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterUserService } from '../registeruser.service';
import { User } from '../user';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(private registeruser: RegisterUserService, private auth: AuthService) {
  }
  @Input() theuser: User =
    {
      idUser: null,
      firstName: null,
      lastName: null,
      phoneNumber: null,
      email: null,
      password: null,
    }

  editidUser: number = 0;
  editFN: string = '';
  editLN: string = '';
  editPN: string = '';
  editEmail: string = '';
  editPass: string = '';

  saveUserButton() {
    console.log("Clicked button")
    this.theuser.idUser = this.editidUser;
    this.theuser.firstName = this.editFN;
    this.theuser.lastName = this.editLN;
    this.theuser.phoneNumber = this.editPN;
    this.theuser.email = this.editEmail;
    this.theuser.password = this.editPass;
    this.auth.registerUser(this.theuser, () => { });
  }

}
