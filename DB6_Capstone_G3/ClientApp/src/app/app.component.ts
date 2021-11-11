import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cocktail } from './Cocktail';
import { CocktailService } from './cocktail.service';
import { Meal } from './Meal';
import { MealService } from './meal.service';
import { Event } from './event'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  myCocktails?: Cocktail[] = null;
  allCocktails?: Cocktail = null;
  allMeals?: Meal = null;
  myEvents?: Event[] = null;
  newEvent = '';
  newUserId = ''; newUserFN = ''; newUserLN = ''; newUserPhone = ''; newUserEmail = ''; newUserPW = '';
  new
  constructor(private cocktailapi: CocktailService, private mealapi: MealService, private http: HttpClient) {

    cocktailapi.getDrink(
      result => {
        this.allCocktails = result;
        console.log(this.allCocktails);
      }
    )

    mealapi.getMeal(
      result => {
        this.allMeals = result;
        console.log(this.allMeals);
      }
    )
  }
    saveEvent() {
      let newevent = {
        userID: this.newUserId, userFN: this.newUserFN, userLN: this.newUserLN, userPhone: this.newUserPhone,
        userEmail: this.newUserEmail, userPW: this.newUserPW,
      };
      this.http.post<Event>('event/save', newevent).subscribe(
        (result) => {
          
        }
      )
    }

    getAllEvents() {
      let User = {
        userID: this.newUserId
      };
      this.http.get<Event[]>('event/home', User).subscribe(
        (result) => {
          this.myEvents.push();
          console.log(this.myEvents);
        }
      )
  }


  getMeal() {
    this.mealapi.getMeal(
      result => {
        console.log(result);
      }
    )
  }

  getDrink() {
    this.cocktailapi.getDrink(
      result => {
        console.log(result);
      }
    )
  }
}
