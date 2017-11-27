import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-multibar-chart',
	templateUrl: './multibar-chart.component.html',
	styleUrls: ['./multibar-chart.component.scss']
})
export class MultibarChartComponent implements OnInit {
	options;
	data;
	constructor() { }

	ngOnInit() {
		this.options = {
			chart: {
				type: 'discreteBarChart',
				height: 300,
				margin: {
					top: 20,
					right: 20,
					bottom: 50,
					left: 55
				},
				x: function(d) { return d.label; },
				y: function(d) { return d.value; },
				showValues: true,
				valueFormat: function(d) {
					return d3.format(',.1f')(d);
				},
				duration: 500,
				xAxis: {
					axisLabel: 'X Axis'
				},
				yAxis: {
					axisLabel: 'Y Axis',
					axisLabelDistance: -10
				}
			}
		}
		this.data = [
			{
				key: "Cumulative Return",
				values: [
					{
						"label": "A",
						"value": -29.7
					},
					{
						"label": "B",
						"value": 0
					},
					{
						"label": "C",
						"value": 32.8
					},
					{
						"label": "D",
						"value": 196.4
					},
					{
						"label": "E",
						"value": 0.19
					},
					{
						"label": "F",
						"value": -98.0
					},
					{
						"label": "G",
						"value": -13.9
					},
					{
						"label": "H",
						"value": -5.1
					}
				]
			}
		]

	}
}


