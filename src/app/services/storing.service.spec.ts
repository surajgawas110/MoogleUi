import { TestBed } from '@angular/core/testing';

import { StoringService } from './storing.service';

describe('StoringService', () => {
  let service: StoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
