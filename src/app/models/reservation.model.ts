import { Horaires } from './horaire.model';
import { Restaurant } from './restaurant.model';


export class Reservation {
  id!: number;
  nbrAdulte!: number;
  nbrEnfant!: number;
  horaires!: Horaires;
  restaurant!: Restaurant;
}
