import { Reservation } from './reservation.model';


export class Horaires {
  id!: number;
  horaire!: string;
  reservations!: Reservation[];
}
