import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpaceAddComponent } from './work-space-add.component';

describe('WorkSpaceAddComponent', () => {
  let component: WorkSpaceAddComponent;
  let fixture: ComponentFixture<WorkSpaceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkSpaceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkSpaceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
