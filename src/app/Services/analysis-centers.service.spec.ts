import { TestBed } from '@angular/core/testing';

import { AnalysisCentersService } from './analysis-centers.service';

describe('AnalysisCentersService', () => {
  let service: AnalysisCentersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalysisCentersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
