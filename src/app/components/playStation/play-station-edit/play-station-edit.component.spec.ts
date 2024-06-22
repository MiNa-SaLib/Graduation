import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStationEditComponent } from './play-station-edit.component';

describe('PlayStationEditComponent', () => {
  let component: PlayStationEditComponent;
  let fixture: ComponentFixture<PlayStationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayStationEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayStationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
