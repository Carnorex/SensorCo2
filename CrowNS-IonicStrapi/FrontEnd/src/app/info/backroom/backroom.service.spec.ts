import { TestBed } from '@angular/core/testing';

import { BackroomService } from './backroom.service';

describe('BackroomService', () => {
  let service: BackroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
