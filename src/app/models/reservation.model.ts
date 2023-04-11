import { Restaurant } from './restaurant.model';
import { Horaires } from './horaire.model';

export class Reservation {
  id: number;
  nbAdultes: number;
  nbEnfants: number;
  restaurant: Restaurant;
  horaires: Horaires;

  constructor(
    id: number,
    nbAdultes: number,
    nbEnfants: number,
    restaurant: Restaurant,
    horaires: Horaires
  ) {
    this.id = id;
    this.nbAdultes = nbAdultes;
    this.nbEnfants = nbEnfants;
    this.restaurant = restaurant;
    this.horaires = horaires;
  }
}
