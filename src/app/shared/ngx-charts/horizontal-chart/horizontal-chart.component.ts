import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'cdk-horizontal-chart',
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.scss']
})
export class HorizontalChartComponent implements OnInit {

  @ViewChild('ele') el:ElementRef;
  
  public single: any[];
  public multi: any[];
  public showLegend = false;
  public colorScheme = {
      domain: ['#EB605C', '#77BD7A', '#E24680', '#4CAF50']
  };
   
  
  public showLabels = false;
  public explodeSlices = false;
  public doughnut = true;
  public view:any[] = [];
  public width:number;

  constructor() {
    
  }
  ngDoCheck() {
    if(this.el.nativeElement.offsetWidth != this.width) {
      this.width = this.el.nativeElement.offsetWidth;
      this.ngOnInit();
    }
  }

  ngOnInit() {
    this.view = [this.el.nativeElement.offsetWidth, this.el.nativeElement.offsetWidth];    
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }

}
