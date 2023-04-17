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
    apiURL: string = 'http://localhost:8081/restaurant';
    restaurants!: Restaurant[];

  constructor(private http : HttpClient) { }

  listeRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiURL + '/all');
  }

  ajouterRestaurant(res: Restaurant): Observable<Restaurant> {
    const url = `${this.apiURL}/add`;
    return this.http.post<Restaurant>(url, res, httpOptions);
  }

  supprimerRestaurant(id: number) {
    const url = `${this.apiURL}/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }



  consulterRestaurant(id: number): Observable<Restaurant> {
    const url = `${this.apiURL}/get/${id}`;
    return this.http.get<Restaurant>(url);
  }

  updateRestaurant(res: Restaurant): Observable<Restaurant> {
    const url = `${this.apiURL}/update`;
    return this.http.put<Restaurant>(url, res, httpOptions);
  }
  // Recherche de restaurant par nom

  rechercheRestaurantParNom(nom: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8081/restaurant/find-by-nom/${nom}`);
  }
  

}
