export class AnalysisRequest {
    text: string = ""
    isVowels: boolean = false;

    constructor(text: string, isVowels: boolean) {
        this.text = text;
        this.isVowels = isVowels;
    }
}
