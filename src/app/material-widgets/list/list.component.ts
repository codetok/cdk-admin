import { Component, OnInit } from '@angular/core';
import { LIST_HELPERS } from './helpers.data';
// , Messages, Links
@Component({
  selector: 'cdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    listHelpers: any = LIST_HELPERS;
    // links = Links;

    showMultiListCode: boolean = false;
    // messages = Messages;
    constructor() { }

    ngOnInit() {
    }
  

}
