import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMarketEditComponent } from './super-market-edit.component';

describe('SuperMarketEditComponent', () => {
  let component: SuperMarketEditComponent;
  let fixture: ComponentFixture<SuperMarketEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperMarketEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperMarketEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
