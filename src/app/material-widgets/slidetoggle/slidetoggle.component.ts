import { Component, OnInit } from '@angular/core';
import { SLIDETOGGLE_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-slidetoggle',
  templateUrl: './slidetoggle.component.html',
  styleUrls: ['./slidetoggle.component.scss']
})
export class SlidetoggleComponent implements OnInit {

	color = 'accent';
	checked = false;
	disabled = false;

  constructor() { }

  ngOnInit() {
  }

  slidetoggleHelpers: any = SLIDETOGGLE_HELPERS;
}
