package com.dedalus.text_analyzer.dto;

public class TextRequest {
    private String text = "";
    private Boolean isVowels = false;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getIsVowels() {
        return isVowels;
    }

    public void setIsVowels(Boolean isVowels) {
        this.isVowels = isVowels;
    }

}
