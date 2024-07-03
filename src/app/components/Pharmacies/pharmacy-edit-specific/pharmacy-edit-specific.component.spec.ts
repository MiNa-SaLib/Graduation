import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyEditSpecificComponent } from './pharmacy-edit-specific.component';

describe('PharmacyEditSpecificComponent', () => {
  let component: PharmacyEditSpecificComponent;
  let fixture: ComponentFixture<PharmacyEditSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyEditSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmacyEditSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
