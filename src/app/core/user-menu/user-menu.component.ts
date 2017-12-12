import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;
  	@Input() currentUser = null;
  	constructor() { }

  	ngOnInit() {
  	}

}
