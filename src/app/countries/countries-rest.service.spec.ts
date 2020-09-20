import { TestBed } from '@angular/core/testing';

import { CountriesRestService } from './countries-rest.service';

describe('CountriesRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountriesRestService = TestBed.get(CountriesRestService);
    expect(service).toBeTruthy();
  });
});
