import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './restaurants/add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './restaurants/update-restaurant/update-restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';


const routes: Routes = [
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'update-restaurant/:id', component: UpdateRestaurantComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
