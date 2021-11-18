import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from './Cocktail';
import { CocktailResponse } from './cocktail-response';

@Injectable()
export class CocktailService {


  constructor(private http: HttpClient) {

  }
  getDrink(cb) {
    this.http.get<Cocktail>('api/cocktails/random').subscribe(
      result => {
        cb(result);
      }
    );
  }

  searchDrinksByName(userSearchName, cb) {
    this.http.get<Cocktail>(`api/cocktails/${userSearchName}`).subscribe(
      result => {
        cb(result);
      }
    );
  }

  searchDrinksByIngredient(userSearchIngredient, cb) {
    console.log(userSearchIngredient);
    this.http.get<Cocktail>(`api/cocktails/ingredient/${userSearchIngredient}`).subscribe(
      result => {
        cb(result);
      }
    );
  }


  saveDrinkToEvent(newCocktail,idEvent, cb) {
    console.log(newCocktail);
    this.http.post<any>(`api/cocktails/save/${idEvent}`, newCocktail).subscribe(
      result => {
        cb(result);
      }
    );
  }

  getDrinkById(idDrink, cb) {
    console.log(idDrink);
    this.http.get<Cocktail>(`api/cocktails/details/${idDrink}`, idDrink).subscribe(
      result => {
        cb(result);
      }
    );
  }
}
