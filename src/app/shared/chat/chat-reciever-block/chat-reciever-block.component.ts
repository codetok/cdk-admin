import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cdk-chat-reciever-block',
  templateUrl: './chat-reciever-block.component.html',
  styleUrls: ['./chat-reciever-block.component.scss']
})
export class ChatRecieverBlockComponent implements OnInit {
	@Input() message: string;
  	constructor() { }

  	ngOnInit() {
  	}

}
