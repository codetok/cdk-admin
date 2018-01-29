import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'cdk-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      setTimeout(() => {
          this.createBarGraph();
      },500)
  }

  createBarGraph() {
      new Chart('dash-bar-graph', {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [
                    {
                        backgroundColor: 'rgba(92, 107, 192, .7)',
                        borderColor: 'rgba(92, 107, 192, .7)',
                        data: [70, 88, 77, 93, 82, 100, 70, 67,78,99],
                        label: 'Dataset',
                        fill: 'false'
                    },
                    {
                        backgroundColor: 'rgba(66, 165, 245, .7)',
                        borderColor: 'rgba(69, 39, 160, .7)',
                        data: [80, 88, 67, 95, 76, 60, 67, 95,95,66],
                        label: 'Dataset',
                        fill: 'false'
                    },
                    {
                        backgroundColor: 'rgba(38, 166, 154, .7)',
                        borderColor: 'rgba(69, 39, 160, .7)',
                        data: [60, 88, 70, 67, 27, 83, 78, 88,95,60],
                        label: 'Dataset',
                        fill: 'false'
                    },
                    {
                        backgroundColor: 'rgba(102, 187, 106, .7)',
                        borderColor: 'rgba(255, 99, 132)',
                        data: [75, 55, 55, 95, 66, 88, 70, 78,77,100],
                        label: 'Dataset',
                        fill: 'false'
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                elements : {
                    line: {
                        tension: 0.000001
                    }
                },
                maintainAspectRatio: false,
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                title: {
                    display: true,
                    text: 'SALES GRAPH'
                }
            }
        })
  }
}
