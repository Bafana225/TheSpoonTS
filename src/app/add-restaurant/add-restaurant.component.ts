import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant.model'; // Import de la classe "Restaurant"
import { RestaurantService } from '../services/restaurant.service'; // Import du service "RestaurantService"

@Component({
  selector: 'app-add-restaurant', // Changer le nom du composant
  templateUrl: './add-restaurant.component.html'
})
export class AddRestaurantComponent implements OnInit {

  newRestaurant = new Restaurant(); // Instanciation de la classe "Restaurant"

  constructor(private restaurantService: RestaurantService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addRestaurant(){
    this.restaurantService.ajouterRestaurant(this.newRestaurant)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['restaurants']); // Rediriger vers la liste des restaurants
    });
  }

}
