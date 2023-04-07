import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
})

export class RestaurantsComponent implements OnInit {

  restaurants?: Restaurant[];

  constructor(private restaurantService: RestaurantService,
    private router : Router) {
  }

  ngOnInit(): void {

    this.chargerRestaurants();
  }

  chargerRestaurants() {
    this.restaurantService.listeRestaurant().subscribe(restaurants => {
      console.log(restaurants);
      this.restaurants = restaurants;
    });
  }

  supprimerRestaurant(r: Restaurant) {
    console.log(r.id);
    let conf = confirm("Confirmer?");
    if (conf)
      this.restaurantService.supprimerRestaurant(r.id).subscribe(() => {
        console.log("restaurant supprimé");
        this.chargerRestaurants();
      });
  }

}
