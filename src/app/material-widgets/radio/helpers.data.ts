export const RADIO_HELPERS: any = {

	tsSourceRadio: `
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
      imports: [
        MatRadioModule,
    })
export class AppModule { }

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cdk-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
	`.trim(),
	htmlSourceRadio: `
<h4 class="mat-title">Season:</h4>
<mat-radio-group  [(ngModel)]="favoriteSeason" class="example-radio-button">
    <mat-radio-button  *ngFor="let season of seasons" [value]="season" class="example-radio-button">
                  {{season}}
    </mat-radio-button>
</mat-radio-group>

<div class="example-selected-value mat-title">Your favorite season is: {{favoriteSeason}}
</div>
	`.trim(),
}