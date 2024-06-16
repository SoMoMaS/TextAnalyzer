import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerService {

  private characterOccurences: Map<string, number> = new Map<string, number>();

  private vowels: Map<string, number> = new Map([
    ['a', 0],
    ['e', 0],
    ['i', 0],
    ['o', 0],
    ['u', 0]
  ]);

  constructor() { }

  

  analyzeText(text: string, isVowels: boolean): Map<string, number> {
    this.reset();
    
    if (isVowels) {
      return this.countVowels(text);
    } else {
      return this.countConsonants(text);
    }
  }

  countVowels(text: string): Map<string, number> {
    for(let char of text){
      if(this.vowels.has(char)){
        this.vowels.set(char, (this.vowels.get(char) ?? 0) + 1);
      }
    }

    return this.vowels;
  }

  countConsonants(text: string): Map<string, number> {
    for(let char of text){
      if(!this.vowels.has(char)){

        if(this.characterOccurences.has(char)){
          this.characterOccurences.set(char, (this.characterOccurences.get(char) ?? 0)+ 1);
        } else {
          this.characterOccurences.set(char, 1);
        }
      }
    }

    return this.characterOccurences
  }

  reset(){
    this.vowels = new Map([
      ['a', 0],
      ['e', 0],
      ['i', 0],
      ['o', 0],
      ['u', 0]
    ]);

    this.characterOccurences = new Map<string, number>();
  }

}
