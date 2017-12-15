export const SLIDETOGGLE_HELPERS: any = {

	tsSourceSlideToggle: `
import { MatSlideToggleModule } from '@angular/material';
@NgModule({
		  imports: [
		    MatSlideToggleModule,
		})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cdk-slidetoggle',
  templateUrl: './slidetoggle.component.html',
  styleUrls: ['./slidetoggle.component.scss']
})
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