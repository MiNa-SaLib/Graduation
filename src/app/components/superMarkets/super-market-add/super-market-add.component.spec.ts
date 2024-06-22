import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMarketAddComponent } from './super-market-add.component';

describe('SuperMarketAddComponent', () => {
  let component: SuperMarketAddComponent;
  let fixture: ComponentFixture<SuperMarketAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperMarketAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperMarketAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
