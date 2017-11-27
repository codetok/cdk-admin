import { TestBed, inject } from '@angular/core/testing';

import { ResponsiveTableService } from './responsive-table.service';

describe('ResponsiveTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponsiveTableService]
    });
  });

  it('should be created', inject([ResponsiveTableService], (service: ResponsiveTableService) => {
    expect(service).toBeTruthy();
  }));
});
