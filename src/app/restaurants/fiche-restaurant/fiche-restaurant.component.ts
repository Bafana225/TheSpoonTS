import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-fiche-restaurant',
  templateUrl: './fiche-restaurant.component.html',
  styleUrls: []
})
export class FicheRestaurantComponent implements OnInit {

  currentRestaurant!: Restaurant;

  constructor(private route: ActivatedRoute, 
              private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const restaurantId = params['id'];
      this.restaurantService.consulterRestaurant(restaurantId).subscribe(resto => {
        this.currentRestaurant = resto;
      });
    });
  }
}
