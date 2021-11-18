import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { GetUserEveService } from '../get-user-eve.service';
import { Meal } from '../Meal';
import { MealResponse } from '../meal-response';
import { MealService } from '../meal.service';

@Component({
    selector: 'app-meals',
    templateUrl: './meals.component.html',
    styleUrls: ['./meals.component.css']
})

export class MealsComponent implements OnInit {

  public currentIdUser?: Observable<number>;
  public currentIdEvent?: Observable<number>;

  idUser: number = -1;
  idEvent: number = -1;

  userSearchName?: string;
  userSearchIngredient?: string;
  meals?: Meal[];
  meal?: Meal;
  mealResponse?: MealResponse;
  idMeal?: number;
  strMeal?: string;

  constructor(private auth: AuthService, private userevent: GetUserEveService, private mealapi: MealService,  private route: Router) { }

    ngOnInit(): void {
      this.currentIdUser = this.auth.getCurrentUserId();

      this.currentIdUser.subscribe((idUser: number) => {
        console.log(`Logging from meals component: ${idUser}`);
        this.idUser = idUser;
        }
      );

      this.currentIdEvent = this.userevent.getCurrentEventId();

      this.currentIdEvent.subscribe((idEvent: number) => {
        console.log(`Logging from meals component: idEvent: ${idEvent}`);
        this.idEvent = idEvent;
      }
      );
    }

  nameSearchClick() {
    this.mealResponse = null;
    this.userSearchName = this.userSearchName;
    this.mealapi.searchDrinksByName(this.userSearchName,
      result => {
        console.log(result);
        this.meals = result;
      }
    );
  }

  ingredientSearchClick() {
    this.mealResponse = null;
    this.userSearchIngredient = this.userSearchIngredient;
    console.log(this.userSearchIngredient);
    this.mealapi.searchDrinksByIngredient(this.userSearchIngredient,
      result => {
        console.log(result);
        this.meals = result;
      }
    );
  }

  getRandomMealClick() {
    this.mealResponse = null;
    this.mealapi.getMeal(
      result => {
        console.log(result);
        this.meals = result;
      }
    );
  }

  getDetails(idMeal) {
    this.idMeal = idMeal;
    this.mealapi.getMealById(this.idMeal,
      result => {
        this.mealResponse = result;
      }
    );
  }

  addToEventClick(idMeal) {
    this.idMeal = idMeal;
    this.mealapi.getMealById(this.idMeal,
      result => {
        this.meal = result;
        this.meal.idEvent = this.idEvent;
        this.mealapi.saveMealToEvent(this.meal, this.meal.idEvent,
          result => {
            this.meal = result;
          }
        );
      }
    );
  }
}
