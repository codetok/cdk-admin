import { Component, OnInit } from '@angular/core';
import { palete } from '../../../../environments/environment';
declare const Chart;
declare const moment;

@Component({
  selector: 'cdk-line-chart-small',
  templateUrl: './line-chart-small.component.html',
  styleUrls: ['./line-chart-small.component.scss']
})
export class LineChartSmallComponent implements OnInit {
    constructor() { }
    
    public palete:any  = palete;

    ngOnInit() {
        setTimeout(() => {
          this.createChart();  
        },400)
    }
    randomNumber(min=0, max=0) {
        if(min==0 || max== 0)
            return Math.round(Math.random() * 100);
        else 
            return Math.random() * (max - min) + min;
    };
    randomBar(date, lastClose) {
        var open = this.randomNumber(lastClose * .95, lastClose * 1.05);
        var close = this.randomNumber(open * .95, open * 1.05);
        var high = this.randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
        var low = this.randomNumber(Math.min(open, close) * .9, Math.min(open, close));
        return {
            t: date.valueOf(),
            y: close
        };
    }
    createChart() {
        new Chart('chart-0', {
                type: 'bar',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                    datasets: [
                        {
                            backgroundColor: 'rgba(92, 107, 192, .7)',
                            borderColor: this.palete.primary,
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

        new Chart('chart-1', {
                type: 'doughnut',
                data: {
                labels: ['Data '],
                datasets: [ {
                    data: [
                        this.randomNumber(),
                        this.randomNumber(),
                        this.randomNumber(),
                        this.randomNumber(),
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132,.7    )',
                        'rgba(92, 107, 192,.7    )',
                        'rgba(66, 165, 245,.7    )',
                        'rgba(38, 166, 154,.7    )',
                        'rgba(102, 187, 106,.7    )'
                    ],
                }]},
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
                        text: 'BANKING GRAPH'
                    }
                }
        })
        new Chart('chart-3', {
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