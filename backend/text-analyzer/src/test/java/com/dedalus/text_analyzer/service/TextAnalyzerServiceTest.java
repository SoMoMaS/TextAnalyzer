package com.dedalus.text_analyzer.service;

import com.dedalus.text_analyzer.dto.AnalysisResult;
import com.dedalus.text_analyzer.dto.TextRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.HashMap;
import java.util.Map;

@SpringBootTest
public class TextAnalyzerServiceTest {

    @Autowired
    private TextAnalyzerService service;


    // Tests for analyzeText method
    @Test
    public void testAnalyzeText() {
        TextRequest request = new TextRequest();
        request.setText("hello");
        request.setIsVowels(true);

        AnalysisResult actual = service.analyzeText(request);

        assertTrue(actual.getData().containsKey("e"));
        assertEquals(1, actual.getData().get("e"));

        assertTrue(actual.getData().containsKey("o"));
        assertEquals(1, actual.getData().get("o"));
    }

    @Test
    public void testAnalyzeTextWithLongerString() {
        TextRequest request = new TextRequest();
        request.setText("hello world");
        request.setIsVowels(true);

        AnalysisResult actual = service.analyzeText(request);

        assertTrue(actual.getData().containsKey("e"));
        assertEquals(1, actual.getData().get("e"));

        assertTrue(actual.getData().containsKey("o"));
        assertEquals(2, actual.getData().get("o"));
    }

    @Test
    public void testAnalyzeTextWithEvenLongerString() {
        TextRequest request = new TextRequest();
        String longString = "This is a long string that contains many different characters and words. It's used for testing purposes.";
        request.setText(longString);
        request.setIsVowels(true);

        AnalysisResult actual = service.analyzeText(request);

        // Check some expected key-value pairs
        assertTrue(actual.getData().containsKey("a"));
        assertEquals(7, actual.getData().get("a"));

        assertTrue(actual.getData().containsKey("e"));
        assertEquals(6, actual.getData().get("e"));

        assertTrue(actual.getData().containsKey("i"));
        assertEquals(7, actual.getData().get("i"));

        assertTrue(actual.getData().containsKey("o"));
        assertEquals(5, actual.getData().get("o"));

        assertTrue(actual.getData().containsKey("u"));
        assertEquals(2, actual.getData().get("u"));
    }

    // Tests for countVowels method
    @Test
    public void testCountVowels1() {
        String text = "hello";
        Map<String, Integer> actual = service.countVowels(text);


        assertTrue(actual.containsKey("e"));
        assertEquals(1, actual.get("e").intValue());


        assertTrue(actual.containsKey("o"));
        assertEquals(1, actual.get("o").intValue());

    }

    @Test
    public void testCountVowels2() {
        String text = "aeiou";
        Map<String, Integer> actual = service.countVowels(text);

        assertTrue(actual.containsKey("a"));
        assertEquals(1, actual.get("a").intValue());

        assertTrue(actual.containsKey("e"));
        assertEquals(1, actual.get("e").intValue());

        assertTrue(actual.containsKey("i"));
        assertEquals(1, actual.get("i").intValue());

        assertTrue(actual.containsKey("o"));
        assertEquals(1, actual.get("o").intValue());

        assertTrue(actual.containsKey("u"));
        assertEquals(1, actual.get("u").intValue());
    }

    @Test
    public void testCountVowels3() {
        String text = "eeeee";
        Map<String, Integer> actual = service.countVowels(text);

        assertTrue(actual.containsKey("e"));
        assertEquals(5, actual.get("e").intValue());
    }

    @Test
    public void testCountVowels4() {
        String text = "ooooo";
        Map<String, Integer> actual = service.countVowels(text);

        assertTrue(actual.containsKey("o"));
        assertEquals(5, actual.get("o").intValue());
    }

    @Test
    public void testCountVowelsWithSpecialChars() {
        String text = "h@ll0";
        Map<String, Integer> actual = service.countVowels(text);

        assertTrue(actual.isEmpty());
    }

    @Test
    public void testCountVowelsWithNumbers() {
        String text = "h3ll0";
        Map<String, Integer> actual = service.countVowels(text);

        assertTrue(actual.isEmpty());
    }

    @Test
    public void testCountVowelsWithEmptyString() {
        String text = "";
        Map<String, Integer> actual = service.countVowels(text);

        assertTrue(actual.isEmpty());
    }

    @Test
    public void testCountVowelsWithNullString() {
        String text = null;
        Map<String, Integer> actual = service.countVowels(text);

        assertTrue(actual.isEmpty());
    }

    // Tests for countConsonants method
    @Test
    public void testCountConsonants1() {
        String text = "hello";
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.containsKey("h"));
        assertEquals(1, actual.get("h").intValue());

        assertTrue(actual.containsKey("l"));
        assertEquals(2, actual.get("l").intValue());
    }

    @Test
    public void testCountConsonants2() {
        String text = "world";
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.containsKey("w"));
        assertEquals(1, actual.get("w").intValue());

        assertTrue(actual.containsKey("r"));
        assertEquals(1, actual.get("r").intValue());

        assertTrue(actual.containsKey("l"));
        assertEquals(1, actual.get("l").intValue());

        assertTrue(actual.containsKey("d"));
        assertEquals(1, actual.get("d").intValue());
    }

    @Test
    public void testCountConsonants3() {
        String text = "rrrrr";
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.containsKey("r"));
        assertEquals(5, actual.get("r").intValue());
    }

    @Test
    public void testCountConsonants4() {
        String text = "lllll";
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.containsKey("l"));
        assertEquals(5, actual.get("l").intValue());
    }

    @Test
    public void testCountConsonants5() {
        String text = "ddddd";
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.containsKey("d"));
        assertEquals(5, actual.get("d").intValue());
    }

    @Test
    public void testCountConsonantsWithSpecialChars() {
        String text = "h@ll0";
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.containsKey("h"));
        assertEquals(1, actual.get("h").intValue());

        assertTrue(actual.containsKey("l"));
        assertEquals(2, actual.get("l").intValue());

    }

    @Test
    public void testCountConsonantsWithNumbers() {
        String text = "h3ll0";
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.containsKey("h"));
        assertEquals(1, actual.get("h").intValue());

        assertTrue(actual.containsKey("l"));
        assertEquals(2, actual.get("l").intValue());

    }

    @Test
    public void testCountConsonantsWithEmptyString() {
        String text = "";
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.isEmpty());
    }

    @Test
    public void testCountConsonantsWithNullString() {
        String text = null;
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.isEmpty());
    }

    @Test
    public void testCountConsonantsWithVowelsOnly() {
        String text = "aeiou";
        Map<String, Integer> actual = service.countConsonants(text);

        assertTrue(actual.isEmpty());
    }

    // Tests for isInEnglishAlphabet
    @Test
    public void testIsInEnglishAlphabetWithUppercaseLetter() {
        assertTrue(service.isInEnglishAlphabet('A'));
        assertTrue(service.isInEnglishAlphabet('Z'));
    }

    @Test
    public void testIsInEnglishAlphabetWithLowercaseLetter() {
        assertTrue(service.isInEnglishAlphabet('a'));
        assertTrue(service.isInEnglishAlphabet('z'));
    }

    @Test
    public void testIsInEnglishAlphabetWithSpecialLetter() {
        assertFalse(service.isInEnglishAlphabet('ä'));
        assertFalse(service.isInEnglishAlphabet('ü'));
    }

    @Test
    public void testIsInEnglishAlphabetWithNonAlphabetCharacter() {
        assertFalse(service.isInEnglishAlphabet('1'));
        assertFalse(service.isInEnglishAlphabet('@'));
    }

    @Test
    public void testIsInEnglishAlphabetWithSpecialCharacter() {
        assertFalse(service.isInEnglishAlphabet('!'));
        assertFalse(service.isInEnglishAlphabet('#'));
    }

    @Test
    public void testIsInEnglishAlphabetWithWhitespace() {
        assertFalse(service.isInEnglishAlphabet(' '));
    }
}