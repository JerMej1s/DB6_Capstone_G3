import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from './Cocktail';

@Injectable()
export class CocktailService {


  constructor(private http: HttpClient) {

  }
  getDrink(cb) {
    this.http.get<Cocktail>('api/cocktails/random').subscribe(
      result => {
        cb(result);
      }
    );
  }
}
