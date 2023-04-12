import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddRestaurantComponent } from './restaurants/add-restaurant/add-restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateRestaurantComponent } from './restaurants/update-restaurant/update-restaurant.component';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './reservations/update-reservation/update-reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    HomeComponent,
    ReservationsComponent,
    AddReservationComponent,
    UpdateReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
