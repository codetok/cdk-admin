export const EXPANSION_HELPERS: any = {

 	tsSourceRaisedButton: `
 		import { MatExpansionModule } from '@angular/material/expansion';
		
	  	@NgModule({
		  imports: [
		    MatExpansionModule
		})
		export class AppModule { }
		
		import { Component, OnInit } from '@angular/core';
		import { EXPANSION_HELPERS } from './helpers.data';

		@Component({
		  selector: 'cdk-expansion-panel',
		  templateUrl: './expansion-panel.component.html',
		  styleUrls: ['./expansion-panel.component.scss']
		})
		export class ExpansionPanelComponent implements OnInit {
			step = 0;
			public basicPanelOpenState:any;
			expansionHelpers = EXPANSION_HELPERS;
		  	constructor() { }

		  	ngOnInit() {
		  	}
		  	setStep(index: number) {
			    this.step = index;
			}

			nextStep() {
			    this.step++;
			}

			prevStep() {
			    this.step--;
			}

		}
`.trim(),

  	htmlSourceRaisedButton: `
  		
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
				<mat-expansion-panel (opened)="basicPanelOpenState = true"
					(closed)="basicPanelOpenState = false">
					<mat-expansion-panel-header>
					<mat-panel-title>
						Self aware panel
					</mat-panel-title>
					<mat-panel-description>
						Currently I am {{basicPanelOpenState ? 'open' : 'closed'}}
					</mat-panel-description>
					</mat-expansion-panel-header>
					<p>I'm visible because I am open</p>
				</mat-expansion-panel>
			</mat-accordion>
		`.trim(),

 };
	
