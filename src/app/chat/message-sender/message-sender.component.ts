import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'cdk-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageSenderComponent implements OnInit {
	@Input() message: any;
  	constructor() { }

  	ngOnInit() {
  	}

}
