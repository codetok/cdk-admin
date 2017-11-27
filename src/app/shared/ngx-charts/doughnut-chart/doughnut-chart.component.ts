import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'cdk-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  @ViewChild('ele') el:ElementRef;

  public single: any[];
  public multi: any[];
  public showLegend = false;
  public colorScheme = {
      domain: ['#2196F3', '#1976D2', '#0D47A1', '#2962FF']
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
    this.view = [this.el.nativeElement.offsetWidth, 235];    
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }

}
