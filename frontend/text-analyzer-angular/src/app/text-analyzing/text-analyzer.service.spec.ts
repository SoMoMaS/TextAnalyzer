import { TextAnalyzerService } from './text-analyzer.service';

describe('TextAnalyzerService', () => {
  let service: TextAnalyzerService;

  beforeEach(() => {
    service = new TextAnalyzerService();
  });

  it('should count vowels correctly', () => {
    const text = 'hello world';
    const expectedVowelsMap = new Map([
      ['e', 1],
      ['o', 2],
    ]);

    expect(service.countVowels(text)).toEqual(expectedVowelsMap);
  });

  it('should count consonants correctly', () => {
    const text = 'hello world';
    const expectedConsonantsMap = new Map([
      ['h', 1],
      ['l', 3],
      ['w', 1],
      ['r', 1],
      ['d', 1]
    ]);

    expect(service.countConsonants(text)).toEqual(expectedConsonantsMap);
  });

  it('should analyze text correctly for vowels', () => {
    const text = 'hello world';
    const expectedVowelsMap = new Map([
      ['e', 1],
      ['o', 2],
    ]);

    expect(service.analyzeText(text, true)).toEqual(expectedVowelsMap);
  });

  it('should analyze text correctly for consonants', () => {
    const text = 'hello world';
    const expectedConsonantsMap = new Map([
      ['h', 1],
      ['l', 3],
      ['w', 1],
      ['r', 1],
      ['d', 1]
    ]);

    expect(service.analyzeText(text, false)).toEqual(expectedConsonantsMap);
  });


  it('should handle empty strings', () => {
    const text = '';
    const expectedMap = new Map();
  
    expect(service.countVowels(text)).toEqual(expectedMap);
    expect(service.countConsonants(text)).toEqual(expectedMap);
    expect(service.analyzeText(text, true)).toEqual(expectedMap);
    expect(service.analyzeText(text, false)).toEqual(expectedMap);
  });
  
  it('should handle strings with only spaces', () => {
    const text = '     ';
    const expectedMap = new Map();
  
    expect(service.countVowels(text)).toEqual(expectedMap);
    expect(service.countConsonants(text)).toEqual(expectedMap);
    expect(service.analyzeText(text, true)).toEqual(expectedMap);
    expect(service.analyzeText(text, false)).toEqual(expectedMap);
  });
  
  it('should handle strings with special characters', () => {
    const text = 'hello, world!';
    const expectedVowelsMap = new Map([
      ['e', 1],
      ['o', 2],
    ]);
    const expectedConsonantsMap = new Map([
      ['h', 1],
      ['l', 3],
      ['w', 1],
      ['r', 1],
      ['d', 1]
    ]);
  
    expect(service.countVowels(text)).toEqual(expectedVowelsMap);
    expect(service.countConsonants(text)).toEqual(expectedConsonantsMap);
    expect(service.analyzeText(text, true)).toEqual(expectedVowelsMap);
    expect(service.analyzeText(text, false)).toEqual(expectedConsonantsMap);
  });
  
  it('should handle strings with mixed case letters', () => {
    const text = 'Hello World';
    const expectedVowelsMap = new Map([
      ['e', 1],
      ['o', 2],
    ]);
    const expectedConsonantsMap = new Map([
      ['h', 1],
      ['l', 3],
      ['w', 1],
      ['r', 1],
      ['d', 1]
    ]);

  
    expect(service.countVowels(text)).toEqual(expectedVowelsMap);
    expect(service.countConsonants(text)).toEqual(expectedConsonantsMap);
    expect(service.analyzeText(text, true)).toEqual(expectedVowelsMap);
    expect(service.analyzeText(text, false)).toEqual(expectedConsonantsMap);
  });
  

  // AnalyzeText Function
  it('should correctly analyze vowels in a string', () => {
    const text = 'Hello World';
    const expectedVowelsMap = new Map([
      ['e', 1],
      ['o', 2],
    ]);

    expect(service.analyzeText(text, true)).toEqual(expectedVowelsMap);
  });

  it('should correctly analyze consonants in a string', () => {
    const text = 'Hello World';
    const expectedConsonantsMap = new Map([
      ['h', 1],
      ['l', 3],
      ['w', 1],
      ['r', 1],
      ['d', 1]
    ]);

    expect(service.analyzeText(text, false)).toEqual(expectedConsonantsMap);
  });

  it('should handle empty strings', () => {
    const text = '';
    const expectedMap = new Map();

    expect(service.analyzeText(text, true)).toEqual(expectedMap);
    expect(service.analyzeText(text, false)).toEqual(expectedMap);
  });

  it('should handle strings with no vowels or consonants', () => {
    const text = '12345!@#$%';
    const expectedMap = new Map();

    expect(service.analyzeText(text, true)).toEqual(expectedMap);
    expect(service.analyzeText(text, false)).toEqual(expectedMap);
  });

  it('should correctly analyze vowels in a string', () => {
    const text = 'Programming is fun';
    const expectedVowelsMap = new Map([
      ['o', 1],
      ['a', 1],
      ['i', 2],
      ['u', 1]
    ]);

    expect(service.analyzeText(text, true)).toEqual(expectedVowelsMap);
  });

  it('should correctly analyze consonants in a string', () => {
    const text = 'Programming is fun';
    const expectedConsonantsMap = new Map([
      ['p', 1],
      ['r', 2],
      ['g', 2],
      ['m', 2],
      ['n', 2],
      ['s', 1],
      ['f', 1]
    ]);

    expect(service.analyzeText(text, false)).toEqual(expectedConsonantsMap);
  });

  // IsEnglishhAlphabetLetter Function
  it('should return true for lowercase English alphabet letters', () => {
    expect(service.isEnglishAlphabetLetter('a')).toEqual(true);
    expect(service.isEnglishAlphabetLetter('z')).toEqual(true);
  });

  it('should return true for uppercase English alphabet letters', () => {
    expect(service.isEnglishAlphabetLetter('A')).toEqual(true);
    expect(service.isEnglishAlphabetLetter('Z')).toEqual(true);
  });

  it('should return false for non-English alphabet letters', () => {
    expect(service.isEnglishAlphabetLetter('1')).toEqual(false);
    expect(service.isEnglishAlphabetLetter('!')).toEqual(false);
    expect(service.isEnglishAlphabetLetter('ä')).toEqual(false);
    expect(service.isEnglishAlphabetLetter(' ')).toEqual(false);
  });
});