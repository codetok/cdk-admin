import { Component, OnInit } from '@angular/core';
import { BUTTON_HELPERS } from './helpers.data';
import { MatListDivider } from '@angular/material/list';

@Component({
  selector: 'cdk-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
	buttonHelpers: any = BUTTON_HELPERS;
  	constructor() { }

  	ngOnInit() {
  		console.log(this.buttonHelpers);
  	}

}
