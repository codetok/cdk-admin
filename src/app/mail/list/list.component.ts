import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @Input() checked;
    @Input()  mails;
    @Output() onOpenMailDetial = new EventEmitter();
    @Output() onUncheckmail = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }
    ngOnChanges() {
    }
    onOpenMailDetialTriggered(mail) {
        this.onOpenMailDetial.emit(mail);
    }
    showOptions(event) {
        if (event.checked == false) 
            this.onUncheckmail.emit(false);
    }

}
