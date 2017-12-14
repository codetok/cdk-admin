import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const Chart;

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 400)
    }
    createChart() {

        new Chart('piechart', {
            type: 'doughnut',
            data: {
                labels: ['Data '],
                datasets: [{

                    data: [46.97, 46.91, 24.56,],

                    backgroundColor: [
                        'rgba(255, 99, 132,.7)',
                        'rgba(66, 165, 245,.7)',
                        'rgba(38, 166, 154,.7)',
                    ],
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                title: {
                    display: true,
                    text: 'LEAD GRAPH'
                }
            }

        })
    }
}



