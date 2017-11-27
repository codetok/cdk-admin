import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdk-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadiobuttonComponent {
  showRadioCode;
radiohtmlsource: string = `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Radio configuration</h2>
      <section class="example-section">
        <label class="example-margin">Season:</label>
          <mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
            <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
            {{season}}
            </mat-radio-button>
          </mat-radio-group>
          <div class="example-selected-value">Your favorite season is: {{favoriteSeason}}
          </div>
  </mat-card-content>
 </mat-card>
 `.trim(); 

radiotssource:string = `import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdk-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadiobuttonComponent {
  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
 ` 
    radiocsssource:string = `.example-radio-group {
  display: inline-flex;
  flex-direction: column;
}

.example-radio-button {
  margin: 5px;
}

.example-selected-value {
  margin: 15px 0;
}

`
	 favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}