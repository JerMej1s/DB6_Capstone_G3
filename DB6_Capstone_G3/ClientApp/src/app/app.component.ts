import { HttpClient } from '@angular/common/http';
import { Component, OnInit,} from '@angular/core';
import { EventsComponent } from "./events/events.component";
import { Cocktail } from './Cocktail';
import { CocktailService } from './cocktail.service';
import { Meal } from './Meal';
import { MealService } from './meal.service';
import { Event } from './event'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){

}
  title = 'app';
  myCocktails?: Cocktail[] = null;
  allCocktails?: Cocktail = null;
  allMeals?: Meal = null;
  testevent: Event;
  myEvents?: Event[] = null;
 
  newEventId = ''; newEventName = ''; newCity = ''; newdate = null; newState = '';

  newUserId = ''; newUserFN = ''; newUserLN = ''; newUserPhone = ''; newUserEmail = ''; newUserPW = '';

  constructor(private cocktailapi: CocktailService, private mealapi: MealService, private http: HttpClient,
    public router: Router) {

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

  getAllEvents() {
    let newevent = {
      userID: this.newUserId
    };
      this.http.post<Event[]>('event/home', 1).subscribe(
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
