import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {merge} from 'rxjs';
import { TextAnalyzerService } from './text-analyzer.service';
import { NgFor } from '@angular/common';
import { TextAnalyzerBackendService } from '../core/services/text-analyzer-backend.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../core/services/http.service';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';


export interface LetterCount{
  letter: string;
  count: number;
}

@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSlideToggleModule, MatCardModule, MatListModule, MatButtonModule, NgFor, MatSelectModule, MatTableModule],
  templateUrl: './text-analyzer.component.html',
  styleUrl: './text-analyzer.component.css'
})
export class TextAnalyzerComponent {

  readonly control = new FormControl('', [Validators.pattern('^[A-Za-z]*$'), Validators.required]);
  errorMessage = signal('');

  displayedColumns: string[] = ['Letter', 'Count'];


  protected readonly value = signal('');
  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  executionOptions = [
    { value: 'Online', viewValue: 'Online' },
    { value: 'Offline', viewValue: 'Offline' },
  ];

  selectedExecutionOption: string = "Online"

  analysisOptions = [
    { value: 'Vowels', viewValue: 'Vowels' },
    { value: 'Consonants', viewValue: 'Consonants' },
  ];

  selectedAnalysisOption: string = "Vowels"

  dataSource: LetterCount[] = []

  color: ThemePalette = 'accent';
  isCheckedLocal = false;
  isDisabled = false;

  isCheckedParameter = false;

  textLocal = this.isCheckedLocal ? 'Online' : 'Offline';
  textParameter = this.isCheckedParameter ? 'Vowels' : 'Consonants';

  results = new Map<string, number>();

  constructor(private textAnalyzerService: TextAnalyzerService, 
              private textAnalyzerBackendService: TextAnalyzerBackendService
  ) {}


  updateErrorMessage() {
    if (this.control.hasError('required')) {
      this.errorMessage.set('You must enter a value');
      this.isDisabled = true;
    } else if (!this.control.valid) {
      this.errorMessage.set('Text can\'t contain special characters or numbers.');
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }

    
  }

  updateLocalozationToggle($event: MatSlideToggleChange){
    this.isCheckedLocal = $event.checked;
    this.textLocal = (this.isCheckedLocal) ? 'Online' : 'Offline';
  }

  updateParameterToggle($event: MatSlideToggleChange){
    this.isCheckedParameter = $event.checked;
    this.textParameter = this.isCheckedParameter ? 'Vowels' : 'Consonants';
  }

  analyzeText(){
    let isOnline = this.selectedExecutionOption == "Online" ? true: false
    let isVowels = this.selectedAnalysisOption == "Vowels" ? true: false
    console.log(this.control.value)
    if(isOnline){
      console.log("Analyzing text at the backend..." + this.selectedAnalysisOption)

      this.textAnalyzerBackendService.analyzeTextAtBackend(this.control.value ?? "", isVowels).subscribe(result => {
        this.results = new Map(Object.entries(result.data));
        this.dataSource = this.getLetterCountArray(this.results);
      })

    }else{
      console.log("Analyzing text locally..." + this.selectedAnalysisOption)
      this.results = this.textAnalyzerService.analyzeText(this.control.value ?? "", isVowels);
      this.dataSource = this.getLetterCountArray(this.results);
    }
  }

  getKeys(map: Map<string, number>){
    return Array.from(map.keys());
  }

  getLetterCountArray(map: Map<string, number>): LetterCount[]{
    let letterCountArray: LetterCount[] = [];
    for(let [key, value] of map){
      letterCountArray.push({letter: key, count: value});
    }

    return letterCountArray;
  }
}
