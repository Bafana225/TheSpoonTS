import { Horaires } from './horaire.model';
import { Restaurant } from './restaurant.model';


export class Reservation {
  id!: number;
  nbrAdultes!: number;
  nbrEnfants!: number;
  heureReservation!: Horaires;
  restaurant!: Restaurant;
}
