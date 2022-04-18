import { TestBed } from '@angular/core/testing';

import * as services from './search.services';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: services.SearchService = TestBed.get(services.SearchService);
    expect(service).toBeTruthy();
  });
});