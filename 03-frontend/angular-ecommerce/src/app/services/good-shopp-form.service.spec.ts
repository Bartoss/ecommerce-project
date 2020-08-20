import { TestBed } from '@angular/core/testing';

import { GoodShoppFormService } from './good-shopp-form.service';

describe('GoodShoppFormService', () => {
  let service: GoodShoppFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodShoppFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
