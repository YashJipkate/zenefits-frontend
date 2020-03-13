import { TestBed } from '@angular/core/testing';

import { GoogleInstanceService } from './google-instance.service';

describe('GoogleInstanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleInstanceService = TestBed.get(GoogleInstanceService);
    expect(service).toBeTruthy();
  });
});
