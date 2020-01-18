import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListingService } from './listing.service';

describe('ListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ListingService = TestBed.get(ListingService);
    expect(service).toBeTruthy();
  });
});
