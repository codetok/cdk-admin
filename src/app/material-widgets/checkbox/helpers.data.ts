export const CHECKBOX_HELPERS: any = {

	tsSourceCheckbox: `
import { MatCheckboxModule } from '@angular/material'
	
		@NgModule({
		  imports: [
		   MatCheckboxModule 
		})
		export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  	checked = false;
	indeterminate = false;
	align = 'start';
	disabled = false;
}
`.trim(),
	htmlSourceCheckbox: `
<section class="example-section">
	<mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
	<mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
</section>

<section class="example-section">
	<label class="example-margin">Align:</label>
	<mat-radio-group [(ngModel)]="align">
		<mat-radio-button class="example-margin" value="start">Start</mat-radio-button>
		<mat-radio-button class="example-margin" value="end">End</mat-radio-button>
	</mat-radio-group>
</section>

<section class="example-section">
	<mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
</section>

<section class="example-section">
    <h2 class="example-h2">Result</h2>
	<mat-checkbox
		class="example-margin"
		[(ngModel)]="checked"
		[(indeterminate)]="indeterminate"
		[align]="align"
		[disabled]="disabled">
		I'm a checkbox
	</mat-checkbox>
</section>
`.trim(),
}