import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStationAddComponent } from './play-station-add.component';

describe('PlayStationAddComponent', () => {
  let component: PlayStationAddComponent;
  let fixture: ComponentFixture<PlayStationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayStationAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayStationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
