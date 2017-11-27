import { TestBed, inject } from '@angular/core/testing';

import { AllFeaturesTableService } from './all-features-table.service';

describe('AllFeaturesTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllFeaturesTableService]
    });
  });

  it('should be created', inject([AllFeaturesTableService], (service: AllFeaturesTableService) => {
    expect(service).toBeTruthy();
  }));
});
