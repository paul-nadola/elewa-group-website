import { TestBed } from '@angular/core/testing';

import { ProfileAPIService } from './profile-api.service';

describe('ProfileAPIService', () => {
  let service: ProfileAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
