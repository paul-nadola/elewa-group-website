import { TestBed } from '@angular/core/testing';

import { ContentAPIsService } from './content-apis.service';

describe('ContentAPIsService', () => {
  let service: ContentAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
