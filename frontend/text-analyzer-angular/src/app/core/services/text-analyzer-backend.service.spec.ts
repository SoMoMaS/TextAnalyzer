import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextAnalyzerBackendService } from './text-analyzer-backend.service';

describe('TextAnalyzerBackendService', () => {
  let service: TextAnalyzerBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(TextAnalyzerBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
