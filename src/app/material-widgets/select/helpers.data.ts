export const select_HELPERS: any = {

	tsSourceSelectionselect:`
import { MatSelectModule } from '@angular/material/select';


	  	@NgModule({
		  imports: [
		    MatSelectModule
		})
		export class AppModule { }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class selectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 }
	`.trim(),


	htmlSourceSelectionselect:`
	<mat-form-field>
	  <mat-select placeholder="Select an option" disableRipple>
	    <mat-option value="1">Option 1</mat-option>
	    <mat-option value="2">Option 2</mat-option>
	    <mat-option value="3">Option 3</mat-option>
	  </mat-select>
	</mat-form-field>

	`.trim(),
}
	export const Messages: Array<any> =[
		{from: 'codetok', subject: 'client', content: 'hi there'},
		{from: 'client', subject: 'codetok', content: 'yes'},
		{from: 'jay', subject: 'tom', content: 'yes please'}
	];

	export const Links: Array<String> = ['/home', '/admin'];
