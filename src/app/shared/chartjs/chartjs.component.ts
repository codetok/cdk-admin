import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { palete } from '../../../environments/environment';
declare const Chart;
@Component({
    selector: 'app-chartjs',
    templateUrl: './chartjs.component.html',
    styleUrls: ['./chartjs.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChartJsComponent implements OnInit {
    public palete: any = palete;

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 400)
    }
    createChart() {
        new Chart('chart-0', {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [
                    {
                        backgroundColor: '#D32F2F' + 'BF',
                        borderColor: '#D32F2F',
                        data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                        label: 'Dataset',
                        fill: 'false'
                    },
                    {
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        borderColor: 'rgba(255, 99, 132)',
                        data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                        label: 'Dataset',
                        fill: 'false'
                    },
                    {
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        borderColor: 'rgba(255, 99, 132)',
                        data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                        label: 'Dataset',
                        fill: 'false'
                    },
                    {
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        borderColor: 'rgba(255, 99, 132)',
                        data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                        label: 'Dataset',
                        fill: 'false'
                    }
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

        new Chart('chart-1', {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [{
                    backgroundColor: 'rgba(216, 27, 96, 0.36)',
                    borderColor: 'rgb(54, 162, 235)',
                    data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                    label: 'Dataset',
                    fill: 'origin'
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
        new Chart('chart-2', {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [{
                    backgroundColor: 'rgba(142, 36, 170, 0.36)',
                    borderColor: "rgb(255, 159, 64)",
                    data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                    label: 'Dataset',
                    fill: 'start'
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
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                title: {
                    display: true,
                    text: 'BANKING GRAPH'
                }
            }
        })
        new Chart('chart-3', {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [{
                    backgroundColor: 'rgba(94, 53, 177, 0.36)',
                    borderColor: 'rgba(255, 99, 132)',
                    data: [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                    label: 'Dataset',
                    fill: 'end'
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
