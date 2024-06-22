import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMarketsComponent } from './super-markets.component';

describe('SuperMarketsComponent', () => {
  let component: SuperMarketsComponent;
  let fixture: ComponentFixture<SuperMarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperMarketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
