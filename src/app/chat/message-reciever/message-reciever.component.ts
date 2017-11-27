import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'cdk-message-reciever',
  templateUrl: './message-reciever.component.html',
  styleUrls: ['./message-reciever.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageRecieverComponent implements OnInit {
	@Input() message: any;
  	constructor() { }

  	ngOnInit() {
  	}

}
