export const SLIDETOGGLE_HELPERS: any = {

	tsSourceSlideToggle: `
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material';
@Component({
  selector: 'cdk-slidetoggle',
  templateUrl: './slidetoggle.component.html',
  styleUrls: ['./slidetoggle.component.scss']
})
@NgModule({
		  imports: [
		    MatSlideToggleModule,
		})
export class AppModule { }
export class SlidetoggleComponent implements OnInit {

	color = 'accent';
	checked = false;
	disabled = false;
}
	`.trim(),
	htmlSourceSlideToggle: `
<mat-slide-toggle>Slide me!</mat-slide-toggle>
	`.trim(),
}