import { Component, OnInit } from '@angular/core';
import { LIST_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listHelpers: any = LIST_HELPERS;
  links = ['/home', '/admin'];

  showMultiListCode: boolean = false;
	messages = [
		{from: 'codetok', subject: 'client', content: 'hi there'},
		{from: 'client', subject: 'codetok', content: 'yes'},
		{from: 'jay', subject: 'tom', content: 'yes please'},
	];

}
