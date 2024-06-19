import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextAnalyzerComponent } from './text-analyzer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TextAnalyzerComponent', () => {
  let component: TextAnalyzerComponent;
  let fixture: ComponentFixture<TextAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAnalyzerComponent, HttpClientTestingModule, BrowserAnimationsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
