import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { Restaurant } from '../models/restaurant.model';
import { Horaires } from '../models/horaire.model';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { RestaurantService } from '../services/restaurant.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'] // Chemin du fichier CSS
})

export class ReservationsComponent implements OnInit {
  reservations?: Reservation[];
  restaurants?: Restaurant[];
  horaires?: Horaires[];

  constructor(
    private reservationService: ReservationService,
    private restaurantService: RestaurantService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadReservations();
    this.loadRestaurants();
    //this.loadHoraires();

    this.reservationService.getHoraires().subscribe(
      (horaires) => {
        console.log(horaires);
        this.horaires = horaires;
      }
    );
  }
  ///

  onOpenModal(reservation: Reservation = { id: 0, nbrAdulte: 0, nbrEnfant: 0, restaurant: { id: 0, nom: '', adresse: '', nbrPlace: 0, pmr: false, prix: 0, reservations: [], horaires: [] }, horaires: { id: 0, horaire: '' } }, mode: string): void { 
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addReservationModal');
    }
    document.body.appendChild(button);
    button.click();
}



  /// LOADS

  public loadReservations(): void {
    this.reservationService.listeReservation().subscribe(reservations => {
      console.log(reservations);
      this.reservations = reservations;
    });
  }

  public loadRestaurants(): void {
    this.restaurantService.listeRestaurant().subscribe(restaurants => {
      console.log(restaurants);
      this.restaurants = restaurants;
    });
  }

  ///

  public deleteReservation(r: Reservation): void {
    console.log(r.id);
    let conf = confirm("Confirmer?");
    if (conf) {
      this.reservationService.supprimerReservation(r.id).subscribe(() => {
        alert("reservation supprimée");
        this.loadReservations();
        this.router.navigate(['/reservations']); // Rediriger vers la page des reservations
      });
    }
  }

  public onAddReservation(addForm: NgForm): void {
    document.getElementById('add-reservation-form')?.click();
    this.reservationService.ajouterReservation(addForm.value).subscribe(
      (response: Reservation) => {
        console.log(response);
        this.loadReservations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateReservation(reservation: Reservation): void {
    this.reservationService.updateReservation(reservation).subscribe(
      (response: Reservation) => {
        console.log(response);
        this.loadReservations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteReservation(reservationId: number): void {
    this.reservationService.supprimerReservation(reservationId).subscribe(
      () => {
        console.log('La reservation a été supprimée');
        this.loadReservations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
