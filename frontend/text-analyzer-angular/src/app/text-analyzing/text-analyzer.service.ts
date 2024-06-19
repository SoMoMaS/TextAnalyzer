import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerService {

  private characterOccurences: Map<string, number> = new Map<string, number>();

  private vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

  constructor() { }

  

  analyzeText(text: string, isVowels: boolean): Map<string, number> {

    if (isVowels) {
      return this.countVowels(text.toLowerCase());
    } else {
      return this.countConsonants(text.toLowerCase());
    }
  }

  countVowels(text: string): Map<string, number> {
    this.characterOccurences = new Map<string, number>();
    for(let char of text){
      if(this.vowels.includes(char.toLowerCase()) && this.isEnglishAlphabetLetter(char)){

        if(this.characterOccurences.has(char.toLowerCase())){
          this.characterOccurences.set(char.toLowerCase(), (this.characterOccurences.get(char.toLowerCase()) ?? 0)+ 1);
        } else {
          this.characterOccurences.set(char.toLowerCase(), 1);
        }
      }
    }

    return this.characterOccurences;
  }

  countConsonants(text: string): Map<string, number> {
    this.characterOccurences = new Map<string, number>();
    for(let char of text){
      if(!this.vowels.includes(char.toLowerCase()) && this.isEnglishAlphabetLetter(char)){

        if(this.characterOccurences.has(char.toLowerCase())){
          this.characterOccurences.set(char.toLowerCase(), (this.characterOccurences.get(char.toLowerCase()) ?? 0)+ 1);
        } else {
          this.characterOccurences.set(char.toLowerCase(), 1);
        }
      }
    }

    return this.characterOccurences
  }

  isEnglishAlphabetLetter(char: string): boolean {
    return /^[a-zA-Z]$/.test(char);
  }
}
