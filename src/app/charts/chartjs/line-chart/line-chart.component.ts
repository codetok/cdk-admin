import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
declare const Chart;
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LineChartComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 400)
    }
    createChart() {
        new Chart('chart-2', {
            type:'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [
                    {
                        backgroundColor: '#7E57C2',
                        borderColor: '#7E57C2',
                        data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                        label: 'Dataset',
                        fill: 'false'
                    },
                    
                ]
            },
            options: {
                legend: {
                    display: false
                },
                elements: {
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
