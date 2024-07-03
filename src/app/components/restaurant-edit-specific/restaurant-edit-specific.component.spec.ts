import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantEditSpecificComponent } from './restaurant-edit-specific.component';

describe('RestaurantEditSpecificComponent', () => {
  let component: RestaurantEditSpecificComponent;
  let fixture: ComponentFixture<RestaurantEditSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantEditSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantEditSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
