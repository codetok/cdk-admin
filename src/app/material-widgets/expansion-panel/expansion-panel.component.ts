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
