import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'cdk-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatListComponent implements OnInit {
	@Output() view: EventEmitter<any> = new EventEmitter();
	@Input() messages = [];
  	constructor() { }

  	ngOnInit() {
  	}
  	viewMesage(message) {
  		this.view.emit(message);
  	}

}
