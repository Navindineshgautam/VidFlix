import { TestBed } from '@angular/core/testing';

import { AppDatashareService } from './app-datashare.service';

describe('AppDatashareService', () => {
  let service: AppDatashareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDatashareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
