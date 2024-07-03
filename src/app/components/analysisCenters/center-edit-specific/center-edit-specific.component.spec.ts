import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterEditSpecificComponent } from './center-edit-specific.component';

describe('CenterEditSpecificComponent', () => {
  let component: CenterEditSpecificComponent;
  let fixture: ComponentFixture<CenterEditSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterEditSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenterEditSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
