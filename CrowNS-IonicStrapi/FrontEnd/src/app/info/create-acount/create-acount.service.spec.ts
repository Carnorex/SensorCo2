import { TestBed } from '@angular/core/testing';

import { CreateAcountService } from './create-acount.service';

describe('CreateAcountService', () => {
  let service: CreateAcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
