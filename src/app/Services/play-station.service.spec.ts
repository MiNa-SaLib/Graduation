import { TestBed } from '@angular/core/testing';

import { PlayStationService } from './play-station.service';

describe('PlayStationService', () => {
  let service: PlayStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
