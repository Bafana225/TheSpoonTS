import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Reservation } from '../models/reservation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
    apiURL: string = 'http://localhost:8080/theSpoon/restaurants-api';
    restaurants!: Restaurant[];
    reservations!: Reservation[];

  constructor(private http : HttpClient) { }

  listeRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiURL + '/lister');
  }

  ajouterRestaurant(res: Restaurant): Observable<Restaurant> {
    const url = `${this.apiURL}/ajouter`;
    return this.http.post<Restaurant>(url, res, httpOptions);
  }

  supprimerRestaurant(id: number) {
    const url = `${this.apiURL}/supprimer/${id}`;
    return this.http.delete(url, httpOptions);
  }



  consulterRestaurant(id: number): Observable<Restaurant> {
    const restaurant$ = this.http.get<Restaurant>(`${this.apiURL}/restaurants/${id}`);
    const reservations$ = this.http.get<Reservation[]>(`${this.apiURL}/reservations`);
  
    return forkJoin([restaurant$, reservations$]).pipe(
      map(([restaurant, reservations]) => {
        restaurant.reservations = reservations.filter(reservation => reservation.restaurant.id === restaurant.id);
        return restaurant;
      })
    );
  }

  

  updateRestaurant(res: Restaurant): Observable<Restaurant> {
    const url = `${this.apiURL}/update`;
    return this.http.put<Restaurant>(url, res, httpOptions);
  }
  // Recherche de restaurant par nom

  rechercheRestaurantParNom(nom: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8081/restaurant/find-by-nom/${nom}`);
  }

  consulterReservations(id: number): Observable<Reservation[]> {
    const url = `${this.apiURL}/restaurants/${id}/reservations`;
    return this.http.get<Reservation[]>(url);
  }
  

}
