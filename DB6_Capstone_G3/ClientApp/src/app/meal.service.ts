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
}
