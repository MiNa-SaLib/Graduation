import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStationsComponent } from './play-stations.component';

describe('PlayStationsComponent', () => {
  let component: PlayStationsComponent;
  let fixture: ComponentFixture<PlayStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayStationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
