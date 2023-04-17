import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-fiche-restaurant',
  templateUrl: './fiche-restaurant.component.html',
  styleUrls: []
})
export class FicheRestaurantComponent implements OnInit {

  currentRestaurant!: Restaurant;
  currentReservations!: Reservation[];

  constructor(private route: ActivatedRoute, 
              private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const restaurantId = params['id'];
      this.restaurantService.consulterRestaurant(restaurantId).subscribe(resto => {
        this.currentRestaurant = resto;

        // Appeler la méthode consulterReservations pour récupérer la liste des réservations
        this.restaurantService.consulterReservations(restaurantId).subscribe(reservations => {
          this.currentReservations = reservations;
        });
      });
    });
  }
}
