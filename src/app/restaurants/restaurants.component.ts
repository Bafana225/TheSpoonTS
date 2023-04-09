import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants?: Restaurant[];
  public editRestaurant: Restaurant | undefined;
  public deleteRestaurant: Restaurant | undefined;



  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chargerRestaurants();
  }

  chargerRestaurants(): void {
    this.restaurantService.listeRestaurant().subscribe(restaurants => {
      console.log(restaurants);
      this.restaurants = restaurants;
    });
  }

  supprimerRestaurant(r: Restaurant): void {
    console.log(r.id);
    let conf = confirm("Confirmer?");
    if (conf) {
      this.restaurantService.supprimerRestaurant(r.id).subscribe(() => {
        console.log("restaurant supprimé");
        this.chargerRestaurants();
      });
    }
  }

  public onAddRestaurant(addForm: NgForm): void {
    document.getElementById('add-restaurant-form')?.click();
    this.restaurantService.ajouterRestaurant(addForm.value).subscribe(
    (response: Restaurant) => {
    console.log(response);
    this.chargerRestaurants();
    addForm.reset();
    },
    (error: HttpErrorResponse) => {
    alert(error.message);
    addForm.reset();
    }
    );
    }

    public onUpdateRestaurant(restaurant: Restaurant): void {
      this.restaurantService.updateRestaurant(restaurant).subscribe(
        (response: Restaurant) => {
          console.log(response);
          this.chargerRestaurants();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    

  onOpenModal(restaurant: Restaurant = {id: 1, nom: '', adresse: '', nbCouverts: 0, accessibilitePmr: false, prixMoyen: 0}, mode: string): void {
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRestaurantModal');
    }
    if (mode === 'edit'){
      this.editRestaurant = restaurant;
      button.setAttribute('data-target', '#updateJoueurModal');
    }
    if (mode === 'delete') {
      this.deleteRestaurant = restaurant;
      button.setAttribute('data-target', '#deleteRestaurantModal');
    }
    document.body.appendChild(button);
    button.click();
  }

}
