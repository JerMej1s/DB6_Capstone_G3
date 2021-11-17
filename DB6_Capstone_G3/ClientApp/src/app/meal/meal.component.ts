import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Meal } from '../Meal';
import { MealService } from '../meal.service';

@Component({
    selector: 'app-meal',
    templateUrl: './meal.component.html',
    styleUrls: ['./meal.component.css']
})

export class MealComponent implements OnInit {

  public currentIdUser?: Observable<number>;
  public currentIdMeal?: Observable<number>;

  idUser: number = -1;
  idMeal?: number;
  meal?: Meal;

  constructor(private auth: AuthService, private mealapi: MealService) {

    }
    ngOnInit(): void {
      this.currentIdUser = this.auth.getCurrentUserId();

      this.currentIdUser.subscribe((idUser: number) => {
        console.log(`Logging from meal component: ${idUser}`);
        this.idUser = this.idUser;
      }
      );

      this.currentIdMeal = this.mealapi.getCurrentIdMeal();

      this.currentIdMeal.subscribe((idMeal: number) => {
        console.log(`Logging from cocktails component: idMeal: ${idMeal}`);
        this.idMeal = this.idMeal;
      }
      );

      function getDetails() {
        console.log('Inside getDetails()');
        this.mealapi.getMealById(this.idMeal,
          result => {
            console.log(result);
            this.meal = result;
          }
        )
      }
    }
}
