export class AnalysisResult {
    textAnalysis: Map<string, number> = new Map<string, number>();

    constructor(analysisResult: Map<string, number>) {
        this.textAnalysis = analysisResult;
    }
}
