import { Component, OnInit } from '@angular/core';
import { RADIO_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  radioHelpers: any = RADIO_HELPERS;
}




