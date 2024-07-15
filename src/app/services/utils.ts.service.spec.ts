import { TestBed } from '@angular/core/testing';

import { UtilsTsService } from './utils.ts.service';

describe('UtilsTsService', () => {
  let service: UtilsTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
