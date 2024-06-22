import { TestBed } from '@angular/core/testing';

import { SuperMarketsService } from './super-markets.service';

describe('SuperMarketsService', () => {
  let service: SuperMarketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperMarketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
