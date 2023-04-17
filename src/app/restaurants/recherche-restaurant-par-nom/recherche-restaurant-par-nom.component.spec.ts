import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheRestaurantParNomComponent } from './recherche-restaurant-par-nom.component';

describe('RechercheRestaurantParNomComponent', () => {
  let component: RechercheRestaurantParNomComponent;
  let fixture: ComponentFixture<RechercheRestaurantParNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheRestaurantParNomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheRestaurantParNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
