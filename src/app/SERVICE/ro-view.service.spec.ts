import { TestBed } from '@angular/core/testing';

import { RoViewService } from './ro-view.service';

describe('RoViewService', () => {
  let service: RoViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
