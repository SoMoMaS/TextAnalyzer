package com.dedalus.text_analyzer.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.dedalus.text_analyzer.dto.AnalysisResult;
import com.dedalus.text_analyzer.dto.TextRequest;

@Service
public class TextAnalyzerService {

    private Map<String, Integer> vowels = new HashMap<String, Integer>() {{
        put("a", 0);
        put("e", 0);
        put("i", 0);
        put("o", 0);
        put("u", 0);
    }};

    
    public AnalysisResult analyzeText(TextRequest request){


        if(request.getIsVowels()){
            return new AnalysisResult(countVowels(request.getText()));
        } else {
            return new AnalysisResult(countConsonants(request.getText()));
        }
    }

    private Map<String, Integer>  countVowels(String text){
        System.out.println("Counting vowels");
        Map<String, Integer> result =  new HashMap<String, Integer>() {{
            put("a", 0);
            put("e", 0);
            put("i", 0);
            put("o", 0);
            put("u", 0);
        }};

        for (int i = 0; i < text.length(); i++) {
            char character = text.charAt(i);
            String stringifiedCharacter = Character.toString(character);
            if (result.containsKey(stringifiedCharacter)) {
                int currentValue = result.get(stringifiedCharacter);
                result.put(stringifiedCharacter, currentValue + 1);
            }
        }

        System.out.println(result);
        return result;
    }

    private Map<String, Integer>  countConsonants(String text){
        Map<String, Integer> result =  new HashMap<>();
        System.out.println("Counting consonants");
        for (int i = 0; i < text.length(); i++) {
            char character = text.charAt(i);
            String stringifiedCharacter = Character.toString(character);

            if (!this.vowels.containsKey(stringifiedCharacter)) {

                if(result.containsKey(stringifiedCharacter)){
                    int currentValue = result.get(stringifiedCharacter);
                    result.put(stringifiedCharacter, currentValue + 1);
                } else {
                    result.put(stringifiedCharacter, 1);
                }

            }
        }
        return result;
    }
}
