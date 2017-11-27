import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'cdk-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatBodyComponent implements OnInit {
	@Input() message: any;
	text: string = '';
  	constructor() { }

  	ngOnInit() {
  	}

    keyDown(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            this.send();
        }
    }

  	send() {
        if (this.text != '') {
      		this.message.messages.push({message: this.text, self: true});
            this.text = '';
        }

  	}

}
