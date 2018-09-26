import { Component, OnInit, Input } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';
import {Items} from '../../core/toolbar/items';

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;
  items:Items[]
	searchOpen: boolean = false;
    toolbarHelpers = ToolbarHelpers;
  	constructor() { }

  	ngOnInit() {
			this.items= [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
  	}
		
}
