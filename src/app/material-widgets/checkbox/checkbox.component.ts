import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'highlight.js/styles/github.css';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
	selector: 'cdk-app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {
	checked = false;
	indeterminate = false;
	align = 'start';
	disabled = false;


	tssource: string = `
import {Component} from '@angular/core';
@Component({
  selector: 'checkbox-configurable-example',
  templateUrl: 'checkbox-configurable-example.html',
  styleUrls: ['checkbox-configurable-example.css'],
})
export class CheckboxConfigurableExample {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
}`.trim();
	htmlsource: string = `
<mat-card>
  <mat-card-content>
  <h2 class="example-h2">Checkbox configuration</h2>
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
  </mat-card-content>
</mat-card>

<mat-card class="result">
  <mat-card-content>
	<h2 class="example-h2">Result</h2>
    <section class="example-section">
	  <mat-checkbox
		class="example-margin"
		[(ngModel)]="checked"
		[(indeterminate)]="indeterminate"
		[align]="align"
		[disabled]="disabled">
		I'm a checkbox
	  </mat-checkbox>
	</section>
  </mat-card-content>
</mat-card>`.trim();

	public showSource: boolean = false;
	constructor() {
	}



	ngOnInit() {
	}

}
