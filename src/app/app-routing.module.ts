import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';


const routes: Routes = [
{ path: 'add-restaurant', component: AddRestaurantComponent },
{ path: 'restaurants', component: RestaurantsComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
