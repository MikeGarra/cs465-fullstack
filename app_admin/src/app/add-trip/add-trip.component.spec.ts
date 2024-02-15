import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripComponent } from './add-trip.component';

describe('AddTripComponent', () => {
  let component: AddTripComponent;
  let fixture: ComponentFixture<AddTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTripComponent]
    });
    fixture = TestBed.createComponent(AddTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
