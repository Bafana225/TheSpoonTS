import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apiURL: string = 'http://localhost:8080/theSpoon/reservations-api';
  reservations!: Reservation[];

  constructor(private http: HttpClient) {}

  listeReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiURL);
  }

  ajouterReservation(res: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiURL, res, httpOptions);
  }

  supprimerReservation(id: number) {
    console.log("ok");
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterReservation(id: number): Observable<Reservation> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Reservation>(url);
  }

  updateReservation(res: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(this.apiURL, res, httpOptions);
  }
}
