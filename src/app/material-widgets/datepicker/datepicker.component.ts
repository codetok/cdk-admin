import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'highlight.js/styles/github.css';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
	selector: 'cdk-app-datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit {
	public showDatePickerCode;
  public showDatePickerCode1;
  public showDatePickerCode2;
  public showDatePickerCode3;
  public showDatePickerCode4;
  public showDatePickerCode5;
  public showDatePickerCode6;
  public showDatePickerCode7;
  public showDatePickerCode8;
  startDate = new Date(1990, 0, 1);
	date = new FormControl(new Date());
	serializedDate = new FormControl((new Date()).toISOString())
	minDate = new Date(2000, 0, 1);
	maxDate = new Date(2020, 0, 1);
	events: string[] = [];
	myFilter = (d: Date): boolean => {
		const day = d.getDay();
		// Prevent Saturday and Sunday from being selected.
		return day !== 0 && day !== 6;
	}

	addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
		this.events.push(`${type}: ${event.value}`);
	}
	tssource_basic: string = `
import {Component} from '@angular/core';

@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
  styleUrls: ['datepicker-overview-example.css'],
})
	export class DatepickerOverviewExample {}`.trim();
	htmlsource_basic: string = `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>` .trim();
	htmlsource_start_date: string = `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker startView="year" [startAt]="startDate"></mat-datepicker>
</mat-form-field>
  	`.trim();
	tssource_start_date: string = `
import {Component} from '@angular/core';
@Component({
  selector: 'datepicker-start-view-example',
  templateUrl: 'datepicker-start-view-example.html',
  styleUrls: ['datepicker-start-view-example.css'],
})
export class DatepickerStartViewExample {
  startDate = new Date(1990, 0, 1);
}
  	`.trim();
	htmlsource_select: string = `
<mat-form-field>
  <input matInput [matDatepicker]="picker1" placeholder="Angular forms" [formControl]="date">
  <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
  <mat-datepicker #picker1></mat-datepicker>
</mat-form-field>

<mat-form-field>
<input matInput [matDatepicker]="picker2" placeholder="Angular forms (w/ deserialization)"
																[formControl]="serializedDate">
<mat-datepicker-toggle matSuffix [for]="picker2"></mat-datepicker-toggle>
<mat-datepicker #picker2></mat-datepicker>
</mat-form-field>

<mat-form-field>
  <input matInput [matDatepicker]="picker3" placeholder="Value binding" [value]="date.value">
  <mat-datepicker-toggle matSuffix [for]="picker3"></mat-datepicker-toggle>
  <mat-datepicker #picker3></mat-datepicker>
</mat-form-field>
  	`.trim();
	tssource_select: string = `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Datepicker selected value */
@Component({
  selector: 'datepicker-value-example',
  styleUrls: ['datepicker-value-example.css'],
})
export class DatepickerValueExample {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}
  	`.trim();
	htmlsource_validation: string = `
<mat-form-field class="example-full-width">
  <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
  	`.trim();
	tssource_validation: string = `
import {Component} from '@angular/core';

@Component({
  selector: 'datepicker-min-max-example',
  templateUrl: 'datepicker-min-max-example.html',
  styleUrls: ['datepicker-min-max-example.css'],
})
export class DatepickerMinMaxExample {
  	minDate = new Date(2000, 0, 1);
  	maxDate = new Date(2020, 0, 1);
}
	`.trim();
	htmlsource_filter: string = `
<mat-form-field class="example-full-width">
  <input matInput [matDatepickerFilter]="myFilter" [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
	`.trim();
	tssource_filter: string = `
import {Component} from '@angular/core';

@Component({
  selector: 'datepicker-filter-example',
  templateUrl: 'datepicker-filter-example.html',
  styleUrls: ['datepicker-filter-example.css'],
})
export class DatepickerFilterExample {
  myFilter = (d: Date): boolean => {
  	const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
  	return day !== 0 && day !== 6;
  }
}

	`.trim();
	htmlsource_events: string = `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Input & change events"
         	(dateInput)="addEvent('input', $event)" (dateChange)="addEvent('change', $event)">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>

<div class="example-events">
  <div *ngFor="let e of events">{{e}}</div>
</div>

	`.trim();
	tssource_events: string = `
import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'datepicker-events-example',
  templateUrl: 'datepicker-events-example.html',
  styleUrls: ['datepicker-events-example.css'],
})
 export class DatepickerEventsExample {
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
	this.events.push({type}: {event.value});
  }
}

	`.trim();
	htmlsource_disabled: string = `
<p>
  <mat-form-field>
  <input matInput [matDatepicker]="dp1" placeholder="Completely disabled" disabled>
  <mat-datepicker-toggle matSuffix [for]="dp1"></mat-datepicker-toggle>
  <mat-datepicker #dp1></mat-datepicker>
  </mat-form-field>
</p>

<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp2" placeholder="Popup disabled">
    <mat-datepicker-toggle matSuffix [for]="dp2" disabled></mat-datepicker-toggle>
    <mat-datepicker #dp2></mat-datepicker>
  </mat-form-field>
</p>

<p>
<mat-form-field>
    <input matInput [matDatepicker]="dp3" placeholder="Input disabled" disabled>
    <mat-datepicker-toggle matSuffix [for]="dp3"></mat-datepicker-toggle>
    <mat-datepicker #dp3 disabled="false"></mat-datepicker>
</mat-form-field>
</p>

	`.trim();
	tssource_disabled: string = `
import {Component} from '@angular/core';

@Component({
  selector: 'datepicker-disabled-example',
  templateUrl: 'datepicker-disabled-example.html',
  styleUrls: ['datepicker-disabled-example.css'],
})
export class DatepickerDisabledExample {}
	`.trim();
	htmlsource_UI: string = `
<mat-form-field class="example-full-width">
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker touchUi="true" #picker></mat-datepicker>
</mat-form-field>

	`.trim();
	tssource_UI: string = `
import {Component} from '@angular/core';

@Component({
  selector: 'datepicker-touch-example',
  templateUrl: 'datepicker-touch-example.html',
  styleUrls: ['datepicker-touch-example.css'],
})
  export class DatepickerTouchExample {
}

	`.trim();
	htmlsource_open: string = `
<mat-form-field class="example-full-width">
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
<button mat-raised-button (click)="picker.open()">Open</button>

	`.trim();
	tssource_open: string = `
import {Component} from '@angular/core';

@Component({
  selector: 'datepicker-api-example',
  templateUrl: 'datepicker-api-example.html',
  styleUrls: ['datepicker-api-example.css'],
})
export class DatepickerApiExample {
}
`.trim();

	public showSource: boolean = false;
	constructor() { }

	ngOnInit() {
	}

}
