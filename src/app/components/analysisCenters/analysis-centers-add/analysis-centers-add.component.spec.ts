import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisCentersAddComponent } from './analysis-centers-add.component';

describe('AnalysisCentersAddComponent', () => {
  let component: AnalysisCentersAddComponent;
  let fixture: ComponentFixture<AnalysisCentersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisCentersAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisCentersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
