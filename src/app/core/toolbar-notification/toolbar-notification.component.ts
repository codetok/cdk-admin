import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-toolbar-notification',
  templateUrl: './toolbar-notification.component.html',
  styleUrls: ['./toolbar-notification.component.scss']
})
export class ToolbarNotificationComponent implements OnInit {
	cssPrefix = 'toolbar-notification';
  	isOpen: boolean = false;
  	notifications = [
  		{
	        id: 'id',
	        title: 'Mail 5',
	        lastTime: '23 Minutes ago',
	        state: 'state'
	    },
	    {
	        id: 'id',
	        title: 'Mail 5',
	        lastTime: '23 Minutes ago',
	        state: 'state'
	    },
	    {
	        id: 'id',
	        title: 'Mail 5',
	        lastTime: '23 Minutes ago',
	        state: 'state'
	    },
	];
  	constructor() { }

  	ngOnInit() {
  	}

  	select() {
    	
  	}

  	delete(notification) {
    
  	}

}
