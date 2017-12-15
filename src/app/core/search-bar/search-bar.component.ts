import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cdk-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
	public bigMenu;
	@Input() open;
	constructor() { }

	ngOnInit() {}

}
