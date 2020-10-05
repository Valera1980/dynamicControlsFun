import { TestBed } from '@angular/core/testing';

import { OpenModalCfService } from './open-modal-cf.service';

describe('OpenModalCfService', () => {
  let service: OpenModalCfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenModalCfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
