import { TestBed } from '@angular/core/testing';

import { MfHelpersService } from './mf-helpers.service';

describe('MfHelpersService', () => {
  let service: MfHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
