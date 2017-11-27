import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'cdk-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit {

  @ViewChild('ele') el:ElementRef;

  view: any[] = [];
  data: any[];
  width:number;
  
  ngDoCheck() {
    if(this.el.nativeElement.offsetWidth != this.width) {
      this.width = this.el.nativeElement.offsetWidth;
      this.ngOnInit();
    }
  }

  ngOnInit() {
    this.view = [this.el.nativeElement.offsetWidth, this.el.nativeElement.offsetHeight];   
    this.data = single; 
  }
  
  public colorScheme = {
      domain: ['#EB605C', '#77BD7A', '#E24680', '#4CAF50']
  };
  
  onSelect(event) {
    console.log(event);
  }

}
