import { TestBed, inject } from '@angular/core/testing';

import { RetrieveHttpTableService } from './retrieve-http-table.service';

describe('RetrieveHttpTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveHttpTableService]
    });
  });

  it('should be created', inject([RetrieveHttpTableService], (service: RetrieveHttpTableService) => {
    expect(service).toBeTruthy();
  }));
});
