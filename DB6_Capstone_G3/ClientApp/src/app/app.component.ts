import { Component } from '@angular/core';
import { Cocktail } from './Cocktail';
import { CocktailService } from './cocktail.service';
import { Meal } from './Meal';
import { MealService } from './meal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  allCocktails?: Cocktail = null;
  allMeals?: Meal = null;

  constructor(private cocktailapi: CocktailService, private mealapi: MealService) {
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
