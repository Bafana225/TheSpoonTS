import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'home', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'update-restaurant/:id', component: UpdateRestaurantComponent },
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
