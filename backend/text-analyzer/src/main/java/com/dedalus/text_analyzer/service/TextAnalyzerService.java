package com.dedalus.text_analyzer.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.dedalus.text_analyzer.dto.AnalysisResult;
import com.dedalus.text_analyzer.dto.TextRequest;

@Service
public class TextAnalyzerService {


    private List<Character> vowels = Arrays.asList('a', 'e', 'i', 'o', 'u');

    
    public AnalysisResult analyzeText(TextRequest request){


        if(request.getIsVowels()){
            return new AnalysisResult(countVowels(request.getText().toLowerCase()));
        } else {
            return new AnalysisResult(countConsonants(request.getText().toLowerCase()));
        }
    }

    protected Map<String, Integer>  countVowels(String text){
        System.out.println("Counting vowels");
        Map<String, Integer> result =  new HashMap<String, Integer>();

        if(text == null){
            return result;
        }
        
        for (int i = 0; i < text.length(); i++) {
            char character = text.charAt(i);
            String stringifiedCharacter = Character.toString(character);
            if (this.vowels.contains(character) && isInEnglishAlphabet(character)) {
                if(result.containsKey(stringifiedCharacter)){
                    int currentValue = result.get(stringifiedCharacter);
                    result.put(stringifiedCharacter, currentValue + 1);
                } else {
                    result.put(stringifiedCharacter, 1);
                }
            }
        }

        System.out.println(result);
        return result;
    }

    protected Map<String, Integer>  countConsonants(String text){
        Map<String, Integer> result =  new HashMap<>();
        System.out.println("Counting consonants");

        if(text == null){
            return result;
        }

        for (int i = 0; i < text.length(); i++) {
            char character = text.charAt(i);
            String stringifiedCharacter = Character.toString(character);

            if (!this.vowels.contains(character) && isInEnglishAlphabet(character)) {

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

    protected boolean isInEnglishAlphabet(char character) {
        return (character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z');
    }
}
