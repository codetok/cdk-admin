import { TestBed, inject } from '@angular/core/testing';

import { PaginationTableService } from './pagination-table.service';

describe('PaginationTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationTableService]
    });
  });

  it('should be created', inject([PaginationTableService], (service: PaginationTableService) => {
    expect(service).toBeTruthy();
  }));
});
