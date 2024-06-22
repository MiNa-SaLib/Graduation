import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciesAddComponent } from './pharmacies-add.component';

describe('PharmaciesAddComponent', () => {
  let component: PharmaciesAddComponent;
  let fixture: ComponentFixture<PharmaciesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmaciesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmaciesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
