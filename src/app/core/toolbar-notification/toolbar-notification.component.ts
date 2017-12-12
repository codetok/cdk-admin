import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cdk-toolbar-notification',
  templateUrl: './toolbar-notification.component.html',
  styleUrls: ['./toolbar-notification.component.scss']
})
export class ToolbarNotificationComponent implements OnInit {
	cssPrefix = 'toolbar-notification';
  	isOpen: boolean = false;
  	@Input() notifications = [];
  	
  	constructor() { }

  	ngOnInit() {
  	}

  	select() {
    	
  	}

  	delete(notification) {
    
  	}

}
