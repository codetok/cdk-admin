import { Component, OnInit } from '@angular/core';
declare const Chart;
@Component({
  selector: 'cdk-share-price',
  templateUrl: './share-price.component.html',
  styleUrls: ['./share-price.component.scss']
})
export class SharePriceComponent implements OnInit {



    public data = {
        labels: ["A", "B", "C", "D", "E", "F"],
        datasets: [{
            label: "My First dataset",
            fillColor: 'rgba(255, 255, 255, 1)',
            strokeColor: "rgba(255, 255, 255, 1)',",
            pointColor: "rgba(255, 255, 255, 1)'",
            pointStrokeColor: "rgba(255, 255, 255, 1)'",
            pointHighlightFill: "rgba(255, 255, 255, 1)'",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [25, 29, 58, 50, 42, 65]
        }]
    };

    public  options = {
                    elements : {
                        
                    },
                    scales: {
                        yAxes: [{
                            display : false,
                             ticks: {
                                fontColor: "white",
                                fontSize: 18,
                                stepSize: 1,
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                           display : false,
                            ticks: {
                                fontColor: "white",
                                fontSize: 18,
                                stepSize: 1,
                                beginAtZero: true
                            }
                        }]
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
                        text: 'Live Share Value',
                        fontColor: "white",
                        fontSize: 18
                    }
                };

    constructor() { }

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    ngOnInit() {
        setTimeout(()=>{
            this.drawGraph();
        },500)
    }
    drawGraph() {
        let graph =  new Chart('share-price', {
             type: 'line',
             data: this.data,
             options: this.options
         });
        setInterval(() => {
            graph.data.datasets[0].data.map((p)=> {
                p = this.getRandomInt(20, 60);
            })
        },2500)
        

    }

}
