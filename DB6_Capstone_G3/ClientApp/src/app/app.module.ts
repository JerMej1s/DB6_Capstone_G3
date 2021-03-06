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
import { TestComponent } from './test/test.component';
import { LogintestComponent } from './logintest/logintest.component';
import { MealstestComponent } from './mealstest/mealstest.component';
import { CocktailstestComponent } from './cocktailstest/cocktailstest.component';
import { AuthService } from './auth.service';
import { EventsaveService } from './eventsave.service';
import { RegisterUserService } from './registeruser.service';
import { EventconfirmationComponent } from './eventconfirmation/eventconfirmation.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { RegisteredconfirmationComponent } from './registeredconfirmation/registeredconfirmation.component';
import { GetUserEveService } from './get-user-eve.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    EventsComponent,
    CocktailsComponent,
    MealsComponent,
    RegisterComponent,
    TestComponent,
    LogintestComponent,
    MealstestComponent,
    CocktailstestComponent,
    EventconfirmationComponent,
    LoginhomeComponent,
    RegisteredconfirmationComponent,
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
      { path: 'test', component: TestComponent },
      { path: 'logintest', component: LogintestComponent },
      { path: 'mealstest', component: MealstestComponent },
      { path: 'cocktailstest', component: CocktailstestComponent },
      { path: 'eventconfirmation', component: EventconfirmationComponent },
      { path: 'loginconfirmation', component: LoginhomeComponent },
      { path: 'registeredconfirmation', component: RegisteredconfirmationComponent },
    ])
  ],
  providers: [CocktailService, MealService, EventsaveService, AuthService, RegisterUserService, RegisterUserService, GetUserEveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
