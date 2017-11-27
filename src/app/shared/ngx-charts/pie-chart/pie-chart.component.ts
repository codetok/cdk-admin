import { Component,Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import { single, multi } from './data';
@Component({
  selector: 'cdk-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

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

 ngOnChanges(changes) {
    // if(this.changes && this.changes.height) 
 }
  ngDoCheck() {
    if(this.el.nativeElement.offsetWidth != this.width) {
      this.width = this.el.nativeElement.offsetWidth;
      this.ngOnInit();
    }
  }

  ngOnInit() {
    this.view = [this.el.nativeElement.offsetWidth, 220];    
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }

}
