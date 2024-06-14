package com.dedalus.text_analyzer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dedalus.text_analyzer.dto.AnalysisResult;
import com.dedalus.text_analyzer.dto.TextRequest;
import com.dedalus.text_analyzer.service.TextAnalyzerService;

@RestController
@RequestMapping("/text-analyzer")
public class TextAnalyzerController {

    @Autowired
    private TextAnalyzerService textAnalyzerService;
    
    
    @PostMapping("/analyze")
    public AnalysisResult analyzeText(@RequestBody TextRequest request){
        return this.textAnalyzerService.analyzeText(request);
    }

}
