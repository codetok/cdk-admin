import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

declare let d3: any;
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['../../../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class Nvd3PieChartComponent implements OnInit {
	options;
	data;
	constructor() { }

	ngOnInit() {
		this.options = {
			"chart": {
				"type": "pieChart",
				"height": 300,
				"showLabels": true,
				"duration": 500,
				"labelThreshold": 0.01,
				"labelSunbeamLayout": true,
				"legend": {
					"margin": {
						"top": 5,
						"right": 35,
						"bottom": 5,
						"left": 0
					}
				}
				
			},
			"title": {
				"enable": true,
				"text": "Write Your Title",
				"className": "h4",
				// "css": {
				// 	"width": "nullpx",
				// 	"textAlign": "center"
				// }
			}
	}
		this.data = [
			{
				key: "One",
				y: 5
			},
			{
				key: "Two",
				y: 2
			},
			{
				key: "Three",
				y: 9
			},
			{
				key: "Four",
				y: 7
			},
			{
				key: "Five",
				y: 4
			},
			{
				key: "Six",
				y: 3
			},
			{
				key: "Seven",
				y: .5
			}
		];
	}
}
