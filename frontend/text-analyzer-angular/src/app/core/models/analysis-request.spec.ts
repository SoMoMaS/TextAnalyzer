import { AnalysisRequest } from './analysis-request';

describe('AnalysisRequest', () => {
  it('should create an instance', () => {
    expect(new AnalysisRequest("", false)).toBeTruthy();
  });
});
