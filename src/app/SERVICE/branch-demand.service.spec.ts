import { TestBed } from '@angular/core/testing';

import { BranchDemandService } from './branch-demand.service';

describe('BranchDemandService', () => {
  let service: BranchDemandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchDemandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
