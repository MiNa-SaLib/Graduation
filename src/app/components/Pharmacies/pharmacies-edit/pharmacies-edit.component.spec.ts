import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciesEditComponent } from './pharmacies-edit.component';

describe('PharmaciesEditComponent', () => {
  let component: PharmaciesEditComponent;
  let fixture: ComponentFixture<PharmaciesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmaciesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmaciesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
