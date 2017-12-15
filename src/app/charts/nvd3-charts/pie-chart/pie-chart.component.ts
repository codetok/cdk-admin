import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

 	options;
	data;
	constructor() { }

	ngOnInit() {
	this.options = {
            chart: {
                type: 'pieChart',
                height: 300,
                color: ['rgba(255, 99, 132,.7)',
                      'rgba(92, 107, 192,.7)',
                     'rgba(66, 165, 245,.7)',
                     'rgb(99,245,219)',],
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.00,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

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
            }
        ];
	}
}
