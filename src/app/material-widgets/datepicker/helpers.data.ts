export const DATEPICKER_HELPERS: any = {

	tsSourceDatepicker:`
import { MatDatepickerModule } from '@angular/material';
	
		@NgModule({
		  imports: [
		   MatDatepickerModule  
		})
		export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'cdk-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

	startDate = new Date(1990, 0, 1);
	date = new FormControl(new Date());
	serializedDate = new FormControl((new Date()).toISOString())
	minDate = new Date(2000, 0, 1);
	maxDate = new Date(2020, 0, 1);
	events: string[] = [];
	myFilter = (d: Date): boolean => {
		const day = d.getDay();
		
		return day !== 0 && day !== 6;
	}
}
`.trim(),
	htmlSourceDatepicker:`
<mat-form-field class="example-full-width">
	<input matInput [matDatepicker]="picker7" placeholder="Choose a date">
	<mat-datepicker-toggle matSuffix [for]="picker7"></mat-datepicker-toggle>
	<mat-datepicker touchUi="true" #picker7></mat-datepicker>
</mat-form-field>
	`.trim(),

}