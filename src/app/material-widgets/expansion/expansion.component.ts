import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdk-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpansionComponent implements OnInit {

	basicExpansionShowCode;
	// basic expansion
	basicExpansionTs: string = `
		import {Component} from '@angular/core';
		/**
		 * @title Basic expansion panel
		 */
		@Component({
		  selector: 'expansion-overview-example',
		  templateUrl: 'expansion-overview-example.html',
		})
		export class ExpansionOverviewExample {
		  panelOpenState: boolean = false;
		}
	`;
	basicExpansionCSS :string = `
	//No CSS code for this example`.trim();
	basicExpansionHtml: string = `
<mat-accordion>
	<mat-expansion-panel>
		<mat-expansion-panel-header>
			<mat-panel-title>
				Personal data
			</mat-panel-title>
			<mat-panel-description>
					Type your name and age
			</mat-panel-description>
		</mat-expansion-panel-header>

		<mat-form-field>
				<input matInput placeholder="First name">
		</mat-form-field>

		<mat-form-field>
				<input matInput placeholder="Age">
		</mat-form-field>
	</mat-expansion-panel>
		<mat-expansion-panel (opened)="panelOpenState = true"
					                       (closed)="panelOpenState = false">
			<mat-expansion-panel-header>
				<mat-panel-title>
					 Self aware panel
				</mat-panel-title>
				<mat-panel-description>
					 Currently I am {{panelOpenState ? 'open' : 'closed'}}
				</mat-panel-description>
			</mat-expansion-panel-header>
			<p>I'm visible because I am open</p>
	</mat-expansion-panel>
</mat-accordion>
	`.trim();
	basicPanelOpenState: boolean = false;

	// accordion expansion panel

	step = 0;

	setStep(index: number) {
	    this.step = index;
	}

	nextStep() {
	    this.step++;
	}

	prevStep() {
	    this.step--;
	}

	accordionExpansionTs: string = `
		import {Component} from '@angular/core';
		/**
		 * @title Basic expansion panel
		 */
		@Component({
		  selector: 'expansion-overview-example',
		  templateUrl: 'expansion-overview-example.html',
		})
		export class ExpansionOverviewExample {
		  panelOpenState: boolean = false;
		}
	`;
	accordionExpansionHtml: string = `
<mat-accordion class="example-headers-align">
	<mat-expansion-panel [expanded]="step === 0" (opened)="setStep(0)" hideToggle="true">
		<mat-expansion-panel-header>
			<mat-panel-title>
				Personal data
			</mat-panel-title>
			<mat-panel-description>
				Type your name and age
			 <mat-icon>account_circle</mat-icon>
			</mat-panel-description>
		</mat-expansion-panel-header>

		<mat-form-field>
			<input matInput placeholder="First name">
		</mat-form-field>

		<mat-form-field>
			<input matInput type="number" min="1" placeholder="Age">
		</mat-form-field>

		<mat-action-row>
				button mat-button color="primary" (click)="nextStep()">Next</button>
		</mat-action-row>
	</mat-expansion-panel>

	<mat-expansion-panel [expanded]="step === 1" (opened)="setStep(1)" hideToggle="true">
		<mat-expansion-panel-header>
			<mat-panel-title>
				Destination
			</mat-panel-title>
			<mat-panel-description>
				Type the country name
				<mat-icon>map</mat-icon>
			</mat-panel-description>
		</mat-expansion-panel-header>

		<mat-form-field>
			<input matInput placeholder="Country">
		</mat-form-field>

		<mat-action-row>
			<button mat-button color="warn" (click)="prevStep()">Previous</button>
			<button mat-button color="primary" (click)="nextStep()">Next</button>
		</mat-action-row>
	</mat-expansion-panel>

	<mat-expansion-panel [expanded]="step === 2" (opened)="setStep(2)" hideToggle="true">
		<mat-expansion-panel-header>
		 <mat-panel-title>
			Day of the trip
		 </mat-panel-title>
		 <mat-panel-description>
			Inform the date you wish to travel
			<mat-icon>date_range</mat-icon>
		</mat-panel-description>
		</mat-expansion-panel-header>

		<mat-form-field>
			<input matInput placeholder="Date" [matDatepicker]="picker" (focus)="picker.open()" readonly>
		</mat-form-field>
		<mat-datepicker #picker></mat-datepicker>

		<mat-action-row>
			<button mat-button color="warn" (click)="prevStep()">Previous</button>
			<button mat-button color="primary" (click)="nextStep()">End</button>
		</mat-action-row>
	</mat-expansion-panel>

</mat-accordion>
	`.trim();

	accordionExpansionCSS: string = `
		.widgetHolder {
			padding: 20px; 
		}
		.mat-card-header-text {
			margin: 0!important;
		}
		.example-headers-align .mat-expansion-panel-header-title, 
		.example-headers-align .mat-expansion-panel-header-description {
		  flex-basis: 0;
		}

		.example-headers-align .mat-expansion-panel-header-description {
		  justify-content: space-between;
		  align-items: center;
		}
	`.trim();

	accordionExpansionShowCode: boolean = false;


	constructor() { }

	ngOnInit() {
	}

}
