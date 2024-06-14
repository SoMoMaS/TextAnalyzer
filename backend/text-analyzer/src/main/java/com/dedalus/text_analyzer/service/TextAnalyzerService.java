package com.dedalus.text_analyzer.service;

import org.springframework.stereotype.Service;

import com.dedalus.text_analyzer.dto.AnalysisResult;
import com.dedalus.text_analyzer.dto.TextRequest;

@Service
public class TextAnalyzerService {
    public AnalysisResult analyzeText(TextRequest request){
        // TODO Logic
        
        return new AnalysisResult();
    }
}
