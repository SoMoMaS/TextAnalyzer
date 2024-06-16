package com.dedalus.text_analyzer.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.dedalus.text_analyzer.dto.AnalysisResult;
import com.dedalus.text_analyzer.dto.TextRequest;

@Service
public class TextAnalyzerService {
    public AnalysisResult analyzeText(TextRequest request){
        Map<String, Integer> result =  new HashMap<>();

        result.put("a", 3);

        result.put("u", 6);

        // TODO Logic
        


        return new AnalysisResult(result);
    }
}
