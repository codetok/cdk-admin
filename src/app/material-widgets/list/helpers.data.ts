export const LIST_HELPERS: any = {

	tsSourceSelectionList:`
		import { MatListModule } from '@angular/material/list';
		@NgModule({
		  imports: [
		   MatListModule
		})
		export class AppModule { }
		
		import { Component, OnInit } from '@angular/core';
		@Component({
			  selector: 'cdk-list',
			  templateUrl: './list.component.html',
			  styleUrls: ['./list.component.scss']
		})
		export class ListComponent implements OnInit {

			  constructor() { }

			  ngOnInit() {
			  }
		 }
	`.trim(),


	htmlSourceSelectionList:`
	<mat-selection-list #shoes>
		<mat-list-option *ngFor="let shoe of ['Boots', 'Sneaker', 'Casual']">
			{{shoe}}
		</mat-list-option>
	</mat-selection-list>
	<p>
		Options selected: {{shoes.selectedOptions.selected.length}}
	</p>
	`.trim(),
}
	export const Messages: Array<any> =[
		{from: 'codetok', subject: 'client', content: 'hi there'},
		{from: 'client', subject: 'codetok', content: 'yes'},
		{from: 'jay', subject: 'tom', content: 'yes please'}
	];

	export const Links: Array<String> = ['/home', '/admin'];

	//export const shoetypes: Array<any> = ['Boots', 'Sneaker', 'Casual'];
