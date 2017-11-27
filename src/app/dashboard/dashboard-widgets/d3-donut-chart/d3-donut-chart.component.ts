import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdk-nvd3-donut-chart',
  templateUrl: './d3-donut-chart.component.html',
  styleUrls: ['./d3-donut-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class D3DonutChartComponent implements OnInit {
	options;
	data;
  	constructor() { }

  	ngOnInit() {
  		this.options = {
			 chart: {
                type: 'pieChart',
                height: 400,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
		}
		this.data = [
			{
				key: "One",
				y: 5,
				color: 'rgb(216, 27, 96)'
			},
			{
				key: "Two",
				y: 2,
				color: 'rgb(142, 36, 170)'
			},
			{
				key: "Three",
				y: 9,
				color: 'rgb(94, 53, 177)'
			},
			{
				key: "Four",
				y: 7,
				color: 'rgb(57, 73, 171)'
			}
		];
  	}

}
