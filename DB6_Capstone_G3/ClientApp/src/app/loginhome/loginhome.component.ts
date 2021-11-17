import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-loginhome',
    templateUrl: './loginhome.component.html',
    styleUrls: ['./loginhome.component.css']
})
/** loginhome component*/
export class LoginhomeComponent {
  public currentIdUser?: Observable<number>
  idUser: number = -1;

    constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.currentIdUser = this.auth.getCurrentUserId();

    this.currentIdUser.subscribe((idUser: number) => {
      this.idUser = idUser;
    })

    console.log(`${this.idUser}`);
  }

}
