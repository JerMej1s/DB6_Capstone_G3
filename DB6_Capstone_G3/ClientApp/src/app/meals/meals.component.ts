import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { GetUserEveService } from '../get-user-eve.service';
import { Meal } from '../Meal';
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
  idMeal?: number;

  userSearchName?: string;
  userSearchIngredient?: string;
  meals?: Meal[];
  meal?: Meal;

  @Input() newMeal: Meal =
    {
      idMeal: null,
      strMeal: null,
      idEvent: this.idEvent,
    }
  d
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
    console.log('Inside ingredientSearchClick()');
    this.userSearchIngredient = this.userSearchIngredient;
    console.log(this.userSearchIngredient);
    this.mealapi.searchDrinksByIngredient(this.userSearchIngredient,
      result => {
        console.log(result);
        this.meals = result;
      }
    );
  }

  addToEventClick(idMeal) {
    console.log(`Inside addToEventClick(). idMeal: ${idMeal}`);
    this.idMeal = idMeal;

    this.mealapi.getMealById(this.idMeal,
      result => {
        this.newMeal = result;
        console.log("This is new Meal")
        console.log(this.newMeal);
        this.meal = this.newMeal;
        this.newMeal.idEvent = this.idEvent;
        console.log("THIS IS This.MEAL passing in")
        console.log(this.meal)
        this.mealapi.saveMealToEvent(this.meal,
          result => {
            console.log("This is result")
            console.log(result);
            this.meal = result;
          }
        );
      }
    );
  }
}
