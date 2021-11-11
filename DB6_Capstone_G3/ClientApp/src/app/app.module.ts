import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MealsComponent } from './meals/meals.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { EventsComponent } from './events/events.component';
import { CocktailService } from './cocktail.service';
import { MealService } from './meal.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    EventsComponent,
    CocktailsComponent,
    MealsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'events', component: EventsComponent },
      { path: 'cocktails', component: CocktailsComponent },
      { path: 'meals', component: MealsComponent },
      { path: 'register', component: RegisterComponent },
    ])
  ],
  providers: [CocktailService, MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
