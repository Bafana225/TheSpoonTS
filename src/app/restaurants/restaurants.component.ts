import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'] // Chemin du fichier CSS
})

export class RestaurantsComponent implements OnInit {
  restaurants?: Restaurant[];

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chargerRestaurants();
  }

  onOpenModal(restaurant: Restaurant = {id: 1, nom: '', imageUrl:'', adresse: '', nbCouverts: 0, accessibilitePmr: false, prixMoyen: 0}, mode: string): void {
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRestaurantModal');
    }
    document.body.appendChild(button);
    button.click();
  }

  public chargerRestaurants(): void {
    this.restaurantService.listeRestaurant().subscribe(restaurants => {
      console.log(restaurants);
      this.restaurants = restaurants;
    });
  }

  public supprimerRestaurant(r: Restaurant): void {
    console.log(r.id);
    let conf = confirm("Confirmer?");
    if (conf) {
      this.restaurantService.supprimerRestaurant(r.id).subscribe(() => {
        alert("restaurant supprimé");
        this.chargerRestaurants();
        this.router.navigate(['/restaurants']); // Rediriger vers la page des restaurants
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

    public onDeleteRestaurant(restaurantId: number): void {
      this.restaurantService.supprimerRestaurant(restaurantId).subscribe(
        () => {
          console.log('Le restaurant a été supprimé');
          this.chargerRestaurants();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

}
