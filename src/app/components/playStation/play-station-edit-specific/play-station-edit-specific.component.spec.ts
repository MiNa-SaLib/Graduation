import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStationEditSpecificComponent } from './play-station-edit-specific.component';

describe('PlayStationEditSpecificComponent', () => {
  let component: PlayStationEditSpecificComponent;
  let fixture: ComponentFixture<PlayStationEditSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayStationEditSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayStationEditSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
