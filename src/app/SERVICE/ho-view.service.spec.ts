import { TestBed } from '@angular/core/testing';

import { HoViewService } from './ho-view.service';

describe('HoViewService', () => {
  let service: HoViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
