import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpaceEditSpecificComponent } from './work-space-edit-specific.component';

describe('WorkSpaceEditSpecificComponent', () => {
  let component: WorkSpaceEditSpecificComponent;
  let fixture: ComponentFixture<WorkSpaceEditSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkSpaceEditSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkSpaceEditSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
