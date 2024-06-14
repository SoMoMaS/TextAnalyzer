package com.dedalus.text_analyzer.dto;

import java.util.HashMap;
import java.util.Map;

public class AnalysisResult {
     private Map<String, Object> textAnalysis = new HashMap<>();

    public Map<String, Object> getData() {
        return textAnalysis;
    }

    public void setData(Map<String, Object> data) {
        this.textAnalysis = data;
    }
}
