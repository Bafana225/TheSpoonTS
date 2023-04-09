import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styles: []
})
export class UpdateRestaurantComponent implements OnInit {

  currentRestaurant = new Restaurant();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.consulterRestaurant(this.activatedRoute.snapshot.params['id']).
      subscribe(resto => { this.currentRestaurant = resto; });
  }

  updateRestaurant() {
    this.restaurantService.updateRestaurant(this.currentRestaurant).subscribe(resto => {
      this.router.navigate(['restaurants']);
    });
  }

}
