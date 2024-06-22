import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisCentersEditComponent } from './analysis-centers-edit.component';

describe('AnalysisCentersEditComponent', () => {
  let component: AnalysisCentersEditComponent;
  let fixture: ComponentFixture<AnalysisCentersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisCentersEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisCentersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
