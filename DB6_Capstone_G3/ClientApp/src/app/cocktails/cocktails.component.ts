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

  userSearchName?: string;
  userSearchIngredient?: string;
  cocktail?: Cocktail;
  cocktails?: Cocktail[];
  idDrink?: number;
  strDrink?: string;
  @Input() newcocktail: Cocktail =
    {
      idDrink: null,
      strDrink: null,
      idEvent: this.idEvent,
    }


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

  getRandomDrinkClick() {
    console.log('Inside getRandomDrinkClick()');
    this.cocktailapi.getDrink(
      result => {
        console.log(result);
        this.cocktails = result;
      }
    );
  }

  nameSearchClick() {
    console.log('Inside nameSearchClick()');
    this.userSearchName = this.userSearchName;
    this.cocktailapi.searchDrinksByName(this.userSearchName,
      result => {
        console.log(result);
        this.cocktails = result;
      }
    );
  }

  ingredientSearchClick() {
    console.log('Inside ingredientSearchClick()')
    this.userSearchIngredient = this.userSearchIngredient;
    console.log(this.userSearchIngredient);
    this.cocktailapi.searchDrinksByIngredient(this.userSearchIngredient,
      result => {
        console.log(result);
        this.cocktails = result;
      }
    );
  }

  addToEventClick(idDrink) {
    console.log(`Inside addToEventClick(). idDrink: ${idDrink}`);
    this.idDrink = idDrink;

    this.cocktailapi.getDrinkById(this.idDrink,
      result => {
        this.newcocktail = result;
        console.log("This is newcocktail")
        console.log(this.newcocktail);
        //this.cocktail.idDrink = this.idDrink;
        //this.cocktail.idEvent = this.idEvent;
        this.cocktail = this.newcocktail;
        console.log("THIS IS This.cocktail passing in")
        console.log(this.cocktail)
        this.cocktailapi.saveDrinkToEvent(this.cocktail,
          result => {
            console.log("This is result")
            console.log(result);
            this.cocktail = result;
          }
        );
      }
    );

    
  }
}
