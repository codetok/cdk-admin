import { Component, OnInit } from '@angular/core';
import {PROGRESSBAR_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public color;
  public mode;
  public value;
  public bufferValue;

  progressbarHelpers: any = PROGRESSBAR_HELPERS;
}
