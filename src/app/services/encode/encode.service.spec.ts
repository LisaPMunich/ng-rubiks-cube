import { TestBed } from '@angular/core/testing';

import { EncodeService } from './encode.service';

describe('EncodeService', () => {
  let service: EncodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
