import { Component, OnInit } from '@angular/core';
import { ICON_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  iconHelpers: any = ICON_HELPERS;

}
