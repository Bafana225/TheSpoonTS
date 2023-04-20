import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { Restaurant } from '../models/restaurant.model';
import { Horaires } from '../models/horaire.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
baseURLReservation: string = 'http://localhost:8080/theSpoon/api-reservation';
baseURLHoraires : string = 'http://localhost:8080/theSpoon/horaires';
baseURLRestauration: string = 'http://localhost:8080/theSpoon/restaurants-api';
reservations!: Reservation[];

constructor(private http: HttpClient) { }

// Liste toutes les réservations
listeReservation(): Observable<Reservation[]> {
  const url = `${this.baseURLReservation}/lister`;
  return this.http.get<Reservation[]>(url);
}

// Ajoute une nouvelle réservation
ajouterReservation(res: Reservation): Observable<Reservation> {
  const url = `${this.baseURLReservation}/ajouter`;
  return this.http.post<Reservation>(url, res, httpOptions);
}

// Supprime une réservation existante
supprimerReservation(id: number) {
  const url = `${this.baseURLReservation}/supprimer/${id}`;
  return this.http.delete(url, httpOptions);
}

// Consulte une réservation existante
consulterReservation(id: number): Observable<Reservation> {
  const url = `${this.baseURLReservation}/get/${id}`;
  return this.http.get<Reservation>(url);
}

// Met à jour une réservation existante
updateReservation(res: Reservation): Observable<Reservation> {
  const url = `${this.baseURLReservation}/editer`;
  return this.http.put<Reservation>(url, res, httpOptions);
}

//// Requêtes spéciales

getHoraires(): Observable<Horaires[]> {
  return this.http.get<Horaires[]>(this.baseURLHoraires + '/all');
}

getRestaurants(): Observable<Restaurant[]> {
  return this.http.get<Restaurant[]>(this.baseURLRestauration + '/all');
  }
}
