import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meal } from './Meal';

@Injectable()
export class MealService {

  private currentIdMeal: BehaviorSubject<number> = new BehaviorSubject(-1);

  public getCurrentIdMeal(): Observable<number> {
    return this.currentIdMeal;
  }

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
        cb(result);
      }
    );
  }

  saveMealToEvent(newMeal, idEvent, cb) {
    console.log(newMeal);
    this.http.post<any>(`api/meals/save/${idEvent}`, newMeal).subscribe(
      result => {
        cb(result);
      }
    );
  }

  getMealById(idMeal, cb) {
    console.log(idMeal);
    this.http.get<Meal>(`api/meals/details/${idMeal}`, idMeal).subscribe(
      result => {
        cb(result);
      }
    );
  }

  setIdMeal(newId: number) {
    console.log(`idMeal before set: ${this.currentIdMeal.value}`);
    this.currentIdMeal.next(newId);
    console.log(`idMeal after set: ${this.currentIdMeal.value}`);
  }
}
