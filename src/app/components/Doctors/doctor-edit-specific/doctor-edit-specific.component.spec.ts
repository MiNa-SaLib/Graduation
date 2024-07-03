import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditSpecificComponent } from './doctor-edit-specific.component';

describe('DoctorEditSpecificComponent', () => {
  let component: DoctorEditSpecificComponent;
  let fixture: ComponentFixture<DoctorEditSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorEditSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorEditSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
