import { Restaurant } from './../../models/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../../models/reservation.model'; // Import de la classe "Reservation"
import { ReservationService } from '../../services/reservation.service'; // Import du service "ReservationService"
import { Horaires } from '../../models/horaire.model';

@Component({
selector: 'app-add-reservation', // Changer le nom du composant
templateUrl: './add-reservation.component.html'
})
export class AddReservationComponent implements OnInit {

newReservation = new Reservation(); // Instanciation de la classe "Reservation"
restaurants!: Restaurant[];
horaires!: Horaires;

constructor(private reservationService: ReservationService,
private router: Router) { }

ngOnInit(): void {
}

addReservation(){
this.reservationService.ajouterReservation(this.newReservation)
.subscribe(res => {
console.log(res);
this.router.navigate(['/reservations']); // Rediriger vers la liste des réservations
});
}

}
