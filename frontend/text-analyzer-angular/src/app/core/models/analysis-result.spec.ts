import { AnalysisResult } from './analysis-result';

describe('AnalysisResult', () => {
  it('should create an instance', () => {
    expect(new AnalysisResult(new Map())).toBeTruthy();
  });
});
