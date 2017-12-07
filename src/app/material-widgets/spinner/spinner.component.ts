import { Component, OnInit } from '@angular/core';
import { SPINNER_HELPERS } from './helpers.data';


@Component({
  selector: 'cdk-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showProgressBarCode;
	showSource;
		color = 'primary';
	  	mode = 'determinate';
	  	value = 50;

}
