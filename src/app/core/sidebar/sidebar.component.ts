import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	cssPrefix = 'sidebar-items';
	isOpen: boolean = false;

	events = [
  		{
	        id: 'id',
	        title: 'Business Meeting',
	        time: '05:00 PM',
	        venue: 'Conference Hall'
	    },
	    {
	        id: 'id',
	        title: 'Business Meeting',
	        time: '05:00 PM',
	        venue: 'Conference Hall'
	    },
	    {
	        id: 'id',
	        title: 'Business Meeting',
	        time: '05:00 PM',
	        venue: 'Conference Hall'
	    },
	];

  constructor() { }

  ngOnInit() {
  }

}
