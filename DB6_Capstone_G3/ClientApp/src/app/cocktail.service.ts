import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from './Cocktail';

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
        console.log(userSearchIngredient);
        cb(result);
      }
    );
  }

  saveDrinkToEvent(newCocktail, cb) {
    console.log(newCocktail);
    this.http.post<Cocktail>('api/cocktails/save', newCocktail).subscribe(
      result => {
        console.log(newCocktail);
        cb(result);
      }
    );
  }

  getDrinkById(idDrink, cb) {
    console.log(idDrink);
    this.http.get<Cocktail>(`api/cocktails/details`, idDrink).subscribe(
      result => {
        console.log(idDrink);
        cb(result);
      }
    );
  }
}
