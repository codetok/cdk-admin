export const PROGRESSBAR_HELPERS: any = {

	tsSourceProgressbar: `
import { MatProgressBarModule } from '@angular/material';
@NgModule({
		  imports: [
		    MatProgressBarModule,
		})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cdk-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public color;
  public mode;
  public value;
  public bufferValue;
  

}

	`.trim(),
	htmlSourceProgressbar: `
<div fxLayout="column" fxLayoutGap=15px>
	<section class="example-section" fxLayout="row"  >
		<label class="example-margin">Color:</label>
		<mat-radio-group [(ngModel)]="color" fxLayout="column"  fxLayoutGap=10px>
			<mat-radio-button class="example-margin" value="primary">
			Primary
			</mat-radio-button>
			<mat-radio-button class="example-margin" value="accent">
			Accent
			</mat-radio-button>
			<mat-radio-button class="example-margin" value="warn">
			Warn
			</mat-radio-button>
			
		</mat-radio-group>
	</section>

	<section class="example-section" fxLayout="row" >
		<label class="example-margin" >Mode:</label>
		<mat-radio-group [(ngModel)]="mode" fxLayout="column"  fxLayoutGap=10px>
			<mat-radio-button class="example-margin" value="determinate">
			Determinate
			</mat-radio-button>
			<mat-radio-button class="example-margin" value="indeterminate">
			Indeterminate
			</mat-radio-button>
			<mat-radio-button class="example-margin" value="buffer">
			Buffer
			</mat-radio-button>
			<mat-radio-button class="example-margin" value="query">
			Query
			</mat-radio-button>
		</mat-radio-group>
	</section>
</div>

<section class="example-section" *ngIf="mode == 'determinate' || mode == 'buffer'">
	<label class="example-margin">Progress:</label>
	<mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
</section>

<section class="example-section" *ngIf="mode == 'buffer'">
	<label class="example-margin">Buffer:</label>
	<mat-slider class="example-margin" [(ngModel)]="bufferValue"></mat-slider>
</section>

<label class="mat-title">Result</label>

<section class="example-section">
	<mat-progress-bar
	class="example-margin"
	[color]="color"
	[mode]="mode"
	[value]="value"
	[bufferValue]="bufferValue">
	</mat-progress-bar>
</section>
	`.trim(),

}