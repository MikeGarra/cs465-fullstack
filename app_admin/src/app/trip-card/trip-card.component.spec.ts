import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCardComponent } from './trip-card.component';

describe('TripCardComponent', () => {
  let component: TripCardComponent;
  let fixture: ComponentFixture<TripCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripCardComponent]
    });
    fixture = TestBed.createComponent(TripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
