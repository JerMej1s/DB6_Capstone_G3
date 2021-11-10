import { Component } from '@angular/core';
import { Cocktail } from './Cocktail';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  allCocktails?: Cocktail = null;

  constructor(private cocktailapi: CocktailService) {
    cocktailapi.getDrink(
      result => {
        this.allCocktails = result;
        console.log(this.allCocktails);
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
