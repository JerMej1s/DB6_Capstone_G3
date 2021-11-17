import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Meal } from '../Meal';
import { MealService } from '../meal.service';

@Component({
    selector: 'app-meals',
    templateUrl: './meals.component.html',
    styleUrls: ['./meals.component.css']
})

export class MealsComponent implements OnInit {

  public currentIdUser?: Observable<number>;

  idUser: number = -1;
  userSearchName?: string;
  userSearchIngredient?: string;
  meals?: Meal[];
  meal?: Meal;

  constructor(private mealapi: MealService, private auth: AuthService, private route: Router) { }

    ngOnInit(): void {
      this.currentIdUser = this.auth.getCurrentUserId();

      this.currentIdUser.subscribe((idUser: number) => {
        console.log(`Logging from cocktails component: ${idUser}`);
        this.idUser = this.idUser;
      }
      );
    }

  getRandomMealClick() {
    console.log('Inside getRandomMealClick()');
    this.mealapi.getMeal(
      result => {
        console.log(result);
        this.meals = result;
      }
    );
  }

  nameSearchClick() {
    console.log('Inside nameSearchClick()');
    this.userSearchName = this.userSearchName;
    this.mealapi.searchDrinksByName(this.userSearchName,
      result => {
        console.log(result);
        this.meals = result;
      }
    );
  }

  ingredientSearchClick() {
    console.log('Inside ingredientSearchClick()')
    this.userSearchIngredient = this.userSearchIngredient;
    console.log(this.userSearchIngredient);
    this.mealapi.searchDrinksByIngredient(this.userSearchIngredient,
      result => {
        console.log(result);
        this.meals = result;
      }
    );
  }

  addToEventClick() {
    console.log('Inside addEventClick()');
    this.meal = this.meal;
    this.mealapi.saveMealToEvent(this.meal,
      result => {
        console.log(result);
        this.meal = result;
      }
    );
  }
}
