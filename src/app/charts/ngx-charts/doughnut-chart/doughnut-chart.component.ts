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
      domain: ['rgba(255, 99, 132,.7)',
                    'rgba(92, 107, 192,.7)',
                    'rgba(66, 165, 245,.7)',
                    'rgba(38, 166, 154,.7)',
                    'rgba(102, 187, 106,.7)']
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
