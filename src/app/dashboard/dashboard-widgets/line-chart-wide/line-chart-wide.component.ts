import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
declare const Chart;

@Component({
  selector: 'cdk-line-chart-wide',
  templateUrl: './line-chart-wide.component.html',
  styleUrls: ['./line-chart-wide.component.scss']
})
export class LineChartWideComponent implements OnInit {
  
  @ViewChild('ele') ele: ElementRef;
  
  public chart;
  
  public chartOptions:any = {
    "type": "line",
    "data": {
        "labels": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
        ],
        "datasets": [
        {
            "label": "Assets",
            "data": [65, 59, 80, 81, 56, 55, 40],
            "fill": false,
            'backgroundColor':'rgba(194, 24, 91,.4)',
            "borderColor": "rgba(194, 24, 91,.4)",
            "lineTension": 0.3
        },
        {
            "label": "Cost",
            "data": [99, 59, 2, 22, 56, 44, 99],
            "fill": false,
            'backgroundColor':'rgb(93, 64, 55 )',
            "borderColor": "rgba(0, 151, 167,.4)",
            "lineTension": 0.3
        },
        {
            "label": "RDB",
            "data": [23, 44, 55, 66, 77, 88, 23],
            "fill": false,
            'backgroundColor':'rgb(0, 121, 107)',
            "borderColor": "rgba(0, 121, 107,.4)",
            "lineTension": 0.3
        },
        {
            "label": "Billed",
            "data": [16, 33, 12, 68, 33, 22, 10],
            "fill": false,
            'backgroundColor':'rgb(0, 151, 167)',
            "borderColor": "rgba(0, 101, 112,.4)",
            "lineTension": 0.2
        }
        ]
    },
    'options': {
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
        
    }

  constructor() {

  }
  ngDoCheck() {
     
  }

  ngOnInit(){
    this.createMap();  
  }

  createMap() {
     setTimeout(() => {
         this.chart = new Chart('widechart', this.chartOptions);
     },1000)
     
  }

}
