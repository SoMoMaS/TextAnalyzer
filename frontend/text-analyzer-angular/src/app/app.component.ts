import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextAnalyzerComponent } from './text-analyzing/text-analyzer.component';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    TextAnalyzerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'text-analyzer-angular';
}
