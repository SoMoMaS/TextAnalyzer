import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { AnalysisResult } from '../models/analysis-result';
import { AnalysisRequest } from '../models/analysis-request';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerBackendService {

  constructor(private http: HttpService) { }


  analyzeTextAtBackend(text: string, isVowels: boolean): Observable<any> {
    return this.http.post('http://localhost:8080/text-analyzer/analyze', new AnalysisRequest(text, isVowels));
  }
}