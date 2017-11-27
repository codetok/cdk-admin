import { Component, OnInit } from '@angular/core';
import { palete } from '../../environments/environment';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public palete: any = palete ;  
	constructor() { }

	ngOnInit() {
		
	}

}
