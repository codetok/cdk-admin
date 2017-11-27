import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'cdk-customer-satisfaction',
  templateUrl: './customer-satisfaction.component.html',
  styleUrls: ['./customer-satisfaction.component.scss']
})
export class CustomerSatisfactionComponent implements OnInit {

  @ViewChild('ele') el:ElementRef;
  public width:number;

  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    if(this.el.nativeElement.offsetWidth-70 != this.width) {
      this.width = this.el.nativeElement.offsetWidth-70;
      this.ngOnInit();
    }
}
}
