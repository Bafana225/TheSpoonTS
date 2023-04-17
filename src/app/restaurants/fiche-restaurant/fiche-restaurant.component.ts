import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-fiche-restaurant',
  templateUrl: './fiche-restaurant.component.html',
  styleUrls: []
})
export class FicheRestaurantComponent implements OnInit {
  restaurant: any;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const restaurantId = params['id'];
      this.restaurant = this.restaurantService.consulterRestaurant(restaurantId);
    });
  }
}
