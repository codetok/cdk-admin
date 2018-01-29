import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'cdk-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
        this.createLineChart();
    },500)
  }
  createLineChart() {
      new Chart('line-graph', {
                type: 'line',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep",'Oct'],
                    datasets: [{
                        backgroundColor: 'rgba(92, 107, 192, 0.36)',
                        borderColor: 'rgba(92, 107, 192,.5)',
                        data: [76.97, 88.91, 99.31, 122.19, 130.85, 140.91, 150.36, 142.66, 150.36, 142.66],
                        label: 'Dataset',
                        fill: 'start'
                    }]
                },
                options: {
                    elements : {
                        line: {
                            tension: 0.000001
                        }
                    },
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    title: {
                        display: true,
                        text: 'ASSIGNMENTS GRAPH '
                    }
                }
        })
  }

}
