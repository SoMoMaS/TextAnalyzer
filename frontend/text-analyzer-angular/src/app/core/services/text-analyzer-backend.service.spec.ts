import { TestBed } from '@angular/core/testing';

import { TextAnalyzerBackendService } from './text-analyzer-backend.service';

describe('TextAnalyzerBackendService', () => {
  let service: TextAnalyzerBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnalyzerBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
