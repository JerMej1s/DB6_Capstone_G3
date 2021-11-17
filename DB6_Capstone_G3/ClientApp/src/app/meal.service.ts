import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from './Meal';

@Injectable()
export class MealService {


  constructor(private http: HttpClient) {

  }
  getMeal(cb) {
    this.http.get<Meal>('api/meals/random').subscribe(
      result => {
        cb(result);
      }
    );
  }

  searchDrinksByName(userSearchName, cb) {
    this.http.get<Meal>(`api/meals/${userSearchName}`).subscribe(
      result => {
        cb(result);
      }
    );
  }

  searchDrinksByIngredient(userSearchIngredient, cb) {
    console.log(userSearchIngredient);
    this.http.get<Meal>(`api/meals/ingredient/${userSearchIngredient}`).subscribe(
      result => {
        console.log(userSearchIngredient);
        cb(result);
      }
    );
  }

  saveMealToEvent(newMeal, cb) {
    console.log(newMeal);
    this.http.post<Meal>('api/meals/save', newMeal).subscribe(
      result => {
        console.log(newMeal);
        cb(result);
      }
    );
  }

  getDrinkById(idMeal, cb) {
    console.log(idMeal);
    this.http.get<Meal>(`api/meals/details`, idMeal).subscribe(
      result => {
        console.log(idMeal);
        cb(result);
      }
    );
  }
}
