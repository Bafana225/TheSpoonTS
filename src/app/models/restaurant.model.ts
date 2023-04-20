import { Reservation } from './reservation.model';
import { Horaires } from './horaire.model';

export class Restaurant {
  id!: number;
  nom!: string;
  adresse!: string;
  nbrPlace!: number;
  pmr!: boolean;
  prix!: number;
  reservations?: Reservation[];
  horaires!: Horaires[];
}
