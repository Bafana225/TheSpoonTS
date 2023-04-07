import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
    apiURL: string = 'http://localhost:8080/theSpoon/restaurants-api';
    restaurants!: Restaurant[];

  constructor(private http : HttpClient) { }

  listeRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiURL);
  }

  ajouterRestaurant(res: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.apiURL, res, httpOptions);
  }

  supprimerRestaurant(id: number) {
    console.log("ok");
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  consulterRestaurant(id: number): Observable<Restaurant> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Restaurant>(url);
  }

  updateRestaurant(res: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(this.apiURL, res, httpOptions);
  }

}
