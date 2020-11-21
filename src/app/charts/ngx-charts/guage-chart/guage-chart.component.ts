import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'cdk-guage-chart',
  templateUrl: './guage-chart.component.html',
  styleUrls: ['./guage-chart.component.scss']
})
export class GuageChartComponent implements OnInit {

 @ViewChild('ele', { static: true }) el:ElementRef;

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
    this.view = [this.el.nativeElement.offsetWidth, 235];   
    this.data = single; 
      
  }
  
  public colorScheme = {
      domain: ['rgba(255, 99, 132,.7)',
                    'rgba(92, 107, 192,.7)',
                    'rgba(66, 165, 245,.7)',
                    'rgba(38, 166, 154,.7)',
                    'rgba(102, 187, 106,.7)']
  };
  
  onSelect(event) {
    console.log(event);
  }
}
