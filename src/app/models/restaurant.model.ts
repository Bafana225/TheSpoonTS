export class Restaurant {
  id: number;
  imageUrl: string;
  nom: string;
  adresse: string;
  nbCouverts: number;
  accessibilitePmr: boolean;
  prixMoyen: number;

  constructor(
    id: number,
    imageUrl: string,
    nom: string,
    adresse: string,
    nbCouverts: number,
    accessibilitePmr: boolean,
    prixMoyen: number
  ) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.nom = nom;
    this.adresse = adresse;
    this.nbCouverts = nbCouverts;
    this.accessibilitePmr = accessibilitePmr;
    this.prixMoyen = prixMoyen;
  }
}
