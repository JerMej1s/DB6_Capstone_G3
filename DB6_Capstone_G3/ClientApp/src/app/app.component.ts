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
  newEventId = ''; newEventName = ''; newCity = ''; newdate = null; newState = '';

  newUserId = ''; newUserFN = ''; newUserLN = ''; newUserPhone = ''; newUserEmail = ''; newUserPW = '';

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
        eventId: this.newEventId, eventName: this.newEventName, eventCity: this.newCity, eventState: this.newState
      };
      this.http.post<Event>('event/save', newevent).subscribe(
        (result) => {
          this.getAllEvents();
        }
      )
    }

  getAllEvents() {
    let newevent = {
      userID: this.newUserId
    };
      this.http.post<Event[]>('event/home', newevent).subscribe(
        (result) => {
          this.myEvents = result;
          console.log(this.myEvents);
        }
      );
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
