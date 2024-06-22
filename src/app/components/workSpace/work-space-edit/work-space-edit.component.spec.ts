import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpaceEditComponent } from './work-space-edit.component';

describe('WorkSpaceEditComponent', () => {
  let component: WorkSpaceEditComponent;
  let fixture: ComponentFixture<WorkSpaceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkSpaceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkSpaceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
