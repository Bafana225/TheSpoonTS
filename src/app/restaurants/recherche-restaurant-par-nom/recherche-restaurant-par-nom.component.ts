import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-recherche-restaurant-par-nom',
  templateUrl: './recherche-restaurant-par-nom.component.html',
  styleUrls: ['./recherche-restaurant-par-nom.component.scss']
})


export class RechercheRestaurantParNomComponent implements OnInit {

  nomRestaurant!: string;
  restaurants!: Restaurant[];
  allRestaurants!: Restaurant[];
  searchTerm!: string;

  constructor(private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.restaurantService.listeRestaurant().subscribe((restaurants: Restaurant[]) => {
      console.log(restaurants);
      this.restaurants = restaurants;
      this.allRestaurants = restaurants;
    });
  }

  rechercherRestaurants() {
    this.restaurantService.rechercheRestaurantParNom(this.nomRestaurant).subscribe((restaurants: Restaurant[]) => {
      console.log(restaurants);
      this.restaurants = restaurants;
    });
  }

  onKeyUp(filterText: string) {
    this.restaurants = this.allRestaurants.filter(item =>
      item.nom.toLowerCase().includes(filterText)
    );
  }
}
