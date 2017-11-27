import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cdk-chat-sender-block',
  templateUrl: './chat-sender-block.component.html',
  styleUrls: ['./chat-sender-block.component.scss']
})
export class ChatSenderBlockComponent implements OnInit {
	@Input() message: string;
  	constructor() { }

  	ngOnInit() {
  	}

}
