import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMarketEditSpecificComponent } from './super-market-edit-specific.component';

describe('SuperMarketEditSpecificComponent', () => {
  let component: SuperMarketEditSpecificComponent;
  let fixture: ComponentFixture<SuperMarketEditSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperMarketEditSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperMarketEditSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
