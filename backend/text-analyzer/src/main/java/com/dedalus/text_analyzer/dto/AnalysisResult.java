package com.dedalus.text_analyzer.dto;

import java.util.HashMap;
import java.util.Map;

public class AnalysisResult {
    private Map<String, Integer> textAnalysis = new HashMap<>();

    public AnalysisResult(Map<String, Integer> textAnalysis) {
        this.textAnalysis = textAnalysis;
    }

    public Map<String, Integer> getData() {
        return textAnalysis;
    }

    public void setData(Map<String, Integer> data) {
        this.textAnalysis = data;
    }
}
