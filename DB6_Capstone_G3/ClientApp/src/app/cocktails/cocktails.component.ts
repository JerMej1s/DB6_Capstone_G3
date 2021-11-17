import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Cocktail } from '../Cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
    selector: 'app-cocktails',
    templateUrl: './cocktails.component.html',
    styleUrls: ['./cocktails.component.css']
})

export class CocktailsComponent implements OnInit {

  public currentIdUser?: Observable<number>;

  idUser: number = -1;
  userSearchName?: string;
  userSearchIngredient?: string;
  cocktails?: Cocktail[];
  cocktail?: Cocktail;
  idDrink?: number;

  constructor(private cocktailapi: CocktailService, private auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.currentIdUser = this.auth.getCurrentUserId();

    this.currentIdUser.subscribe((idUser: number) => {
      console.log(`Logging from cocktails component: ${idUser}`);
      this.idUser = this.idUser;
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

  addToEventClick() {
    console.log('Inside addEventClick()');
    this.cocktail = this.cocktail;
    this.cocktailapi.saveDrinkToEvent(this.cocktail,
      result => {
        console.log(result);
        this.cocktail = result;
      }
    );
  }
}
