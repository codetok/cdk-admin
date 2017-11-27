import { TestBed, inject } from '@angular/core/testing';

import { SortingTableService } from './sorting-table.service';

describe('SortingTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortingTableService]
    });
  });

  it('should be created', inject([SortingTableService], (service: SortingTableService) => {
    expect(service).toBeTruthy();
  }));
});
