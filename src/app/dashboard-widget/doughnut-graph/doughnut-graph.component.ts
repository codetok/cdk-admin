import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-doughnut-graph',
  templateUrl: './doughnut-graph.component.html',
  styleUrls: ['./doughnut-graph.component.scss']
})
export class DoughnutGraphComponent implements OnInit {

    /**
     * Fake data to display on the pie chart
     */
    graphData = [];
  constructor() { }

  ngOnInit() {
      setTimeout(() => {
          this.createDoughnutData();
      },500)

  }
    randomNumber(min=0, max=0) {
        if (min == 0 || max == 0) {
            return Math.round(Math.random() * 1000000);
        } else {
            return Math.random() * (max - min) + min;
        }
    };

    createDoughnutData() {
        this.graphData = [
            {
                "name": "Germany",
                "value": this.randomNumber()
            },
            {
                "name": "USA",
                "value": this.randomNumber()
            },
            {
                "name": "France",
                "value": this.randomNumber()
            },
                {
                "name": "UK",
                "value": this.randomNumber()
            }
        ]

    }
  

  // randomBar(date, lastClose) {
    //     var open = this.randomNumber(lastClose * .95, lastClose * 1.05);
    //     var close = this.randomNumber(open * .95, open * 1.05);
    //     var high = this.randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
    //     var low = this.randomNumber(Math.min(open, close) * .9, Math.min(open, close));
    //     return {
    //         t: date.valueOf(),
    //         y: close
    //     };
    // }

}
