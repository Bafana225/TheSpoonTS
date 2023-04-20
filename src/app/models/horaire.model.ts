import { Reservation } from './reservation.model';
import { Restaurant } from './restaurant.model';


export class Horaires {
  id!: number;
  horaire!: string;
  restaurants?: Restaurant[];
  reservations?: Reservation[];
}
