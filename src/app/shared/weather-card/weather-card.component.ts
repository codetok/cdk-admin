import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'cdk-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  public width:number;
  
  constructor() { }

  ngOnInit() {
  }
  

}
