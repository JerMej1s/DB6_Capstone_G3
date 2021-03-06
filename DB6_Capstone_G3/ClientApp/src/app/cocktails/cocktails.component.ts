import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Cocktail } from '../Cocktail';
import { CocktailResponse } from '../cocktail-response';
import { CocktailService } from '../cocktail.service';
import { GetUserEveService } from '../get-user-eve.service';

@Component({
    selector: 'app-cocktails',
    templateUrl: './cocktails.component.html',
    styleUrls: ['./cocktails.component.css']
})

export class CocktailsComponent implements OnInit {

  public currentIdUser?: Observable<number>;
  public currentIdEvent?: Observable<number>;

  idUser: number = -1;
  idEvent: number = -1;

  buttonclick: boolean = false;
  userSearchName?: string;
  userSearchIngredient?: string;
  cocktail?: Cocktail;
  cocktails?: Cocktail[];
  cocktailResponse?: CocktailResponse;
  idDrink?: number;
  strDrink?: string;

  constructor(private auth: AuthService, private userevent: GetUserEveService, private cocktailapi: CocktailService, private route: Router) { }

  ngOnInit(): void {
    this.currentIdUser = this.auth.getCurrentUserId();

    this.currentIdUser.subscribe((idUser: number) => {
      console.log(`Logging from cocktails component: ${idUser}`);
      this.idUser = idUser;
      }
    );

    this.currentIdEvent = this.userevent.getCurrentEventId();

    this.currentIdEvent.subscribe((idEvent: number) => {
      console.log(`Logging from cocktails component: idEvent: ${idEvent}`);
      this.idEvent = idEvent;
      }
    );
  }

  nameSearchClick() {
    this.cocktailResponse = null;
    this.userSearchName = this.userSearchName;
    this.cocktailapi.searchDrinksByName(this.userSearchName,
      result => {
        console.log(result);
        this.cocktails = result;
      }
    );
  }

  ingredientSearchClick() {
    this.cocktailResponse = null;
    this.userSearchIngredient = this.userSearchIngredient;
    console.log(this.userSearchIngredient);
    this.cocktailapi.searchDrinksByIngredient(this.userSearchIngredient,
      result => {
        console.log(result);
        this.cocktails = result;
      }
    );
  }

  getRandomDrinkClick() {
    this.cocktailResponse = null;
    this.cocktailapi.getDrink(
      result => {
        console.log(result);
        this.cocktails = result;
      }
    );
  }

  getDetails(idDrink) {
    this.idDrink = idDrink;
    this.cocktailapi.getDrinkById(this.idDrink,
      result => {
        this.cocktailResponse = result;
      }
    );
  }

  addToEventClick(idDrink) {
    this.idDrink = idDrink;
    this.buttonclick = true;
    console.log(`Inside addToEventClick(): idDrink: ${idDrink}`);
    this.cocktailapi.getDrinkById(this.idDrink,
      result => {
        this.cocktail = result;
        this.cocktail.idEvent = this.idEvent;
        this.cocktailapi.saveDrinkToEvent(this.cocktail, this.cocktail.idEvent,
          result => {
            this.cocktail = result;
          }
        );
      }
    );    
  }
}
