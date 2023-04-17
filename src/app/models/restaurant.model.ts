import { Reservation } from './reservation.model';

export class Restaurant {
  id!: number;
  nom!: string;
  adresse!: string;
  nbrPlaces!: number;
  pmr!: boolean;
  prixMoyen!: number;
  reservations!: Reservation[];
}
