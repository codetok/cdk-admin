export const input_HELPERS: any = {

	tsSourceInput:`
import { MatInputModule } from '@angular/material';
		@NgModule({
		  imports: [
		   MatInputModule
		})
		export class AppModule { }
		
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class inputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 }
	`.trim(),


	htmlSourceInput:`
	<form class="example-form">
	  <mat-form-field class="example-full-width">
	    <input matInput placeholder="Favorite food" value="Sushi">
	  </mat-form-field>
	</form>

	`.trim(),
}
	export const Messages: Array<any> =[
		{from: 'codetok', subject: 'client', content: 'hi there'},
		{from: 'client', subject: 'codetok', content: 'yes'},
		{from: 'jay', subject: 'tom', content: 'yes please'}
	];

	export const Links: Array<String> = ['/home', '/admin'];
