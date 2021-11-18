import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  public currentIdUser?: Observable<number>

  constructor(private auth: AuthService) { }

  idUser: number = -1;

  ngOnInit(): void {
    this.currentIdUser = this.auth.getCurrentUserId();

    this.currentIdUser.subscribe((idUser: number) => {
      console.log(`Logging from nav Component in events: ${idUser}`);
      this.idUser = idUser;
    })
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
