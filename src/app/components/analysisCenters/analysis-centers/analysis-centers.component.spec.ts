import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisCentersComponent } from './analysis-centers.component';

describe('AnalysisCentersComponent', () => {
  let component: AnalysisCentersComponent;
  let fixture: ComponentFixture<AnalysisCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisCentersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
