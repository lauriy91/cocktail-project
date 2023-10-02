import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomDrinks(){
    return this.http.get(`${environment.API}filter.php?a=Alcoholic`);
  }

  getDrinksDetails(idDrink: string){
    return this.http.get(`${environment.API}lookup.php?i=${idDrink}`)
  }
}
