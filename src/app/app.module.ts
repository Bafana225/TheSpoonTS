import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    HomeComponent,
    MapComponent
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
