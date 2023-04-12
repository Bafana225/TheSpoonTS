import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../services/reservation.service';
import { Restaurant } from '../../models/restaurant.model';
import { Horaires } from '../../models/horaire.model';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent implements OnInit {

  currentReservation = new Reservation();
  restaurants: Restaurant[] = [];
  horaires: Horaires[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.consulterReservation(this.activatedRoute.snapshot.params['id']).
      subscribe(reservation => {
        this.currentReservation = reservation;
        // Récupération des restaurants et horaires pour les listes déroulantes
        this.reservationService.getRestaurants().subscribe(
          (restaurants) => {
            this.restaurants = restaurants;
            // Trouver le restaurant associé à la réservation
            this.currentReservation.restaurant = this.restaurants.find(r => r.id === this.currentReservation.restaurant.id);
          }
        );
        this.reservationService.getHoraires().subscribe(
          (horaires) => this.horaires = horaires
        );
      });
  }



  updateReservation() {
    this.reservationService.updateReservation(this.currentReservation).subscribe(reservation => {
      this.router.navigate(['/reservations']);
    });
  }

}
