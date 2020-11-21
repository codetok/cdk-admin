export const SLIDER_HELPERS: any = {

	tsSourceSlider: `
import { MatSliderModule } from '@angular/material/slider';


	  	@NgModule({
		  imports: [
		    MatSliderModule,
		})
		export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

	autoTicks = false;
	disabled = false;
	invert = false;
	max = 100;
	min = 0;
	showTicks = false;
	step = 1;
	thumbLabel = false;
	value = 0;
	vertical = false;
}
	`.trim(),
	htmlSourceSlider:`
<mat-slider></mat-slider>
	`.trim(),

}