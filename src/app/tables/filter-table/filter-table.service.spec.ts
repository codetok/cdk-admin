import { TestBed, inject } from '@angular/core/testing';

import { FilterTableService } from './filter-table.service';

describe('FilterTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterTableService]
    });
  });

  it('should be created', inject([FilterTableService], (service: FilterTableService) => {
    expect(service).toBeTruthy();
  }));
});
