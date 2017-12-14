export const RADIO_HELPERS: any = {

	tsSourceRadio: `
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
<section class="example-section">
	<label class="example-margin">Season:</label>
		<mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
			<mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
			{{season}}
				</mat-radio-button>
		</mat-radio-group>
		<div class="example-selected-value">Your favorite season is: {{favoriteSeason}}
		</div>
</section>
	`.trim(),
}